import AboutSection from "@/component/sections/about";
import CareerSection from "@/component/sections/career";
import CertificationsSection from "@/component/sections/certifications";
import ContactSection from "@/component/sections/contact";
import HomeSection from "@/component/sections/home";
import ProjectsSection from "@/component/sections/projects";
import SkillsSection from "@/component/sections/skills";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section id="home" className="min-h-screen py-16 md:py-24 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <HomeSection />
        </div>
      </section>

      <section id="about" className="min-h-screen py-16 md:py-24 bg-muted/50 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <AboutSection />
        </div>
      </section>

      <section id="skills" className="min-h-screen py-16 md:py-24 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SkillsSection />
        </div>
      </section>

      <section id="career" className="min-h-screen py-16 md:py-24 bg-muted/50 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <CareerSection />
        </div>
      </section>

      <section id="certifications" className="min-h-screen py-16 md:py-24 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <CertificationsSection />
        </div>
      </section>

      <section id="projects" className="min-h-screen py-16 md:py-24 bg-muted/50 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <ProjectsSection />
        </div>
      </section>

      <section id="contact" className="py-16 md:py-20 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <ContactSection />
        </div>
      </section>
    </div>
  )
}
