import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'

import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('../components/map'), {
  ssr: false
});

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />

    <div>
     <MapWithNoSSR />
    </div>
  </div>
)

export default Home
