import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { frontendSkills, backendSkills, otherSkills } from "@/data/skills"

export default function SkillsSection() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh] py-8 px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Technical Skills</h2>
      <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
        Here's an overview of my technical expertise across different domains. I'm constantly learning and expanding my
        skillset to stay current with industry trends.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Frontend Development</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="mb-2">
                  <Badge className="flex items-center gap-2 px-3 py-2 bg-white shadow border border-gray-200 rounded-lg">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={24}
                      height={24}
                      className="inline-block"
                    />
                    <span className="text-sm font-medium text-gray-800 dark:text-white">{skill.name}</span>
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Backend Development</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {backendSkills.map((skill) => (
                <div key={skill.name} className="mb-2">
                  <Badge className="flex items-center gap-2 px-3 py-2 bg-white shadow border border-gray-200 rounded-lg">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={24}
                      height={24}
                      className="inline-block"
                    />
                    <span className="text-sm font-medium text-gray-800 dark:text-white">{skill.name}</span>
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Other Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {otherSkills.map((skill) => (
                <div key={skill.name} className="mb-2">
                  <Badge className="flex items-center gap-2 px-3 py-2 bg-white shadow border border-gray-200 rounded-lg">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={24}
                      height={24}
                      className="inline-block"
                    />
                    <span className="text-sm font-medium text-gray-800 dark:text-white">{skill.name}</span>
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}