import Aside from "@/app/components/Aside.js";
import Image from "next/image";
import Link from "next/link.js";
const moment = require("moment");
require("moment/locale/fr");
moment.locale("fr");


export default async function Article({ params }) 
{
  const { source, title } = params
  console.log('source et titre',source, title)
  const response = await fetch(
    //  `https://newsapi.org/v2/everything?q=&categorie=general&sources=${source}&apiKey=${process.env.API_KEY}`
     `https://newsapi.org/v2/everything?categorie=general&sortBy=publishedAt&sources=${source}&apiKey=${process.env.API_KEY}`
  );


  const datas = await response.json();
  const dataToDisplay = [];
  const dataToAside = [];
  // console.log(datas.articles)
  if (datas) {
    datas.articles.map((article) => {
      console.log(article.title
        .slice(0, 50)
        .trim()
        .replaceAll(" ", "-")
        .replaceAll(":", "-")
        .replaceAll(",", "-"),decodeURI(title))
      article.title
        .slice(0, 50)
        .trim()
        .replaceAll(" ", "-")
        .replaceAll(":", "-")
        .replaceAll(",", "-") == decodeURI(title)
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
                  height={500}
                  width={1000}
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
  console.log('datas',dataToDisplay)
  return (

    <main className="relative mx-10 grid grid-rows-[10px_1fr_10px] min-h-[75vh] sm:p-20 xl:p-0 lg:p-10 font-[family-name:var(--font-lexend)]">
      <div className="border flex flex-row flex-wrap gap-4 row-start-2 justify-between items-center sm:items-start">
        
        {dataToDisplay}

        <aside className={dataToDisplay.length != 0 ? 
          "text-white w-1/5 flex flex-col pt-10 w-96 h-full items-start justify-start" : 
          "text-white md:w-full md:px-5 border flex flex-col pt-5 w-96 h-full items-start justify-center"}>
          Articles liés
        {<Aside>{dataToAside}</Aside>}
        </aside>

      </div>

     

    </main>
  );
}
