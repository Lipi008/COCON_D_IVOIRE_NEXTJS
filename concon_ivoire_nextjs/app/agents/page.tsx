import Header from "@/components/header"
import Footer from "@/components/footer"
import AgentList from "@/components/agent-list"

export default function AgentsPage() {
  return (
    <>
      <Header />

      <div className="bg-gray-50 py-8">
        <div className="container-custom">
          <h1 className="text-3xl font-bold mb-8">Nos Agents Immobiliers</h1>
          <p className="text-gray-600 max-w-3xl mb-12">
            Notre équipe d'agents immobiliers expérimentés est là pour vous aider à trouver la propriété de vos rêves ou
            à vendre votre bien au meilleur prix. N'hésitez pas à les contacter pour toute question.
          </p>

          <AgentList />
        </div>
      </div>

      <Footer />
    </>
  )
}
