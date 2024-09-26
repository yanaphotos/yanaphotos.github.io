import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="https://placehold.co/150x50/000000/FFFFFF.png"
            alt="Photographer Logo"
            width={150}
            height={50}
          />
        </Link>
        <nav>
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
      </div>
    </header>
  );
}
