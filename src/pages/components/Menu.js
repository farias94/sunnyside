import react from "react";
import styles from '../../styles/Menu.module.css'
import menuData from "../../../public/menuData";
import MenuButton from "../components/MenuButton";
import Link from "next/link";

const Menu =()=>{
    return(
        <div className={styles.container}>
<div>
        <Link href='/'><h1 className={styles.HomeText}>SunnySide</h1></Link>
        <h1>Menu</h1>
<div>
 
<MenuButton />
    


      </div>

            
        </div>
        </div>
    )
}

export default Menu