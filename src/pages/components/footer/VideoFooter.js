import MusicNoteIcon from '@mui/icons-material/MusicNote';
import "./videoFooter.css"

export default function VideoFooter({ userName, description, music }) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{ userName }</h3>
                <p>{ description }</p>
                <div className="videoFooter__music">
                    <MusicNoteIcon className="videoFooter__icon"/>
                    <div className="videoFooter__music-title">
                        <p>{ music }</p>
                    </div>
                </div>     
            </div>
            <img 
                className="videoFooter__record"
                alt="Imagem de um vinil girando"
                src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
            />
        </div>
    )
}