import { useState, useEffect } from "react";
import Image from "next/image";
import styles from '../../styles/Hero.module.css'
import sunnySideGifMobile from '../../../public/sunnysidegifmobile.gif'
import sunnySideGif from '../../../public/sunnysidetext.gif'
const HeroImage =()=>{
    const [windowWidth ,setWindowWidth] = useState(false);

    useEffect(() => {
    if (typeof window !== 'undefined'){
      setWindowWidth(window.innerWidth)
  
      const updateWindowWidth  = () =>{
    window.addEventListener('resize', updateWindowWidth)}
      
    return ()=>{
 
    }
    };
  } ,[windowWidth] );


  return (
<div>


{/*{windowWidth !== false && (
  windowWidth > 900 ? (
<Image className={styles.sunnySideGif} alt='' src={sunnySideGif}>  </Image>) : (
    
<Image className={styles.sunnySideGifMobile} alt ='' src ={sunnySideGifMobile}></Image>
  )
)}*/}
   </div>
     )
  
}

export default HeroImage