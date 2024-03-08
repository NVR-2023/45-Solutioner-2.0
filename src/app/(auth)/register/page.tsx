"use client"

import useThemeModeSSetup from "@/frontend/hooks/theme-hooks/use-theme-mode-setup";
import useThemeModeLocalStorageSync from "@/frontend/hooks/theme-hooks/use-theme-mode-localstorage-sync";
import useApplyThemeMode from "@/frontend/hooks/theme-hooks/use-apply-theme-mode";

const Register = () => {
    const { currentThemeMode, setCurrentThemeMode } = useThemeModeSSetup();
    useThemeModeLocalStorageSync(setCurrentThemeMode);
    useApplyThemeMode(currentThemeMode);

  return (
    <div className="smooth-theme-transition w-screen h-screen border-b-2 border-neutral-300 dark:bg-green-400">
      <div>Register</div>
    </div>
  );
};

export default Register;
