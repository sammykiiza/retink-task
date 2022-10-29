import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

function MainLayout(props: { children?: React.ReactNode }) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default MainLayout