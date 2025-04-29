import { Link } from "wouter";
import { 
  Truck, 
  PackageOpen, 
  Briefcase, 
  Clock, 
  Caravan
} from "lucide-react";

const Transport = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary bg-opacity-95 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Transport</h1>
            <p className="text-lg opacity-90">
              Vi erbjuder transportlösningar för både privatpersoner och företag, från mindre leveranser till större godstransporter.
            </p>
          </div>
        </div>
      </section>

      {/* Transport Services Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-700 mb-2">Transport</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              Vi erbjuder transportlösningar för både privatpersoner och företag, från mindre leveranser till större godstransporter.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-neutral-700 mb-4">Godstransport</h3>
                <p className="text-neutral-600 mb-6">
                  Vi transporterar gods av alla storlekar med våra skåpbilar och lastbilar. 
                  Våra erfarna chaufförer ser till att ditt gods levereras säkert och i tid.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Truck className="text-primary h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                    <span>Leveranser inom hela Stockholm och omnejd</span>
                  </li>
                  <li className="flex items-start">
                    <PackageOpen className="text-primary h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                    <span>Transport av möbler, varor och annat gods</span>
                  </li>
                  <li className="flex items-start">
                    <Briefcase className="text-primary h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                    <span>Företagstransporter med regelbundna leveranser</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="text-primary h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                    <span>Expresstransport och tidsbokade leveranser</span>
                  </li>
                </ul>
                
                <Link href="/kontakt">
                  <a className="inline-flex items-center bg-primary text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition">
                    <Truck className="mr-2 h-5 w-5" />
                    Boka transport
                  </a>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-neutral-700 mb-4">Släp & takboxar</h3>
                <p className="text-neutral-600 mb-6">
                  Hyr släpvagn eller takbox för dina transportbehov. Vi har olika storlekar för att möta dina specifika krav.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="border border-neutral-200 rounded p-4">
                    <h4 className="font-medium text-neutral-700 mb-2">Släpvagn</h4>
                    <p className="text-neutral-500 mb-3">Flera olika storlekar tillgängliga</p>
                    <p className="text-primary font-semibold">från 250 kr/dag</p>
                  </div>
                  
                  <div className="border border-neutral-200 rounded p-4">
                    <h4 className="font-medium text-neutral-700 mb-2">Takbox</h4>
                    <p className="text-neutral-500 mb-3">Upp till 500 liters kapacitet</p>
                    <p className="text-primary font-semibold">från 150 kr/dag</p>
                  </div>
                  
                  <div className="border border-neutral-200 rounded p-4">
                    <h4 className="font-medium text-neutral-700 mb-2">Täckt släp</h4>
                    <p className="text-neutral-500 mb-3">Väderskyddad transport</p>
                    <p className="text-primary font-semibold">från 350 kr/dag</p>
                  </div>
                  
                  <div className="border border-neutral-200 rounded p-4">
                    <h4 className="font-medium text-neutral-700 mb-2">Cykelhållare</h4>
                    <p className="text-neutral-500 mb-3">För 2-4 cyklar</p>
                    <p className="text-primary font-semibold">från 100 kr/dag</p>
                  </div>
                </div>
                
                <Link href="/priser">
                  <a className="inline-flex items-center bg-primary text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition">
                    <Caravan className="mr-2 h-5 w-5" />
                    Se alla priser
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-neutral-700 mb-12 text-center">Fördelar med våra transporttjänster</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-100 p-6 rounded-lg text-center">
              <div className="bg-primary inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 text-white">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-700 mb-2">Punktliga leveranser</h3>
              <p className="text-neutral-600">
                Vi värdesätter din tid och ser till att alla leveranser sker punktligt enligt överenskommelse.
              </p>
            </div>
            
            <div className="bg-neutral-100 p-6 rounded-lg text-center">
              <div className="bg-primary inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-700 mb-2">Säker hantering</h3>
              <p className="text-neutral-600">
                Alla transporter är försäkrade och vi har särskilda rutiner för att hantera känsligt och värdefullt gods.
              </p>
            </div>
            
            <div className="bg-neutral-100 p-6 rounded-lg text-center">
              <div className="bg-primary inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-700 mb-2">Enkla betalningar</h3>
              <p className="text-neutral-600">
                Vi erbjuder flera betalningsalternativ och kan även fakturera företag med goda kreditbetyg.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/kontakt">
              <a className="bg-secondary text-white font-medium px-6 py-3 rounded-md hover:bg-red-700 transition">
                Kontakta oss för att diskutera dina transportbehov
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Transport;
