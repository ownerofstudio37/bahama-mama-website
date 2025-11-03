"use client"

import React, { useEffect, useState } from "react"

interface Props {
  demo: boolean
}

export default function DemoModeBanner({ demo }: Props) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const val = sessionStorage.getItem("demo-banner-hidden")
    setHidden(val === "1")
  }, [])

  if (!demo || hidden) return null

  return (
    <div className="fixed top-0 inset-x-0 z-[60]">
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="mt-2 rounded-lg border border-yellow-300 bg-yellow-50 text-yellow-900 shadow sm:mt-4">
          <div className="flex items-start gap-3 p-3 sm:p-4">
            <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-yellow-200 text-xs font-semibold">DEMO</span>
            <div className="text-sm leading-5">
              <strong>Demo Mode:</strong> No database writes. Forms and chatbot simulate success and log to the console.
              <span className="ml-2 text-yellow-800/80">Set NEXT_PUBLIC_DEMO_MODE=false and provide Supabase/AI keys to enable production features.</span>
            </div>
            <button
              type="button"
              onClick={() => { sessionStorage.setItem("demo-banner-hidden", "1"); setHidden(true) }}
              className="ml-auto inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-yellow-900 hover:bg-yellow-100"
              aria-label="Hide demo banner for this session"
            >
              Hide
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
