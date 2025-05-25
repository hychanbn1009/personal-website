import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Award } from "lucide-react"
import { certifications } from "@/data/certifications"

export default function CertificationsSection() {

  return (
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Certifications</h2>
      <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
        Professional certifications I've earned throughout my career, demonstrating my commitment to continuous learning
        and professional development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="flex flex-row items-start gap-4 pb-2">
              <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                <Image src={cert.logo || "/placeholder.svg"} alt={cert.issuer} fill className="object-cover" />
              </div>
              <div>
                <CardTitle>{cert.title}</CardTitle>
                <CardDescription>{cert.issuer}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <CalendarDays className="mr-2 h-4 w-4" />
                <span>Issued: {cert.date}</span>
                <Award className="ml-4 mr-2 h-4 w-4" />
                <span>Verified</span>
              </div>
              <p className="mb-4">{cert.description}</p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
