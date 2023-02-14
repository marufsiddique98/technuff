import Head from 'next/head';
import { Col, Image, Row, Button, Text } from "@nextui-org/react";
import '@/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import AppHeader from '@/components/appheader';
import React from "react";
import { Card } from '@nextui-org/react';
import Stripe from '@/components/stripe';
import PortfolioCard from '@/components/portfolio-card';



export default function Portfolio () {

    return (
        <>
            <Head>
                <title>Our Portfolio</title>
                <meta name="description" content="IT Circle Rajshahi" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AppHeader>
                <main>
                    <div className='container my-4 pb-5'>
                        <div className='container my-4 pb-5'>
                            <h1 className='heading1 text-center my-4'>Our Portfolio</h1>
                            <div className='d-flex justify-content-center'>
                                <Stripe color={ 'green' } />
                            </div>
                            <div className='row'>
                                <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 my-3'>
                                    <PortfolioCard
                                        title={ 'Dedert' }
                                        url={ 'https://nextui.org/images/card-example-6.jpeg' }
                                        image={ "https://nextui.org/images/card-example-6.jpeg" }
                                        desc={ 'Dedert' }
                                        buttonText={'Visit Website'}
                                    />
                                </div>
                                <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 my-3'>

                                    <PortfolioCard
                                        title={ 'Dedert' }
                                        url={ 'https://nextui.org/images/card-example-6.jpeg' }
                                        image={ "https://nextui.org/images/card-example-6.jpeg" }
                                        desc={ 'Dedert' }
                                        buttonText={ 'Visit Website' }
                                    />

                                </div>
                                <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 my-3'>

                                    <PortfolioCard
                                        title={ 'Dedert' }
                                        url={ 'https://nextui.org/images/card-example-6.jpeg' }
                                        image={ "https://nextui.org/images/card-example-6.jpeg" }
                                        desc={ 'Dedert' }
                                        buttonText={ 'Visit Website' }
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </main>

            </AppHeader>

        </>
    );
}
