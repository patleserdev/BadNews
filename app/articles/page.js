const moment = require("moment");
require("moment/locale/fr");
moment.locale("fr");
import Searcharticles from "../components/Searcharticles";
import { Suspense } from 'react';
import SyncLoader from "react-spinners/ClipLoader";
export default function Articles() {

  return (
    <main className="mx-10 grid grid-rows-[10px_1fr_20px] min-h-full sm:p-20 xl:p-0 mb-20 lg:p-10 font-[family-name:var(--font-lexend)]">

      <div className="flex flex-row flex-wrap gap-4 row-start-2 items-start justify-start sm:items-start">
        <h1 className="text-5xl w-full underline">ARTICLES</h1>
        <Suspense fallback={<div><SyncLoader /></div>}>
        <Searcharticles/>
        </Suspense>
      </div>
    </main>
  );
}
