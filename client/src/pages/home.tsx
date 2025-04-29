import { Link } from "wouter";
import { CarFront, ChevronRight, PackageCheck, Truck } from "lucide-react";
import ServiceCard from "@/components/ui/service-card";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Din pålitliga partner för<br />bil, flytt och transport
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Vi erbjuder prisvärda och flexibla lösningar för alla dina behov i Stockholm och omnejd.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/biluthyrning">
                  <a className="bg-white text-primary font-medium px-6 py-3 rounded-md shadow hover:bg-neutral-100 transition text-center flex items-center justify-center">
                    <CarFront className="mr-2 h-5 w-5" />
                    Hyr bil
                  </a>
                </Link>
                <Link href="/flytt">
                  <a className="bg-secondary text-white font-medium px-6 py-3 rounded-md shadow hover:bg-red-700 transition text-center flex items-center justify-center">
                    <PackageCheck className="mr-2 h-5 w-5" />
                    Boka flytt
                  </a>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="/images/hero-image.svg" 
                alt="BHS Biluthyrning och transport" 
                className="rounded-lg shadow-xl w-full max-w-md"
                width="800"
                height="600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-700 mb-2">Våra tjänster</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              Vi erbjuder ett brett utbud av tjänster för både privatpersoner och företag, anpassade för dina specifika behov.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Biluthyrning" 
              description="Vi erbjuder ett brett utbud av personbilar för uthyrning till konkurrenskraftiga priser."
              imgSrc="/images/van.svg"
              imgAlt="Biluthyrning - Skåpbil"
              link="/biluthyrning"
            />
            <ServiceCard 
              title="Flytthjälp" 
              description="Professionell flytt av hem, kontor eller enstaka möbler med erfarna flyttare."
              imgSrc="/images/moving-boxes.svg"
              imgAlt="Flytthjälp - Flyttlådor"
              link="/flytt"
            />
            <ServiceCard 
              title="Transport" 
              description="Transport av varor och gods med våra skåpbilar och släp för alla typer av leveranser."
              imgSrc="/images/transport-truck.svg"
              imgAlt="Transport - Lastbil"
              link="/transport"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-neutral-700 mb-4">Redo att komma igång?</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto mb-8">
            Kontakta oss idag för att diskutera dina behov eller boka direkt online.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/kontakt">
              <a className="bg-primary text-white font-medium px-6 py-3 rounded-md shadow hover:bg-blue-700 transition">
                Kontakta oss
              </a>
            </Link>
            <Link href="/priser">
              <a className="bg-white text-primary border border-primary font-medium px-6 py-3 rounded-md shadow hover:bg-neutral-50 transition">
                Se våra priser
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
