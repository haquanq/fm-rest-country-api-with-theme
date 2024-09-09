import { useThemeStore } from "../stores/themeStore";

export const ThemeButton = () => {
  const { theme, setTheme } = useThemeStore((state) => state);
  const usingDarkTheme = theme == "dark";

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextTheme = e.target.checked ? "dark" : "light";
    setTheme(nextTheme);
  };
  return (
    <label
      className="flex items-center font-semibold cursor-pointer space-x-1"
      htmlFor="theme-switcher"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20px"
        viewBox="0 -960 960 960"
        width="20px"
        fill="#e8eaed"
        className="fill-blue-900"
      >
        <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
      </svg>
      <span>Dark mode</span>

      <input
        checked={usingDarkTheme}
        onChange={handleThemeChange}
        className="appearance-none opacity-0"
        id="theme-switcher"
        type="checkbox"
      />
    </label>
  );
};
