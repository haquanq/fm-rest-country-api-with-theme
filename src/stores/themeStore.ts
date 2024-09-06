import { create } from "zustand";

type AppTheme = "dark" | "light";

interface ThemeStoreState {
  theme: AppTheme;
}

interface ThemeStoreAction {
  setTheme: (theme?: AppTheme) => void;
}

const getCurrentTheme = (): AppTheme => {
  const x = "user-pref-theme";

  const userSavedTheme = localStorage.getItem(x) as AppTheme | null;

  const userPreferDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  return userSavedTheme || userPreferDark ? "dark" : "light";
};

export const useThemeStore = create<ThemeStoreState & ThemeStoreAction>(
  (set) => ({
    theme: "light",
    setTheme(theme?) {
      set((state) => ({ ...state, theme: theme || getCurrentTheme() }));
    },
  })
);
