import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import "./videoSidebar.css";

export default function VideoSidebar({ likes, messages, shares }) {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    }

    return (
        <div 
            className="videoSidebar"
            onClick={ handleLike }
        >
            <div className="videoSidebar__options">
                { liked ? <FavoriteIcon fontSize='large' /> : <FavoriteBorderIcon fontSize='large'/> }
                <p>{ liked ? likes + 1 : likes }</p>
            </div>
            <div className="videoSidebar__options">
                <ChatIcon 
                    fontSize='large'
                />
                <p>{ messages }</p>
            </div>
            <div className="videoSidebar__options">
                <ShareIcon 
                    fontSize='large'
                />
                <p>{ shares }</p>
            </div>
        </div>
    );
    
}