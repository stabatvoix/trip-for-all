import React from 'react'

interface LogoProps {
  color?: string
}
export const Logo: React.FC<LogoProps> = ({ color = 'black' }) => {
  return <p style={{ color }}>Logo</p>
}

Logo.displayName = 'Logo'

export default Logo
