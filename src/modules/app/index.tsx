import React from 'react'
import './index.css'
import { icons } from '../../assets/images'
import { bcs, quran } from '../../utils/data'
const LandingScreen = () => {
    return (
        <div>
            <nav>
                <div className="container">
                    <div className="logo">
                        <h3>Portfolio</h3>
                    </div>
                    <div className="menu">
                        <ul>
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Android</a>
                            </li>
                            <li>
                                <a>Django & DRF</a>
                            </li>
                            <li>
                                <a>React</a>
                            </li>
                        </ul>
                    </div>
                    <div className="clr"></div>
                </div>
            </nav>

            <section id="banner">
                <div className="container">
                    <div className="banner-text">
                        <h3>Markup Language</h3>
                        <h4>Federal</h4>
                        <p>Lorem ipsum paragraph goes here</p>
                    </div>
                </div>
            </section>

            <section id="gallary">
                <div className="container">
                    <div className="head">
                        <h3>Quran word by word & tafsir</h3>
                    </div>

                    <div className="gallery-item">
                        <img src={icons.bcs1} alt="car" />
                        <h3>User Friendly Interface</h3>
                        <h3>Realtime Push notification</h3>
                    </div>
                    <div className="gallery-item gallery-item-center">
                        <img src={icons.bcs2} alt="car" />
                        <h3>Prayer time Reminder.</h3>
                        <h3>Fully Offline Aceess </h3>
                    </div>
                    <div className="gallery-item">
                        <img src={icons.bcs3} alt="car" />
                        <h3>24k+ downloads</h3>
                        <h3>10k+ active users</h3>
                    </div>
                    <div className="gallery-item-des">
                        <h3>Quran word by word & tafsir</h3>
                        <textarea
                        value={quran}
                        />
                    </div>
                    <div className="clr"></div>
                </div>
            </section>

            <section id="gallary">
                <div className="container">
                    <div className="head">
                        <h3>BCSFOR2DAY</h3>
                    </div>
                    <div className="gallery-item-des">
                        <h3>বিসিএসফরটুডে - BCS Preparation</h3>
                        <textarea
                        value={bcs}
                        />
                    </div>
                    <div className="gallery-item">
                        <img src={icons.bcs1} alt="car" />
                        <h3>User Friendly Interface</h3>
                        <h3>Realtime Push notification</h3>
                    </div>
                    <div className="gallery-item gallery-item-center">
                        <img src={icons.bcs2} alt="car" />
                        <h3>Social media integration.</h3>
                        <h3>Simple registration and login</h3>
                    </div>
                    <div className="gallery-item">
                        <img src={icons.bcs3} alt="car" />
                        <h3>2k+ downloads</h3>
                        <h3>300+ active users</h3>
                    </div>
                   
                    <div className="clr"></div>
                </div>
            </section>

          
        </div>
    )
}

export default LandingScreen
