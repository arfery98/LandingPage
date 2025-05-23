import { create } from "zustand"; /* 822 (gzipped : 466) */
import { persist } from "zustand/middleware"; /* 2.3k (gzipped : 1.1k) */

type Theme = "light" | "dark";
interface ThemeStore {
    theme: Theme;
    toggleTheme: () => void
}

export const useThemeStore = create<ThemeStore>()(
    persist(
        (set, get) => ({
            theme:
                typeof window !== "undefined" &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light",
            toggleTheme: () => {
                const newTheme: Theme = get().theme === "light" ? "dark" : "light";
                if (typeof document !== "undefined") {
                    document.documentElement.classList.toggle(
                        "dark",
                        newTheme === "dark"
                    );
                }

                set({ theme: newTheme });
            },
        }),
        {
            name: "theme",
            onRehydrateStorage: () => (state) => {
                if (state?.theme === "dark") {
                    document.documentElement.classList.add("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                }
            },
        }
    )
);
