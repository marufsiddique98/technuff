import Head from 'next/head'
import '@/styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import AppHeader from '@/components/appheader'
import React from "react";


export default function SocialMedia () {
  return (
    <>
      <Head>
        <title>Social Media</title>
        <meta name="description" content="IT Circle Rajshahi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader>
        <main>
          <div className='container'>
            <h1 className='heading1'>Social media</h1>
          </div>
        </main>
        
      </AppHeader>
      
    </>
  )
}
