import React, { useEffect, useState } from 'react'
import { movieServ } from '../../service/movieService';
import ItemSelect from './ItemSelect';

export default function Select() {
    const [movieList, setMovieList] = useState([]);
    const [rapPhimList, setRapPhim] = useState([]);
    const [selectedMovieId, setSelectedMovieId] = useState(null);

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

    const handleChange = (event) => {
        setSelectedMovieId(event.target.value);
    }

    return (
        <div>
            <div className='mb-3 xl:w-96'>

                <select data-te-select-init value={selectedMovieId} onChange={handleChange}>
                    <option value="">Chọn tên phim</option>
                    {movieList.map((movie) => (
                        <option>{movie.tenPhim}</option>
                    ))}




                </select>

            </div>

            <div className='mb-3 xl:w-96'>

                <select data-te-select-init value={selectedMovieId} onChange={handleChange}>
                    <option value="">Chọn tên phim</option>
                    {movieList.map((movie) => (
                        <option>{movie.tenPhim}</option>
                    ))}

                </select>

            </div>


        </div>



    )
}