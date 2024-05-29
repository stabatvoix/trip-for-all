import type { CSSProperties } from 'react'
import React from 'react'
import type { FCC } from 'src/types'

import styles from './SmoothOpacity.module.scss'

interface SmoothOpacityProps {
  style?: CSSProperties
}
const SmoothOpacity: FCC<SmoothOpacityProps> = ({ children, style }) => {
  return (
    <div className={styles.container} style={style}>
      {children}
    </div>
  )
}

SmoothOpacity.displayName = 'SmoothOpacity'

export default SmoothOpacity
