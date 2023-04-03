import React from 'react'
import { Desktop, Mobile, Tablet } from '../../../Layout/Responsive'
import ListMovieDesktop from './ListMovieDesktop'
import ListMovieMobile from './ListMovieMobile'
import ListMovieTablet from './ListMovieTablet'

export default function ListMovie() {
    return (
        <div>
            <Desktop>
                <ListMovieDesktop></ListMovieDesktop>
            </Desktop>

            <Mobile>
                <ListMovieMobile></ListMovieMobile>
            </Mobile>

            <Tablet>
                <ListMovieTablet></ListMovieTablet>
            </Tablet>
        </div>
    )
}
