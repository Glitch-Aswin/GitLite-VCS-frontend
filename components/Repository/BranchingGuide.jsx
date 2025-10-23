'use client';

import { useState } from 'react';

/**
 * Visual guide explaining branching and merging behavior
 * Shows how file versions flow through branch operations
 */
export default function BranchingGuide() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
        title="How branching works"
      >
        ℹ️ Branching Guide
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">
                🌳 How Branching Works
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6 text-sm">
              {/* Branch Creation */}
              <section>
                <h3 className="font-semibold text-lg mb-2 text-indigo-600 dark:text-indigo-400">
                  1️⃣ Creating a Branch
                </h3>
                <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg">
                  <p className="mb-3 text-zinc-700 dark:text-zinc-300">
                    When you create a new branch from <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">main</code>:
                  </p>
                  <div className="font-mono text-xs space-y-1">
                    <div className="text-green-600 dark:text-green-400">
                      main (HEAD) → file.txt v3, auth.py v5
                    </div>
                    <div className="text-zinc-500">↓ create branch "feature"</div>
                    <div className="text-blue-600 dark:text-blue-400">
                      feature → file.txt v3, auth.py v5 (inherited)
                    </div>
                  </div>
                  <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                    ✅ New branch <strong>inherits all file versions</strong> from parent
                  </p>
                </div>
              </section>

              {/* Making Changes */}
              <section>
                <h3 className="font-semibold text-lg mb-2 text-indigo-600 dark:text-indigo-400">
                  2️⃣ Making Changes
                </h3>
                <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg">
                  <p className="mb-3 text-zinc-700 dark:text-zinc-300">
                    Upload new versions to your branch:
                  </p>
                  <div className="font-mono text-xs space-y-1">
                    <div className="text-blue-600 dark:text-blue-400">
                      feature → file.txt v4 (new), auth.py v5
                    </div>
                    <div className="text-green-600 dark:text-green-400">
                      main → file.txt v3, auth.py v5 (unchanged)
                    </div>
                  </div>
                  <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                    ✅ Changes are <strong>isolated</strong> to your branch
                  </p>
                </div>
              </section>

              {/* Merging */}
              <section>
                <h3 className="font-semibold text-lg mb-2 text-indigo-600 dark:text-indigo-400">
                  3️⃣ Merging Branches
                </h3>
                <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg">
                  <p className="mb-3 text-zinc-700 dark:text-zinc-300">
                    Merge <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">feature</code> into <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded">main</code>:
                  </p>
                  <div className="font-mono text-xs space-y-1">
                    <div className="text-blue-600 dark:text-blue-400">
                      feature → file.txt v4, auth.py v5
                    </div>
                    <div className="text-zinc-500">↓ merge into main</div>
                    <div className="text-green-600 dark:text-green-400">
                      main → file.txt v4 (updated), auth.py v5
                    </div>
                  </div>
                  <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                    ✅ File versions flow <strong>from source → target</strong>
                  </p>
                </div>
              </section>

              {/* Conflicts */}
              <section>
                <h3 className="font-semibold text-lg mb-2 text-red-600 dark:text-red-400">
                  ⚠️ Merge Conflicts
                </h3>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                  <p className="mb-3 text-zinc-700 dark:text-zinc-300">
                    Conflicts occur when <strong>both branches</strong> modified the same file:
                  </p>
                  <div className="font-mono text-xs space-y-1 mb-3">
                    <div className="text-blue-600 dark:text-blue-400">
                      feature → file.txt v4 (changed)
                    </div>
                    <div className="text-green-600 dark:text-green-400">
                      main → file.txt v5 (also changed!)
                    </div>
                    <div className="text-red-600 dark:text-red-400">
                      ❌ CONFLICT: Both modified file.txt
                    </div>
                  </div>
                  <div className="bg-white dark:bg-zinc-900 p-3 rounded border border-red-300 dark:border-red-700">
                    <p className="font-semibold mb-2 text-zinc-800 dark:text-zinc-200">Resolution Options:</p>
                    <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-400">
                      <li>• <strong>Keep Ours</strong>: Use target (main) version</li>
                      <li>• <strong>Take Theirs</strong>: Use source (feature) version</li>
                      <li>• <strong>Manual</strong>: Edit and combine both versions</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Best Practices */}
              <section>
                <h3 className="font-semibold text-lg mb-2 text-indigo-600 dark:text-indigo-400">
                  💡 Best Practices
                </h3>
                <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Always work in feature branches, not directly on <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded text-xs">main</code></span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Create descriptive branch names (e.g., <code className="bg-zinc-200 dark:bg-zinc-700 px-1 rounded text-xs">feature-login</code>)</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Review changes before merging (check file versions)</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Resolve all conflicts before completing merge</span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>Delete feature branches after successful merge</span>
                  </li>
                </ul>
              </section>

              {/* Workflow Summary */}
              <section className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <h3 className="font-semibold mb-2 text-indigo-700 dark:text-indigo-300">
                  🔄 Complete Workflow
                </h3>
                <ol className="space-y-1 text-xs font-mono text-zinc-700 dark:text-zinc-300">
                  <li>1. Create branch → Inherits parent file versions</li>
                  <li>2. Make changes → Upload new file versions</li>
                  <li>3. Create merge request → Check for conflicts</li>
                  <li>4. Resolve conflicts (if any) → Choose resolution</li>
                  <li>5. Complete merge → Versions flow to target branch</li>
                  <li>6. Delete branch → Clean up</li>
                </ol>
              </section>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
