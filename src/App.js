import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';
import Video from './pages/Video';
import db from "./config/firebase";
import './App.css';

function App() {
  let maxHeight;

  if (window.innerHeight <= 800) {
    maxHeight = window.innerHeight;
  }

  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map(doc => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App" style={{ maxHeight: maxHeight + "px" }}>
      <div className="app__videos">
        { videos.map(video => {
            return (
              <Video 
                likes={ video.likes }
                messages={ video.messages }
                shares={ video.shares }
                userName={ video.userName }
                description={ video.description }
                music={ video.music }
                videoUrl={ video.videoUrl }
              />
            );
          }) 
        }
      </div>
    </div>
  );
}

export default App;
