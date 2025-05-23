import Image from "next/image";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <div className="w-full flex flex-col items-center justify-start border-b border-dashed border-border">
      <div className="w-full max-w-[1400px] mx-auto border-l border-r border-dashed border-border flex">
        <main className="container w-full mx-auto flex items-center justify-center p-10">
          <div className="flex flex-row items-start justify-start">
            <div className="h-40 w-40 p-5 rounded-full border border-dashed border-border overflow-hidden flex items-center justify-center">
              <Image
                alt="avatar"
                className="hidden dark:flex p-2 !relative max-w-full"
                fill
                src="/hero-dark.png"
              />
              <Image
                alt="avatar"
                className="flex dark:hidden !relative max-w-full"
                fill
                src="/hero.png"
              />
            </div>
            <div className="flex items-center justify-center px-2 py-1 border border-dashed border-border bg-background -ml-10">
              <p className="text-foreground">{t("hello")}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
