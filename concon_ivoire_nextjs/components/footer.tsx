import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-6">
              <div className="text-primary">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M35 17.5V35H5V17.5L20 5L35 17.5Z" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M15 25H25V35H15V25Z" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <span className="ml-2 text-2xl font-bold text-white">Quarter</span>
            </div>
            <p className="text-gray-400 mb-6">
              Lorem Ipsum est simplement du texte factice de l'industrie de l'impression et de la composition. Lorem
              Ipsum est le texte factice standard de l'imprimerie.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="mr-3 mt-1 text-primary" size={18} />
                <span className="text-gray-400">Paris, Île-de-France, France</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 text-primary" size={18} />
                <span className="text-gray-400">+0123-456789</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 text-primary" size={18} />
                <span className="text-gray-400">example@example.com</span>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <Link href="#" className="w-8 h-8 flex items-center justify-center text-white hover:text-primary">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="w-8 h-8 flex items-center justify-center text-white hover:text-primary">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="w-8 h-8 flex items-center justify-center text-white hover:text-primary">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="w-8 h-8 flex items-center justify-center text-white hover:text-primary">
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="footer-heading">Entreprise</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="footer-link">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="footer-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/products" className="footer-link">
                  Tous les Produits
                </Link>
              </li>
              <li>
                <Link href="/locations" className="footer-link">
                  Carte des Emplacements
                </Link>
              </li>
              <li>
                <Link href="/faq" className="footer-link">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contactez-nous
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer-heading">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/tracking" className="footer-link">
                  Suivi de commande
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="footer-link">
                  Liste de Souhaits
                </Link>
              </li>
              <li>
                <Link href="/login" className="footer-link">
                  Connexion
                </Link>
              </li>
              <li>
                <Link href="/account" className="footer-link">
                  Mon compte
                </Link>
              </li>
              <li>
                <Link href="/terms" className="footer-link">
                  Conditions Générales
                </Link>
              </li>
              <li>
                <Link href="/promo" className="footer-link">
                  Offres Promotionnelles
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="footer-heading">Service Client</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/login" className="footer-link">
                  Connexion
                </Link>
              </li>
              <li>
                <Link href="/account" className="footer-link">
                  Mon compte
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="footer-link">
                  Liste de Souhaits
                </Link>
              </li>
              <li>
                <Link href="/tracking" className="footer-link">
                  Suivi de commande
                </Link>
              </li>
              <li>
                <Link href="/faq" className="footer-link">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contactez-nous
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Newsletter */}
          <div>
            <h3 className="footer-heading">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Abonnez-vous à notre Newsletter hebdomadaire et recevez des mises à jour par email.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Email*"
                className="bg-white/10 border-0 text-white placeholder:text-gray-400 rounded-r-none"
              />
              <Button className="bg-primary hover:bg-primary-dark rounded-l-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="footer-heading">Nous Acceptons</h3>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <img src="/placeholder.svg?height=30&width=50" alt="PayPal" className="h-8" />
                <img src="/placeholder.svg?height=30&width=50" alt="Visa" className="h-8" />
                <img src="/placeholder.svg?height=30&width=50" alt="Discover" className="h-8" />
                <img src="/placeholder.svg?height=30&width=50" alt="Mastercard" className="h-8" />
                <img src="/placeholder.svg?height=30&width=50" alt="American Express" className="h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">Tous droits réservés @ Entreprise {new Date().getFullYear()}</p>
          <div className="flex space-x-6">
            <Link href="/terms" className="text-gray-400 hover:text-primary">
              Conditions Générales
            </Link>
            <Link href="/claim" className="text-gray-400 hover:text-primary">
              Réclamation
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-primary">
              Confidentialité & Politique
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
