import react, { useState } from "react";
import styles from '../../styles/menuButton.module.css'
import menuData from "../api/menuData";
const MenuButton =()=> {

const [selectedCategory, setSelectedCategory] = useState('main')

const filteredMenu = menuData.filter((item => item.type == selectedCategory) )
const remainingMenu = menuData.filter(item => item.category !== selectedCategory);
    return(

        <div className={styles.container}>
<button className={styles.buttons} onClick= { ()=>setSelectedCategory('Brunch')}>Brunch</button>
<button className={styles.buttons} onClick={  ()=>setSelectedCategory('Coffee')}>Coffee</button>
<button className={styles.buttons} onClick={  ()=>setSelectedCategory('Salad')}>Salads</button>
<div>
{filteredMenu.map((item) => (
        <div className={styles.title} key={item.id}>
          <h3>{item.item}</h3>
          <p classname={styles.ingredients}>{item.ingredients}</p>
          <p>{item.price}</p>
        </div>
      ))}
{remainingMenu.map((item) =>(
  <div className={styles.title} key = {item.id}>
    <h3>{item.item}</h3>
    <p classname={styles.ingredients}>{item.ingredients}</p>
    <p>${item.price}</p>
    </div>
))}
        </div>
        </div>
    )
}

export default MenuButton
