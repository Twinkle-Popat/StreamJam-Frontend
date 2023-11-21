import React from 'react'

const imageURL = 'https://ichef.bbci.co.uk/news/999/cpsprodpb/11979/production/_131075027_07.jpg'
const ChannelAvatar = ({url}) => {
    return(
        <div className="channels-avatar-container">
            <img src={url||imageURL} width='100%' height='100%' alt="" />
        </div>
    )
}

const ChannelCard = ({
    title,
    id,
    usename,
    isOnline,
    avatarURL,
    navigateToChannelHandler,
}) => {
    const handleNavigate = () => {
        navigateToChannelHandler(id);
    }
  return (
    <div className='channels-card' onClick={handleNavigate}>
        <ChannelAvatar url={avatarURL} />
        <span className='channels-card-title'>{title}</span>
        <span className='channels-card-text'>{usename}</span>
        <span style={{color:isOnline?'green':'red'}} className='channels-card-text'>{
            {true:'Online',false:'Offline'}[isOnline]||'Offline' 
        }</span>
    </div>
  )
}

export default ChannelCard