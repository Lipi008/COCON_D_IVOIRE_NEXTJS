"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  User,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  Heart,
  LogIn,
  UserPlus,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenuCustom,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu-custom";
import { Modal } from "./ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/auth-context";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(2);

  const { user, signOut } = useAuth();

  // Detect scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sample cart items
  const cartItems = [
    {
      id: 1,
      name: "Modern Apartment Listing",
      price: 49.99,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Premium Property Template",
      price: 79.99,
      image: "/placeholder.svg?height=80&width=80",
    },
  ];

  return (
    <>
      <header
        className={`py-4 sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-3" : "bg-white"
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <motion.div
                className="text-primary"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="/images/logo.jpg"
                  alt={"Logo"}
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </motion.div>
              <span className="ml-2 text-2xl font-bold text-secondary">
                Cocon d'ivoire
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              className="flex items-center font-medium hover:text-primary"
              href="/"
            >
              Accueil
            </Link>
            <Link
              className="flex items-center font-medium hover:text-primary"
              href="/about"
            >
              À propos
            </Link>

            {/* <DropdownMenuCustom
            trigger={
              <div className="flex items-center font-medium hover:text-primary transition-colors duration-200">
                À propos <ChevronDown size={16} className="ml-1" />
              </div>
            }
          >
            <DropdownMenuItem>
              <Link href="/about" className="w-full">
                À propos de nous
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/about/team" className="w-full">
                Notre équipe
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/about/history" className="w-full">
                Notre histoire
              </Link>
            </DropdownMenuItem>
          </DropdownMenuCustom> */}

            <DropdownMenuCustom
              trigger={
                <div className="flex items-center font-medium hover:text-primary transition-colors duration-200">
                  Propriétés <ChevronDown size={16} className="ml-1" />
                </div>
              }
            >
              <DropdownMenuItem>
                <Link href="/properties" className="w-full">
                  Toutes les propriétés
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/properties/for-sale" className="w-full">
                  À vendre
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/properties/for-rent" className="w-full">
                  À louer
                </Link>
              </DropdownMenuItem>
              {/* <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/properties/map-view" className="w-full">
                Vue Carte
              </Link>
            </DropdownMenuItem> */}
            </DropdownMenuCustom>

            {/* <DropdownMenuCustom
            trigger={
              <div className="flex items-center font-medium hover:text-primary transition-colors duration-200">
                Actualités <ChevronDown size={16} className="ml-1" />
              </div>
            }
          >
            <DropdownMenuItem>
              <Link href="/news" className="w-full">
                Actualités en grille
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/news/list" className="w-full">
                Liste d'actualités
              </Link>
            </DropdownMenuItem>
          </DropdownMenuCustom> */}

            <Link
              className="flex items-center font-medium hover:text-primary"
              href="/faq"
            >
              Gerer mon bien
            </Link>

            {/* <DropdownMenuCustom
            trigger={
              <div className="flex items-center font-medium hover:text-primary transition-colors duration-200">
                Pages <ChevronDown size={16} className="ml-1" />
              </div>
            }
          >
            <DropdownMenuItem>
              <Link href="/agents" className="w-full">
                Agents
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/pricing" className="w-full">
                Tarifs
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/faq" className="w-full">
                FAQ
              </Link>
            </DropdownMenuItem>
          </DropdownMenuCustom> */}

            <Link
              href="/contact"
              className="font-medium hover:text-primary transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Search"
              className="text-secondary hover:text-primary transition-colors"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search size={20} />
            </motion.button>

            <DropdownMenuCustom
              trigger={
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="User account"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  <User size={20} />
                </motion.button>
              }
            >
              {user ? (
                <>
                  <div className="px-4 py-2 border-b">
                    <p className="font-medium">{user.email}</p>
                    <p className="text-xs text-gray-500">Connecté</p>
                  </div>
                  <DropdownMenuItem>
                    <Link href="/account" className="w-full flex items-center">
                      <User size={16} className="mr-2" /> Mon compte
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/favorites"
                      className="w-full flex items-center"
                    >
                      <Heart size={16} className="mr-2" /> Favoris
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => signOut()}>
                    <div className="w-full flex items-center text-red-500">
                      <LogIn size={16} className="mr-2" /> Déconnexion
                    </div>
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem>
                    <Link
                      href="/auth/login"
                      className="w-full flex items-center"
                    >
                      <LogIn size={16} className="mr-2" /> Connexion
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/auth/register"
                      className="w-full flex items-center"
                    >
                      <UserPlus size={16} className="mr-2" /> Inscription
                    </Link>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuCustom>

            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Shopping cart"
                className="text-secondary hover:text-primary transition-colors"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart size={20} />
              </motion.button>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
              >
                {cartItemCount}
              </motion.span>
            </div>
          </div>

          <button
            className="md:hidden text-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t mt-4 overflow-hidden"
            >
              <div className="container-custom flex flex-col space-y-4 py-4">
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between items-center">
                    <Link
                      href="/"
                      className="font-medium hover:text-primary transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Accueil
                    </Link>
                    <ChevronDown size={16} />
                  </div>
                  <div className="pl-4 flex flex-col space-y-2">
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-primary transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Accueil Principal
                    </Link>
                    <Link
                      href="/home-2"
                      className="text-gray-600 hover:text-primary transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Accueil Moderne
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between items-center">
                    <Link
                      href="/about"
                      className="font-medium hover:text-primary transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      À propos
                    </Link>
                    <ChevronDown size={16} />
                  </div>
                  <div className="pl-4 flex flex-col space-y-2">
                    <Link
                      href="/about"
                      className="text-gray-600 hover:text-primary transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      À propos de nous
                    </Link>
                    <Link
                      href="/about/team"
                      className="text-gray-600 hover:text-primary transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Notre équipe
                    </Link>
                  </div>
                </div>

                <Link
                  href="/property"
                  className="font-medium hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Propriétés
                </Link>
                <Link
                  href="/news"
                  className="font-medium hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Actualités
                </Link>
                <Link
                  href="/pages"
                  className="font-medium hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pages
                </Link>
                <Link
                  href="/contact"
                  className="font-medium hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="flex items-center space-x-4 pt-2">
                  <button
                    aria-label="Search"
                    className="text-secondary hover:text-primary"
                    onClick={() => {
                      setIsSearchOpen(true);
                      setIsMenuOpen(false);
                    }}
                  >
                    <Search size={20} />
                  </button>
                  <button
                    aria-label="User account"
                    className="text-secondary hover:text-primary"
                  >
                    <User size={20} />
                  </button>
                  <div className="relative">
                    <button
                      aria-label="Shopping cart"
                      className="text-secondary hover:text-primary"
                      onClick={() => {
                        setIsCartOpen(true);
                        setIsMenuOpen(false);
                      }}
                    >
                      <ShoppingCart size={20} />
                    </button>
                    <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Search Modal */}
      <Modal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        size="lg"
      >
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Rechercher des propriétés</h3>
          <div className="relative">
            <Input
              type="text"
              placeholder="Rechercher des propriétés, emplacements..."
              className="pr-10 py-6 text-lg"
              autoFocus
            />
            <Search
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
          <div>
            <h4 className="font-medium mb-2">Recherches populaires</h4>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                Appartements à Paris
              </Button>
              <Button variant="outline" size="sm">
                Maisons en Provence
              </Button>
              <Button variant="outline" size="sm">
                Villas de luxe
              </Button>
              <Button variant="outline" size="sm">
                Espaces de bureau
              </Button>
            </div>
          </div>
        </div>
      </Modal>

      {/* Cart Modal */}
      <Modal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        title="Votre panier"
        size="md"
      >
        <div className="space-y-4">
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-3 border-b"
                >
                  <div className="flex items-center">
                    <div className="relative h-16 w-16 rounded overflow-hidden mr-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-primary font-bold">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-red-500">
                    <X size={18} />
                  </button>
                </div>
              ))}

              <div className="flex justify-between font-bold text-lg pt-2">
                <span>Total:</span>
                <span className="text-primary">
                  $
                  {cartItems
                    .reduce((total, item) => total + item.price, 0)
                    .toFixed(2)}
                </span>
              </div>

              <div className="flex space-x-3 pt-4">
                <Button
                  variant="outline"
                  className="w-1/2"
                  onClick={() => setIsCartOpen(false)}
                >
                  Voir le panier
                </Button>
                <Button className="w-1/2 bg-primary hover:bg-primary-dark">
                  Paiement
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <ShoppingCart size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-medium mb-2">
                Votre panier est vide
              </h3>
              <p className="text-gray-500 mb-6">
                Il semble que vous n'ayez pas encore ajouté de propriétés à
                votre panier.
              </p>
              <Button
                className="bg-primary hover:bg-primary-dark"
                onClick={() => setIsCartOpen(false)}
              >
                Parcourir les propriétés
              </Button>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Header;
