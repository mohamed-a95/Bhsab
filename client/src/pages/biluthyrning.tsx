import { Link } from "wouter";
import { ListFilter, Users, Briefcase, Fuel } from "lucide-react";
import { CarTypes } from "@/lib/utils/data";

const Biluthyrning = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary bg-opacity-95 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Biluthyrning</h1>
            <p className="text-lg opacity-90">
              Vi erbjuder ett brett utbud av välskötta fordon för uthyrning till konkurrenskraftiga priser.
            </p>
          </div>
        </div>
      </section>

      {/* Car Rental Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-700 mb-2">Biluthyrning</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              Vi erbjuder ett brett utbud av välskötta fordon för uthyrning till konkurrenskraftiga priser.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {CarTypes.map((car, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={car.imgSrc} 
                  alt={car.name} 
                  className="w-full h-48 object-contain bg-neutral-100" 
                  width="400" 
                  height="192"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-700">{car.name}</h3>
                      <p className="text-neutral-500">{car.description}</p>
                    </div>
                    <div className="bg-primary-light text-white text-sm font-medium px-3 py-1 rounded-full">
                      från {car.pricePerDay} kr/dag
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-neutral-600">
                      <Users className="w-5 h-5 text-primary mr-2" />
                      <span>{car.passengers} passagerare</span>
                    </li>
                    <li className="flex items-center text-neutral-600">
                      <Briefcase className="w-5 h-5 text-primary mr-2" />
                      <span>{car.luggage}</span>
                    </li>
                    <li className="flex items-center text-neutral-600">
                      <Fuel className="w-5 h-5 text-primary mr-2" />
                      <span>{car.fuelEconomy}</span>
                    </li>
                  </ul>
                  <Link href="/priser">
                    <a className="block text-center bg-primary text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition">
                      Se priser & boka
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/priser">
              <a className="inline-flex items-center bg-primary text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition">
                <ListFilter className="mr-2 h-5 w-5" />
                Se alla fordon och priser
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-neutral-700 mb-6 text-center">Krav för uthyrning</h2>
            
            <div className="bg-neutral-100 p-6 rounded-lg shadow-md">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary text-white p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-700">Giltigt körkort</h4>
                    <p className="text-neutral-500">B-körkort gäller för samtliga fordon i vårt sortiment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-700">Ålder</h4>
                    <p className="text-neutral-500">Minst 21 år gammal och haft körkort i minst 1 år</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-700">Identifikation</h4>
                    <p className="text-neutral-500">Giltigt ID-kort, pass eller körkort</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary text-white p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-700">Betalning</h4>
                    <p className="text-neutral-500">Kreditkort eller förskottsbetalning krävs</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 text-center">
              <Link href="/kontakt">
                <a className="bg-secondary text-white font-medium px-6 py-3 rounded-md hover:bg-red-700 transition">
                  Boka bil idag
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Biluthyrning;
