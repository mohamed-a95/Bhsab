import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Phone } from "lucide-react";
import MobileMenu from "./mobile-menu";

interface HeaderProps {
  currentPath: string;
}

const Header = ({ currentPath }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`bg-white sticky top-0 z-50 ${isScrolled ? "shadow-md" : ""} transition-all duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center">
              <div className="bg-primary text-white font-bold text-xl px-3 py-2 rounded">BHS</div>
              <span className="ml-2 text-primary font-semibold hidden sm:inline">Biluthyrning transport och service</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <NavLink href="/" isActive={currentPath === "/"}>Hem</NavLink>
            <NavLink href="/biluthyrning" isActive={currentPath === "/biluthyrning" || currentPath === "/priser"}>Biluthyrning</NavLink>
            <NavLink href="/flytt" isActive={currentPath === "/flytt"}>Flytt</NavLink>
            <NavLink href="/transport" isActive={currentPath === "/transport"}>Transport</NavLink>
            <NavLink href="/kontakt" isActive={currentPath === "/kontakt"}>Kontakt</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-neutral-600 focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Contact Button */}
          <a 
            href="tel:+46704562100" 
            className="hidden md:flex items-center bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-dark transition"
          >
            <Phone className="h-4 w-4 mr-2" />
            <span>070-456 21 00</span>
          </a>
        </div>

        {/* Mobile Navigation Menu */}
        <MobileMenu 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)} 
          currentPath={currentPath}
        />
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}

const NavLink = ({ href, isActive, children }: NavLinkProps) => {
  return (
    <Link 
      href={href} 
      className={`${isActive ? 'text-primary font-medium' : 'text-neutral-600 hover:text-primary font-medium'}`}
    >
      {children}
    </Link>
  );
};

export default Header;
