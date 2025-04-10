"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "./ui/modal";
import { VideoPlayer } from "./ui/video-player";
import { ScrollReveal } from "./ui/scroll-reveal";

const AboutSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#fff5f3] rounded-lg opacity-50 animate-pulse"></div>
              <div className="relative z-10">
                <img
                  src="/images/interior-design.png"
                  alt="Interior design"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-colors duration-300 transform hover:scale-110"
                    aria-label="Play video"
                    onClick={() => setIsVideoModalOpen(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary group-hover:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <div className="mb-4">
                <span className="about-badge">Notre agence</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Cocon d'Ivoire
                <span className="text-primary">.</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Nous combinons expertise, éthique et innovation pour offrir à
                nos clients un service à forte valeur ajoutée.
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
                    Gestion Locative
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
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium group-hover:text-primary transition-colors duration-300">
                    Réhabilitation & Rénovation
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
                    Suivi Juridique
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium group-hover:text-primary transition-colors duration-300">
                    Audit de Biens
                  </span>
                </div>
              </div>

              <div className="border-l-4 border-primary pl-6 mb-8 hover:bg-gray-50 transition-colors duration-300">
                <p className="text-gray-600 italic">
                  " Votre bien mérite une gestion rigoureuse et professionnelle.
                  Faites confiance à Cocon d'Ivoire pour un accompagnement sur
                  mesure !"
                </p>
              </div>

              <Button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded transform hover:scale-105 transition-transform duration-300">
                NOS SERVICES
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Video Modal */}
      <Modal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        size="xl"
      >
        <VideoPlayer
          src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
          poster="/placeholder.svg?height=600&width=600"
          controls={true}
          autoPlay={true}
        />
      </Modal>
    </section>
  );
};

export default AboutSection;
