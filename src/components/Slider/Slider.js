
import { Mousewheel,Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Grid from '@mui/material/Grid';
import sliderGirl from '../../images/sliderGirl.png'
import SlideCard from './SlideCard';

function Slider() {
  return (
    <Grid container className='slidCon' >
      <Swiper
        direction={"vertical"}
        modules={[Mousewheel,Pagination]}
        mousewheel={true}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log('swiper:',swiper)}
        className="SwiperDesktop"
      >
          <SwiperSlide><SlideCard text={'Slide 1'} /></SwiperSlide>
          <SwiperSlide><SlideCard text={'Slide 2'} /></SwiperSlide>
          <SwiperSlide><SlideCard text={'Slide 3'} /></SwiperSlide>
      </Swiper>
      <img src={sliderGirl} alt='...' className='sliderGirl' />
    </Grid>
  )
}

export default Slider