import { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter";
import "./video.css";

export default function Video() {
    //useRef serve para criar uma referência a um elemento da UI, essa referência pode ser utilizada para acessar e modificar o estado ou propriedades desse elemento diretamente
    //no caso estamos criando uma referencia para o video, para podermos pausar e dar play sem o uso dos controles do video player
    const videoRef = useRef(null);
    const [play, setPlay] = useState(false);

    const handleStart = () => {
        if (!play) {
            videoRef.current.play();
            setPlay(true);
        } else {
            videoRef.current.pause();
            setPlay(false);
        }
    }

    return (
        <div className="video">
            <video 
                className="video__player"
                ref={ videoRef }
                onClick={ handleStart }
                loop
                src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
            >
            </video>
            <VideoFooter />
        </div>
    );
}