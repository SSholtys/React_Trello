import React from 'react';

const HeaderLogo = () => {
  return (
    <div style={styles.logo}>
      <h1 ><a href="/" style={styles.logoContent}><span style={styles.logoFramework}>React </span> Trello </a></h1>
    </div>
  )
}

const styles = {
  logo: {
    maxWidth: 146,
    maxHeight: 60,
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    paddingLeft: 32
    
  },
  logoContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 0,
    textDecoration: 'none',
    color:'white'
  },
  logoFramework: {
    color: '#faa962'
  }
}

export default HeaderLogo