"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className={cn("fixed top-3 inset-x-0 w-full z-50", className)}>
      <nav className="flex items-center justify-between w-[98%] border border-white mr-2 ml-2 rounded-3xl px-4 md:px-8 bg-white dark:bg-black shadow">
        <div className="flex items-center">
          <h1 className="text-blue-500 text-2xl md:text-3xl font-bold">Codex</h1>
        </div>
        {/* Hamburger button for mobile */}
        <button
          className="md:hidden p-2 rounded focus:outline-none"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-black dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-evenly">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Services" >
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Documents">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Themes">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="FAQs">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem className="text-green-400 "  setActive={setActive} active={active} item="About Us"  >
              <div className="flex flex-col space-y-4 text-sm ">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Pricing">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>
      </nav>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-black shadow px-4 py-2">
          <div className="flex flex-col space-y-2">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;