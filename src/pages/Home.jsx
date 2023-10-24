
import React from 'react'

import { Header } from '../components/Header'
import { Nav } from '../components/Nav'
import { Menu } from '../components/Menu'
import { Wrapper } from '../components/Wrapper'
import { Apply } from '../components/Apply'
import { Icon } from '../components/Icon'
import { Footer } from '../components/Footer'
import pic from "../img/front.jpg"

export const Home = () => {
    return (
        <>
            <Header />

            <Nav />

            <img src={pic} alt="Front" />

            <Menu />

            <Wrapper />

            <Apply />

            <Icon />

            <Footer />
        </>
    )
}
