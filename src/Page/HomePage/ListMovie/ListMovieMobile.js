import React, { useEffect, useState } from 'react'
import { movieServ } from '../../../service/movieService';


import ItemMovieMobile from './ItemMovieMobile';

export default function ListMovieMobile() {





    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        movieServ
            .getMovieList()
            .then((res) => {
                setMovieList(res.data.content)
            })

            .catch((err) => {
                console.log(err)
            });
    }, []);
    return (
        <div className='container relative'>
            <div className="text-center mb-4">
                {movieList.slice(0, 8).map((item) => {
                    return (
                        <div className='mt-2 relative film'>
                            <ItemMovieMobile data={item} key={item.maPhim}></ItemMovieMobile>

                        </div>

                    )

                })}
            </div>

        </div>

    )
}
