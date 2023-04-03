import React from 'react'


export default function ItemMovieDesktop({ data }) {
    return (
        <div>

            <div className="px-2 overflow-hidden film">
                <div className="relative ">
                    <img
                        src={data.hinhAnh}
                        alt={data.tenPhim}
                        style={{
                            height: "310px",
                            width: "100%",
                            borderRadius: "6px",
                        }}
                    />
                    <div

                        className="gradient"
                    ></div>
                </div>

                <h1 className="film-title py-3 text-base">
                    <span className="text-white bg-yellow-400 px-1 py-0.5 mr-2 rounded-md">
                        C18
                    </span>
                    {data.tenPhim}
                </h1>

                <button
                    className="py-px btn-booking bg-yellow-500 font-bold text-white text-xl rounded-md"

                >
                    MUA VÉ
                </button>
            </div>


        </div>



    )
}
