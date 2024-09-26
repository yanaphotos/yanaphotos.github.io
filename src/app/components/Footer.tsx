import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Image
            src="https://placehold.co/120x40/000000/FFFFFF.png"
            alt="Photographer Logo"
            width={120}
            height={40}
          />
        </div>
        <nav className="mb-4 md:mb-0">
          <ul className="flex space-x-6">
            <li>
              <Link href="#about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="hover:text-gray-300">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#features" className="hover:text-gray-300">
                Features
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#blog" className="hover:text-gray-300">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <Facebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <Instagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <Twitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
