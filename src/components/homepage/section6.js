import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Image,Spacer } from "@nextui-org/react";
import Stripe from "../stripe";
import { useState } from "react";
import styles from '@/styles/Home.module.css'



export default function Section6 () {
    
    const [ currentSlide, setCurrentSlide ] = useState( 0 );
    const [ loaded, setLoaded ] = useState( false );
    const [ sliderRef, instanceRef ] = useKeenSlider( {
        initial: 0,
        slideChanged ( slider ) {
            setCurrentSlide( slider.track.details.rel );
        },
        created () {
            setLoaded( true );
        },
    } )

    return (
        <>
            <div className="container text-center py-5">
                <h2>Our Partners</h2>
                <Spacer />
                <Stripe color={ 'green' } clas={'d-flex justify-content-center'} />
                <Spacer />
                <div className="navigation-wrapper">
                <div className="keen-slider" ref={ sliderRef }>
                    <div className="keen-slider__slide ">
                        <Image
                            style={ { width: '100%' } }
                            maxDelay={ 10000 }
                            src="img/slider.png"
                            alt="Default Image"
                        />
                    </div>
                    <div className="keen-slider__slide">
                        <Image
                            style={ { width: '100%' } }
                            maxDelay={ 10000 }
                            src="img/slider.png"
                            alt="Default Image"
                        />
                    </div>
                    <div className="keen-slider__slide">
                        <Image
                            style={ { width: '100%' } }
                            maxDelay={ 10000 }
                            src="img/slider.png"
                            alt="Default Image"
                        />
                    </div>
                    <div className="keen-slider__slide">
                        <Image
                            style={ { width: '100%' } }
                            maxDelay={ 10000 }
                            src="img/slider.png"
                            alt="Default Image"
                        />
                    </div>
                    <div className="keen-slider__slide">
                        <Image
                            style={ { width: '100%' } }
                            maxDelay={ 10000 }
                            src="img/slider.png"
                            alt="Default Image"
                        />
                    </div>
                    <div className="keen-slider__slide">
                        <Image
                            style={ { width: '100%' } }
                            maxDelay={ 10000 }
                            src="img/slider.png"
                            alt="Default Image"
                        />
                    </div>
                    </div>
                    
                </div>
                { loaded && instanceRef.current && (
                    <div className={styles.dots}>
                        { [
                            ...Array( instanceRef.current.track.details.slides.length ).keys(),
                        ].map( ( idx ) => {
                            return (
                                <button
                                    key={ idx }
                                    onClick={ () => {
                                        instanceRef.current?.moveToIdx( idx );
                                    } }
                                    className={ styles.dot + ( currentSlide === idx ? +'' + styles.active : '' ) }
                                ></button>
                            );
                        } ) }
                    </div>
                ) }
            </div>
            
        </>
    );
}


