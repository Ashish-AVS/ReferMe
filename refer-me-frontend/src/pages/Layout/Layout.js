import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Banner from '../../components/Banner'
export default function Layout(props) {
  return (
    <div>
        <Header />
        <Banner />
        {props.children}
        <Footer />
    </div>
  )
}
