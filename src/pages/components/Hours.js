import React from "react";
import styles from '../../styles/Hours.module.css'
import Image from "next/image";
import backgroundRay from '../../../public/backgroundRay.svg'
const Hours =()=>{

    return(
        <div>
           
        <div className={styles.container}>

 <div className={styles.backgroundRaycont}>
            <Image   alt=''src ={backgroundRay}></Image>
            </div>
            <div className={styles.textContainer}>
                <h3>We’re a cafe in Hoboken offering great breakfast and greater coffee. Come by and check us out.</h3>
                <h1>Hours</h1>
                <h3>

Mon 9-9PM<br/>
Tue 9-9pm<br/>
wed 9-10pm<br/>
thu 9-10<br/>
fri 9-9pm<br/>
sat 9-9pm<br/>
sun 9-9pm<br/>
</h3>
                <div>

                </div>

            </div>

        </div>
        </div>
    )
}

export default Hours