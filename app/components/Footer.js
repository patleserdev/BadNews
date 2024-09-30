"use client"
import { useEffect, useState } from 'react';
import Image from "next/image.js";

export default function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this only renders on the client
  }, []);

  return isClient ? 
     (
        <footer className="w-full flex-row row-start-3 flex gap-6 flex-wrap items-center justify-center text-white p-4">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://patleserdev.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Edited by P.Leservoisier - Site de démo utilisant News API
          </a>
        </footer>
      ) : null;
}