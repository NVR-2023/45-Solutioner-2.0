import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useNavbarContext } from "../contextes/use-navbar-context";

export const useCheckSignin = async () => {
  const router = useRouter();
  const { user, session } = useNavbarContext();
};
