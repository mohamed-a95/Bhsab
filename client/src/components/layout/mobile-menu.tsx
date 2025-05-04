import { Link } from "wouter";
import { Phone } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

const MobileMenu = ({ isOpen, onClose, currentPath }: MobileMenuProps) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className={`md:hidden transition-height ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
      <nav className="flex flex-col space-y-4 py-4">
        <MobileLink 
          href="/" 
          isActive={currentPath === "/"} 
          onClick={handleLinkClick}
        >
          Hem
        </MobileLink>
        <div>
          <MobileLink 
            href="/biluthyrning" 
            isActive={currentPath === "/biluthyrning" || currentPath === "/priser"} 
            onClick={handleLinkClick}
          >
            Biluthyrning
          </MobileLink>
          
          {/* Submenu */}
          <div className="pl-6 ml-4 my-1 border-l-2 border-neutral-200">
            <MobileLink 
              href="/biluthyrning" 
              isActive={currentPath === "/biluthyrning"} 
              onClick={handleLinkClick}
              className="text-sm py-1.5"
            >
              Översikt
            </MobileLink>
            <MobileLink 
              href="/priser" 
              isActive={currentPath === "/priser"} 
              onClick={handleLinkClick}
              className="text-sm py-1.5"
            >
              Prislista
            </MobileLink>
          </div>
        </div>
        
        <MobileLink 
          href="/flytt" 
          isActive={currentPath === "/flytt"} 
          onClick={handleLinkClick}
        >
          Flytt
        </MobileLink>
        <MobileLink 
          href="/transport" 
          isActive={currentPath === "/transport"} 
          onClick={handleLinkClick}
        >
          Transport
        </MobileLink>
        <MobileLink 
          href="/kontakt" 
          isActive={currentPath === "/kontakt"} 
          onClick={handleLinkClick}
        >
          Kontakt
        </MobileLink>
        <a 
          href="tel:+46704562100" 
          className="flex items-center bg-secondary text-white px-4 py-2 rounded-md hover:bg-red-700 transition mx-4"
        >
          <Phone className="h-4 w-4 mr-2" />
          <span>Ring oss: 070-456 21 00</span>
        </a>
      </nav>
    </div>
  );
};

interface MobileLinkProps {
  href: string;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const MobileLink = ({ href, isActive, onClick, children, className = '' }: MobileLinkProps) => {
  return (
    <Link 
      href={href}
      className={`${
        isActive 
          ? 'text-primary bg-neutral-100' 
          : 'text-neutral-600 hover:text-primary hover:bg-neutral-100'
      } font-medium px-4 py-2 rounded mx-4 block ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default MobileMenu;
