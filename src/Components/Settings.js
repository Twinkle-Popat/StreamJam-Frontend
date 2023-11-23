import React from 'react'
import StreamKey from './StreamKey'
import ChannelSettings from './ChannelSettings'
import PasswordSettings from './PasswordSettings'

const channelSettings ={
    title:"title",
    description:"description",
    username:"Twinkle",
    streamKey:"1234",
    avatarURL:"NONE",
}


const Settings = () => {
  return (
    <div className='settings-container'>
        <span>Settings</span>
        <ChannelSettings settings={channelSettings}/>
        <PasswordSettings/>
        <StreamKey streamKey={channelSettings.streamKey}/>
    </div>
  )
}

export default Settings