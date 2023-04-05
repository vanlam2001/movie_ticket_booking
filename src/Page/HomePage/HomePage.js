import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Header from '../../Components/Header/Header'
import ListMoveHome from './ListMoveHome/ListMoveHome'





export default function HomePage() {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <ListMoveHome></ListMoveHome>
        </div>
    )
}
