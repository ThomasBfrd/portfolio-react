import { useEffect } from 'react';
import '../styles/Videos.css';
import poster1 from '../medias/poster/video1.webp';
import poster2 from '../medias/poster/video2.webp';
import poster3 from '../medias/poster/video3.png';
import poster4 from '../medias/poster/video4.webp';
import poster5 from '../medias/poster/video5.webp';
import poster6 from '../medias/poster/video6.webp';
import poster8 from '../medias/poster/video8.webp';
import poster9 from '../medias/poster/video9.webp';
import posterVertical1 from '../medias/poster/videoVertical1.jpg';
import posterVertical2 from '../medias/poster/videoVertical2.webp';
import posterVertical3 from '../medias/poster/videoVertical3.webp';
import posterVertical4 from '../medias/poster/videoVertical4.webp';
import posterVertical5 from '../medias/poster/videoVertical5.webp';
import video1 from '../medias/videos/video1.mp4';
import video2 from '../medias/videos/video2.mp4';
import video3 from '../medias/videos/video3.mp4';
import video4 from '../medias/videos/video4.mp4';
import video5 from '../medias/videos/video5.mp4';
import video6 from '../medias/videos/video6.mp4';
import video7 from '../medias/videos/video7.mp4';
import video8 from '../medias/videos/video8.mp4';
import videoVertical1 from '../medias/videos/videoVertical1.mp4';
import videoVertical2 from '../medias/videos/videoVertical2.mp4';
import videoVertical3 from '../medias/videos/videoVertical3.mp4';
import videoVertical4 from '../medias/videos/videoVertical4.mp4';
import videoVertical5 from '../medias/videos/videoVertical5.mp4';

function Videos() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      })
    })
    
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el))

    const handleOnClick = () => {
      document.querySelectorAll('.video-container .video').forEach(vid => {
        vid.addEventListener('click', () => {
          document.querySelector('.popup-video').style.display = "block";
          document.querySelector('.popup-video video').src = vid.querySelector('video').src;
          document.querySelector('.popup-video video').play()
        });
      });
    
      document.querySelector('.popup-video span').addEventListener('click', () => {
        document.querySelector('.popup-video').style.display = 'none';
        document.querySelector('.popup-video video').pause()
        document.querySelector('.popup-video video').currentTime = 0
      });
    }

    const handleOnClickVertical = () => {
      document.querySelectorAll('.video-containerVertical .videoVertical').forEach(vid => {
        vid.addEventListener('click', () => {
          document.querySelector('.popup-videoVertical').style.display = "block";
          document.querySelector('.popup-videoVertical video').src = vid.querySelector('video').src;
          document.querySelector('.popup-videoVertical video').play()
        });
      });
    
      document.querySelector('.popup-videoVertical span').addEventListener('click', () => {
        document.querySelector('.popup-videoVertical').style.display = 'none';
        document.querySelector('.popup-videoVertical video').pause()
        document.querySelector('.popup-videoVertical video').currentTime = 0
      });
    }
    
    handleOnClick();
    handleOnClickVertical()


  }, []);

  const videos = [
    { poster: poster2, src:video1 },
    { poster: poster1, src:video2 },
    { poster: poster6, src:video3 },
    { poster: poster9, src:video4 },
    { poster: poster5, src:video5 },
    { poster: poster3, src:video6 },
    { poster: poster4, src:video7 },
    { poster: poster8, src:video8 },
  ];

  const videosVertical = [
    { poster: posterVertical1, src:videoVertical1},
    { poster: posterVertical2, src:videoVertical2},
    { poster: posterVertical3, src:videoVertical3},
    { poster: posterVertical4, src:videoVertical4},
    { poster: posterVertical5, src:videoVertical5},
      ]

  return (
    <div className='allContentVideos'>
      <section className="containerVideo hidden">
        <h2>En tant qu'ancien <span className="keyword">monteur vidéo</span> et <span className="keyword">motion designer</span>, j'ai pu travailler en agence de communication et publicité ces 5 dernières années.
        J'ai eu la chance de monter sur différents types de vidéos, des interviews, émissions, publicité TV, vidéos institutionnelles... Voici quelques exemples :</h2>
        <div className="video-container">
          <ul>
            {videos.map((vids, index) => (
              <li className="video" key={index}>
                <video controlsList="nodownload" poster={vids.poster} src={vids.src} type="video/mp4" disableRemotePlayback></video>
              </li>
            ))}
          </ul>
        </div>
        <div className="popup-video">
          <span>&times;</span>
          <video controls height="405px" width="720px" controlsList="nodownload" disableRemotePlayback>
            <source src={videos.src} type="video/mp4"/>
          </video>
        </div>
      </section>
      <section className="containerVertical hidden">
      <div className="video-containerVertical">
          <ul>
            {videosVertical.map((vids, index) => (
              <li className="videoVertical" key={index}>
                <video controlsList="nodownload" poster={vids.poster} src={vids.src} type="video/mp4" disableRemotePlayback></video>
              </li>
            ))}
          </ul>
        </div>
        <div className="popup-videoVertical">
          <span>&times;</span>
          <video controls height="405px" width="720px" controlsList="nodownload" disableRemotePlayback>
            <source src={videosVertical.src} type="video/mp4"/>
          </video>
        </div>
</section>
    </div>
  )
}

export default Videos;
