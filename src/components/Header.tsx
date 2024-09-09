import { ThemeButton } from "./ThemeButton";

export const Header = () => {
  return (
    <header className="flex justify-between items-center pt-[39px] pb-9 px-5 shadow-lg">
      <h1 className="font-semibold text-lg">Where in the world?</h1>
      <ThemeButton />
    </header>
  );
};
