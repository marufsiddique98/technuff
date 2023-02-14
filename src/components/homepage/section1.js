import { Image } from "@nextui-org/react";
import { Inter } from '@next/font/google';
import '@/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";


const inter = Inter( { subsets: [ 'latin' ] } );

export default function Section1 () {

    const [ sliderRef ] = useKeenSlider(
        {
            loop: true,
        },
        [
            ( slider ) => {
                let timeout;
                let mouseOver = false;
                function clearNextTimeout () {
                    clearTimeout( timeout );
                }
                function nextTimeout () {
                    clearTimeout( timeout );
                    if ( mouseOver ) return;
                    timeout = setTimeout( () => {
                        slider.next();
                    }, 2000 );
                }
                slider.on( "created", () => {
                    slider.container.addEventListener( "mouseover", () => {
                        mouseOver = true;
                        clearNextTimeout();
                    } );
                    slider.container.addEventListener( "mouseout", () => {
                        mouseOver = false;
                        nextTimeout();
                    } );
                    nextTimeout();
                } );
                slider.on( "dragStarted", clearNextTimeout );
                slider.on( "animationEnded", nextTimeout );
                slider.on( "updated", nextTimeout );
            },
        ]
    );

    return (
        <>
           
                <div ref={ sliderRef } className="keen-slider">
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
        </>
    );
}
