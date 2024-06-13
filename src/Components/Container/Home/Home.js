import React , { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF , faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-bootstrap';
import must from '../../../assets/img/must.png'
import audi from '../../../assets/img/audi.png'
import luxus from '../../../assets/img/luxus.png'
import './Home.css'
 
function Home() {
   
    return(
      <>
      <Carousel
       prevIcon={<FontAwesomeIcon icon={faChevronLeft} className="custom-carousel-icon" />} // Flèche précédente personnalisée avec la classe CSS
       nextIcon={<FontAwesomeIcon icon={faChevronRight} className="custom-carousel-icon" />} // Flèche suivante personnalisée avec la classe CSS
      >
      <Carousel.Item>
            <div className='PageHome'>
                <h1 className='ford'>FORD</h1>
                <h1 className='must'>MUSTANG</h1>
            </div>
            <div className='Car_must'>
                <img src={must}/>
            </div>
            <div className='buttons'>
                <button type="button" id='rent1'>Rent Now</button>
                <button type="button" id='det1'>Details</button>
            </div>
        
            </Carousel.Item>
            <Carousel.Item>
            <div className='PageHome'>
                <h1 className='ford'>AUDI</h1>
                <h1 className='must'>A3</h1>
            </div>
            <div className='Car_must'>
                <img src={audi}/>
            </div>
            
            <div className='buttons'>
                <button type="button" id='rent2'>Rent Now</button>
                <button type="button" id='det2'>Details</button>
            </div>
            
            </Carousel.Item>
            <Carousel.Item>
            <div className='PageHome'>
                <h1 className='ford'>LEXUS</h1>
                <h1 className='must'>LC SERIES</h1>
            </div>
            <div className='Car_must'>
                <img src={luxus}/>
            </div>
            
            <div className='buttons'>
                <button type="button" id='rent3'>Rent Now</button>
                <button type="button" id='det3'>Details</button>
            </div>
            
            </Carousel.Item>
    </Carousel>
            <div className='icons'>
                    <a href="https://www.facebook.com/haitameljebari" target="_blank" rel="">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="https://www.instagram.com/haitameljebari"  target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://twitter.com/haitameljebari" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.pinterest.com/haitameljebari" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faPinterest} />
                    </a>
            </div>
      </>
    );
}
export default Home;