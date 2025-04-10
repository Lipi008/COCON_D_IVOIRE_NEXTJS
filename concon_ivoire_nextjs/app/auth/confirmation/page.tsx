import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ConfirmationPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-light flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-2xl font-bold text-center">Vérifiez votre email</CardTitle>
            <CardDescription className="text-center">
              Nous avons envoyé un lien de confirmation à votre adresse email. Veuillez cliquer sur ce lien pour activer
              votre compte.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center text-gray-600">
            <p>
              Si vous ne recevez pas l'email dans les prochaines minutes, vérifiez votre dossier de spam ou de
              promotions.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center pt-6">
            <Link href="/auth/login">
              <Button className="bg-primary-DEFAULT hover:bg-primary-dark">Retour à la page de connexion</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </>
  )
}
