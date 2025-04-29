import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "wouter";

interface PriceItemProps {
  name: string;
  description?: string;
  day: string;
  weekend: string;
  week: string;
  extraPerKm?: string;
}

interface PriceTableProps {
  data: PriceItemProps[];
  columns: string[];
  footerText: string;
}

const PriceTable = ({ data, columns, footerText }: PriceTableProps) => {
  return (
    <>
      <div className="overflow-x-auto">
        <Table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
          <TableHeader className="bg-primary text-white">
            <TableRow>
              {columns.map((column, index) => (
                <TableHead key={index} className={`py-3 px-4 ${index === 0 ? "text-left" : "text-center"}`}>
                  {column}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-neutral-200">
            {data.map((item, index) => (
              <TableRow key={index} className="hover:bg-neutral-50">
                <TableCell className="py-4 px-4">
                  <div className="font-medium">{item.name}</div>
                  {item.description && <div className="text-sm text-neutral-500">{item.description}</div>}
                </TableCell>
                <TableCell className="py-4 px-4 text-center">{item.day}</TableCell>
                <TableCell className="py-4 px-4 text-center">{item.weekend}</TableCell>
                <TableCell className="py-4 px-4 text-center">{item.week}</TableCell>
                {item.extraPerKm && (
                  <TableCell className="py-4 px-4 text-center">{item.extraPerKm}</TableCell>
                )}
                <TableCell className="py-4 px-4 text-center">
                  <Link href="/kontakt">
                    <a className="bg-secondary text-white text-sm px-3 py-1 rounded hover:bg-red-700 transition">
                      Boka
                    </a>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-6 text-neutral-600 text-sm">
        <p>{footerText}</p>
      </div>
    </>
  );
};

export default PriceTable;
