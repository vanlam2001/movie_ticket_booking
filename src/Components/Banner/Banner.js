import React from 'react'

import { Carousel } from 'antd';
import { useState } from 'react';

const contentStyle = {

    color: '#fff',
    textAlign: 'center',
    background: '#364d79',
    '@media (max-width: 768px)': {
        height: '250px',
        lineHeight: '100px'
    },
    '@media (max-width: 576px)': {
        height: '150px',
        lineHeight: '50px'
    }
};

const Banner = () => {

    const [current, setCurrent] = useState(0);

    const onChange = (index) => {
        setCurrent(index);
    };
    return (
        <Carousel className='pt-20' autoplay afterChange={onChange} dotPosition={'bottom'}>
            <div>
                <h3 style={contentStyle}>
                    <img
                        src="https://cinestar.com.vn/pictures/z2161740555387_88fc044837bea7695ee9ec8320a39cef.jpg"
                        alt="..."
                    />
                </h3>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <img
                        src="https://cinestar.com.vn/pictures/z2161740555616_cf6d683f88aa9447af57b89917e84acb.jpg"
                        alt="..."
                    />
                </h3>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <img
                        src="https://cinestar.com.vn/pictures/z2161740548307_572fb6880f511449ec1b78168c547d3b.jpg"
                        alt="..."
                    />
                </h3>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <img
                        src="https://cinestar.com.vn/pictures/z2161740545178_a8a9f7496b64b022c7303a779f958fc3.jpg"
                        alt="..."
                    />
                </h3>
            </div>
        </Carousel>


    );
}

export default Banner


