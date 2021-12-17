/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  alias: { 'react-pdf': 'react-pdf/build/entry.webpack' }
}
