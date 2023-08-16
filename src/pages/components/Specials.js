import react from "react";
import styles from '../../styles/Specials.module.css'
import Image from "next/image";
import Acai from '../../../public/acai-bowl.png'
import Spiky from '../../../public/spiky.svg'
const Specials =()=>{


    return(
        <div className={styles.container}>
            <div className={styles.headerContainer}>
            <h1 className={styles.header}>Specials</h1>
            <h2 className={styles.specialsCopy}>We offer specials for breakfast lunch and dinner. Check our website often for specials and promos</h2>

            </div>
          <div className={styles.SpecialsSection}>
          

        <div className={styles.SpecialsImage}>


                {/*<div className={styles.backgroundSpikyImg}>


            </div>  */}
        <div className={styles.specialsItem}>
            <p className={styles.SpecialsTitle}>Acai Bowl 8.99</p>

          

            <Image className ={styles.AcaiImage} alt ='' src={Acai}></Image>
            <div className={styles.backgroundSpikyImg}>
            <Image className={styles.SpikyImg} src ={Spiky}></Image>  


            </div>  
            </div>

            
        </div>
        </div>
        </div>
    )
}

export default Specials