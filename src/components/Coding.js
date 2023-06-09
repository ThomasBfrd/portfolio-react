import '../styles/Coding.css'
import artegonMusique from "../medias/projets/artegon-musiques.jpg"
import monteurVideo from "../medias/projets/monteur-video.jpg"

function Coding() {
    return (
        <div className="allContentCoding">
            <div className='container'>
                <div className="card">
                    <div className="card-float">
                        <p>Site crée avec <span className='keyword-float'>Bootstrap</span> ✌️</p>
                    </div>
                    <div className="card-header">
                        <div>
                            <a href="https://thomasbfrd.github.io/itsartegon/" target='_blank' rel='noreferrer'>
                                <button type="submit">Découvrir le projet</button>
                            </a>
                        </div>
                        <img src={artegonMusique} alt="" />
                    </div>
                    <div className="card-body">
                        <h2>Musique électronique</h2>
                        <p>Un projet musical que je développe depuis 2015.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-float">
                        <p>Site crée avec <span className='keyword-float'>Tailwind</span> ✌️</p>
                    </div>
                    <div className="card-header">
                        <div>
                            <a href="https://thomasbfrd.github.io/bfrd-videos/" target='_blank' rel='noreferrer'>
                                <button type="submit">Découvrir le projet</button>
                            </a>
                        </div>
                        <img src={monteurVideo} alt="" />
                    </div>
                    <div className="card-body">
                        <h2>Monteur vidéo</h2>
                        <p>Monteur vidéo professionnel</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Coding;