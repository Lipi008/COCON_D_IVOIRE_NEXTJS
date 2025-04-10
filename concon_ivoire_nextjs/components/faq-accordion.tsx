"use client"

import { Button } from "@/components/ui/button"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollReveal } from "./ui/scroll-reveal"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const FaqAccordion = () => {
  const faqCategories = [
    {
      id: "general",
      name: "Général",
      questions: [
        {
          question: "Quels sont vos honoraires pour la vente d'un bien?",
          answer:
            "Nos honoraires varient en fonction du type de bien et du service choisi. Nous proposons différents forfaits adaptés à vos besoins, allant de 1,5% à 3,5% du prix de vente final. Contactez-nous pour une évaluation personnalisée.",
        },
        {
          question: "Combien de temps faut-il généralement pour vendre une propriété?",
          answer:
            "Le délai de vente dépend de plusieurs facteurs, notamment l'emplacement, le prix, l'état du bien et les conditions du marché. En moyenne, une propriété bien présentée et correctement évaluée se vend entre 2 et 3 mois.",
        },
        {
          question: "Travaillez-vous dans toute la France?",
          answer:
            "Oui, nous avons des agents immobiliers dans les principales villes de France, notamment Paris, Lyon, Marseille, Bordeaux, Nice et leurs environs. Nous pouvons également vous mettre en relation avec des partenaires de confiance dans d'autres régions.",
        },
      ],
    },
    {
      id: "buying",
      name: "Achat",
      questions: [
        {
          question: "Quelles sont les étapes pour acheter un bien immobilier?",
          answer:
            "Le processus d'achat comprend généralement: la définition de votre budget, la recherche de biens, les visites, la négociation, l'offre d'achat, le compromis de vente, l'obtention du financement, et enfin la signature chez le notaire. Nous vous accompagnons à chaque étape.",
        },
        {
          question: "Comment déterminer mon budget d'achat?",
          answer:
            "Votre budget dépend principalement de vos revenus, de votre apport personnel et de votre capacité d'emprunt. En règle générale, les mensualités de remboursement ne devraient pas dépasser 33% de vos revenus nets. Nous pouvons vous mettre en relation avec nos partenaires financiers pour une évaluation précise.",
        },
        {
          question: "Quels sont les frais annexes à prévoir lors d'un achat immobilier?",
          answer:
            "Outre le prix d'achat, vous devez prévoir les frais de notaire (7-8% pour l'ancien, 2-3% pour le neuf), les frais d'agence (si inclus), les frais de dossier bancaire, les frais de garantie du prêt, et potentiellement des frais de déménagement et de travaux.",
        },
      ],
    },
    {
      id: "selling",
      name: "Vente",
      questions: [
        {
          question: "Comment est déterminé le prix de vente de mon bien?",
          answer:
            "Le prix est déterminé par une analyse comparative du marché, tenant compte des ventes récentes de biens similaires dans votre secteur, de l'état de votre propriété, de sa superficie, de son emplacement et des tendances actuelles du marché.",
        },
        {
          question: "Quels documents dois-je préparer pour vendre ma propriété?",
          answer:
            "Vous devez rassembler le titre de propriété, les diagnostics techniques obligatoires (DPE, amiante, plomb, etc.), les dernières factures d'énergie, les taxes foncières et d'habitation, le règlement de copropriété et les PV d'assemblées générales (pour un appartement), et les plans du bien si disponibles.",
        },
        {
          question: "Comment se déroule une visite de bien?",
          answer:
            "Nous organisons et gérons toutes les visites selon vos disponibilités. Nous qualifions les acheteurs potentiels avant les visites pour assurer leur sérieux. Pendant la visite, notre agent présente les atouts de votre bien et répond aux questions des visiteurs. Vous recevez ensuite un compte-rendu détaillé.",
        },
      ],
    },
    {
      id: "renting",
      name: "Location",
      questions: [
        {
          question: "Quels sont vos services pour les propriétaires bailleurs?",
          answer:
            "Nous proposons la recherche de locataires, la rédaction du bail, l'état des lieux, la gestion locative complète incluant l'encaissement des loyers, la gestion des travaux, et le suivi administratif et comptable.",
        },
        {
          question: "Comment sont sélectionnés les locataires?",
          answer:
            "Nous vérifions rigoureusement la solvabilité des candidats en examinant leurs revenus (qui doivent généralement être 3 fois supérieurs au loyer), leur stabilité professionnelle, et leurs garanties. Nous contrôlons également leurs références et antécédents locatifs.",
        },
        {
          question: "Quels documents sont nécessaires pour louer un appartement?",
          answer:
            "En tant que locataire, vous devrez fournir une pièce d'identité, vos trois derniers bulletins de salaire, votre dernier avis d'imposition, un justificatif de domicile, et éventuellement un garant avec les mêmes justificatifs. Les documents spécifiques peuvent varier selon votre situation.",
        },
      ],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <ScrollReveal>
          <Tabs defaultValue="general" className="max-w-3xl mx-auto">
            <TabsList className="mb-8 flex justify-center">
              {faqCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {faqCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg overflow-hidden">
                      <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4 bg-gray-50">
                        <p className="text-gray-600">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </ScrollReveal>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Vous n'avez pas trouvé votre réponse?</h3>
          <p className="text-gray-600 mb-8">
            Notre équipe est disponible pour répondre à toutes vos questions et vous fournir les informations dont vous
            avez besoin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-primary hover:bg-primary-dark">Nous Contacter</Button>
            <Button variant="outline">Voir Nos Guides</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqAccordion
