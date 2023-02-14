import { Col, Image, Row, Button, Text, Card, Spacer } from "@nextui-org/react";
import '@/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import Link from "next/link";
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    EmailShareButton,
    EmailIcon,
} from 'next-share';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



import {
    faGlobe,
} from "@fortawesome/free-solid-svg-icons";

export default function PortfolioCard ( { title, url, desc, image,buttonText } ) {
    const color = typeof window !== 'undefined' ? 'green' : 'green';
    return (
        <>
            <Card css={ { w: "100%", h: "400px" } }>
                <Card.Body css={ { p: 0 } }>
                    <Card.Image
                        src={ image }
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        alt="Card example background"
                    />
                </Card.Body>
                <Card.Footer
                    isBlurred
                    css={ {
                        position: "absolute",
                        bgBlur: "#ffffff66",
                        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                        bottom: 0,
                        zIndex: 1,
                    } }
                >
                    <Row>
                        <Col>
                            <h2>
                                <Text color="#000" weight={ 'bold' } size={ 20 }>
                                    { title }
                                </Text>
                            </h2>
                            <Text color="#000" size={ 16 }>
                                { desc }
                            </Text>
                        </Col>
                        <Col>
                            
                            <Row justify="flex-end">
                                <Button auto flat as={ Link } href={ url } css={ { color: color, textDecoration: 'none' } }>
                                    {buttonText}
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>

        </>
    );
}
