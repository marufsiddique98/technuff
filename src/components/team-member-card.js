import { Col, Image, Row, Button, Text ,Card, Spacer} from "@nextui-org/react";
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

export default function TeamMemberCard ( { name, position, fb, email, linkedin, site, image } ) {
    const color = typeof window !== 'undefined' ? 'green' : 'green';
    return (
        <>
            <Card css={ { w: "100%", h: "400px" } }>
                <Card.Body css={ { p: 0 } }>
                    <Card.Image
                        src={image}
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
                                    { name }
                                </Text>
                            </h2>
                            <Text color="#000" size={ 16 }>
                                {position}
                            </Text>
                        </Col>
                        <Col>
                            <Row justify="flex-end">
                                <FacebookShareButton
                                    url={ fb } >
                                    <FacebookIcon size={ 32 } round />
                                </FacebookShareButton>
                                <LinkedinShareButton
                                    url={ linkedin } >
                                    <LinkedinIcon size={ 32 } round />
                                </LinkedinShareButton>
                                <EmailShareButton
                                    url={ 'mailto:' + email }  >
                                    <EmailIcon size={ 32 } round />
                                </EmailShareButton>
                                <Link href={ site }>
                                    <FontAwesomeIcon
                                        icon={ faGlobe }
                                        style={ { fontSize: 30, color: "green" } }
                                    />
                                </Link>
                            </Row>
                            <Spacer height={10} />
                            <Row justify="flex-end">
                                <Button auto flat as={ Link } href={'/'} css={{color:color,textDecoration:'none'}}>
                                    Visit Profile
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>

        </>
    );
}
