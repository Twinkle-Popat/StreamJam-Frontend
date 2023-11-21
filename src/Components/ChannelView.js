import React from 'react'
import Chat from './Chat'
import ChannelDescription from './ChannelDescription'

const channelDetails ={
    id:1,
    title:'ONE PIECE fanclub',
    description:'A fanclub for ONE PIECE fans',
    username:'Sanji',
    isOffline:true,

}

const ChannelView = () => {
  return (
    <div className='channel-container'>
        <div className="channel-video-description-section">
            <div className='channel-offline-placeholder'>
                <span>Channel is offline</span>
            </div>
            <ChannelDescription 
            channelID={channelDetails.id}
            title={channelDetails.title}
            description={channelDetails.description}
            username={channelDetails.username}
            />
        </div>
        <Chat/>
    </div>
  )
}

export default ChannelView