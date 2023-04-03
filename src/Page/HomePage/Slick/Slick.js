


const Slick = (props) => {


    return (
        <div className="container relative">
            <div className="text-center mb-4">
                <button
                    className={`${styleSlick[activeClassDC]} px-8 py-3 font-semibold rounded bg-white text-gray-800 border-gray-800 border mr-2`}

                >
                    PHIM ĐANG CHIẾU
                </button>
                <button
                    className={`${styleSlick[activeClassSC]} px-8 py-3 font-semibold rounded bg-white text-gray-800 border-gray-800 border`}

                >
                    PHIM SẮP CHIẾU
                </button>
            </div>

            <div className="w-11/12 mx-auto relative mb-4">
                <Slider {...settings}>{renderFilms()}</Slider>
                <CSSTransition
                    in={show}
                    unmountOnExit
                    timeout={{ enter: 0, exit: 300 }}
                >
                    <div className="modal" onClick={() => setShow(false)}>

                        <iframe
                            style={{ position: "relative" }}
                            title="title4"
                            allowfullscreen="true"
                            width="1000px"
                            height="500px"
                            src={trailer}
                            frameborder="0"
                        ></iframe>
                    </div>
                </CSSTransition>
            </div>
        </div>
    );
}

export default Slick