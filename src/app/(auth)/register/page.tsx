"use client";

import useThemeModeSSetup from "@/frontend/hooks/theme-hooks/use-theme-mode-setup";
import useSyncThemeModeWithLocalStorage from "@/frontend/hooks/theme-hooks/use-symc-theme-mode-with-localstorage";
import useApplyThemeMode from "@/frontend/hooks/theme-hooks/use-apply-theme-mode";

import { PAGE_BACKGROUND } from "@/app/global-styles.";
import RegisterModal from "@/frontend/sections/register-modal/register-modal";
import useInstantScrollToTop from "@/frontend/hooks/use-instant-scroll-to-top";

const Register = () => {
  useInstantScrollToTop();

  const { currentThemeMode, setCurrentThemeMode } = useThemeModeSSetup();
  useSyncThemeModeWithLocalStorage(setCurrentThemeMode);
  useApplyThemeMode(currentThemeMode);

  return (
    <div id="top" className={`${PAGE_BACKGROUND}`}>
      <div className="flex h-screen w-screen items-center justify-center border-b-2 border-neutral-200">
        <RegisterModal />
      </div>
    </div>
  );
};

export default Register;
