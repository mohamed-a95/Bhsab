import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { VanPricing } from "@/lib/utils/data";
import { Link } from "wouter";

const VanPriceTable = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <Table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
          <TableHeader className="bg-primary text-white">
            <TableRow>
              <TableHead className="py-5 px-6 text-lg font-bold text-white text-left">
                
              </TableHead>
              <TableHead className="py-5 px-6 text-lg font-bold text-white text-center">
                Lastbil 1 (11 m³)
              </TableHead>
              <TableHead className="py-5 px-6 text-lg font-bold text-white text-center">
                Lastbil 2 (18 m³)
              </TableHead>
              <TableHead className="py-5 px-6 text-lg font-bold text-white text-center">
                Lastbil (20 m³)
              </TableHead>
              <TableHead className="py-5 px-6 text-lg font-bold text-white text-center">
                Lastbil 2 + släp (18 m³ + 11 m³)
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-neutral-200">
            <TableRow className="hover:bg-neutral-50">
              <TableCell className="py-5 px-6 font-medium text-base">
                Korttid 0–4 timmar (inkl. 50 km)
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                529 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                759 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                939 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                1 199 kr
              </TableCell>
            </TableRow>
            
            <TableRow className="hover:bg-neutral-50">
              <TableCell className="py-5 px-6 font-medium text-base">
                Dygn inkl. 100 km
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                839 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                1 299 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                1 519 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                1 899 kr
              </TableCell>
            </TableRow>
            
            <TableRow className="hover:bg-neutral-50">
              <TableCell className="py-5 px-6 font-medium text-base">
                Fri körsträcka, 1:a dygn
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                1 899 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                2 499 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                3 099 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                3 399 kr
              </TableCell>
            </TableRow>
            
            <TableRow className="hover:bg-neutral-50">
              <TableCell className="py-5 px-6 font-medium text-base">
                Fri körsträcka, 2:a dygn
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                1 319 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                1 499 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                1 749 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                4 799 kr
              </TableCell>
            </TableRow>
            
            <TableRow className="hover:bg-neutral-50">
              <TableCell className="py-5 px-6 font-medium text-base">
                Vecka inkl. 700 km
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                5 479 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                7 999 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                9 999 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                10 999 kr
              </TableCell>
            </TableRow>
            
            <TableRow className="hover:bg-neutral-50">
              <TableCell className="py-5 px-6 font-medium text-base">
                Vecka fri körsträcka
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                6 799 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                9 999 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                12 999 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                13 599 kr
              </TableCell>
            </TableRow>
            
            <TableRow className="hover:bg-neutral-50">
              <TableCell className="py-5 px-6 font-medium text-base">
                Månad¹ inkl. 2100 km
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                15 999 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                20 199 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                26 259 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-medium text-primary">
                –
              </TableCell>
            </TableRow>
            
            <TableRow className="hover:bg-neutral-50 font-bold">
              <TableCell className="py-5 px-6 font-bold text-base">
                Extra km
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-bold text-primary">
                5,0 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-bold text-primary">
                6,0 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-bold text-primary">
                7,5 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-bold text-primary">
                8,0 kr
              </TableCell>
            </TableRow>
            
            <TableRow className="hover:bg-neutral-50 font-bold">
              <TableCell className="py-5 px-6 font-bold text-base">
                Självriskreducering
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-bold text-primary">
                140 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-bold text-primary">
                140 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-bold text-primary">
                140 kr
              </TableCell>
              <TableCell className="py-5 px-6 text-center font-bold text-primary">
                195 kr
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-center mt-6">
        <Link href="/kontakt" className="bg-secondary text-white font-medium px-6 py-3 rounded-md hover:bg-red-700 transition">
          Boka lastbil nu
        </Link>
      </div>
      <div className="mt-6 bg-neutral-100 p-5 rounded-lg shadow-sm text-neutral-700">
        <p className="text-base">
          ¹ Minst 30 dagars hyra. Alla priser är inklusive moms. Avbokning ska göras minst 48 timmar innan bokad tid för att undvika avgift. B-körkort gäller för alla fordon utom Lastbil 2 + släp som kräver BE-körkort.
        </p>
      </div>
    </>
  );
};

export default VanPriceTable;