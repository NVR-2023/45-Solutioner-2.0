"use client";
import { useRouter } from "next/navigation";
import DropdownMenu from "@/frontend/components/ui/dropdown-menu/dropdown-menu";

const RequestServicesContentNavbar = () => {
  const router = useRouter();

  return (
    <div className="m-0 flex h-full w-full items-center gap-0 rounded bg-neutral-300 p-0 px-8 py-2 font-aperçu text-sm font-medium">
      Content Navbar
      <DropdownMenu
        dropdownMenuLabel="price"
        dropdownMenuEntries={[
          "any price",
          "from a to b",
          "from b to c",
          "from c to d",
          "from d to e",
        ]}
      />
    </div>
  );
};

export default RequestServicesContentNavbar;
