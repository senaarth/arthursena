import { LanguagePicker } from "./language-picker";
import { ThemeToggleButton } from "./theme-toggle-button";

export function Header() {
  return (
    <div className="w-full flex items-center justify-center border-b border-dashed border-border sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-[1400px] mx-auto border-l border-r border-dashed border-border flex">
        <header className="container w-full mx-auto flex items-center justify-end px-2 py-1">
          <ThemeToggleButton />
          <LanguagePicker />
        </header>
      </div>
    </div>
  );
}
