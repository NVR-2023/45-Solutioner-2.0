import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import MoneyIcon from "@/frontend/components/icons/money-icon";

const OnSaleSegment = () => {
  const pathName = usePathname();
  const router = useRouter();
  const existingSearchParams = useSearchParams();
  const sortHistoryRef = useRef<[string | null, string | null]>([
    existingSearchParams.get("sort by"),
    null,
  ]);

  useEffect(() => {
    const currentSortBy = existingSearchParams.get("sort by");
    if (currentSortBy !== sortHistoryRef.current[0]) {
      sortHistoryRef.current = [currentSortBy, sortHistoryRef.current[0]];
    }
  }, [existingSearchParams]);

  const handleOnClick = () => {
    const newSearchParams = new URLSearchParams(existingSearchParams);
    const currentSortBy = existingSearchParams.get("sort by");

    if (currentSortBy !== "on sale") {
      newSearchParams.set("sort by", "on sale");
    } else {
      newSearchParams.set("sort by", sortHistoryRef.current[1] || "category");
    }

    const newQueryString = newSearchParams.toString();
    const newURL = `${pathName}?${newQueryString}`;
    router.replace(newURL);
  };

  return (
    <div
      onClick={handleOnClick}
      role="button"
      className="flex aspect-square items-center justify-center rounded-full text-yellow-500"
    >
      <MoneyIcon scale={0.7} />
    </div>
  );
};

export default OnSaleSegment;
