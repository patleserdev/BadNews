"use client"
import { useEffect, useState } from "react";
import Link from "next/link.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Aside({children}){

    const [sortedData,setSortedData]=useState([])
    const [source,setSource]=useState('')

    const linkStyle="px-2 p-2 hover:bg-white hover:text-black"

    useEffect(() => {

        let sortedData = children.sort((a, b) => {
            return (
              new Date(b.publishedAt) -
              new Date(a.publishedAt)
            );
          });
          setSortedData(sortedData)
 
      }, [children])



    const articlesToDisplay=[]
    sortedData.map((article,i)=> {
        
        const articleLink = article.title
        .slice(0, 50)
        .trim()
        .replaceAll(" ", "-")
        .replaceAll(":", "-")
        .replaceAll(",", "-");
         i< 10 ? articlesToDisplay.push(
    <div className="p-2 flex items-center justify-around">
        <FontAwesomeIcon icon={faArrowRight} size={"lg"} color={"#ffffff"} />&nbsp; &nbsp;

        <Link className={linkStyle}  href={`${articleLink}`}>{article.title}</Link></div>): null})

    return (

        <>
            <h3></h3>
            {articlesToDisplay}
        
        </>
        
    )
}