import React from 'react'
import styles from './SlidersMainBlock.module.scss'

const SlidersMainBlock = (props) => {
  return (
    <div className={styles.main}>{props.children}</div>
  )
}

export default SlidersMainBlock