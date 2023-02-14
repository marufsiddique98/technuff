import Head from 'next/head';
import { Col, Image, Row, Button, Text } from "@nextui-org/react";
import '@/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import AppHeader from '@/components/appheader';
import React from "react";
import { Card } from '@nextui-org/react';
import TeamMemberCard from '@/components/team-member-card';
import Stripe from '@/components/stripe';
import { useRouter } from 'next/router'





export default function TeamMemberSingle () {
    const router = useRouter();
    const {name} = router.query
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
                        <h1 className='heading1 text-center my-4'>{name}</h1>
                        
                    </div>
                </main>

            </AppHeader>

        </>
    );
}
