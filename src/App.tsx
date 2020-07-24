import React from 'react';
import { SocialIcon } from 'react-social-icons';
import logo from './assets/logo.jpg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="col-3 works">
<h2>About Me</h2>
<p>I was born in 1989 in Siwan,Bihar. I completed my High school from Bihar Board and 12th from UP Board. For Heigher education , I came to New Delhi in 2007
  and took admission in NIIT and started my programming carrier. While I was stuyding, I started my carrier in Torush InfoTech PVT. LTD. in 2008.
</p>
<p>Currently working as Senior Project Manager at Fervent Software Solutions - a Software Development company based out from New Delhi, India</p>
<p><SocialIcon
  url="https://twitter.com/munnabhakta"
/></p>
      </div>
      <div className="col-3">
      <div className="profile-box">
        <h1>Munna Bhakta</h1>
        <small>Fullstack GIS Developer</small>
        <a href="mailto:munna.bhakta1001@gmail.com">Say Hello</a>
      </div>
      </div>
      <div className="col-3 technology">
    <h2>SKILLS</h2>
    <div className="list" >
      <div className="technology-item"><div className="title">CSS</div> <progress max="100" value="80" style={{width:'100%'}}>
        </progress><div className="value">80%</div></div>
      <div className="technology-item"><div className="title">HTML</div><progress max="100" value="90" style={{width:'100%'}}>
        </progress><div className="value">90%</div></div>
      <div className="technology-item"><div className="title">React</div><progress max="100" value="80" style={{width:'100%'}}>
        </progress><div className="value">80%</div></div>
      <div className="technology-item"><div className="title">GeoServer</div><progress max="100" value="90" style={{width:'100%'}}>
        </progress><div className="value">90%</div></div>
      <div className="technology-item"><div className="title">PL\SQL</div><progress max="100" value="70" style={{width:'100%'}}>
        </progress><div className="value">70%</div></div>
      <div className="technology-item"><div className="title">ArcGIS</div><progress max="100" value="80" style={{width:'100%'}}>
        </progress><div className="value">80%</div></div>
        <div className="technology-item"><div className="title">ArcGIS Server</div><progress max="100" value="50" style={{width:'100%'}}>
        </progress><div className="value">50%</div></div>  
      <div className="technology-item"><div className="title">OpenLayer</div><progress max="100" value="80" style={{width:'100%'}}>
        </progress><div className="value">80%</div></div>
      <div className="technology-item"><div className="title">.Net/.Net Core</div><progress max="100" value="90" style={{width:'100%'}}>
        </progress><div className="value">90%</div></div>
      <div className="technology-item"><div className="title">NodeJS</div><progress max="100" value="80" style={{width:'100%'}}>
        </progress><div className="value">80%</div></div>          
    </div>
      </div>
    </div>
  );
}

export default App;
