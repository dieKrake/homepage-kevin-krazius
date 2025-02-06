import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2030 Ricardo. All rights reserved.
        <div className="flex justify-center mt-3">
          <p className="mb-2 block text-xl mr-5 underline">
            <Link href="/impressum">Impressum</Link>
          </p>
          <p className="mb-2 block text-xl underline">
            <Link href="/agb">AGB</Link>
          </p>
        </div>
      </small>

      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
