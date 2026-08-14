import { createHash } from "node:crypto";
import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const PUBLIC_DIRECTORY = "public";
const MAX_PUBLIC_BYTES = 116 * 1024 * 1024;
const MAX_SINGLE_FILE_BYTES = 10 * 1024 * 1024;

interface PublicAsset {
  path: string;
  size: number;
  sha256: string;
}

function listFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => {
      const filePath = path.join(directory, entry.name);
      return entry.isDirectory() ? listFiles(filePath) : [filePath];
    })
    .sort();
}

const publicAssets: PublicAsset[] = listFiles(PUBLIC_DIRECTORY).map((filePath) => {
  const content = readFileSync(filePath);
  return {
    path: filePath.split(path.sep).join("/"),
    size: statSync(filePath).size,
    sha256: createHash("sha256").update(content).digest("hex"),
  };
});

describe("public asset budget", () => {
  it("contains no byte-identical files", () => {
    const pathsByHash = new Map<string, string[]>();

    for (const asset of publicAssets) {
      const paths = pathsByHash.get(asset.sha256) ?? [];
      paths.push(asset.path);
      pathsByHash.set(asset.sha256, paths);
    }

    const duplicateGroups = [...pathsByHash.values()]
      .filter((paths) => paths.length > 1);

    expect(duplicateGroups).toEqual([]);
  });

  it("stays within explicit total and single-file payload limits", () => {
    const totalBytes = publicAssets.reduce((sum, asset) => sum + asset.size, 0);
    const oversizedAssets = publicAssets
      .filter((asset) => asset.size > MAX_SINGLE_FILE_BYTES)
      .map((asset) => ({ path: asset.path, bytes: asset.size }));

    expect(totalBytes).toBeLessThanOrEqual(MAX_PUBLIC_BYTES);
    expect(oversizedAssets).toEqual([]);
  });
});
