import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import Image from 'next/image';

import { HomeContainer, Product } from "../../styles/pages/home";

import camiseta1 from '../assets/camisa01.png';
import camiseta2 from '../assets/camisa02.png';
import camiseta3 from '../assets/camisa03.png';

export default function Home() {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3
    }
  })

  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
      <Product className='keen-slider__slide'>
        <Image src={camiseta1} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image src={camiseta2} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image src={camiseta3} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image src={camiseta3} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}