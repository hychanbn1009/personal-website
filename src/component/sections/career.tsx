import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { experiences } from "@/data/careers"

export default function CareerSection() {

  return (
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Career Timeline</h2>
      <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
        My professional journey in software development, showcasing my growth and achievements over the years.
      </p>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-0">
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-border ml-16"></div>

            <Card className="md:ml-24 relative">
              {index !== experiences.length - 1 && (
                <div className="hidden md:block absolute -bottom-8 left-0 w-8 h-px bg-border -ml-8"></div>
              )}
              <div className="hidden md:flex absolute items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground -left-4 top-6">
                <span className="text-xs">{experiences.length - index}</span>
              </div>

              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>{exp.company}</CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{exp.period}</div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{exp.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
