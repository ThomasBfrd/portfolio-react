import profilePicture from '../medias/profile-picture.webp'
import Typewriter from 'typewriter-effect/dist/core';
import {useEffect, useRef} from 'react'
import { useDraggable } from '@neodrag/react';
import sticker from '../medias/sticker.jpg'



function Accueil() {

const draggableRef = useRef(null);
  useDraggable(draggableRef);

const handleClick = () => {
  draggableRef.current.classList.toggle('clicked')
}

useEffect(() => {
const txtAnim = document.querySelector('.txtAnim');

new Typewriter(txtAnim, {
  loop: true,
  deleteSpeed: 10
})
.changeDelay(30)
.typeString('<strong>Thomas Bouffard</strong>')
.pauseFor(2000)
.deleteChars(15)
.pauseFor(1000)
.typeString('<strong>Développeur Web</strong>')
.pauseFor(2000)
.deleteChars(15)
.start();
}, []);

    return (
        <section class="allContentAccueil">
        <div className="containerAccueil">
            <div className="bio-pp">
                    <img src={profilePicture} alt="Profile"/>
            </div>
            <div className="bio">
                <p>
                  Je suis <span className="txtAnim">développeur web</span>
                  <br /><br />
                  Après 5 années dans le domaine de la vidéo, je décide de me reconvertir dans le développement web. Je suis aujourd'hui à la recherche d'une <span className="keyword">alternance</span>.
                  <br /><br />Vous trouverez tous mes projets professionnels sur ce site.
                </p>
             </div>
        </div>
      <div className='sticker'>
          <div ref={draggableRef} className="round-button" onClick={handleClick}>
          <img src={sticker} alt="coucou"/>
          <div className="content">
            <p>Psst ! 👀</p>
            <p>Ce site a été crée avec React ✌️</p>
          </div>
      </div>
      </div>
      </section>
    )
}

export default Accueil