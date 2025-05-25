"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail, FileText } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-lg font-semibold">Hei Yuen Chan</h3>
            <p className="text-sm text-muted-foreground">
              Software Engineer specializing in full-stack development with a passion for creating elegant,
              efficient solutions.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/hychanbn1009" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/hychanbn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:hychanbn1009@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col items-center md:items-start space-y-2">
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Me
              </a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <Link
                href="https://drive.google.com/file/d/1Q144io3MWWh4M2D-U6ju-D1EVICo0HJg/view?usp=sharing"
                target="_blank"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center"
              >
                <FileText className="h-4 w-4 mr-1" />
                Resume
              </Link>
            </nav>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-2 flex flex-col items-center md:items-start">
              <p className="text-sm text-muted-foreground">
                <Mail className="h-4 w-4 inline-block mr-2" />
                hychanbn1009@gmail.com
              </p>
              <p className="text-sm text-muted-foreground">Hong Kong</p>
            </div>
            <div className="flex justify-center md:justify-start">
              <Button asChild>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Hei Yuen Chan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
