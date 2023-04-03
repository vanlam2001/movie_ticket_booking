import React, { useEffect, useState } from 'react'
import { movieServ } from '../../../service/movieService';
import ItemMovieTablet from './ItemMovieTablet';



export default function ListMovieTablet() {
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
        <div className='grid grid-cols-4 gap-10 containermax-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 '>
            {movieList.slice(0, 8).map((item) => {
                return <ItemMovieTablet data={item} key={item.maPhim}></ItemMovieTablet>
            })}
        </div>

    )
}
