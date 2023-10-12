'use client'
import { Button, buttonVariant } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { BsDownload, BsGithub } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";
const Header = () => {
  return (
    <header className="w-full z-50  h-16 fixed inset-0 bg-dark-900/50 backdrop-blur-2xl flex  justify-between items-center">
      <nav className="flex gap-5 px-5 lg:max-w-3xl sm:max-w-2xl max-w-xl">
        <Link href={'/'} className={cn(buttonVariant({variant:'transparent'}),'font-bold text-lg')}>
          <Image
            src={"/logo.svg"}
            width={40}
            height={40}
            alt="logo"
            className="text-2xl"
          />
          SPEEQ
        </Link>
        <Link target="_blank" href={'https://github.com/modecode22/Speeq'} className={cn(buttonVariant({variant:'dark-solid'}))}>
          <BsGithub className="text-2xl" />
          <span className="md:flex hidden">github</span>
        </Link>
        
        <Link href={'/speeq.zip'} className={cn(buttonVariant({variant:'dark-outline'}))}>
          <BsDownload className="text-2xl" />
          <span className="md:flex hidden">Download For Windows</span>
        </Link>
      </nav>
      <nav className="flex gap-5 px-5 lg:max-w-3xl sm:max-w-2xl max-w-xl">
        <Link href={'design'} className={cn(buttonVariant({variant:'light-solid'}))} >
          <MdDesignServices className="text-2xl" />
          <span className="md:flex hidden">Design system</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
