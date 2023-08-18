import react from "react";
import styles from '../../styles/ExplainerSection.module.css'
import Image from "next/image";
import ImageOne from '../../../public/ExplainerSectionImage.png'
import ImageTwo from '../../../public/ExplainerSectionImageTwo.png'
import Link from "next/link";
const ExplainerSection= ()=>{
return(

    <div className={styles.ExplainerSection}>
        <div className={styles.innerSection}>
<div className={styles.textSection}>
<h2 className={styles.headline}>Counter Culture Coffee,<br/>Brunch All Day</h2>
<p className={styles.headlineCopy}> we are a small cafe in specializing in brunch all day and coffee. Stop by for a quick snack or hang out in our cozy couch!</p>

<Link href='../components/Menu'><button className={styles.menuButton}>Menu</button></Link>

</div> 
<div className={styles.ImageSection}>
{/*<Image src={ImageOne} alt=''></Image>
<Image src={ImageTwo} alt=""></Image>
*/}
</div>
</div>
    </div>
)

}

export default ExplainerSection