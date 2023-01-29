import React from 'react'
import "./testimonial.css"
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import { Pagination } from 'swiper'
import {Swiper,SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const data=[
  {
    id:1,
    avatar:AVTR1,
    name:'Tina Snow',
    review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur ut porro exercitationem fugit voluptatum hic ducimus repellat laborum veritatis! Officia ea quibusdam eaque! Magni, illo expedita magnam assumenda odio quae!"
  },
  {
    id:2,
    avatar:AVTR2,
    name:'Rachel Jack',
    review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur ut porro exercitationem fugit voluptatum hic ducimus repellat laborum veritatis! Officia ea quibusdam eaque! Magni, illo expedita magnam assumenda odio quae!"
  },
  {
    id:3,
    avatar:AVTR3,
    name:'Jack Ryan',
    review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur ut porro exercitationem fugit voluptatum hic ducimus repellat laborum veritatis! Officia ea quibusdam eaque! Magni, illo expedita magnam assumenda odio quae!"
  },
  {
    id:4,
    avatar:AVTR4,
    name:'Peter Shawcross',
    review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur ut porro exercitationem fugit voluptatum hic ducimus repellat laborum veritatis! Officia ea quibusdam eaque! Magni, illo expedita magnam assumenda odio quae!"
  },
  
]

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container" modules={[Pagination]} spaceBetween={40} slidesPerView={1} pagination={{clickable:true}}>
        {
           data.map(({id,avatar,name,review})=>{
            return(
              <SwiperSlide key={id} className="testimonial">
                <div className="client_avatar">
                <img src={avatar} alt="Avatar image" />
                </div>
                <h5 className="client_name">{name}</h5>
                <small className="client_review">
                  {review}
                </small>
          </SwiperSlide>
            )
          })
        }
       
      </Swiper>
    </section>
    )
}

export default Testimonial