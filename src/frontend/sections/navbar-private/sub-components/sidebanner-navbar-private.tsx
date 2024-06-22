import { signOutUser } from "@/utils/functions/fetch-data/user-endpoint-submissions";
import { useRouter } from "next/navigation";

import SingleAccordion from "@/frontend/components/ui/single-accordion";
import Link from "next/link";

import QuickSettingsContent from "./quick-settings-content";
type SidebannerNavbarPrivateProps = {
  closeSidebanner: () => void;
};

const SidebannerNavbarPrivate = ({
  closeSidebanner,
}: SidebannerNavbarPrivateProps) => {
  const router = useRouter();

  const handleOnSignOut = async () => {
    closeSidebanner();
    await signOutUser();
    window.location.href = "/";
  };

  return (
    <div className="z-30 flex w-full flex-col px-4 py-4  ">
      <div></div>
      <SingleAccordion label={"quick settings"}>
        <QuickSettingsContent />
      </SingleAccordion>
      <Link href="/private/settings">
        <span>account settings</span>
        <span></span>
      </Link>
      <button onClick={handleOnSignOut}>Sign out</button>
    </div>
  );
};

export default SidebannerNavbarPrivate;
