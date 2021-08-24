import React from 'react'
import HeaderLogo from '../chunks/header/HeaderLogo'
import HeaderBtns from '../chunks/header/HeaderBtns'

const Header = () => {
  return (
    <div style={styles.headerBlock}>
      <HeaderLogo />
      <HeaderBtns/>
    </div>
  )
}

const styles = {
  headerBlock: {
    width: '100 %',
    height: '74px',
    backgroundColor: '#0F4C75',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}

export default Header