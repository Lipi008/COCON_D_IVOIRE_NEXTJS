import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ui/scroll-reveal";

const MainFocus = () => {
  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Notre Objectif Principal
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Buy a home */}
          <ScrollReveal delay={0.1}>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#fff5f3] rounded-full transform scale-150 opacity-50"></div>
                  <div className="relative z-10">
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary"
                    >
                      <path
                        d="M65 35V65H15V35L40 15L65 35Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M30 45H50V65H30V45Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M40 15C45.5228 15 50 10.5228 50 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">
                Acheter une maison
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Plus d'un million de maisons à vendre disponibles sur le site,
                nous pouvons vous aider à trouver une maison que vous voudrez
                appeler chez vous.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/properties"
                  className="inline-flex items-center text-primary hover:underline font-medium group"
                >
                  Trouver une maison{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Rent a home */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#fff5f3] rounded-full transform scale-150 opacity-50"></div>
                  <div className="relative z-10">
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary"
                    >
                      <path
                        d="M40 15L65 35V65H55V45H25V65H15V35L40 15Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <circle
                        cx="40"
                        cy="30"
                        r="5"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M50 65L55 55H25L30 65"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">
                Louer une maison
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Plus d'un million de maisons à louer disponibles sur le site,
                nous pouvons vous aider à trouver une maison que vous voudrez
                appeler chez vous.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/properties"
                  className="inline-flex items-center text-primary hover:underline font-medium group"
                >
                  Trouver une location{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Sell a home */}
          <ScrollReveal delay={0.3}>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#fff5f3] rounded-full transform scale-150 opacity-50"></div>
                  <div className="relative z-10">
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary"
                    >
                      <path
                        d="M65 35V65H15V35L40 15L65 35Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M25 45H55M25 55H55"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M40 25L45 30L55 20"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">
                Gerer un bien
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Plus d'un million de maisons à vendre disponibles sur le site,
                nous pouvons vous aider à vendre votre maison rapidement et au
                meilleur prix.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/properties"
                  className="inline-flex items-center text-primary hover:underline font-medium group"
                >
                  Vendre ma maison{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default MainFocus;
