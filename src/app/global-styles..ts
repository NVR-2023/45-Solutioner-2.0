const LIGHT_THEME_PAGE_BACKGROUND = " bg-[#E5E5E5]";
const DARK_THEME_PAGE_BACKGROUND = " dark:bg-neutral-500";

const LIGHT_THEME_UI_BACKGROUND = " bg-neutral-300";
const DARK_THEME_UI_BACKGROUND = " dark:bg-[#222222]";

const LIGHT_THEME_FOOTER_BACKGROUND = " bg-neutral-400";
const DARK_THEME_FOOTER_BACKGROUND = " dark:bg-neutral-700";

const LIGHT_THEME_TEXT_COLOR = " text-black";
const DARK_THEME_TEXT_COLOR = " dark:text-neutral-300";

// Exports

export const PAGE_BACKGROUND =
  LIGHT_THEME_PAGE_BACKGROUND + DARK_THEME_PAGE_BACKGROUND;
export const FOOTER_BACKGROUND =
  LIGHT_THEME_FOOTER_BACKGROUND + DARK_THEME_FOOTER_BACKGROUND;

export const UI_BACKGROUND= LIGHT_THEME_UI_BACKGROUND + DARK_THEME_UI_BACKGROUND

export const TEXT_COLOR = LIGHT_THEME_TEXT_COLOR + DARK_THEME_TEXT_COLOR;

export const LABELS =
  " font-aperçu font-bold text-sm md:text-xs leading-[.5rem] tracking-wide small-caps";

export const ERROR_MESSAGES =
  " text-[0.625rem] italic leading-[.5rem] text-red-500";
