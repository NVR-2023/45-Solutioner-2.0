"use client";
import DropdownMenu from "@/frontend/components/ui/dropdown-menu/dropdown-menu";

const RequestServicesContentNavbar = () => {
  return (
    <div className="m-0 flex h-full w-full items-center gap-0 space-x-6 rounded bg-neutral-300 px-8 py-2 font-aperçu text-sm font-medium">
      <DropdownMenu
        dropdownMenuLabel="category"
        dropdownMenuEntries={[
          "any category",
          "cleaning",
          "eventing",
          "painting",
          "gardening",
        ]}
      />

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
      <DropdownMenu
        dropdownMenuLabel="sort by"
        dropdownMenuEntries={[
          "A to Z",
          "Z to A",
          "more popular",
          "less popular",
          "pricier",
          "cheaper",
        ]}
      />

   
    </div>
  );
};

export default RequestServicesContentNavbar;
