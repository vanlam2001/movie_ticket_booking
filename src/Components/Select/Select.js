import React, { useEffect, useState } from 'react'
import { movieServ } from '../../service/movieService';
import ItemSelect from './ItemSelect';

export default function Select() {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        movieServ
            .getMovieList()
            .then((res) => {
                setMovieList(res.data.content)
            })

            .catch((err) => {
                console.log(err)
            })
    }, []);

    return (
        <div>
            {movieList.map((item) => {
                return <ItemSelect data={item}></ItemSelect>
            })}
        </div>
    )

}
