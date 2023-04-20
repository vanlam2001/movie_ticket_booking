import React from 'react'
import { useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners'

export default function Spinner() {
    let isLoading = useSelector((state)  => state.movieReducer.spinnerSlice);
  return (
    isLoading ? (<div className='fixed h-screen w-screen top-0 left-0 flex items-center justify-center z-[100] bg-[rgba(0,0,0,.6)]'>
        <ClipLoader color="#e1eae9" size={50} />
    </div> ) : <></>
  )
}
