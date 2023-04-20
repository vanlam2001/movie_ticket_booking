import { Carousel } from 'antd';
import React from 'react'
import './dowloadApp.css'

export default function DowloadApp() {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
    return (
        <div className="bg-img py-28 bg-left bg-contain mt-20">
            <div className='container max-w-full mx-auto text-white'>
                <div className='max-w-[960px] px-6 w-full mx-auto flex flex-col md:flex-row items-center '>
                    <div className='md:w-1/2 md:text-left text-center w-full'>
                        <h2 className='text-3xl font-bold mb-5'>Ứng dụng tiện lợi dành cho <br />người yêu điện ảnh</h2>
                        <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                        <a target="_blank"
                            href='https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197'
                            className='px-8 py-4 inline-block text-base font-bold mt-8 mb-5 bg-orange-500 rounded'
                        >App miễn phí - Tải về ngay!</a>
                        <p>
                            TIX có hai phiên bản <a className='underline' target="_blank"
                                href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197">IOS</a> & <a
                                    className='underline' target="_blank"
                                    href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123">Android</a>
                        </p>
                    </div>
                    <div className='md:w-1/2 md:mt-0 mt-8 w-full relative'>
                        <img src="./img/download.png" alt=""
                            className='w-full px-[28%] block relative' />
                        {/*  */}
                        <div className='absolute h-full w-full top-0 left-0 px-[29.2%] pt-[1.5%]'>
                        <Carousel autoplay dots={false} className='rounded-3xl overflow-hidden'>
                            <div>
                                <img src="./img/app1.jpg" alt="" />
                            </div>
                            <div>
                                <img src="./img/app2.jpg" alt="" />
                            </div>
                            <div>
                                <img src="./img/app3.jpg" alt="" />
                            </div>
                            <div>
                                <img src="./img/app4.jpg" alt="" />
                            </div>
                            <div>
                                <img src="./img/app5.jpg" alt="" />
                            </div>
                            <div>
                                <img src="./img/app6.jpg" alt="" />
                            </div>
                        </Carousel>
                        </div>
                        {/*  */}
                    </div>
                </div>
            </div>
        </div>
    )
}