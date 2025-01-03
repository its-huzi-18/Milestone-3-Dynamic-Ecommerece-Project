import ImageCarousel from '@/app/component/ui/ImageCarousel'
import Categories from './Categories';

interface LayoutSectionProps {
  onCategoryClick: (category: string) => void;
}

const HeroSection : React.FC<LayoutSectionProps> = ({ onCategoryClick }) =>{


  return (
    <div className='w-full md:w-auto flex-col md:flex-row flex justify-between  items-center lg:items-start  md:justify-around my-10'>
      <div className='order-2 md:order-1'>
      <Categories onCategoryClick={onCategoryClick} />    
      </div>
    <div className='order-1 md:order-2  w-full md:w-[67%]  lg:w-[1000px] lg:h-[400px] relative'>
      <ImageCarousel />
    </div>

    </div>
  )
}

export default HeroSection