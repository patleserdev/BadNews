import Image from "next/image";
import logo from "./assets/BADNEWS.know.svg";
import logoApple from "./assets/logo-apple.png";

export default function Home() {
  return (
    <main className="h-full grid grid-rows-[10px_1fr_10px]  items-center justify-center p-8  gap-16 sm:p-20 font-[family-name:var(--font-lexend)]">
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex items-end">
          <h1>
            <Image
              src={logoApple}
              alt="title"
              width={100}
              height={100}
              priority
            />
          </h1>
          <Image
            src={logo}
            alt="logo-text"
            width={350}
            height={100}
            priority
          />
        </div>

        <ol className="list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Toutes les bad news à travers le monde, toutes celles qui font rêver
            ...
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/articles"
            rel="noopener noreferrer"
          >
            Chercher un article
          </a>
     
        </div>
      </div>
    </main>
  );
}
