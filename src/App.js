import './App.css';
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video 
          likes={ 432 }
          messages={ 241 }
          shares={ 100 }
          userName={ "guilhermeshibuya" }
          description={ "Gatinho frajola goleiro" }
          music={ "Evoque Prata" }
          videoUrl={ "https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4" }
        />
        <Video 
          likes={ 567 }
          messages={ 23 }
          shares={ 14 }
          userName={ "guilhermeshibuya" }
          description={ "Gatinho fofo goleiro" }
          music={ "Evoque Prata" }
          videoUrl={ "https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4" }
        />
        <Video 
          likes={ 42 }
          messages={ 3 }
          shares={ 5 }
          userName={ "guilhermeshibuya" }
          description={ "Gatinho fofo goleiro" }
          music={ "Evoque Prata" }
          videoUrl={ "https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4" }
        />
      </div>
    </div>
  );
}

export default App;
