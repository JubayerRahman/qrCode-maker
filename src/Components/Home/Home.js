import React from 'react'
import "./Home.css"
// page
import QrMaker from '../qrMaker/qrMaker'

const Home = () => {
  return (
    <div className='homeSec'>
      {/* <h1 className='homeTitle'>Qr Maker</h1> */}
      <QrMaker/>
    </div>
  )
}

export default Home
