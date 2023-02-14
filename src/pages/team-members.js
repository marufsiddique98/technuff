import Head from 'next/head';
import '@/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import AppHeader from '@/components/appheader';
import React from "react";
import TeamMemberCard from '@/components/team-member-card';
import Stripe from '@/components/stripe';




export default function SocialMedia () {
    return (
        <>
            <Head>
                <title>Our Team</title>
                <meta name="description" content="IT Circle Rajshahi" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AppHeader>
                <main>
                    <div className='container my-4 pb-5'>
                        <h1 className='heading1 text-center my-4'>Meet Our Beautiful Team</h1>
                        <div className='d-flex justify-content-center'>
                            <Stripe color={'green'}/>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 my-3'>
                            <TeamMemberCard
                                    name={ 'Md Aman Uddin Mujahid' }
                                    position={ 'Founder & Chairman' }
                                    image={ "https://nextui.org/images/card-example-6.jpeg" }
                                    fb={ 'https://facebook.com' }
                                    site={ 'https://facebook.com' }
                                    linkedin={ 'https://linkedin.com' }
                                    email={ 'itcirclerajshahi@gmail.com' }
                                />
                            </div>
                            <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 my-3'>
                       
                                <TeamMemberCard
                                    name={ 'Maruf Siddique' }
                                    position={ 'Co-Founder & CEO' }
                                    image={ "https://nextui.org/images/card-example-6.jpeg" }
                                    fb={ 'https://facebook.com' }
                                    site={ 'https://facebook.com' }
                                    linkedin={ 'https://linkedin.com' }
                                    email={ 'itcirclerajshahi@gmail.com' }
                                />

                            </div>
                            <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 my-3'>

                                <TeamMemberCard
                                    name={ 'Mobasshira Khan' }
                                    position={ 'Chief Technical Officer' }
                                    image={ "https://nextui.org/images/card-example-6.jpeg" }
                                    fb={ 'https://facebook.com' }
                                    site={ 'https://facebook.com' }
                                    linkedin={ 'https://linkedin.com' }
                                    email={ 'itcirclerajshahi@gmail.com' }
                                />
                            </div>
                        </div>
                    </div>
                </main>

            </AppHeader>

        </>
    );
}
