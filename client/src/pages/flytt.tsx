import { Link } from "wouter";
import { Calendar, Package, Sofa, Shield, Check, X } from "lucide-react";

const Flytt = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary bg-opacity-95 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Flytthjälp</h1>
            <p className="text-lg opacity-90">
              Vi erbjuder professionell flytthjälp för både hem och kontor. Våra erfarna flyttare tar hand om hela processen.
            </p>
          </div>
        </div>
      </section>

      {/* Moving Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-700 mb-2">Flytthjälp</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              Vi erbjuder professionell flytthjälp för både hem och kontor. Våra erfarna flyttare tar hand om hela processen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-700 mb-4">Kompletta flyttlösningar</h3>
              <p className="text-neutral-600 mb-6">
                Vår flyttservice inkluderar allt från packning och emballering till transport och utplacering på den nya adressen. 
                Vi anpassar våra tjänster efter dina specifika behov och önskemål.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary text-white p-2 rounded-full mr-4 mt-1">
                    <Package className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-700">Packning & emballering</h4>
                    <p className="text-neutral-500">Vi kan packa dina tillhörigheter säkert med högkvalitativt emballage.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white p-2 rounded-full mr-4 mt-1">
                    <Sofa className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-700">Möbelmontering</h4>
                    <p className="text-neutral-500">Vi monterar ned och återmonterar möbler på din nya adress.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white p-2 rounded-full mr-4 mt-1">
                    <Shield className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-700">Försäkring</h4>
                    <p className="text-neutral-500">Alla våra flyttar är försäkrade för din trygghet.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/kontakt">
                <a className="inline-flex items-center bg-secondary text-white font-medium px-6 py-3 rounded-md hover:bg-red-700 transition">
                  <Calendar className="mr-2 h-5 w-5" />
                  Boka flytthjälp
                </a>
              </Link>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/moving-boxes.svg" 
                alt="Professionell flytthjälp" 
                className="w-full h-full object-contain" 
                width="800" 
                height="600"
              />
            </div>
          </div>
          
          <div className="bg-neutral-100 p-8 rounded-lg shadow">
            <h3 className="text-2xl font-semibold text-neutral-700 mb-6 text-center">Våra flyttpaket</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-center mb-4">
                  <h4 className="text-xl font-semibold text-neutral-700">Baspaket</h4>
                  <p className="text-primary text-2xl font-bold mt-2">Från 3 500 kr</p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Transport med skåpbil</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>2 flyttare</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Bärhjälp</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Grundförsäkring</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-4 w-4 text-red-500 mr-2 mt-1" />
                    <span>Packmaterial ingår ej</span>
                  </li>
                </ul>
                <Link href="/kontakt">
                  <a className="block text-center bg-primary text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition">
                    Boka
                  </a>
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-primary relative">
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 transform translate-y-(-50%)">
                  POPULÄR
                </div>
                <div className="text-center mb-4">
                  <h4 className="text-xl font-semibold text-neutral-700">Standardpaket</h4>
                  <p className="text-primary text-2xl font-bold mt-2">Från 5 900 kr</p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Transport med skåpbil</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>2-3 flyttare</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Bärhjälp</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Grundläggande packmaterial</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Fullständig försäkring</span>
                  </li>
                </ul>
                <Link href="/kontakt">
                  <a className="block text-center bg-secondary text-white font-medium px-4 py-2 rounded-md hover:bg-red-700 transition">
                    Boka
                  </a>
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-center mb-4">
                  <h4 className="text-xl font-semibold text-neutral-700">Premiumpaket</h4>
                  <p className="text-primary text-2xl font-bold mt-2">Från 9 800 kr</p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Transport med skåpbil</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>3-4 flyttare</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Komplett packning</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Allt packmaterial ingår</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Möbelmontering</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Premium försäkring</span>
                  </li>
                </ul>
                <Link href="/kontakt">
                  <a className="block text-center bg-primary text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition">
                    Boka
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-neutral-700 mb-8 text-center">Vanliga frågor om flytthjälp</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg text-neutral-700 mb-2">Hur lång tid i förväg bör jag boka flytthjälp?</h3>
                <p className="text-neutral-600">
                  Vi rekommenderar att du bokar flytthjälp minst 2-3 veckor i förväg för att säkerställa tillgänglighet, 
                  särskilt under månadsskiften som är extra populära flyttdagar.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg text-neutral-700 mb-2">Vad ingår i grundförsäkringen?</h3>
                <p className="text-neutral-600">
                  Vår grundförsäkring täcker skador på möbler och gods under transporten upp till ett värde av 500 000 kr. 
                  Premium-försäkringen utökar skyddet och har en högre beloppsgräns.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg text-neutral-700 mb-2">Hur beräknas kostnaden för flytthjälp?</h3>
                <p className="text-neutral-600">
                  Kostnaden beräknas baserat på antal flyttare, tidsåtgång, avstånd, mängden gods samt eventuella tilläggstjänster. 
                  Vi erbjuder en kostnadsfri besiktning före flytten för att ge en exakt offert.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link href="/kontakt">
                <a className="bg-primary text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition">
                  Har du fler frågor? Kontakta oss
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Flytt;
