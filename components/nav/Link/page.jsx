import React from 'react'
import styles from './style.module.scss'
import Link from 'next/link'
export const page = ({data}) => {
  return (
    <motion.div 
    variants={slide}
    exit ="exit"
    initialj = "initial"
    className={styles.link}>
        <Link href={data}>
        {data.title}
        </Link>

    </motion.div>
  )
}
