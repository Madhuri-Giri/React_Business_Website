import React from 'react'
import "../style/Home.css"
import Banner_image from "../assets/banner/banner-img.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faShieldHalved, faChartArea } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
// for Icon
  const faChartIcon = <FontAwesomeIcon icon={faChartLine} />
  const faShieldIcon = <FontAwesomeIcon icon={faShieldHalved} />
  const faChartAreaIcon = <FontAwesomeIcon icon={faChartArea} />

  return (
    <>
      <section id='home'>
      <div className='banner_image'></div>
        <div className='container'>
            <div className='banner_outer'>
                <div className='col'>
                <h3 className='title'>WE PROMOT YOUR <span>BUSINESS</span></h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti recusandae, laborum delectus enim itaque veniam. Itaque error ipsum asperiores numquam!</p>
                <div className='btn_wrapper'>
                    <a className='btn' href='/'> GET STARTED</a>
                </div>
                </div>
                <div className='col'>
                  <div className='sub_banner_image'>
                    <img src={Banner_image} alt='Banner_image'/>
                  </div>
                  <div className='banner_style_1'>
                    {faChartIcon}
                    <h4>Business Analysis</h4>
                  </div>
                  <div className='banner_style_1 banner_style_2'>
                    {faShieldIcon }
                    <h4>99.9% Success</h4>
                  </div>
                  <div className='banner_style_1 banner_style_3'>
                    {faChartAreaIcon}
                    <h4>Strategy</h4>
                  </div>
                </div>
        </div>
      </div>

      </section>
    </>
  )
}

export default Home
