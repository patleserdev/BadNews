import Aside from "@/app/components/Aside.js";
import Image from "next/image";
import Link from "next/link.js";
const moment = require("moment");
require("moment/locale/fr");
moment.locale("fr");

export default async function Article({ params: { title } }) {
  const response = await fetch(
     `https://newsapi.org/v2/everything?q=&categorie=general&sources=liberation&apiKey=${process.env.API_KEY}`

  );
// console.log(decodeURI(title))
  const datas = await response.json();
  const dataToDisplay = [];
  const dataToAside = [];
  // console.log(datas.articles)
  if (datas) {
    datas.articles.map((article) => {
      console.log(article.title
        .slice(0, 50)
        .trim()
        .trim()
        .replaceAll(" ", "-")
        .replaceAll(":", "-")
        .replaceAll(",", "-"),decodeURI(title))
      article.title
        .slice(0, 50)
        .trim()
        .trim()
        .replaceAll(" ", "-")
        .replaceAll(":", "-")
        .replaceAll(",", "-") === decodeURI(title)
        ? // dataToDisplay.push(<div key={article.id}>{cutString(article.title,50)}...</div>)
          dataToDisplay.push(
            <div
              key={article.publishedAt}
              className="relative 
              flex flex-col items-start justify-start
              p-2   
              w-3/4 h-full
              bg-white bg-clip-border text-gray-700 shadow-lg"
            >
              <div className="object-cover ">
                <Image
                  className="w-2/3"
                  src={article.urlToImage}
                  alt={article.title}
                />
              </div>

              <div className="p-2">
                <div className="flex flex-col items-start justify-between">
                  <h1 className="text-2xl w-3/4 pt-4 mb-2">{article.title}</h1>
                
                </div>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                  {article.description}
                </p>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700 mb-2">
                  {article.content}
                </p>
                <div className="mb-2">
                  <p>
                  <Link legacyBehavior href={article.url}><a>Article Source</a></Link>
                  </p>
                 
                </div>
                <div className="inline-flex flex-wrap items-center gap-3 group">
                  {"Date de l'article :"} {moment(article.publishedAt).format("LLLL")}
                </div>
              </div>
            </div>
          )
        : 
        dataToAside.push(article);
    });
  }
  return (

    <main className="relative mx-10 grid grid-rows-[10px_1fr_10px] min-h-[75vh] sm:p-20 xl:p-0 lg:p-10 font-[family-name:var(--font-lexend)]">
      <div className="border flex flex-row flex-wrap gap-4 row-start-2 justify-between items-center sm:items-start">
        
        {dataToDisplay}

        <aside className="text-white w-1/5 flex flex-col pt-10 w-96 h-full items-start justify-start ">
          Articles liés
        {<Aside children={dataToAside}/>}
        </aside>

      </div>

     

    </main>
  );
}
