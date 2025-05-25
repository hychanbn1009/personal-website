"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const pathname = usePathname()

  const isHomePage = pathname === "/"

  const mainSections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "career", label: "Career" },
    { id: "certifications", label: "Certifications" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  const routes = [...mainSections, { id: "/blog", label: "Blog" }]

  useEffect(() => {
    if (!isHomePage) return

    const handleScroll = () => {
      const sections = mainSections
        .map((section) => ({
          id: section.id,
          element: document.getElementById(section.id),
        }))
        .filter((section) => section.element)

      const currentSection = sections.find((section) => {
        if (!section.element) return false
        const rect = section.element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage, mainSections])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)

    if (!isHomePage) {
      window.location.href = `/#${sectionId}`
      return
    }

    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const isActive = (id: string) => {
    if (id.startsWith("/")) {
      return pathname === id
    }
    return isHomePage && activeSection === id
  }

  const handleNavClick = (id: string) => {
    if (id.startsWith("/")) {
      return
    } else {
      scrollToSection(id)
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Toggle Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px] p-0">
              <div className="flex items-center justify-between p-4">
                <Link href="/" className="font-bold text-xl" onClick={() => setIsOpen(false)}>
                  Hei Yuen Chan
                </Link>
              </div>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="mt-4 flex flex-col gap-4 px-4">
                {routes.map((route) =>
                  route.id.startsWith("/") ? (
                    <Link
                      key={route.id}
                      href={route.id}
                      className={`text-lg px-2 py-1 ${isActive(route.id) ? "font-medium text-primary" : "text-muted-foreground"}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {route.label}
                    </Link>
                  ) : (
                    <button
                      key={route.id}
                      className={`text-lg text-left px-2 py-1 ${isActive(route.id) ? "font-medium text-primary" : "text-muted-foreground"}`}
                      onClick={() => handleNavClick(route.id)}
                    >
                      {route.label}
                    </button>
                  ),
                )}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="font-bold text-xl hidden md:block">
            Hei Yuen Chan
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {routes.map((route) =>
            route.id.startsWith("/") ? (
              <Link
                key={route.id}
                href={route.id}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(route.id) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {route.label}
              </Link>
            ) : (
              <button
                key={route.id}
                onClick={() => handleNavClick(route.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(route.id) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {route.label}
              </button>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("contact")
              }}
            >
              Get in Touch
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
