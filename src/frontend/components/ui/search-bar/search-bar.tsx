import { ChangeEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type SearchBarProps = {
  label: string;
};

const SearchBar = ({ label }: SearchBarProps) => {
  const router = useRouter();
  const existingSearchParams = useSearchParams();
  const existingSearchBarSearchParams = existingSearchParams.get(label);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearchParams = new URLSearchParams(
      existingSearchParams.toString(),
    );
    newSearchParams.set(label, event.target.value);
    const newQueryString = newSearchParams.toString();
    const newURL = `${window.location.pathname}?${newQueryString}`;
    router.replace(newURL);
  };

  return (
    <div className="flex h-full">
      <div className="flex items-center">
        <label
          htmlFor="searchBar"
          className="flex font-aperçu text-sm font-extrabold leading-[.5rem] tracking-wide text-black small-caps dark:text-neutral-300 md:text-xs"
        >
       {`${label}:`}
        </label>
        <div className="flex items-baseline ps-2">
          <input
            type="text"
            id="searchBar"
            onChange={handleOnChange}
            value={existingSearchBarSearchParams as string}
            className="h-4 w-full appearance-none border-b border-black bg-neutral-300 pb-[.1rem] font-aperçu text-black focus:border-b focus:outline-none dark:border-[#D9D9D9] dark:bg-[#222222] md:text-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
