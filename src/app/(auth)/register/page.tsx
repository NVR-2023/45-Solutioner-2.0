"use client";

import useThemeModeSSetup from "@/frontend/hooks/theme-hooks/use-theme-mode-setup";
import useSyncThemeModeWithLocalStorage from "@/frontend/hooks/theme-hooks/use-symc-theme-mode-with-localstorage";
import useApplyThemeMode from "@/frontend/hooks/theme-hooks/use-apply-theme-mode";

import RegisterModal from "@/frontend/sections/register-modal/register-modal";

const Register = () => {
  const { currentThemeMode, setCurrentThemeMode } = useThemeModeSSetup();
  useSyncThemeModeWithLocalStorage(setCurrentThemeMode);
  useApplyThemeMode(currentThemeMode);

  return (
    <div className="smooth-theme-transition w-screen h-screen border-b-2 border-neutral-200 bg-[#E5E5E5] dark:bg-neutral-500 flex items-center justify-center">
      <RegisterModal />
    </div>
  );
};

export default Register;
