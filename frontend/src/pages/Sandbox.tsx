import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const SandboxPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Mock console background */}
      <div className="absolute inset-0 bg-gray-900 blur-sm">
        {/* Terminal header */}
        <div className="bg-gray-800 border-b border-gray-700 p-4 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-gray-300 text-sm ml-4">Sandbox Console</span>
        </div>
        {/* Console content */}
        <div className="p-6 font-mono text-sm">
          {/* Sample prompts and responses */}
          <div className="space-y-4 text-green-400">
            <div>
              <span className="text-blue-400">user@sandbox:~$</span>
              <span className="text-white ml-2">create a button component</span>
            </div>
            <div className="text-gray-300 ml-4 bg-gray-800 p-4 rounded border-l-4 border-blue-500">
              <div className="text-yellow-300">// Generated Button Component</div>
              <div className="mt-2">
                <span className="text-purple-400">import</span> <span className="text-white">React</span>{" "}
                <span className="text-purple-400">from</span> <span className="text-green-300">'react'</span>
              </div>
              <div className="mt-1">
                <span className="text-purple-400">export default function</span>{" "}
                <span className="text-blue-300">Button</span>
                <span className="text-white">() {`{`}</span>
              </div>
              <div className="ml-4 text-white">
                <span className="text-purple-400">return</span> <span className="text-white">(</span>
              </div>
              <div className="ml-8">
                <span className="text-red-400">{"<button"}</span> <span className="text-blue-300">className</span>
                <span className="text-white">=</span>
                <span className="text-green-300">"px-4 py-2 bg-blue-500"</span>
                <span className="text-red-400">{">"}</span>
              </div>
              <div className="ml-12 text-white">Click me</div>
              <div className="ml-8">
                <span className="text-red-400">{"</button>"}</span>
              </div>
              <div className="ml-4 text-white">)</div>
              <div className="text-white">{`}`}</div>
            </div>
            <div className="mt-6">
              <span className="text-blue-400">user@sandbox:~$</span>
              <span className="text-white ml-2">add dark mode support</span>
            </div>
            <div className="text-gray-300 ml-4 bg-gray-800 p-4 rounded border-l-4 border-green-500">
              <div className="text-yellow-300">// Adding dark mode configuration...</div>
              <div className="mt-2 text-green-400">✓ Updated tailwind.config.js</div>
              <div className="text-green-400">✓ Added theme provider</div>
              <div className="text-green-400">✓ Updated components</div>
            </div>
            <div className="mt-6">
              <span className="text-blue-400">user@sandbox:~$</span>
              <span className="text-white ml-2">generate api endpoint for users</span>
            </div>
            <div className="text-gray-300 ml-4 bg-gray-800 p-4 rounded border-l-4 border-purple-500">
              <div className="text-yellow-300">// Generated API Route</div>
              <div className="mt-2">
                <span className="text-purple-400">export async function</span>{" "}
                <span className="text-blue-300">GET</span>
                <span className="text-white">() {`{`}</span>
              </div>
              <div className="ml-4 text-white">
                <span className="text-purple-400">const</span> <span className="text-blue-300">users</span>{" "}
                <span className="text-white">=</span> <span className="text-purple-400">await</span>{" "}
                <span className="text-blue-300">db</span>
                <span className="text-white">.users.findMany()</span>
              </div>
              <div className="ml-4 text-white">
                <span className="text-purple-400">return</span> <span className="text-blue-300">Response</span>
                <span className="text-white">.json(users)</span>
              </div>
              <div className="text-white">{`}`}</div>
            </div>
            {/* Active prompt */}
            <div className="mt-8 flex items-center">
              <span className="text-blue-400">user@sandbox:~$</span>
              <div className="ml-2 flex-1 bg-gray-800 px-3 py-2 rounded border border-gray-600">
                <span className="text-gray-400">Type your prompt here...</span>
                <span className="animate-pulse text-white">|</span>
              </div>
            </div>
          </div>
        </div>
        {/* Side panel mockup */}
        <div className="absolute right-0 top-16 bottom-0 w-80 bg-gray-800 border-l border-gray-700 p-4">
          <div className="text-gray-300 text-sm font-semibold mb-4">Generated Files</div>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2 p-2 bg-gray-700 rounded">
              <div className="w-2 h-2 bg-blue-500 rounded"></div>
              <span className="text-gray-300">components/Button.tsx</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-gray-700 rounded">
              <div className="w-2 h-2 bg-green-500 rounded"></div>
              <span className="text-gray-300">app/api/users/route.ts</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-gray-700 rounded">
              <div className="w-2 h-2 bg-purple-500 rounded"></div>
              <span className="text-gray-300">tailwind.config.js</span>
            </div>
          </div>
          <div className="mt-8">
            <div className="text-gray-300 text-sm font-semibold mb-4">Preview</div>
            <div className="bg-white rounded p-4 h-32 flex items-center justify-center">
              <div className="bg-blue-500 text-white px-4 py-2 rounded text-sm">Click me</div>
            </div>
          </div>
        </div>
      </div>
      {/* Blur overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/20" />
      {/* Centered coming soon card */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-lg shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-8 pt-12">
            {/* Code icon matching the design */}
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto bg-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
            </div>
            <CardTitle className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">Sandbox Environment</CardTitle>
            <CardDescription className="text-xl text-slate-600 font-medium leading-relaxed">
              Interactive Development Platform Coming Soon
            </CardDescription>
          </CardHeader>
          <CardContent className="px-12 pb-12">
            {/* Development status bar */}
            <div className="bg-slate-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-slate-700">Development Progress</span>
                <span className="text-sm font-mono text-slate-900">87%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div
                  className="h-3 bg-gradient-to-r from-slate-600 to-slate-800 rounded-full transition-all duration-1000"
                  style={{ width: "87%" }}
                ></div>
              </div>
              <p className="text-xs text-slate-500 mt-3">Expected launch: Coming soon</p>
            </div>
            <div className="flex justify-center mt-6">
              <a href="/" className="inline-block px-6 py-2 rounded-lg bg-slate-700 text-white font-semibold shadow hover:bg-slate-800 transition">Back to Home</a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SandboxPage; 