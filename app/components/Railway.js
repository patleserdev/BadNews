"use client"
import { useEffect, useState } from 'react';
import { useRouter,usePathname,useSearchParams  } from 'next/navigation'
import Link from 'next/link'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";


export default function Railway() {
  const [isClient, setIsClient] = useState(false);
  const [links,setLinks]=useState([])

  const pathname = usePathname()
  const searchParams = useSearchParams()

  const linkStyle="px-2 p-2 hover:bg-white hover:text-black"

  useEffect(() => {
    setIsClient(true); // Ensures this only renders on the client
  }, []);

 
  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    console.log(url.split('/'))
    let links=url.split('/').map((e,i)=> e == '?' ? null : e.replace('?','') && 
    <Link className={linkStyle} key={i} href={ i > 1 ? `${e}` : `/${e}`} >{decodeURI(e).replaceAll('?','').replaceAll('-',' ').charAt(0).toUpperCase()+decodeURI(e).replaceAll('?','').replaceAll('-',' ').slice(1,e.length) }</Link>
    )
    setLinks(links)
  }, [pathname, searchParams])

  

  return isClient ? 
     (
        <div className=' p-2 mt-2 mx-10 w-1/2 '>
        <Link className={linkStyle} href='/' ><FontAwesomeIcon icon={faHouse} /></Link>
        {links}
        </div>
      ) : null;
}