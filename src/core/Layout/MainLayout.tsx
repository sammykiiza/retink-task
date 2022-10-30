import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

function MainLayout(props: { children?: React.ReactNode }) {
  return (
    <div className='max-w-[1440px]'>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default MainLayout