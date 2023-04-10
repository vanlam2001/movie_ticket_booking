import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Header from '../../Components/Header/Header'
import ListMovieHome from '../../Components/ListMovieHome/ListMovieHome'
import TabsMovieHome from '../../Components/TabsMovieHome/TabsMovieHome'


export default function HomePage() {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <TabsMovieHome/>
        </div>
    )
}
