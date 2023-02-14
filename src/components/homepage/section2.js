import '@/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import "keen-slider/keen-slider.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
    faHandshake,
    faClock,
    faGlobe,
    faBrain,
    faTasks,
    faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import CounterText from './countertext';

export default function Section2 () {

    

    return (
        <div className='container'>   
            <div className='row py-5 my-5 text-center'>
                <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2 col-xxl-2'>
                    <FontAwesomeIcon
                        icon={ faHandshake }
                        style={ { fontSize: 70, color: "green" } }
                    />
                    
                    <CounterText heading={'Tech Partner'} number={'2'}/>
                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2 col-xxl-2'>
                    <FontAwesomeIcon
                        icon={ faClock }
                        style={ { fontSize: 70, color: "green" } }
                    />
                    <CounterText heading={ 'Years of Experience' } number={ '2' } />

                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2 col-xxl-2'>
                    <FontAwesomeIcon
                        icon={ faGlobe }
                        style={ { fontSize: 70, color: "green" } }
                    />
                    <CounterText heading={ 'Countries Served' } number={ '3' } />

                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2 col-xxl-2'>
                    <FontAwesomeIcon
                        icon={ faBrain }
                        style={ { fontSize: 70, color: "green" } }
                    />
                    <CounterText heading={ 'Technology Professional' } number={ '7' } />

                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2 col-xxl-2'>
                    <FontAwesomeIcon
                        icon={ faTasks }
                        style={ { fontSize: 70, color: "green" } }
                    />
                    <CounterText heading={ 'Projects Completed' } number={ '2' } />

                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2 col-xxl-2'>
                    <FontAwesomeIcon
                        icon={ faProjectDiagram }
                        style={ { fontSize: 70, color: "green" } }
                    />
                    <CounterText heading={ 'Products' } number={ '2' } />

                </div>
            </div>    
            
        </div>
    );
}
