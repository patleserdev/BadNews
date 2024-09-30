"use client";
import { useEffect, useState } from "react";
import Link from "next/link.js";
const moment = require("moment");
require("moment/locale/fr");
moment.locale("fr");
import Image from "next/image.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from 'next/navigation'

export default function Searcharticles() {

  const searchParams = useSearchParams()
  const search = searchParams.get('random')

  const [selectedSource, setSelectecSource] = useState(['liberation']);
  const [datas, setDatas] = useState(null);
  const [totalResults,setTotalResults]=useState(null)
  const [query,setQuery]=useState(``)
  const [page,setPage]=useState(1)
  const [pageSize,setPageSize]=useState(8)
  const [isLoading,setIsLoading]=useState(false)
  const [errors,setErrors]=useState(null)
  const maxPage=10
  const sources = [

    { id: "le-monde", name: "Le Monde" },
    { id: "lequipe", name: "L'equipe" },
    { id: "les-echos", name: "Les Echos" },
    { id: "liberation", name: "Libération" },
  ];

 
      const url = `https://newsapi.org/v2/everything?${query}categorie=general&pageSize=${pageSize}&page=${page}&sortBy=publishedAt&sources=${selectedSource}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`;
    
 

    useEffect(() => {
      setIsLoading(true)
      if(selectedSource.length > 0)
      {
        (async () => {
          
          try {
            const response = await fetch(url);
            const result = await response.json();

            console.log(response)
            if (response.status == 429)
            {
              setErrors("Trop de requêtes, revenez plus tard !")
            }
            setDatas(result.articles);
            setTotalResults(result.totalResults)
           
          } catch (error) {
            console.error("Error fetching the articles:", error);
          }
        })();
      }
      else
      {
      setDatas ([])
      }
      setIsLoading(false)
    }, [query,selectedSource,page]);

  const handleChange=(e)=>{
    if(e.target.checked)
    {
      setSelectecSource((prev) => [...prev, e.target.value]);
    }
    else
    {
      let result=selectedSource.filter((source) => source !== e.target.value)
      setSelectecSource(result)
    }
  }

  
  const displaySources = [];
  sources.map((source,i) => {
    displaySources.push(
      <div key={i} className="flex flex-col items-center mb-2">
        <label htmlFor={source.name}> {source.name}</label>
        <input
          className="size-5 mt-1"
          name={source.name}
          defaultChecked={selectedSource.find((e)=> e === source.id) ? true : false}
          type="checkbox"
          value={source.id}
          onChange={handleChange} 
        />
      </div>
    );
  });

  const dataToDisplay = [];
  if (datas && datas) {
    datas.map((article,i) => {
      const articleLink = []
      article.title ? articleLink.push(
      article.title
        .slice(0, 50)
        .trim()
        .replaceAll(" ", "-")
        .replaceAll(":", "-")
        .replaceAll(",", "-")
      ) : null
      article.urlToImage && article.description ?
      dataToDisplay.push(
        <div
          key={article.publishedAt+i}
          className=" flex w-full max-w-[26rem] min-h-[25rem] flex-col justify-start rounded-xl bg-white text-gray-700 shadow-lg mx-auto mb-5"
        >
          <div className=" mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500  shadow-blue-gray-500/40">
          <Image src={article.urlToImage} alt={article.title} width={600} height={400}/>
          </div>
          <div className="p-6">
            <div className="flex items-start justify-start">
              <h5 className="block h-32 font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                {article.title}
              </h5>
            </div>
            <div className="inline-flex flex-wrap items-center gap-3 group mt-2">
              {moment(article.publishedAt).format("LLLL")}
            </div>
          </div>
          <div className="p-6">
            <Link legacyBehavior href={`articles/${articleLink}`}>
              <a className="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                {"Voir l'article"}
              </a>
            </Link>
          </div>
        </div>
      ) : null;
    });
  }

  return (
    <div className=" relative w-full min-h-full p-2 flex-col items-start justify-start">
     
      <div className="w-full flex flex-row items-center justify-around py-2">
        {displaySources}
      </div>

      <div className="w-full p-2 flex flex-row flex-wrap items-around justify-around">
      {dataToDisplay}
      </div>

      
      {dataToDisplay.length == 0 && 
      <div className="w-full h-96 flex flex-col items-center justify-center"><h3 className="text-5xl">Aucun article</h3>
      <p className="p-5">{errors}</p>
      </div>
      }

      {dataToDisplay.length != 0 &&
      <div className="flex flex-row items-center justify-center">
       <div className="w-1/3 flex flex-col-reverse items-center justify-center">
       {page > 1 && <><FontAwesomeIcon icon={faArrowLeft} size={"2xl"} color={"#ffffff"} className="rounded-xl p-1 px-2 cursor-pointer hover:bg-sky-700 transition-all"
        onClick={()=>setPage(page-1)}/><span>Page précédente</span></>}
      </div>

      <div className="w-1/3 flex flex-col-reverse items-center justify-center">Page {page}/10</div>

      <div className="w-1/3 flex flex-col-reverse items-center justify-center">
      {page <= maxPage-1 && <><FontAwesomeIcon icon={faArrowRight} size={"2xl"} color={"#ffffff"} className="rounded-xl p-1 px-2 cursor-pointer hover:bg-sky-700 transition-all"
      onClick={()=>setPage(page+1)}/><span>Page suivante</span></>}
      </div>
      </div>
      }
   
    </div>
  );
}
