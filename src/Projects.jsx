import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Canvas } from '@react-three/fiber';
import { Home } from './Home';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';



function Projects() {
  return (
    <section className="project-section">
      
        <div className="card-container">
          <h1 className="heading">Portofolio</h1>
          <Swiper
            effect={'coverflow'}
            initialSlide={2}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container">
            <SwiperSlide className='swiper-slide'>
            <div class="card">
      <div class="project">
   <img src="./models/calc.jpg" alt="" />
        <span class="overlay"></span>
        
    
      </div>
      <div class="card-content">
        <p class="project-title">Calculator</p>
        <div class="project-topics">
            <span className='filler'>Javascript</span>
            <span className='filler'>HTML</span>
            <span className='filler'>CSS</span>
            <span>Unity</span>
            
        </div>
        <div className='card-button'>
        <i class="fa-solid fa-code" ></i> 
        <a href="http://github"> <button>Live View</button></a>
       
        </div>
        
      </div>
    </div>
             
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
            <div class="card">
      <div class="project">
        <img src="./models/tic.jpg" alt="" />
        <span class="overlay"></span>
        
    
      </div>
      <div class="card-content">
        <p class="project-title"> Tic Tac Toe</p>
        <div class="project-topics">
            <span className='filler'> Javascript</span>
            <span className='filler'>HTML</span>
            <span className='filler'>CSS</span>
            <span>Unity</span>
        </div>
        <div className='card-button'>
        <i class="fa-solid fa-code" ></i> 
        <a href="http://github"> <button>Live View</button></a>
        </div>
      </div>
    </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
            <div class="card">
      <div class="project">
        <img src="./models/rock.jpg" alt="" />
        <span class="overlay"></span>
        
    
      </div>
      <div class="card-content">
        <p class="project-title">R-P-S</p>
        <div class="project-topics">
            <span className='filler'>Javascript</span>
            <span className='filler'>HTML</span>
            <span className='filler'>CSS</span>
            <span>Unity</span>
        </div>
        <div className='card-button'>
        <i class="fa-solid fa-code" ></i> 
        <a href="http://github"> <button>Live View</button></a>
        </div>
      </div>
    </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
            <div class="card">
      <div class="project">
        <img src="./models/myweb.png" alt="" />
        <span class="overlay"></span>
        
    
      </div>
      <div class="card-content">
        <p class="project-title">My Website</p>
        <div class="project-topics">
            <span className='filler'>Javascript</span>
            <span className='filler'>HTML</span>
            <span className='filler'>CSS</span>
            <span className='filler'>Unity</span>
        </div>
        <div className='card-button'>
        <i class="fa-solid fa-code" ></i> 
        <a href="http://github"> <button>Live View</button></a>
        </div>
      </div>
    </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
            <div class="card">
      <div class="project">
        <img src="./models/model2.jpg" alt="" />
        <span class="overlay"></span>
        
    
      </div>
      <div class="card-content">
        <p class="project-title">Isometric Room</p>
        <div class="project-topics">
            <span>Javascript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span className='filler'>Blender</span>
        </div>
        <div className='card-button'>
        <i class="fa-solid fa-code" ></i> 
        <a href="http://github"> <button>Live View</button></a>
        </div>
      </div>
    </div>
         
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
            <div class="card">
      <div class="project">
      <button className='contact-button'>Coming Soon</button>
        <span class="overlay"></span>
        
    
      </div>
      <div class="card-content">
        <p class="project-title">AI Friend</p>
        <div class="project-topics">
            <span>Javascript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Unity</span>
        </div>
        <div className='card-button'>
        <i class="fa-solid fa-code" ></i> 
        <button>Live View</button>
        </div>
      </div>
    </div>
             
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
            <div class="card">
      <div class="project">
        <button className='contact-button'>Coming Soon</button>
        <span class="overlay"></span>
        
    
      </div>
      <div class="card-content">
        <p class="project-title">Search Engine</p>
        <div class="project-topics">
            <span>Javascript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Unity</span>
        </div>
        <div className='card-button'>
        <i class="fa-solid fa-code" ></i> 
        <button>Live View</button>
        </div>
      </div>
    </div>
             
            </SwiperSlide>

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <i class="fa-solid fa-arrow-left"></i>
              </div>
              <div className="swiper-button-next slider-arrow">
                <i class="fa-solid fa-arrow-right"></i>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      
    </section>
  );
}

export default Projects;
