import { Link } from "wouter";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin 
} from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-700 text-neutral-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white text-primary font-bold text-xl px-3 py-2 rounded">BHS</div>
              <span className="font-semibold">Bil & Flytthjälp Service</span>
            </div>
            <p className="text-neutral-400 mb-6">
              Din partner för biluthyrning, flytt och transport i Stockholm sedan 2005.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-white transition" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-white transition" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-white transition" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white text-lg mb-4">Tjänster</h4>
            <ul className="space-y-2">
              <li><Link href="/biluthyrning"><a className="text-neutral-400 hover:text-white transition">Biluthyrning</a></Link></li>
              <li><Link href="/flytt"><a className="text-neutral-400 hover:text-white transition">Flytthjälp</a></Link></li>
              <li><Link href="/transport"><a className="text-neutral-400 hover:text-white transition">Transport</a></Link></li>
              <li><Link href="/priser"><a className="text-neutral-400 hover:text-white transition">Prislista</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white text-lg mb-4">Information</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-white transition">Om oss</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition">Villkor</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition">Integritetspolicy</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition">Cookies</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white text-lg mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-neutral-400 flex-shrink-0" />
                <span>Industrivägen 8<br />175 45 Stockholm</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-neutral-400 flex-shrink-0" />
                <a href="tel:+46704562100" className="hover:text-white transition">070-456 21 00</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-neutral-400 flex-shrink-0" />
                <a href="mailto:info@bhs.se" className="hover:text-white transition">info@bhs.se</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            © {year} BHS - Bil & Flytthjälp Service. Alla rättigheter förbehållna.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-neutral-400 hover:text-white text-sm transition">Villkor</a>
            <a href="#" className="text-neutral-400 hover:text-white text-sm transition">Integritet</a>
            <a href="#" className="text-neutral-400 hover:text-white text-sm transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
