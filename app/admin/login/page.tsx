"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function AdminLoginPage() {
  const router = useRouter();
  const search = useSearchParams();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const next = search.get("next") || "/admin";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/admin/demo-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, code }),
      });
      if (res.ok) {
        // Use full navigation to ensure middleware sees the new cookie immediately
        window.location.href = next;
      } else {
        alert("Demo login failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-xl bg-white shadow p-6 space-y-4">
        <h1 className="text-xl font-semibold">Admin Demo Login</h1>
        <p className="text-sm text-gray-600">
          This is a demo-only login. No passwords required — we just set a temporary
          session cookie so you can explore the admin area.
        </p>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email (for context only)
            </label>
            <input
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Demo Code (try: demo)
            </label>
            <input
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="demo"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in…" : "Enter Admin Demo"}
          </button>
        </form>
        <p className="text-xs text-gray-500">
          After login, you’ll be redirected to: <span className="font-mono">{next}</span>
        </p>
      </div>
    </div>
  );
}
