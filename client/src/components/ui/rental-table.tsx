
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RentalPricing } from "@/lib/utils/data";

const RentalTable = () => {
  return (
    <div className="space-y-8">
      <div className="overflow-x-auto">
        <Table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
          <TableHeader className="bg-primary text-white">
            <TableRow>
              {RentalPricing.columns.map((column, index) => (
                <TableHead key={index} className="py-3 px-4 text-center">
                  {column}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-neutral-200">
            {RentalPricing.data.map((item, index) => (
              <TableRow key={index} className="hover:bg-neutral-50">
                <TableCell className="py-4 px-4 font-medium">{item.period}</TableCell>
                <TableCell className="py-4 px-4 text-center">{item.plan}</TableCell>
                <TableCell className="py-4 px-4 text-center">{item.car}</TableCell>
                <TableCell className="py-4 px-4 text-center">{item.van}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="overflow-x-auto">
        <Table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
          <TableHeader className="bg-primary text-white">
            <TableRow>
              <TableHead className="py-3 px-4">Tilläggsavgifter</TableHead>
              <TableHead className="py-3 px-4 text-center">Personbil</TableHead>
              <TableHead className="py-3 px-4 text-center">Minibuss</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-neutral-200">
            {RentalPricing.extraInfo.map((item, index) => (
              <TableRow key={index} className="hover:bg-neutral-50">
                <TableCell className="py-4 px-4 font-medium">{item.period}</TableCell>
                <TableCell className="py-4 px-4 text-center">{item.car}</TableCell>
                <TableCell className="py-4 px-4 text-center">{item.van}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RentalTable;
