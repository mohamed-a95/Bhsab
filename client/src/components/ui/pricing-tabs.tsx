import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PriceTable from "./price-table";
import { 
  PersonalCarPricing, 
  VanPricing, 
  TrailerPricing, 
  MovingPricing 
} from "@/lib/utils/data";

const PricingTabs = () => {
  const [activeTab, setActiveTab] = useState("personbilar");
  
  return (
    <Tabs defaultValue="personbilar" className="w-full" onValueChange={setActiveTab}>
      <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
        <TabsTrigger value="personbilar" className="data-[state=active]:border-primary data-[state=active]:text-primary">
          Personbilar
        </TabsTrigger>
        <TabsTrigger value="skapbilar" className="data-[state=active]:border-primary data-[state=active]:text-primary">
          Skåpbilar
        </TabsTrigger>
        <TabsTrigger value="slap" className="data-[state=active]:border-primary data-[state=active]:text-primary">
          Släp & takboxar
        </TabsTrigger>
        <TabsTrigger value="flytt-priser" className="data-[state=active]:border-primary data-[state=active]:text-primary">
          Flytthjälp
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="personbilar" className="space-y-4">
        <PriceTable 
          data={PersonalCarPricing} 
          columns={["Fordonstyp", "1 dag", "Helg (fre-mån)", "Vecka (7 dagar)", "Extra per km", ""]} 
          footerText="Alla priser inkluderar försäkring och 100 km/dag (150 km/dag för helg, 1000 km/vecka). Bränsle tillkommer."
        />
      </TabsContent>
      
      <TabsContent value="skapbilar" className="space-y-4">
        <PriceTable 
          data={VanPricing} 
          columns={["Fordonstyp", "1 dag", "Helg (fre-mån)", "Vecka (7 dagar)", "Extra per km", ""]} 
          footerText="Alla priser inkluderar försäkring och 100 km/dag (150 km/dag för helg, 1000 km/vecka). Bränsle tillkommer. B-körkort gäller för alla skåpbilar."
        />
      </TabsContent>
      
      <TabsContent value="slap" className="space-y-4">
        <PriceTable 
          data={TrailerPricing} 
          columns={["Typ", "1 dag", "Helg (fre-mån)", "Vecka (7 dagar)", ""]} 
          footerText="Alla priser inkluderar försäkring. Släpvagnsdrag krävs för hyra av släp. Takräcke krävs för takbox/cykelhållare."
        />
      </TabsContent>
      
      <TabsContent value="flytt-priser" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="bg-primary text-white py-3 px-6">
              <h3 className="text-xl font-semibold">Flytthjälp (per timme)</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {MovingPricing.hourlyRates.map((rate, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-neutral-200 pb-3">
                    <div>
                      <span className="font-medium">{rate.description}</span>
                      <p className="text-sm text-neutral-500">{rate.time}</p>
                    </div>
                    <span className="font-medium">{rate.price}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center text-neutral-500">
                  <div>
                    <span className="font-medium">Helgtillägg</span>
                    <p className="text-sm">Lördag-söndag</p>
                  </div>
                  <span className="font-medium">+30%</span>
                </div>
              </div>
              <div className="mt-6">
                <a href="/kontakt" className="block text-center bg-secondary text-white font-medium px-4 py-2 rounded-md hover:bg-red-700 transition">Boka flytthjälp</a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="bg-primary text-white py-3 px-6">
              <h3 className="text-xl font-semibold">Tilläggstjänster</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {MovingPricing.additionalServices.map((service, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-neutral-200 pb-3">
                    <div>
                      <span className="font-medium">{service.name}</span>
                      <p className="text-sm text-neutral-500">{service.description}</p>
                    </div>
                    <span className="font-medium">{service.price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <a href="/kontakt" className="block text-center bg-primary text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition">Begär offert</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-neutral-600 text-sm">
          <p>Minsta debitering är 3 timmar för flytthjälp. Transport till och från flyttadressen ingår i priset. Alla priser är inklusive moms.</p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default PricingTabs;
