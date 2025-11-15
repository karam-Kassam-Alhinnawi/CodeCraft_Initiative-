import TypewriterComponent from 'typewriter-effect'
import { motion } from "motion/react"
import { t } from 'i18next'
import img from "../../../assets/HeroPng.png"
import i18n from '../../../i18n'
import Navbar from '../../Navbar/Navbar'
import Counter from './Counter'
import DataSide from './DataSide'
import ImagesSide from './ImagesSide'

const Hero = () => {
  return (
    <div className='bg-[#288cf7] pb-12 flex flex-col gap-y-20'>
        <Navbar/>

  <div className={`${i18n.language == "ar" ? "rtl" : "ltr"} lg:px-20 px-6 flex flex-col lg:flex-row justify-between items-center gap-12`}>
       <DataSide/>
       <ImagesSide img={img}/>
  </div>
  </div>
  )
}

export default Hero