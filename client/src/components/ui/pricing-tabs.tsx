import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PriceTable from "./price-table";
import RentalTable from "./rental-table";
import { 
  PersonalCarPricing, 
  VanPricing, 
  TrailerPricing
} from "@/lib/utils/data";

const PricingTabs = () => {
  const [activeTab, setActiveTab] = useState("personbilar-minibussar");
  
  return (
    <Tabs defaultValue="personbilar-minibussar" className="w-full" onValueChange={setActiveTab}>
      <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-8">
        <TabsTrigger 
          value="personbilar-minibussar" 
          className="data-[state=active]:border-primary data-[state=active]:text-primary text-base"
        >
          Personbilar & Minibussar
        </TabsTrigger>
        <TabsTrigger 
          value="skapbilar" 
          className="data-[state=active]:border-primary data-[state=active]:text-primary text-base"
        >
          Skåpbilar
        </TabsTrigger>
        <TabsTrigger 
          value="slap" 
          className="data-[state=active]:border-primary data-[state=active]:text-primary text-base"
        >
          Släp & takboxar
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="personbilar-minibussar" className="space-y-4">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-neutral-700 mb-2">Personbilar & Minibussar</h3>
          <p className="text-neutral-600 mb-4">
            Vi erbjuder flexibla hyrvillkor för personbilar och minibussar med olika prisplaner beroende på dina behov.
          </p>
        </div>
        <RentalTable />
      </TabsContent>
      
      <TabsContent value="skapbilar" className="space-y-4">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-neutral-700 mb-2">Skåpbilar</h3>
          <p className="text-neutral-600 mb-4">
            Våra skåpbilar passar perfekt för mindre flyttar och transporter. Alla skåpbilar körs på B-körkort.
          </p>
        </div>
        <PriceTable 
          data={VanPricing} 
          columns={["Fordonstyp", "1 dag", "Helg (fre-mån)", "Vecka (7 dagar)", "Extra per km", ""]} 
          footerText="Alla priser inkluderar försäkring och 100 km/dag (150 km/dag för helg, 1000 km/vecka). Bränsle tillkommer. B-körkort gäller för alla skåpbilar."
        />
      </TabsContent>
      
      <TabsContent value="slap" className="space-y-4">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-neutral-700 mb-2">Släp & Takboxar</h3>
          <p className="text-neutral-600 mb-4">
            Vi har olika typer av släp och takboxar för att komplettera din bilhyra eller till din egen bil.
          </p>
        </div>
        <PriceTable 
          data={TrailerPricing} 
          columns={["Typ", "1 dag", "Helg (fre-mån)", "Vecka (7 dagar)", ""]} 
          footerText="Alla priser inkluderar försäkring. Släpvagnsdrag krävs för hyra av släp. Takräcke krävs för takbox/cykelhållare."
        />
      </TabsContent>
    </Tabs>
  );
};

export default PricingTabs;