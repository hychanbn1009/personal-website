import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { FileDown } from "lucide-react"

export default function AboutSection() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh] py-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>

      <div className="flex flex-col md:flex-row gap-8 items-start w-full max-w-6xl px-4">
        {/* Image and Resume Button */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <div className="relative w-full md:w-[400px] aspect-square overflow-hidden rounded-xl mb-4">
            <Image
              src="/assets/images/my_image3.jpeg"
              alt="Hei Yuen Chan"
              fill
              className="object-cover"
              sizes="(max-width: 767px) 100vw, (min-width: 768px) 400px"
              priority
            />
          </div>
          <Button asChild className="w-full md:w-[400px] gap-2 mb-4">
            <Link href="https://drive.google.com/file/d/1Q144io3MWWh4M2D-U6ju-D1EVICo0HJg/view?usp=sharing" target="_blank">
              <FileDown className="h-4 w-4" />
              Resume
            </Link>
          </Button>
        </div>

        <div className="md:w-2/3">
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed mb-4">
                Hi, I'm Hei Yuen Chan, a Software Engineer with a passion for crafting innovative solutions in the fintech world. 
                I hold a Bachelor of Science from The Hong Kong University of Science and Technology, where my journey began in Chemistry before I discovered my love for technology and problem-solving. 
                Based in Hong Kong, I specialize in backend development, working with tools like TypeScript, JavaScript, Node.js, React, and MySQL,
                and I'm always eager to explore new technologies
              </p>
              <p className="text-lg leading-relaxed mb-4">
                I thrive in dynamic, multicultural environments, drawing on my fluency in English, Cantonese, Mandarin, 
                and proficiency in Japanese (JLPT N2) to connect with diverse teams and ideas. 
                Certified as an AWS Solutions Architect and Developer Associate, I'm driven by a curiosity to build reliable, user-focused systems. 
                Outside of coding, I enjoy contributing to open-source projects and staying at the forefront of tech trends. 
                I'm excited to collaborate, learn, and create solutions that make a difference. 
                Let's connect and explore what we can build together!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
