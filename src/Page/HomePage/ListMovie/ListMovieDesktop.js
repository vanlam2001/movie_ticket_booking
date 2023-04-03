import { Slider } from 'antd';
import React, { useEffect, useState } from 'react'
import { movieServ } from '../../../service/movieService';
import styleSlick from './MultipleRowSlick.module.css'
import ItemMovieDesktop from './ItemMovieDesktop';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

const ListMovieDesktop = (props) => {
    const [movieList, setMovieList] = useState([]);


    useEffect(() => {
        movieServ
            .getMovieList()
            .then((res) => {
                setMovieList(res.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    const renderFilms = () => {
        return props.movieList.slice(0, 8).map((item, index) => {
            return (
                <div className='mt-2 relative film' key={index}>
                    <ItemMovieDesktop phim={item}>
                        <button onClick={() => setMovieList(true)} className="play-btn"></button>
                    </ItemMovieDesktop>
                </div>
            )
        })
    }




    return (
        <div className='container relative'>
            <div className="text-center mb-4">
                <button className='px-8 py-3 font-semibold rounded bg-white text-gray-800 border-gray-800 border mr-2'>Phim đang chiếu</button>
                <button className='px-8 py-3 font-semibold rounded bg-white text-gray-800 border-gray-800 border mr-2'>Phim sắp chiếu</button>
            </div>
            <div className='w-11/12 mx-auto relative mb-4'>
                <Slider>{renderFilms()}</Slider>
                <CSSTransition
                    in={movieList}
                    unmountOnExit
                    timeout={{ enter: 0, exit: 300 }}
                >
                    <div className="modal" onClick={() => setMovieList(false)}>

                        <iframe
                            style={{ position: "relative" }}
                            title="title4"
                            allowfullscreen="true"
                            width="1000px"
                            height="500px"

                            frameborder="0"
                        ></iframe>
                    </div>
                </CSSTransition>
            </div>
        </div>

    )
}

export default ListMovieDesktop