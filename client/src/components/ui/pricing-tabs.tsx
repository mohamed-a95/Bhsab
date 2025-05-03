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
      <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-10 bg-neutral-100 p-1 rounded-lg shadow-sm">
        <TabsTrigger 
          value="personbilar-minibussar" 
          className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:border-primary data-[state=active]:text-primary text-base font-medium py-3"
        >
          Personbilar & Minibussar
        </TabsTrigger>
        <TabsTrigger 
          value="skapbilar" 
          className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:border-primary data-[state=active]:text-primary text-base font-medium py-3"
        >
          Skåpbilar
        </TabsTrigger>
        <TabsTrigger 
          value="slap-och-takbox" 
          className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:border-primary data-[state=active]:text-primary text-base font-medium py-3"
        >
          Släp och Takbox
        </TabsTrigger>
        <TabsTrigger 
          value="slap" 
          className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:border-primary data-[state=active]:text-primary text-base font-medium py-3"
        >
          Släp & takboxar
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="personbilar-minibussar" className="mt-8 pt-4">
        <RentalTable />
      </TabsContent>
      
      <TabsContent value="skapbilar" className="mt-8 pt-4">
        <PriceTable 
          data={VanPricing} 
          columns={["Fordonstyp", "1 dag", "Helg (fre-mån)", "Vecka (7 dagar)", "Extra per km", ""]} 
          footerText="Alla priser inkluderar försäkring och 100 km/dag (150 km/dag för helg, 1000 km/vecka). Bränsle tillkommer. B-körkort gäller för alla skåpbilar."
        />
      </TabsContent>
      
      <TabsContent value="slap" className="mt-8 pt-4">
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