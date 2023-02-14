import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Button, Link, Text, Dropdown } from "@nextui-org/react";

import { icons } from "./Icons.js";

export default function AppNav () {
    const collapseItems = [
        "Portfolio",
        "Company",
        "Our Gallery",
        "Social Media",
        "About Us",
        "Our History",
        "Our Team",
        "Services",
        "Our Products",
        "Blog",
        "Contact Us",
        "Login",
        "Sign Up",
    ];
    const color = typeof window !== 'undefined' ? 'green' : 'green';

    return (

            <Navbar isBordered variant="sticky">
                <Navbar.Brand>
                <Navbar.Toggle aria-label="toggle navigation" />
                ICR
                </Navbar.Brand>
                <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
                    <Navbar.Link href={"/portfolio"}>Portfolio</Navbar.Link>

                    <Dropdown isBordered>
                        <Navbar.Item>
                            <Dropdown.Button
                                auto
                                light
                                css={ {
                                    px: 0,
                                    dflex: "center",
                                    svg: { pe: "none" },
                                } }
                                iconRight={ icons.chevron }
                                ripple={ false }
                            >
                            Company
                            </Dropdown.Button>
                        </Navbar.Item>
                        <Dropdown.Menu
                            aria-label="Company"
                            css={ {
                                $$dropdownMenuWidth: "340px",
                                $$dropdownItemHeight: "70px",
                                "& .nextui-dropdown-item": {
                                    py: "$4",
                                    svg: {
                                        color: "$secondary",
                                        mr: "$4",
                                    },
                                    "& .nextui-dropdown-item-content": {
                                        w: "100%",
                                        fontWeight: "$semibold",
                                    },
                                },
                            } }
                        >
                            <Dropdown.Item
                            key="Company"
                                showFullDescription
                                description="Our company scales products to meet user demand, automagically, based on load."
                                icon={ icons.server }
                            >
                            <Link style={{color:color}} href={ '/company' }>Company</Link>
                            </Dropdown.Item>
                            <Dropdown.Item
                                key="social_media"
                                showFullDescription
                                description="Visit our social media posts to gain more knowledge about upcoming technology."
                                icon={ icons.activity }
                            >
                            <Link style={ { color: color } } href={'/social-media'}>Social Media</Link>
                            </Dropdown.Item>
                            <Dropdown.Item
                                key="our_history"
                                showFullDescription
                                description="We are growing our business day by day. Learning and experience is the key."
                                icon={ icons.scale }
                            >
                            <Link style={ { color: color } } href={ '/our-history' }>Our History</Link>
                            </Dropdown.Item>
                            <Dropdown.Item
                                key="team_members"
                                showFullDescription
                                description="Meet our professional team and visit our profiles."
                                icon={ icons.user }
                            >
                            <Link style={ { color: color } } href={'/team-members'}>Team Members</Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                </Dropdown>

                <Dropdown isBordered>
                    <Navbar.Item>
                        <Dropdown.Button
                            auto
                            light
                            css={ {
                                px: 0,
                                dflex: "center",
                                svg: { pe: "none" },
                            } }
                            iconRight={ icons.chevron }
                            ripple={ false }
                        >
                            Services
                        </Dropdown.Button>
                    </Navbar.Item>
                    <Dropdown.Menu
                        aria-label="Services"
                        css={ {
                            $$dropdownMenuWidth: "340px",
                            $$dropdownItemHeight: "70px",
                            "& .nextui-dropdown-item": {
                                py: "$4",
                                svg: {
                                    color: "$secondary",
                                    mr: "$4",
                                },
                                "& .nextui-dropdown-item-content": {
                                    w: "100%",
                                    fontWeight: "$semibold",
                                },
                            },
                        } }
                    >
                        <Dropdown.Item
                            key="web"
                            showFullDescription
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            icon={ icons.scale }
                        >
                            <Link style={ { color: color } } href={ '/web-development' }>Web Development</Link>
                            
                        </Dropdown.Item>
                        <Dropdown.Item
                            key="app"
                            showFullDescription
                            description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                            icon={ icons.activity }
                        >
                            <Link style={ { color: color } } href={ '/app-development' }>Mobile App Development</Link>
                            
                        </Dropdown.Item>
                        <Dropdown.Item
                            key="Domain"
                            showFullDescription
                            description="ACME runs on ACME, join us and others serving requests at web scale."
                            icon={ icons.flash }
                        >
                            <Link style={ { color: color } } href={ '/domain-search' }>Domain Search</Link>
                            
                        </Dropdown.Item>
                        <Dropdown.Item
                            key="hosting"
                            showFullDescription
                            description="Applications stay on the grid with high availability and high uptime guarantees."
                            icon={ icons.server }
                        >
                            <Link style={ { color: color } } href={ '/hosting' }>Hosting</Link>
                            
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Navbar.Link href={"/"}>Products</Navbar.Link>
                <Navbar.Link href={"/"}>Blog</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    <Navbar.Item>
                    <Button auto css={ { color: color, textDecoration: 'none' } } flat as={ Link } href={"/contact-us"}>
                            Contact Us
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
                <Navbar.Collapse>
                    { collapseItems.map( ( item, index ) => (
                        <Navbar.CollapseItem key={ item }>
                            <Link
                                color="inherit"
                                css={ {
                                    minWidth: "100%",
                                } }
                                href="#"
                            >
                                { item }
                            </Link>

                        </Navbar.CollapseItem>
                    ) ) }

                </Navbar.Collapse>
            </Navbar>

  



    );
}







