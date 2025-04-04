import * as React from 'react'
import { Announcement, Logo, ProductSearch, Footer, SmNavbar, LgNavbar } from './components'

const GlobalLayout = ({
  title = '',
  description = '',
  image = '',
  seoTitle = '',
  noindex = false,
  children,
}) => {
  return (
    <>
      <div id="announcement"><Announcement /></div>
      <div id="content">
        <main>
          <SmNavbar/>
          <Logo />
          <ProductSearch />
          <LgNavbar/>
          {children}
          <Footer />
        </main>
      </div>
    </>
  )
}

export default GlobalLayout
