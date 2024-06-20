/** @type {import('next').NextConfig} */
const nextConfig = {
  //add images src config to the next js
  images:{
   remotePatterns:[
   {
    protocol:'https',
    hostname:'images.pexels.com'

   }
   ]
  }
}

module.exports = nextConfig
