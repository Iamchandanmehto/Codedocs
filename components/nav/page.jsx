import React from 'react'
import styles from './styles.module.scss'
import { motion } from 'framer-motion'
export const page = () => {
    const navItems = [
        {
            title:"Home",
            href:"/",
        },
        {
            title:"Work",
            href:"/work",
        },
        {
            title:"About",
            href:"/about",
        },
        {
            title:"Contact",
            href:"/contact ",
        },
      
    ]
  return (
    <motion.div 
    variants={menuSlide}
    animate ="enter"  
    exit ="exit" initial ="initial" 
    className={styles.menu}>
        <div className={styles.body}>
            <div className={styles.nav}>
                <div className={styles.header}>
<p>Navigation</p>
{
    navItems.map( (item, index)=>{
        return <Link  data={{...item, index}}/>
    })
}
                </div>

            </div>

        </div>

    </motion.div>
  )
}

