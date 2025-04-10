import Link from "next/link";
import { Facebook, Twitter, Instagram, Dribbble } from "lucide-react";
import { Button } from "@/components/ui/button";

const TopBar = () => {
  return (
    <div className="bg-secondary text-white py-3">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-6 mb-2 md:mb-0">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm">info@cocondivoire.com</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-sm">
              Abidjan, Cocody Rivera Golf, Rue D36
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex space-x-3 mr-6">
            <Link
              href="#"
              className="text-white hover:text-primary transition-colors duration-200"
            >
              <Facebook size={16} />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-primary transition-colors duration-200"
            >
              <Twitter size={16} />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-primary transition-colors duration-200"
            >
              <Instagram size={16} />
            </Link>
            {/* <Link
              href="#"
              className="text-white hover:text-primary transition-colors duration-200"
            >
              <Dribbble size={16} />
            </Link> */}
          </div>
          {/* <Button className="bg-primary hover:bg-primary-dark text-white text-sm py-1 px-4 h-auto">
            Add Listing
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
