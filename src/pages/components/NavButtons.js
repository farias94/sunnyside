import react from "react";
import Link from "next/link";
import styles from '../../styles/NavButtons.module.css'
const NavButton = ()=>{


    return(
        <div className={styles.NavButton} >
            <Link href='../../components/Menu'><p className={styles.buttonText}>Menu</p></Link>

        </div>
    )
}

export default NavButton