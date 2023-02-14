import Head from 'next/head'
import { Image,Link,Input } from "@nextui-org/react";
import '@/styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import AppHeader from '@/components/appheader'
import React from "react";




export default function Home () {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="IT Circle Rajshahi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader>
        
        <main>
          <div className='container py-5 my-5'>
            <div className='row'>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.4272988947796!2d88.59614991645788!3d24.366434528006206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef8611a78861%3A0xb2b4fb20d1e5bd76!2sGonokpara%20Mor!5e0!3m2!1sen!2sbd!4v1675205014021!5m2!1sen!2sbd" height="450" style={{"border":"0","width":"100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                <form>
                  <div className='row'>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                      <Input bordered fullWidth labelPlaceholder="Name"/>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                    <Input bordered fullWidth labelPlaceholder="Name"/>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
        
      </AppHeader>
      
    </>
  )
}
