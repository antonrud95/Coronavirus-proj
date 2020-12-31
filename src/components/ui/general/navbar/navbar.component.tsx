import React, { useState } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import classnames from 'classnames'
import Fade from 'react-reveal/Fade';

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

  return (
    <Navbar
      fixed="top"
      className={classnames(styles.navbar, styles.navbar__onLight)}
    >
      <Container>
        <Fade top>
          <Logo />
        </Fade>
        <DarkMenuOpenIcon
          className={styles.openIcon}
          onClick={openClickHandler}
        />

        <Nav className={classnames(styles.nav, 'mr-4', 'ml-auto')}>
          <Fade top delay={150}>
            <Link to="/" className={styles.navLink}>
              Overview
            </Link>
          </Fade>
          <Fade top delay={200}>
            <Link to="/" className={styles.navLink}>
              Contagion
            </Link>
          </Fade>
          <Fade top delay={250}>
            <Link to="/" className={styles.navLink}>
              Symptoms
            </Link>
          </Fade>
          <Fade top delay={300}>
            <Link to="/" className={styles.navLink}>
              Preventions
            </Link>
          </Fade>
        </Nav>
        <Nav className={styles.nav}>
          <Fade top delay={350}>
            <Button variant={'primary'}>Contact</Button>
          </Fade>
        </Nav>
      </Container>
      <MobileMenu isShown={isMenuShown} toggle={toggleMenu} />
    </Navbar>
  )
}

export default SNavbar
