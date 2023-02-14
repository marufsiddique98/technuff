import '@/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import "keen-slider/keen-slider.min.css";
import Stripe from '../stripe';
import { Image,Button,Link } from '@nextui-org/react';

export default function Section11 () {



    return (
        <div className='bg-success'>
            <div className='container'>
                <div className='row py-5 my-5 text-left'>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4'>
                        <h2 className='heading2 text-white'>Want to join us as a partner?</h2>
                        <Stripe color={'white'}/>
                        <p className='paragraph text-white'>
                            With the help of our partners, we can share our expertise and resources around the world. And thus we are expanding as the home of top IT professionals. So contact us to see how you can join our global family! 
                        </p>
                        <Link href={ '/' }>
                            <Button bordered style={ { border: '2px solid white', color: 'white' } } auto>
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8 col-xxl-8'>
                        <Image
                            style={ { width: '100%' } }
                            maxDelay={ 10000 }
                            src="img/slider.png"
                            alt="Default Image"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
