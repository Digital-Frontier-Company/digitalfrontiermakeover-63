import React from "react";

const AIPromptAdvancedSection = () => {
  return (
    <div className="py-16 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Advanced Prompts: Prompt Chains and Recursive Prompts
        </h2>
        <p className="text-slate-300 text-lg max-w-3xl mx-auto">
          This section provides templates and examples for creating more complex prompt structures using chains and recursive techniques. 
          These methods allow for more sophisticated interactions with LLMs, enabling multi-step reasoning and iterative refinement of outputs.
        </p>
      </div>

      <div className="space-y-12">
        {/* Prompt Chains Section */}
        <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6">1. Prompt Chains</h3>
          <p className="text-slate-300 mb-8">
            Prompt chains involve using the output of one prompt as input for the next, creating a sequence of related prompts that build upon each other.
          </p>

          <div className="space-y-8">
            <div className="bg-slate-900/50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-4">1.1 Research and Summarization Chain</h4>
              <div className="space-y-4">
                <div className="bg-slate-800/50 p-4 rounded border-l-4 border-blue-500">
                  <h5 className="font-medium text-blue-200 mb-2">Step 1: Topic Exploration</h5>
                  <p className="text-slate-300 text-sm">
                    Prompt: "Provide an overview of the current state of [topic]. Include key areas of research and recent developments."
                  </p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded border-l-4 border-green-500">
                  <h5 className="font-medium text-green-200 mb-2">Step 2: Identifying Key Issues</h5>
                  <p className="text-slate-300 text-sm">
                    Prompt: "Based on the overview provided, identify the three most pressing issues or challenges in [topic]."
                  </p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded border-l-4 border-yellow-500">
                  <h5 className="font-medium text-yellow-200 mb-2">Step 3: Solution Analysis</h5>
                  <p className="text-slate-300 text-sm">
                    Prompt: "For each of the three issues identified, propose potential solutions and discuss their feasibility."
                  </p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded border-l-4 border-purple-500">
                  <h5 className="font-medium text-purple-200 mb-2">Step 4: Future Implications</h5>
                  <p className="text-slate-300 text-sm">
                    Prompt: "Considering the challenges and proposed solutions, predict the potential future developments in [topic] over the next 5-10 years."
                  </p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded border-l-4 border-red-500">
                  <h5 className="font-medium text-red-200 mb-2">Step 5: Final Summary</h5>
                  <p className="text-slate-300 text-sm">
                    Prompt: "Synthesize the information from the previous steps into a concise executive summary of [topic], including current state, key challenges, potential solutions, and future outlook."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-4">1.2 Product Development Chain</h4>
              <div className="space-y-4">
                <div className="bg-slate-800/50 p-4 rounded border-l-4 border-cyan-500">
                  <h5 className="font-medium text-cyan-200 mb-2">Step 1: Market Analysis</h5>
                  <p className="text-slate-300 text-sm">
                    Prompt: "Analyze the current market for [product category]. Identify key players, market trends, and unmet customer needs."
                  </p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded border-l-4 border-indigo-500">
                  <h5 className="font-medium text-indigo-200 mb-2">Step 2: Product Ideation</h5>
                  <p className="text-slate-300 text-sm">
                    Prompt: "Based on the market analysis, propose three innovative product ideas that address the identified unmet needs."
                  </p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded border-l-4 border-pink-500">
                  <h5 className="font-medium text-pink-200 mb-2">Step 3: Feature Development</h5>
                  <p className="text-slate-300 text-sm">
                    Prompt: "For the most promising product idea, develop a list of key features and functionalities. Explain how each feature addresses specific customer needs or market gaps."
                  </p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded border-l-4 border-orange-500">
                  <h5 className="font-medium text-orange-200 mb-2">Step 4: User Experience Design</h5>
                  <p className="text-slate-300 text-sm">
                    Prompt: "Outline a user journey for the proposed product, detailing key touchpoints and interactions. Consider how the identified features will be integrated into a seamless user experience."
                  </p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded border-l-4 border-teal-500">
                  <h5 className="font-medium text-teal-200 mb-2">Step 5: Marketing Strategy</h5>
                  <p className="text-slate-300 text-sm">
                    Prompt: "Develop a high-level marketing strategy for the proposed product. Include target audience, unique selling points, and potential marketing channels based on the product features and user experience design."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recursive Prompts Section */}
        <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6">2. Recursive Prompts</h3>
          <p className="text-slate-300 mb-8">
            Recursive prompts involve feeding the output of a prompt back into itself or a similar prompt, allowing for iterative refinement or exploration of a topic.
          </p>

          <div className="space-y-8">
            <div className="bg-slate-900/50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-4">2.1 Iterative Story Development</h4>
              <div className="space-y-4">
                <div className="bg-slate-800/50 p-4 rounded">
                  <h5 className="font-medium text-blue-200 mb-2">Initial Prompt:</h5>
                  <p className="text-slate-300 text-sm mb-4">
                    "Write a short story opener (2-3 sentences) about a character who discovers an unusual object."
                  </p>
                  <h5 className="font-medium text-green-200 mb-2">Recursive Prompt (repeat 3-5 times):</h5>
                  <p className="text-slate-300 text-sm mb-4">
                    "Continue the story from where it left off, adding a new plot development or character insight. Maintain consistency with the previous parts while introducing a surprising element."
                  </p>
                  <h5 className="font-medium text-purple-200 mb-2">Final Prompt:</h5>
                  <p className="text-slate-300 text-sm">
                    "Conclude the story, tying together the elements introduced in the previous iterations and providing a satisfying resolution."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-4">2.2 Recursive Problem Solving</h4>
              <div className="space-y-4">
                <div className="bg-slate-800/50 p-4 rounded">
                  <h5 className="font-medium text-blue-200 mb-2">Initial Prompt:</h5>
                  <p className="text-slate-300 text-sm mb-4">
                    "Identify a significant challenge in [field/industry]."
                  </p>
                  <h5 className="font-medium text-green-200 mb-2">Recursive Prompt (repeat 3-5 times):</h5>
                  <p className="text-slate-300 text-sm mb-4">
                    "Propose a solution to address the previously identified challenge. Then, identify a potential obstacle or limitation of this solution."
                  </p>
                  <h5 className="font-medium text-purple-200 mb-2">Final Prompt:</h5>
                  <p className="text-slate-300 text-sm">
                    "Synthesize the chain of challenges and solutions discussed. Propose a comprehensive approach that addresses the initial problem while mitigating the obstacles identified in each iteration."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-4">2.3 Concept Exploration and Refinement</h4>
              <div className="space-y-4">
                <div className="bg-slate-800/50 p-4 rounded">
                  <h5 className="font-medium text-blue-200 mb-2">Initial Prompt:</h5>
                  <p className="text-slate-300 text-sm mb-4">
                    "Define and explain the concept of [term/idea]."
                  </p>
                  <h5 className="font-medium text-green-200 mb-2">Recursive Prompt (repeat 3-5 times):</h5>
                  <p className="text-slate-300 text-sm mb-4">
                    "Identify an aspect of [term/idea] that wasn't fully explored in the previous explanation. Elaborate on this aspect, and explain how it relates to or changes our understanding of the overall concept."
                  </p>
                  <h5 className="font-medium text-purple-200 mb-2">Final Prompt:</h5>
                  <p className="text-slate-300 text-sm">
                    "Provide a comprehensive and nuanced explanation of [term/idea], incorporating all the aspects explored in the previous iterations. Highlight how our understanding of the concept has evolved through this exploration."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Combined Section */}
        <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6">3. Combined Chain and Recursive Prompt</h3>
          <p className="text-slate-300 mb-8">
            This advanced technique combines both chain and recursive elements for complex analysis and creation tasks.
          </p>

          <div className="bg-slate-900/50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-white mb-4">3.1 Policy Development and Analysis</h4>
            <div className="space-y-4">
              <div className="bg-slate-800/50 p-4 rounded border-l-4 border-blue-500">
                <h5 className="font-medium text-blue-200 mb-2">Step 1: Issue Identification</h5>
                <p className="text-slate-300 text-sm">
                  Prompt: "Identify a pressing social or economic issue that requires policy intervention."
                </p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded border-l-4 border-green-500">
                <h5 className="font-medium text-green-200 mb-2">Step 2: Policy Proposal (Recursive, repeat 2-3 times)</h5>
                <p className="text-slate-300 text-sm mb-2">
                  Initial Prompt: "Propose a policy to address the identified issue."
                </p>
                <p className="text-slate-300 text-sm">
                  Recursive Prompt: "Identify potential unintended consequences or limitations of the proposed policy. Then, refine the policy to address these concerns while maintaining its original objectives."
                </p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded border-l-4 border-yellow-500">
                <h5 className="font-medium text-yellow-200 mb-2">Step 3: Stakeholder Analysis</h5>
                <p className="text-slate-300 text-sm">
                  Prompt: "Identify key stakeholders affected by the final proposed policy. Analyze how each stakeholder group might respond to the policy."
                </p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded border-l-4 border-purple-500">
                <h5 className="font-medium text-purple-200 mb-2">Step 4: Implementation Strategy</h5>
                <p className="text-slate-300 text-sm">
                  Prompt: "Develop a strategy for implementing the proposed policy, taking into account the stakeholder analysis and potential challenges identified in the recursive stage."
                </p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded border-l-4 border-pink-500">
                <h5 className="font-medium text-pink-200 mb-2">Step 5: Monitoring and Evaluation</h5>
                <p className="text-slate-300 text-sm">
                  Prompt: "Design a framework for monitoring the effectiveness of the implemented policy and evaluating its impact over time."
                </p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded border-l-4 border-cyan-500">
                <h5 className="font-medium text-cyan-200 mb-2">Final Summary</h5>
                <p className="text-slate-300 text-sm">
                  Prompt: "Synthesize the entire policy development process into a comprehensive policy brief, including the issue, proposed solution, stakeholder considerations, implementation strategy, and evaluation framework."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-600">
          <p className="text-slate-400 text-sm text-center">
            These advanced prompt structures demonstrate how chains and recursive techniques can be used to tackle complex, multi-faceted tasks that require deep analysis, creative problem-solving, or iterative refinement. Users can adapt these templates to suit their specific needs and the capabilities of their LLM.
          </p>
          <div className="text-center mt-4 pt-4 border-t border-slate-700">
            <p className="text-slate-500 text-xs">
              © 2024 Vajo Lukic. From <strong>Practical Prompt Engineering</strong>. Personal use only. No commercial use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPromptAdvancedSection;