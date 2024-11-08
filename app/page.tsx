"use client";

import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import Navbar from './ui/Navbar';
import MarqueeDemo from '../components/MarqueeDemo';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import Footer from '@/app/ui/Footer'; // Corrected import statement

const items = [
  {
    id: 1,
    name: 'Soumyadip Chowdhury',
    designation: 'Senior Software Engineer',
    image:"https://media.licdn.com/dms/image/v2/C4D03AQHvG2ccLX4DVA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1658732967087?e=1736380800&v=beta&t=dP-bJ8DTz7Aqqhh870Kt7YefFeFVypE1PP2C6OEvqaU" ,
  },
  {
    id: 2,
    name: 'Subrata Das',
    designation: 'Student Of HITK',
    image: "https://media.licdn.com/dms/image/v2/D5603AQHT_3TOyF90oQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713188997169?e=1736380800&v=beta&t=dZK2VqLRbyFBApZILhIIiFZwn-9A_4ABGhNqDOy-JGk",
  },
  // Add more items as needed
];

export default function Home() {
  return (
    <main className="flex min-h-screen h-fit flex-col items-center justify-center relative">
      <Navbar />
      <header
        id="home"
        className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden"
      >
        {/* Left Side Content */}
        <div className="w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-black md:text-8xl">Better Blockchain System</h1>
            <h2 className="text-md md:text-2xl">Scalable Data. Start Using Today!</h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-zinc-500">
            The Student Credential System is a blockchain-powered data optimization tool designed to securely store and manage student information with enhanced performance and efficiency.
          </p>
          <div className="w-full flex items-center justify-center md:justify-start gap-4">
            <button className="w-48 h-12 text-sm sm:text-base rounded bg-white text-black hover:bg-fuchsia-700 hover:text-white transition-colors">
              Know More !
            </button>
            <button className="w-48 h-12 text-sm sm:text-base rounded border border-transparent hover:bg-white hover:bg-opacity-5 hover:text-white transition-colors">
              Reach us :)
            </button>
          </div>
        </div>

        {/* Spline 3D Content */}
        <div className="w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10">
          <Spline
            className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start"
            scene="https://prod.spline.design/pvM5sSiYV2ivWraz/scene.splinecode"
          />
        </div>
      </header>
      <MarqueeDemo />
      <div className="flex space-x-4">
        <AnimatedTooltip items={items} />
      </div>
      <Footer />
    </main>
  );
}
