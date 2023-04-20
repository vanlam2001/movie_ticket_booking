import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Spinner from '../Components/Spinner/Spinner'

export default function Layout({ Component }) {
    return (
        <div>
            <Spinner/>
            <div className='min-h-screen flex flex-col'>
                <Header></Header>
                <div className="flex-grow">
                    <Component></Component>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}
