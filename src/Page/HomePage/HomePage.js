import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Header from '../../Components/Header/Header'
import TabsMovieHome from '../../Components/TabsMovieHome/TabsMovieHome'


export default function HomePage() {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <TabsMovieHome></TabsMovieHome>
        </div>
    )
}
