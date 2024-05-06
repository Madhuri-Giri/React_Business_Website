import React from 'react';
import "../style/About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faChartPie, faTruckFast, faUserClock, faHouseLaptop, faPhone } from '@fortawesome/free-solid-svg-icons';
import AboutImage from '../assets/about/about_img.jpg';

export default function About() {
    //for Icons
    const faBusinessIcon = <FontAwesomeIcon icon={faBusinessTime} />
    const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />
    const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />
    const faUserClockIcon = <FontAwesomeIcon icon={faUserClock} />
    const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />
    const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />

  return (
    <>
    <section id="about">
        <div class="container">
            <div className="title_headling">
                <h3>We Provides Shortage Remarkable Ideas!</h3>
                <p>Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
            </div>
            <div className="about_box_wrapper">
                <div className="about_box">
                    <div className="about_icon">
                        {faBusinessIcon}
                    </div>
                    <div className="about_content">
                        <h5>Development</h5>
                        <p> Veritatis reiciendis quas cum cumque, sunt doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem iste nobis et inventore maiores est sit vel accusamus dicta officiis.
                        </p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon green_icon">
                        {faChartPieIcon}
                    </div>
                    <div className="about_content">
                        <h5>Integration</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias hic culpa quia ex ad dolore earum, perferendis illo accusamus, natus quisquam repellat facere deserunt quidem.</p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon blue_icon">
                        {faTruckFastIcon}
                    </div>
                    <div className="about_content">
                        <h5>Branding</h5>
                        <p> Veritatis reiciendis quas cum cumque, sunt doloribus! Molestias hic culpa quia ex ad dolore earum, perferendis illo accusamus, natus quisquam repellat facere deserunt quidem.</p>
                    </div>
                </div>
            </div>

            <div className="about_box_details">
                <div className="about_col">
                    <div className="about_image">
                        <img src={AboutImage} alt="about" className="about_main"/>
                    </div>
                    <div className="img_info__box">
                        <h6 className="img_info__title">GET A PRICE QUOTE TODAY!</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, voluptate.</p>
                        <a href="/">{faPhoneIcon} <span>62-657-875-8215</span></a>
                    </div>
                </div>
                <div className="about_col more_space">
                    <h3>We have business skills that will increase your earnings</h3>
                    <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <div className="grid_info">
                        <div className="icon">{faUserClockIcon}</div>
                        <div className="detail">
                            <h4>Start your own business in minutes</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laborum, praesentium quisquam maxime qui impedit.</p>
                        </div>
                    </div>
                    <div className="grid_info">
                        <div className="icon green_icon">{faHouseLaptopIcon}</div>
                        <div className="detail">
                            <h4>Open a business account online</h4>
                            <p>Ipsum laborum, praesentium quisquam maxime qui impedit.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
