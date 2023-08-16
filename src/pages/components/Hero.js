import react from "react";
import styles from '../../styles/Hero.module.css'
import Eggs from '../../../public/HappyEggs.png'
import Hours from "./Hours";
import Tagline from '../../../public/tagline.svg'
import NavButton from "./NavButtons";
import Image from "next/image";
import sunnySidegif from '../../../public/sunnysidetext.gif'
import Link from "next/link";

const Hero = ()=>{

  
    return(

        <div className={styles.HeroContainer}>
         <div className={styles.topBar}>
<h1>sunnyside</h1>

            </div>

            <div className={styles.sunnySideName}>
          <Image className ={styles.sunnySideGif} src={sunnySidegif} alt=""></Image>


            </div>
            <div className={styles.ImageContainer}> 
           

<Image className={styles.ImageEggs}src={Eggs} alt=''></Image>
</div>


        </div>
    )
}
export default Hero