import React from 'react'
import "./Style/dashboardpage.css"
import{Route, Routes} from 'react-router-dom'
import Channels from './Channels'
import ChannelView from './ChannelView'
import Settings from './Settings'

const Content = () => {
  return (
    <div className='content-container'>
        <Routes>
            <Route path='settings' element={<Settings/>}/>
            <Route path='channels' element={<Channels/>}/>
            <Route path='channel/:id' element={<ChannelView/>}/>
        </Routes>
    </div>
  )
}

export default Content