import React from 'react'
import ChannelCard from './ChannelCard'

export const dummyChannels=[
    {
        id:1,
        title:'test',
        avatarURL:null,
        usename:'Jimin',
        isOnline:true,
    },
    {
        id:2,
        title:'test1',
        avatarURL:null,
        usename:'Jimina',
        isOnline:true,
    },
    {
        id:3,
        title:'test2',
        avatarURL:null,
        usename:'Jimins',
        isOnline:true,
    },
    {
        id:4,
        title:'test3',
        avatarURL:null,
        usename:'Jimino',
        isOnline:false,
    }
]
const Channels = () => {
  return (
    <div className='channels-container'>
        {dummyChannels.map((channel) => (
            <ChannelCard 
            key={channel.id}
            title={channel.title}
            usename={channel.usename}
            isOnline={channel.isOnline}
            avatarURL={channel.avatarURL}
            navigateToChannelHandler={() => {}}
            />
        ))}
    </div>
  )
}

export default Channels