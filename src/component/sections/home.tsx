"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, ArrowDown } from "lucide-react"

export default function HomeSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Hei Yuen Chan</h1>
        <p className="text-xl md:text-2xl text-muted-foreground">Software Engineer</p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Button asChild variant="outline" className="gap-2">
            <Link href="mailto:hycahnbn1009@gmail.com">
              <Mail className="h-4 w-4" />
              Email Me
            </Link>
          </Button>
          <Button asChild className="gap-2">
            <Link href="https://www.linkedin.com/in/hychanbn/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-16 animate-bounce">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <ArrowDown className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
        </a>
      </div>
    </div>
  )
}
