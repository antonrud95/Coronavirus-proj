import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'gatsby'

import Logo from '~/components/ui/general/logo/logo.component'

import FC from '~/types/fc'

import CloseIcon from '~/assets/icons/menu-close-icon.svg'

import styles from './mobile-menu.module.scss'
import Button from '~/components/ui/general/button/button.component'

interface Props {
  isShown: boolean
  toggle: (value: boolean) => void
}

const MobileMenu: FC<Props> = ({ isShown, toggle }) => {
  const shownClass = [styles.root, styles.root__shown].join(' ')
  const closeClickHandler = () => {
    toggle(false)
  }
  return (
    <div className={isShown ? shownClass : styles.root}>
      <Container style={{ padding: 0 }}>
        <Logo />
        <CloseIcon onClick={closeClickHandler} />
      </Container>
      <Container className={styles.linkBlock}>
        <Link to="/" className={styles.link}>
          Overview
        </Link>
        <Link to="/" className={styles.link}>
          Contagion
        </Link>
        <Link to="/" className={styles.link}>
          Symptoms
        </Link>
        <Link to="/" className={styles.link}>
          Preventions
        </Link>
        <Button variant={'primary'}>
          Contact
        </Button>
      </Container>
    </div>
  )
}

export default MobileMenu
