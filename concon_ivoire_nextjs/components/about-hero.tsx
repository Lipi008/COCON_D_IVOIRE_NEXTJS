"use client"
import { ScrollReveal } from "./ui/scroll-reveal"

const AboutHero = () => {
  return (
    <div className="relative bg-light py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div>
              <div className="mb-4">
                <span className="about-badge">À Propos de Nous</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nous Créons des Espaces de Vie Exceptionnels<span className="text-primary">.</span>
              </h1>
              <p className="text-gray-600 mb-8">
                Fondée en 2005, Quarter est devenue l'une des agences immobilières les plus respectées en France. Notre
                mission est de connecter les personnes avec leur espace de vie idéal et de fournir un service
                exceptionnel à chaque étape du processus.
              </p>
              <p className="text-gray-600 mb-8">
                Avec une équipe de professionnels passionnés et expérimentés, nous nous engageons à comprendre vos
                besoins uniques et à vous aider à réaliser vos rêves immobiliers. Que vous cherchiez à acheter, vendre
                ou louer, nous sommes là pour vous guider.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-[#fff5f3] rounded-full flex items-center justify-center mr-4 group-hover:bg-primary transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium group-hover:text-primary transition-colors duration-300">
                    Service de Qualité
                  </span>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-[#fff5f3] rounded-full flex items-center justify-center mr-4 group-hover:bg-primary transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium group-hover:text-primary transition-colors duration-300">
                    Expertise Locale
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#fff5f3] rounded-lg opacity-50"></div>
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Notre équipe"
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#fff5f3] rounded-lg opacity-50"></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}

export default AboutHero
