import react from "react";
import styles from '../../styles/Footer.module.css'
import Link from "next/link";
const Footer =()=>{

    return(

        <div className={styles.container}>
            <div className={styles.titleHolder}>
            <p>SunnySide Hoboken</p>
            </div>

            
            <div className={styles.linkHolder}>

        <Link  href="../components/Menu"><p>Menu</p></Link>
        <Link  href="#"><p>About</p> </Link>
       <Link href="#"> <p>Location</p></Link>
</div>
 </div>
    )
}
export default Footer