"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import {
  FaHome,
  FaBook,
  FaBookmark,
  FaCog,
  FaPrayingHands,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import {
  useTheme,
  getColorClasses,
} from "@/app/contexts/ThemeContext";
import type { NavItem } from "@/app/types";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const navbarRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme, colorScheme, toggleTheme, setColorScheme, colorSchemes } =
    useTheme();
  const colors = getColorClasses(colorScheme);

  const ThemeColors = ({ children }: { children: React.ReactNode }) => {
    return <div>{children}</div>;
  };

  const navItems: NavItem[] = [
    { label: "Home", path: "/", icon: <FaHome /> },
    { label: "Devotionals", path: "/devotionals", icon: <FaBook /> },
    { label: "Bookmarks", path: "/bookmarks", icon: <FaBookmark /> },
    { label: "Prayers", path: "/prayers", icon: <FaPrayingHands /> },
    { label: "Settings", path: "/settings", icon: <FaCog /> },
  ];

  useEffect(() => {
    if (navbarRef.current) {
      gsap.fromTo(
        navbarRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      if (isMenuOpen) {
        gsap.to(menuRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(menuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [isMenuOpen]);

  // Handle scroll behavior for navbar visibility
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        // Always show navbar when at the top of the page
        if (currentScrollY < 50) {
          setIsNavbarVisible(true);
          setLastScrollY(currentScrollY);
          return;
        }

        // Hide navbar when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsNavbarVisible(false);
        } else {
          setIsNavbarVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar, { passive: true });

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  // Apply fade in/out effect based on isNavbarVisible
  useEffect(() => {
    if (navbarRef.current) {
      if (isNavbarVisible) {
        gsap.to(navbarRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(navbarRef.current, {
          y: -100,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [isNavbarVisible]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav
      ref={navbarRef}
      className={`bg-gradient-to-r ${colors.gradient} backdrop-blur-md fixed w-full top-0 z-50 shadow-sm transition-all duration-300`}
      style={{ transform: "translateY(0)" }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 hover:scale-105 transition-all ease-in-out"
          >
            <div className={`w-8 h-8 flex items-center justify-center`}>
              <Image
                src={"/android-chrome-192x192.png"}
                width={100}
                height={100}
                alt="logo"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-base md:font-semibold text-white">
                Fount Of Hope
              </span>
              <span className="text-sm font-thin text-white italic">
                Daily Bible Devotional
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  pathname === item.path
                    ? `${colors.lightBg} ${colors.text}`
                    : "text-blue-50 hover:text-purple-700 hover:bg-purple-50"
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${colors.lightBg} ${colors.text} transition-colors duration-300`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </div>
          <div className="hidden lg:block">
            <ThemeColors>
              <div className="flex space-x-3">
                {colorSchemes.map((scheme) => {
                  const colorVariant =
                    theme === "dark" ? scheme.dark : scheme.light;
                  return (
                    <button
                      key={scheme.name}
                      onClick={() => setColorScheme(scheme.name)}
                      className={`size-8 rounded-full bg-gradient-to-r shadow shadow-black ${
                        colorVariant.from
                      } ${colorVariant.to} ${
                        colorScheme === scheme.name
                          ? "ring-2 ring-offset-2 ring-purple-700 dark:ring-purple-400"
                          : "opacity-70 hover:opacity-100"
                      } transition-all duration-200`}
                      aria-label={`${scheme.name} theme`}
                    />
                  );
                })}
              </div>
            </ThemeColors>
          </div>

          {/* Mobile Menu + Auth */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className={`md:hidden p-2 rounded-full ${colors.lightBg} ${colors.text} mr-2`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            <button
              onClick={toggleMenu}
              className={`md:hidden p-2 rounded-lg ${colors.lightBg} ${colors.text}`}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Clerk Auth */}
            <header className="flex items-center justify-center ml-0 md:ml-2">
              <SignedOut>
                <div
                  className={`${colors.lightBg} ${colors.text} p-2 rounded-lg text-sm font-light hover:scale-110 transition-all duration-100 ease-in-out`}
                >
                  <SignInButton mode="modal" />
                </div>
              </SignedOut>
              <SignedIn>
                <div
                  className={`flex items-center justify-center ${colors.lightBg} p-1 size-[34px] rounded-lg hover:scale-110 transition-all duration-100 ease-in-out`}
                >
                  <UserButton />
                </div>
              </SignedIn>
            </header>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          ref={menuRef}
          className="md:hidden overflow-hidden h-0 opacity-0 mt-2"
        >
          <div
            className={`py-2 space-y-1 bg-white/30 backdrop-blur-md rounded-lg shadow-sm`}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-center px-4 py-3 text-sm font-medium transition-all duration-300 ${
                  pathname === item.path
                    ? `${colors.lightBg} ${colors.text}`
                    : "text-gray-700 hover:text-purple-700 hover:bg-purple-50"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-center">
              <ThemeColors>
                <div className="flex space-x-3">
                  {colorSchemes.map((scheme) => {
                    const colorVariant =
                      theme === "dark" ? scheme.dark : scheme.light;
                    return (
                      <button
                        key={scheme.name}
                        onClick={() => setColorScheme(scheme.name)}
                        className={`size-6 rounded-full bg-gradient-to-r shadow shadow-black ${
                          colorVariant.from
                        } ${colorVariant.to} ${
                          colorScheme === scheme.name
                            ? "ring-2 ring-offset-2 ring-purple-700 dark:ring-purple-400"
                            : "opacity-70 hover:opacity-100"
                        } transition-all duration-200`}
                        aria-label={`${scheme.name} theme`}
                      />
                    );
                  })}
                </div>
              </ThemeColors>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
