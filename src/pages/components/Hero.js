import react from "react";
import styles from '../../styles/Hero.module.css'
import Eggs from '../../../public/HappyEggs.png'
import Hours from "./Hours";
import Tagline from '../../../public/tagline.svg'
import NavButton from "./NavButtons";
import { useState , useEffect} from "react";
import Image from "next/image";
import backgroundRay from '../../../public/backgroundRay.svg'

import sunnySideGifMobile from '../../../public/sunnysidegifmobile.gif'
import sunnySidegif from '../../../public/sunnysidetext.gif'
import HeroImage from "./HeroImage";
import Link from "next/link";

const Hero = ()=>{

  const [windowWidth ,setWindowWidth] = useState(null);


  const mobileChecker = () =>{
    console.log('hi')
    if( window.innerWidth === '900'){
      setIsMobile(!isMobile)
    }
    else(true)
    
  }

useEffect(() => {
  if (typeof window !== 'undefined'){
    setWindowWidth(window.innerWidth)

    const updateWindowWidth  = () =>{
  window.addEventListener('resize', updateWindowWidth)}
    
  return ()=>{
    window.removeEventListener('resize', updateWindowWidth)
  }
  };
} ,[])

  
    return(

        <div className={styles.HeroContainer}>
         <div className={styles.topBar}>
<h1>sunnyside</h1>

            </div>

            <div className={styles.sunnySideName}>

            <div className={styles.ImageContainer}> 
           
            <Image className={styles.sunnySideGifMobile} alt ='' src ={sunnySidegif}></Image>

<Image className={styles.ImageEggs}src={Eggs} alt=''></Image>
</div>


</div> 
       </div>
    )
}
export default Hero