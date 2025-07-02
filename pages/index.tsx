
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-2">Common Sense Document Services</h1>
      <p className="text-lg mb-4">Affordable Help for Everyday People</p>
      <p className="text-sm mb-4">Now serving all 50 states · English · Español · 한국어</p>
      <nav className="space-x-4 mb-4">
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <p>We help with immigration, divorce, small claims, and more.</p>
      <p>Our flat-rate services make it easy and affordable.</p>
    </main>
  );
}
