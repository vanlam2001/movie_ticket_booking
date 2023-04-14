import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Header from '../../Components/Header/Header'


import SelectHome from '../../Components/Select/SelectHome'



import ListMoveHome from './ListMoveHome/ListMoveHome'


import TabsMovieHome from '../../Components/TabsMovieHome/TabsMovieHome'


import DowloadApp from '../../Components/DowloadApp/DowloadApp'


import Footer from '../../Components/Footer/Footer'



export default function HomePage() {
    return (
        <div>

            <Banner></Banner>




            <SelectHome></SelectHome>

            <ListMoveHome></ListMoveHome>

            <TabsMovieHome></TabsMovieHome>


            <DowloadApp></DowloadApp>


            <Footer></Footer>

        </div>
    )
}
