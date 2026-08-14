Deno.serve(() =>
  new Response(
    JSON.stringify({
      error: "This legacy prerender proxy has been retired.",
    }),
    {
      status: 410,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    },
  ),
);
