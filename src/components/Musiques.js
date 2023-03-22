import '../styles/Musiques.css'

function Musiques() {
    return (
        <section className="allContentMusiques">
            <div className="description">
                <p>Je compose de la musique électronique depuis quelques années. Attiré par plusieurs styles, j'essaie toujours d'ajouter de réels instruments (guitare, violon, piano...).</p>
                <p>J'utilise le logiciel <span className="keyword">Fl Studio</span> pour composer mes musiques, mais j'utilise aussi un peu Ableton.</p>
                <p>Mes musiques sont disponibles sur toutes les plateformes de streaming, et sont <span className="keyword">"libres de droit"</span> (licence Creative Common par attribution).
                J'ai décidé d'aller dans ce sens de distribution, car lorsque j'étais en études audiovisuelles, il était difficile de trouver des musiques pour nos productions vidéo. C'est pour cela que j'ai décidé de proposer gratuitement mes musiques en échange d'être crédité dans la description de leur contenu.</p>
            </div>
                <div className="player">
                <iframe title="player" frameborder="no" src="https://w.soundcloud.com/player/?visual=false&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F1429122&amp;show_artwork=true&amp;color=%2308223c&amp;show_comments=true&amp;show_playcount=true"></iframe>
                </div>
                
        </section>
    )
}

export default Musiques