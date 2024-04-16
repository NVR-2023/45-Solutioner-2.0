import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLuciaSession } from "../contextes/use-lucia-session";

export const useCheckSignin = async () => {
  const router = useRouter();
  const { user, session } =  useLuciaSession();
};
