import React from 'react'
import "./Style/dashboardpage.css"

const followedChannels = [{
    id:1,
    name:'Channel 1',
    isOnline:true,
},
{
    id:2,
    name:'Channel 2',
    isOnline:false,

},
{
    id:3,
    name:'Channel 3',
    isOnline:true,
}];

export const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <span className='sidebar-title'>FOR YOU</span>
        <span className='sidebar-subtitle'>FOLLOWED CHANNELS</span>
       
            {followedChannels.map((channel) => {
                return (
                <div key={channel.id} className='sidebar-list-item'>
                    <span className='sidebar-list-username'>{channel.name}</span>
                    <span style={{color:channel.isOnline?'green':'red'}} className='sidebar-list-status'>{channel.isOnline?"Online":"Offline"}</span>

                </div>)
            })}
       
    </div>
  )
}

