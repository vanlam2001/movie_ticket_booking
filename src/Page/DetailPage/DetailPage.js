import React, { useEffect } from 'react'
import DetailMovie from './DetailMovie';
import TabsDetailSchedule from './TabsDetailSchedule';
import { useDispatch } from 'react-redux';
import { SET_DETAIL_SCHELUDE } from '../../redux/constant/movieConstant';
import { useParams } from 'react-router-dom';
import { movieServ } from '../../service/movieService';
import "./detail.css";
import { setLoadingOff, setLoadingOn } from '../../redux/action/setLoading';


export default function DetailPage() {
    const params = useParams();
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLoadingOn);
        movieServ.getMovieDetailSchedule(params.id)
        .then((res) => {
            dispatch(setLoadingOff);
            dispatch({
                type: SET_DETAIL_SCHELUDE,
                payload: res.data.content,
            })
        })
        .catch((err) => {
            dispatch(setLoadingOff);
            console.log(err);
        });
    
    }, [])
    
  return (
    <div className='container mx-auto max-w-[960px] px-6'>
        <div className='py-10'>
            <DetailMovie/>
            <TabsDetailSchedule/>
        </div>
    </div>

  )
}
