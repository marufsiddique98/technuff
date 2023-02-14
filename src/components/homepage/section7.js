import React from "react";
import "keen-slider/keen-slider.min.css";
import Stripe from "../stripe";
import { Card, Grid, Row, Col, Button,Link, Text,Spacer } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
    faArrowRight
} from "@fortawesome/free-solid-svg-icons";




export default function Section7 () {
    const list = [
        {
            title: "Dedert",
            img: "img/slider.png",
            link: "https://dedert.com",
        },
        {
            title: "Dedert",
            img: "img/slider.png",
            link: "https://dedert.com",
        },
        {
            title: "Dedert",
            img: "img/slider.png",
            link: "https://dedert.com",
        },
    ];
    
    return (
        <>
            <div className="container text-center py-5">
                <h2>Our Portfolio</h2>
                <Spacer />
                <Stripe color={ 'green' } clas={'d-flex justify-content-center'} />
                <Spacer />
                <Grid.Container gap={ 2 } justify="flex-start">
                    { list.map( ( item, index ) => (
                        <Grid xs={ 6 } sm={ 4 }  key={ index }>
                            <Card css={ { w: "100%", h: "400px" } }>
                                <Card.Header css={ { position: "absolute", zIndex: 1, top: 5 } }>
                                    <Col>
                                        <Text h3 color="white">
                                            {item.title}
                                        </Text>
                                    </Col>
                                </Card.Header>
                                <Card.Body css={ { p: 0 } }>
                                    <Card.Image
                                        src={item.img}
                                        objectFit="cover"
                                        width="100%"
                                        height="100%"
                                        alt="Relaxing app background"
                                    />
                                </Card.Body>
                                <Card.Footer
                                    isBlurred
                                    css={ {
                                        position: "absolute",
                                        bgBlur: "#0f111466",
                                        borderTop: "$borderWeights$light solid $gray800",
                                        bottom: 0,
                                        zIndex: 1,
                                    } }
                                >
                                    <Row>
                                        <Col>
                                            <Row>
                                                <Col span={ 3 }>
                                                    <Card.Image
                                                        src="https://nextui.org/images/breathing-app-icon.jpeg"
                                                        css={ { bg: "black", br: "50%" } }
                                                        height={ 40 }
                                                        width={ 40 }
                                                        alt="Breathing app icon"
                                                    />
                                                </Col>
                                                <Col>
                                                    <Text color="#d1d1d1" size={ 12 }>
                                                        Breathing App
                                                    </Text>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row justify="flex-end">
                                                <Link href={item.link}>
                                                    <Button
                                                        flat
                                                        auto
                                                        rounded
                                                        css={ { color: "#94f9f0", bg: "#94f9f026" } }
                                                    >
                                                        <Text
                                                            css={ { color: "inherit" } }
                                                            size={ 12 }
                                                            weight="bold"
                                                            transform="uppercase"
                                                        >
                                                            Visit
                                                        </Text>
                                                    </Button>
                                                </Link>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </Grid>
                    ) ) }
                </Grid.Container>
                <div className="d-flex justify-content-center">
                    <Link href="/">
                        <Button css={ { bg: "green" } }>
                            View More&nbsp;&nbsp;
                            <FontAwesomeIcon
                                icon={ faArrowRight }
                                style={ { fontSize: 18, color: "white" } }
                            />
                        </Button>
                    </Link>
                </div>
            </div>
            
        </>
    );
}


