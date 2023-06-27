import Accueil from './components/Accueil'
import Musiques from './components/Musiques'
import Coding from './components/Coding'
import Videos from './components/Videos'
import Contact from './components/Contact'
import { useEffect } from 'react'
import { useRef } from 'react'
import {Routes, Route, Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './App.css';

function App() {
  
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  useEffect(() => {
  const prenom = document.querySelector('.prenom');
  const nom = document.querySelector('.nom');
  const textHover = document.querySelector('.textHover');
  prenom.innerText = "Thomas".toUpperCase();
  nom.innerText = "Bouffard".toUpperCase();

  textHover.addEventListener('mouseover', function() {
    prenom.style.transform = "translateX(-10px)";
    nom.style.transform = "translateX(10px)";
  });

  textHover.addEventListener('mouseout', function() {
    prenom.style.transform = "";
    nom.style.transform = "";
  });



}, []);

const navbar = [
  {title:"VIDEOS", url:"/videos"},
  {title:"MUSIQUES", url:"/musiques"},
  {title:"CODING", url:"/coding"},
  {title:"CONTACT", url:"/contact"},
]

  return (
      <>
        <header className="navbar">
          <Link to="/">
            <h1 className="textHover">
            <div className='prenom'></div>
            <div className='nom'></div>
            </h1>
          </Link>
          <nav ref={navRef} className="nav">
            <ul>
              <li className="nav-btn"><Link onClick={showNavbar} to="/">ACCUEIL</Link></li>
              {navbar.map((nav) => (
              <li key={nav.url}> 
                <Link to={nav.url} onClick={showNavbar}>{nav.title}
              </Link> </li>))}
            </ul>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </header>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/musiques" element={<Musiques />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer>
            <p>thomas.bfrd@gmail.com</p>
            <a href="https://bento.me/thomasbfrd" target="_blank" rel="noreferrer">bento.me/<span className="bento">thomasbfrd</span></a>
            <p>Copyright © 2023</p>
        </footer>
      </>
  );
}

export default App;
