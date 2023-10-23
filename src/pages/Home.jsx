
import React from 'react'

import { Header } from '../components/Header'
import { Nav } from '../components/Nav'
import { Menu } from '../components/Menu'
import { Wrapper } from '../components/Wrapper'
import { Apply } from '../components/Apply'
import { Icon } from '../components/Icon'
import { Footer } from '../components/Footer'

export const Home = () => {
    return (
        <>
            <Header />

            <Nav />

            <p style={{ fontSize: '50px', color: 'red' }}>後から画像を入れる</p >

            <Menu />

            <Wrapper />

            <Apply />

            <Icon />

            <Footer />
        </>
    )
}
