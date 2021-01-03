import React from 'react'
import Navbar from '~/components/ui/general/navbar/navbar.component'
import FooterSection from '~/components/sections/footer/footer.component'
import '~/styles/index.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <FooterSection />
    </>
  )
}

export default Layout
