import { ChangeEvent, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import FieldLabel from "../styled-text-components/field-label";

type SearchBarProps = {
  label: string;
};

const SearchBar = ({ label }: SearchBarProps) => {
  const router = useRouter();
  const pathName = usePathname();
  const existingSearchParams = useSearchParams();
  const existingSearchBarSearchParams = existingSearchParams.get(label);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearchParams = new URLSearchParams(existingSearchParams);
    newSearchParams.set(label, event.target.value);
    const newQueryString = newSearchParams.toString();
    const newURL = `${pathName}?${newQueryString}`;
    router.replace(newURL);
  };

  return (
    <div className="flex h-full">
      <div className="flex items-center space-x-1">
        <FieldLabel text={"search:"} />
        <div className="flex items-baseline">
          <input
            type="text"
            id="searchBar"
            onChange={handleOnChange}
            value={existingSearchBarSearchParams as string}
            className="h-4 w-full appearance-none border-b border-black bg-neutral-300  pb-[.1rem] font-aperçu font-bold focus:border-b focus:outline-none dark:border-[#D9D9D9] md:text-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
