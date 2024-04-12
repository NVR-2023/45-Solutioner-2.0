"use client";

import useThemeModeSSetup from "@/frontend/hooks/theme-hooks/use-theme-mode-setup";
import useSyncThemeModeWithLocalStorage from "@/frontend/hooks/theme-hooks/use-symc-theme-mode-with-localstorage";
import useApplyThemeMode from "@/frontend/hooks/theme-hooks/use-apply-theme-mode";

import RegisterModal from "@/frontend/sections/register-modal/register-modal";
import useInstantScrollToTop from "@/frontend/hooks/use-instant-scroll-to-top";

const RegisterUser = () => {
  useInstantScrollToTop();

  const { currentThemeMode, setCurrentThemeMode } = useThemeModeSSetup();
  useSyncThemeModeWithLocalStorage(setCurrentThemeMode);
  useApplyThemeMode(currentThemeMode);

  return (
    <div className="flex h-screen w-screen min-w-[20rem] items-center justify-center border-b-2 border-neutral-200 bg-neutral-200 dark:bg-neutral-500">
      <RegisterModal />
    </div>
  );
};

export default RegisterUser;
