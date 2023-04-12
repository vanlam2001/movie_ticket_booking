import React from 'react'
import Banner from '../../Components/Banner/Banner'
import DowloadApp from '../../Components/DowloadApp/DowloadApp'
import Header from '../../Components/Header/Header'


export default function HomePage() {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <DowloadApp/>
        </div>
    )
}
