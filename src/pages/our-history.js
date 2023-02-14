import Head from 'next/head';
import { Col, Image, Row, Button, Text } from "@nextui-org/react";
import { Inter } from '@next/font/google';
import '@/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import AppHeader from '@/components/appheader';
import React from "react";
import { Card } from '@nextui-org/react';
import TeamMember from '@/components/team-member-card';
import Stripe from '@/components/stripe';



const inter = Inter( { subsets: [ 'latin' ] } );

export default function OurHistory () {
    return (
        <>
            <Head>
                <title>Our History</title>
                <meta name="description" content="IT Circle Rajshahi" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AppHeader>
                <main>
                    <div className='container my-4 pb-5'>
                        <h1>Our History</h1>
                    </div>
                </main>

            </AppHeader>

        </>
    );
}
