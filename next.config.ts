/*import type { NextConfig } from 'next';

const nextConfig: NextConfig = {

  
};

export default nextConfig;*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Desactiva el paralelismo masivo de hilos independientes
    workerThreads: false, 
    // Define el número máximo de núcleos/hilos a usar (ej: 1 o 2)
   //cpus: 1, 
  },
};

module.exports = nextConfig;
