/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname:'www.liberation.fr',
            port: '',
            
          },
          {
            protocol: 'https',
            hostname:'img.lemde.fr',
            port: '',
            
          },
          {
            protocol: 'https',
            hostname:'asset.lemde.fr',
            port: '',
            
          },
          {
            protocol: 'https',
            hostname:'basketball.realgm.com',
            port: '',
            
          },
          
        ],
      },
  
};


export default nextConfig;
