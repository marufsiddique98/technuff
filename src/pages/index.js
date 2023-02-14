import Head from 'next/head'
import { Image } from "@nextui-org/react";
import { Inter } from '@next/font/google'
import '@/styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import AppHeader from '@/components/appheader'
import React from "react";
import "keen-slider/keen-slider.min.css"


import Section1 from '@/components/homepage/section1';
import Section2 from '@/components/homepage/section2';
import Section3 from '@/components/homepage/section3';
import Section4 from '@/components/homepage/section4';
import Section5 from '@/components/homepage/section5';
import Section6 from '@/components/homepage/section6';
import Section7 from '@/components/homepage/section7';
import Section8 from '@/components/homepage/section8';
import Section9 from '@/components/homepage/section9';
import Section10 from '@/components/homepage/section10';
import Section11 from '@/components/homepage/section11';
import Section12 from '@/components/homepage/section12';

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <>
      <Head>
        <title>TechNuff - Home</title>
        <meta name="description" content="IT Circle Rajshahi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader>
        <Section1/>
        <main>
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
          <Section8 />
          <Section9 />
          <Section10 />
          <Section11 />
          <Section12/>
        </main>
        
      </AppHeader>
      
    </>
  )
}
