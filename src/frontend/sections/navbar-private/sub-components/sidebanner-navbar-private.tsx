import BasicButton from "@/frontend/components/ui/basic-button/basic-button";
import { signOutUser } from "@/utils/functions/fetch-data/user-endpoint-submissions";
import { useRouter } from "next/navigation";

type SidebannerNavbarPrivateProps = {
  closeSidebanner: () => void;
};

const SidebannerNavbarPrivate = ({
  closeSidebanner,
}: SidebannerNavbarPrivateProps) => {

const router = useRouter();

  const handleOnCancel = async () => {
    closeSidebanner();
    await signOutUser();
    router.push("/");
  };

  return (
    <div className="h-full w-full py-4 ps-4  ">
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <BasicButton
        type="outlined"
        size="sm"
        label="sign out"
        onClick={handleOnCancel}
      />
    </div>
  );
};

export default SidebannerNavbarPrivate;
