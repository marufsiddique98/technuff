import '@/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import "keen-slider/keen-slider.min.css";
import Stripe from '../stripe';
import { Image,Button,Link } from '@nextui-org/react';

export default function Section4 () {



    return (
        <div className='container'>
            <div className='row py-5 my-5 text-left'>
                <div className='col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8 col-xxl-8'>
                    <Image
                        style={ { width: '100%' } }
                        maxDelay={ 10000 }
                        src="img/slider.png"
                        alt="Default Image"
                    />
                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4'>
                    <h2 className='heading2'>Innovation</h2>
                    <Stripe color={'green'}/>
                    <p className='paragraph'>
                        Some paragraph about innovation
                    </p>
                    <Link href={ '/' }>
                        <Button shadow color="success" auto>
                            Get a quote
                        </Button>
                    </Link>
                </div>
            </div>

        </div>
    );
}
