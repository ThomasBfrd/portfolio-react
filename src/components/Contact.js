import '../styles/Contact.css'
import imgForm from "../medias/imageForm.jpg"
import soundcloud from "../medias/soundcloud.png"
import linkedin from "../medias/linkedin.png"
import github from "../medias/github.png"

function Contact() {
    return (
        <div className="allContentContact">
            <section className='perso-infos'>
                <div className='info-tel'>
                    <div className='picto'>
                        <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.4 3.6a1.2 1.2 0 0 1 1.2-1.2h2.584a1.2 1.2 0 0 1 1.183 1.003l.888 5.322a1.2 1.2 0 0 1-.648 1.272l-1.858.928a13.244 13.244 0 0 0 7.326 7.326l.929-1.858a1.2 1.2 0 0 1 1.27-.648l5.323.888a1.2 1.2 0 0 1 1.003 1.183V20.4a1.2 1.2 0 0 1-1.2 1.2H18C9.384 21.6 2.4 14.616 2.4 6V3.6Z"></path>
                        </svg>
                    </div>
                    <div className='titre-info'>
                        <h1>Téléphone :</h1>
                    </div>
                    <div className='info'>
                        <p>06 83 91 28 01</p>
                    </div>
                </div>
                <div className='info-mail'>
                    <div className='picto'>
                        <svg  width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.404 7.06 12 11.859l9.596-4.797A2.4 2.4 0 0 0 19.2 4.8H4.8a2.4 2.4 0 0 0-2.396 2.26Z"></path>
                        <path d="m21.6 9.742-9.6 4.8-9.6-4.8V16.8a2.4 2.4 0 0 0 2.4 2.4h14.4a2.4 2.4 0 0 0 2.4-2.4V9.742Z"></path>
                        </svg>
                    </div>
                    <div className='titre-info'>
                        <h1>Mail :</h1>
                    </div>
                    <div className='info'>
                        <p>thomas.bfrd@gmail.com</p>
                    </div>
                </div>
                <div className='info-lieu'>
                    <div className='picto'>
                        <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M6.06 4.86a8.4 8.4 0 0 1 11.88 11.88L12 22.68l-5.94-5.94a8.4 8.4 0 0 1 0-11.88ZM12 13.2a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div className='titre-info'>
                        <h1>Lieu :</h1>
                    </div>
                    <div className='info'>
                        <p>Epernon</p>
                    </div>
                </div>
            <div className="socials">
                <a href="https://linkedin.com/in/bouffardthomas" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin"></img></a>
                <a href="https://github.com/thomasBfrd" target="_blank" rel="noreferrer"><img src={github} alt="github"></img></a>
                <a href="https://soundcloud.com/artegon" target="_blank" rel="noreferrer"><img src={soundcloud} alt="soundcloud"></img></a>
            </div>
        </section>
        <section className="form-card">
            <div className="form-left">
                <h1><span class="form-titre">Un petit mot ?</span></h1>
                <h1>Rencontrons-nous !</h1>
                <form class="contact-form" action="https://getform.io/f/f47f2b12-6e28-4952-94a0-6ceac3112631" method="POST" enctype="multipart/form-data">
                <label for="name"></label>
                <input type="text" placeholder='Votre nom'></input>
                <label for="email"></label>
                <input type="email" name="email" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required="required" placeholder="Votre adresse mail"></input>
                <label for="message"></label>
                <textarea name="message" id="message" cols="5" rows="3" placeholder="Votre message" required="required"></textarea>
                <button class="cta" type="submit">
                    <span class="textButton">Envoyer</span>
                </button>
                </form>
            </div>
            <div className='form-right'>
                <img src={imgForm} alt='Decoration Form'></img>
            </div>
        </section>
        </div>
    )
}

export default Contact;
