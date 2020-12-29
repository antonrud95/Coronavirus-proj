import React, { useState } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import classnames from 'classnames'

import Logo from '~/components/ui/general/logo/logo.component'
import MobileMenu from '~/components/ui/general/mobile-menu/mobile-menu.component'
import Button from '~/components/ui/general/button/button.component'

import DarkMenuOpenIcon from '~/assets/icons/menu-open-icon-dark.svg'

import styles from './navbar.module.scss'

const SNavbar = () => {
  const [isMenuShown, toggleMenu] = useState(false)

  const openClickHandler = () => {
    toggleMenu(true)
  }

  const activeStyles = {
    color: 'red'
  }

  return (
    <Navbar
      fixed="top"
      className={classnames(styles.navbar, styles.navbar__onLight)}
    >
      <Container>
        <Logo />
        <DarkMenuOpenIcon
          className={styles.openIcon}
          onClick={openClickHandler}
        />

        <Nav className={classnames(styles.nav, 'mr-4', 'ml-auto')}>
          <Link to="/" className={styles.navLink}>
            Overview
          </Link>
          <Link to="/" className={styles.navLink}>
            Contagion
          </Link>
          <Link to="/" className={styles.navLink}>
            Symptoms
          </Link>
          <Link to="/" className={styles.navLink}>
            Preventions
          </Link>
        </Nav>
        <Nav className={styles.nav}>
          <Button variant={'primary'}>Contact</Button>
        </Nav>
      </Container>
      <MobileMenu isShown={isMenuShown} toggle={toggleMenu} />
    </Navbar>
  )
}

export default SNavbar
