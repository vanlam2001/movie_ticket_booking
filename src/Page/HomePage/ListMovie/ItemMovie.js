import React from 'react'
import { Desktop, Mobile, Tablet } from '../../../Layout/Responsive'
import ItemMovieDesktop from './ItemMovieDesktop'
import ItemMovieMobile from './ItemMovieMobile'
import ItemMovieTablet from './ItemMovieTablet'

export default function ItemMovie() {
    return (
        <div>
            <Desktop>
                <ItemMovieDesktop></ItemMovieDesktop>
            </Desktop>

            <Mobile>
                <ItemMovieMobile></ItemMovieMobile>
            </Mobile>

            <Tablet>
                <ItemMovieTablet></ItemMovieTablet>
            </Tablet>
        </div>
    )
}
