"use client";
import DropdownMenu from "@/frontend/components/ui/dropdown-menu/dropdown-menu";

const NavbarBookServicesContent = () => {
  return (
    <div className="flex h-9 w-full items-center space-x-6 rounded bg-neutral-300 px-10">
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
          "€0 to €30",
          "€30 to €60",
          "€60 to €120",
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

export default NavbarBookServicesContent;
