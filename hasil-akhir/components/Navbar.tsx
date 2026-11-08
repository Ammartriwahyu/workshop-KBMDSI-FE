"use client"; // wajib, karena komponen ini memakai useState dan onClick

import { useState } from "react";
import { Flame, Search } from "lucide-react";

// Daftar link di dalam dropdown Menu
const menuLinks = [
  "Curriculum",
  "Catalog",
  "Forum",
  "News",
  "Radio",
  "Contribute",
  "Podcast",
];

export default function Navbar() {
  // isMenuOpen = apakah dropdown sedang terbuka (awalnya false/tertutup)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-fcc-navy text-white">
      <nav className="relative flex h-9.5 items-center justify-between gap-4 px-4">
        {/* KIRI: kolom pencarian, disembunyikan di HP, muncul mulai md */}
        <div className="hidden md:flex md:flex-1">
          <label className="flex h-7 w-full max-w-md items-center gap-2 bg-fcc-gray px-2">
            <Search className="size-4 text-fcc-light" aria-hidden="true" />
            <input
              type="search"
              placeholder="Search 13,100+ of our books and courses"
              className="w-full bg-transparent text-base text-white placeholder:text-fcc-light focus:outline-none"
            />
          </label>
        </div>

        {/* TENGAH: logo (teks + ikon api) */}
        <a href="#" className="flex items-center gap-1 text-xl font-bold">
          freeCodeCamp
          <Flame className="size-5" aria-hidden="true" />
        </a>

        {/* KANAN: tombol Menu dan Sign in */}
        <div className="flex items-center justify-end gap-2 md:flex-1">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            className="h-7 border border-white px-3 text-base hover:bg-white hover:text-fcc-navy"
          >
            Menu
          </button>
          <a
            href="#"
            className="flex h-7 items-center border-2 border-fcc-yellow bg-linear-to-b from-fcc-yellow-light to-fcc-yellow-dark px-3 text-base text-fcc-navy"
          >
            Sign in
          </a>
        </div>

        {/* DROPDOWN: hanya dirender kalau isMenuOpen bernilai true */}
        {isMenuOpen && (
          <ul className="absolute top-full right-0 w-full bg-fcc-navy py-2 md:w-72">
            {menuLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-lg hover:bg-fcc-gray"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
