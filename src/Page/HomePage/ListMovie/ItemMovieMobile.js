import React from 'react'
import { Button, Card } from 'antd';

const { Meta } = Card;

export default function ItemMovieMobile({ data }) {
    return (
        <div>
            <div className="main">
                <h1>Responsive Card Grid Layout</h1>
                <ul className="cards">
                    <li className="cards_item">
                        <div className="card">
                            <div className="card_image"><img src="https://picsum.photos/500/300/?image=10" /></div>
                            <div className="card_content">
                                <h2 className="card_title">Card Grid Layout</h2>
                                <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button className="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li className="cards_item">
                        <div className="card">
                            <div className="card_image"><img src="https://picsum.photos/500/300/?image=5" /></div>
                            <div className="card_content">
                                <h2 className="card_title">Card Grid Layout</h2>
                                <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button className="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li className="cards_item">
                        <div className="card">
                            <div className="card_image"><img src="https://picsum.photos/500/300/?image=11" /></div>
                            <div className="card_content">
                                <h2 className="card_title">Card Grid Layout</h2>
                                <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button className="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li className="cards_item">
                        <div className="card">
                            <div className="card_image"><img src="https://picsum.photos/500/300/?image=14" /></div>
                            <div className="card_content">
                                <h2 className="card_title">Card Grid Layout</h2>
                                <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button className="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li className="cards_item">
                        <div className="card">
                            <div className="card_image"><img src="https://picsum.photos/500/300/?image=17" /></div>
                            <div className="card_content">
                                <h2 className="card_title">Card Grid Layout</h2>
                                <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button className="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li className="cards_item">
                        <div className="card">
                            <div className="card_image"><img src="https://picsum.photos/500/300/?image=2" /></div>
                            <div className="card_content">
                                <h2 className="card_title">Card Grid Layout</h2>
                                <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button className="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <h3 className="made_by">Made with ♡</h3>
        </div>




    )
}
