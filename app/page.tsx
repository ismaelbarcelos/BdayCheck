
"use client"
import './globals.css'
import Image from "next/image";
import { AppCheckNiver } from "./components/comp";
import { body } from 'framer-motion/client';

export default function Home() {
  return (

  <div className='min-h-screen bg-gradient-to-b  from-purple-200  via-purple-100 to-pink-200 '>
      
      <AppCheckNiver/>


      <footer className='text-center mt-26'>&copy; Ismael Barcelos 2026 </footer>

     
    </div>

    
  );
}
