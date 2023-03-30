import { useRef, useState } from "react";
import "./video.css";

export default function Video() {
    //useRef serve para criar uma referência a um elemento da UI, essa referência pode ser 
    //utilizada para acessar e modificar o estado ou propriedades desse elemento diretamente
    //no caso estamos criando uma referencia para o video, para podermos pausar e dar play sem
    //o uso dos controles do video player
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
                src="https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/ZqU6oFX6.mp4.mp4?alt=media&token=9839e872-2d5e-4da3-9299-17eb2949831d"
            >
            </video>
        </div>
    );
}