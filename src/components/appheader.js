import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Button, Link, Text, Dropdown } from "@nextui-org/react";

import { Layout } from "./Layout.js";
import { icons } from "./Icons.js";
import AppNav from './navbar.js';
import AppFooter from './footer.js';

export default function AppHeader ( { children } ) {
   
    return (
        <Layout>
            <AppNav/>
            { children }
            <AppFooter/>
        </Layout>
    );
}







