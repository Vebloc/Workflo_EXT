import React, {useRef, useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import "../../Homepage.css"
import Table from "./Table.jsx"
import ImageCarousel from "./ImageCarousel.jsx";

const Homepage = () => {

  const Logo = "https://workflo.com/wp-content/uploads/2023/10/logo-black.png"
  const HomeImage = "https://workflo.com/wp-content/uploads/2023/08/Hero-1024x792.png";

  const carousel1Images = [
    "https://workflo.com/wp-content/uploads/2023/08/Dashboard.jpg",
    "https://workflo.com/wp-content/uploads/2023/08/Home-page-dash.png",
  ];

  const carousel2Images = [
    "https://workflo.com/wp-content/uploads/2023/08/Chat.png",
    "https://workflo.com/wp-content/uploads/2023/08/Chat-files.png",
    "https://workflo.com/wp-content/uploads/2023/08/QuickChat-Home.jpg",
    "https://workflo.com/wp-content/uploads/2023/08/chat3.jpg",
  ];

  const carousel3Images = [
    "https://workflo.com/wp-content/uploads/2023/08/group-call.jpg",
    "https://workflo.com/wp-content/uploads/2023/08/VIdeocall3.jpg",
    "https://workflo.com/wp-content/uploads/2023/08/videocall4.jpg",
    "https://workflo.com/wp-content/uploads/2023/08/videocall5.jpg",
    "https://workflo.com/wp-content/uploads/2023/08/Videocall2.png",
  ];

  const carousel4Images = [
    "https://workflo.com/wp-content/uploads/2023/08/Agenda.jpg",
    "https://workflo.com/wp-content/uploads/2023/08/Agenda2.jpg",
    "https://workflo.com/wp-content/uploads/2023/08/List-view-1.png",
    "https://workflo.com/wp-content/uploads/2023/08/global-search.jpg",
    "https://workflo.com/wp-content/uploads/2023/08/share-project.jpg",
  ];

  const carousel5Images = [
    "https://workflo.com/wp-content/uploads/2023/08/Calendar-1.png",
    "https://workflo.com/wp-content/uploads/2023/08/Calendar-2.png",
    "https://workflo.com/wp-content/uploads/2023/08/Calendar-3.png",
  ];

  const targetRef = useRef(null);
  const [visible, setVisible] = useState(false);
    
  const handleClickLearnMore = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({behavior: "smooth"});
    }
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
      setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
    
  useEffect (() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible)
    };
  }, []);

return (
  <div>
    <header className="navigation">
      <Link to="/" className="homepage-link">
        <img src={Logo} alt="Logo" className="homepage-logo"/>
      </Link>
      <nav className="navigation-menu">
        <Link to="/pricing">
          <p className="nav-link-pricing">PRICING</p>
        </Link>
        <Link to="/contact">
          <p className="nav-link-contact">CONTACT US</p>
        </Link>
        <Link to="/signin" >
          <button className="nav-link-launch">LAUNCH APP</button>
        </Link>
      </nav> 
    </header>
    <div className="homepage-project-management">
      <div className="homepage-project-info">
        <h1 className="homepage-project-heading">True all in one project management tool</h1>
        <h2 className="homepage-project-message">access roadmaps, tasks, docs, chats, calendars, and calling all in one platform</h2>
        <Link to="/signup" className="get-started-btn">
          <button className="get-started-btn-1">Get Started</button>
        </Link>
        <button className="learn-more-btn" onClick={handleClickLearnMore}>
          Learn More →
        </button>
      </div>
      <img className= "homepage-project-image" src={Logo} alt="Multi-media representation"/>
    </div>
    <div className="homepage-red-bar">
      <h1 className="homepage-red-bar-info">Out with the old, in with Workflo: One Tool, Total Team Synergy</h1>
    </div>
    <div className="homepage-centralized-dashboard" ref={targetRef}>
      <div className="homepage-centralized-info">
        <h3>CENTRALIZED DASHBOARD</h3>
        <h1 className="homepage-centralized-heading">Stay Organized and Connected</h1>
        <p>Gain a comprehensive overview, track progress, set deadlines, and communicate seamlessly with your team members, all in one convenient location.</p>
      </div>
      <ImageCarousel images={carousel1Images} id={1}/>
    </div>
    <div className="homepage-effortless-collaboration">
    <ImageCarousel images={carousel2Images} id={2}/>
      <div className="homepage-effortless-info">
        <h3>EFFORTLESS COLLABORATION</h3>
        <h1 className="homepage-effortless-heading">Communicate Seamlessly with Integrated Chat</h1>
        <p>Engage in smooth conversations, share ideas and files, and foster a productive work environment, all within our software, eliminating the need for external chat platforms.</p>
      </div>
    </div>
    <div className="homepage-seamless-video-calling">
      <div className="homepage-seamless-info">
      <h3>SEAMLESS VIDEO CALLING</h3>
      <h1 className="homepage-seamless-heading">Collaborate Face-toFace with Integrated Video Calls</h1>
      <p>Conduct virtual meetings, share screens, and engage in face-to-face conversations seamlessly within our software, eliminating the need for multiple apps and platforms</p>
      </div>
      <ImageCarousel images={carousel3Images} id={3}/>
    </div>
    <div className="homepage-efficient-task-management">
    <ImageCarousel images={carousel4Images} id={4}/>
      <div className="homepage-task-info">
        <h3>EFFICIENT TASK MANAGEMENT</h3>
        <h1 className="homepage-task-heading">Simplify Workflows</h1>
        <p>Assign tasks, collaborate efforlessly, track progress, and visualize task states at a glance using our Kanban boards, enabling you to achieve unparalleled efficiency in managing and completing your team's tasks</p>
      </div>
    </div>
    <div className="homepage-integrate-calendar-system">
      <div className="homepage-integrate-info">
        <h3>INTEGRATED CALENDAR SYSTEM</h3>
        <h1 className="homepage-integrate-heading">Centralize Your Calendar</h1>
        <p>Stay on top of your schedule, effortlessly manage deadlines, and never miss a beat, ensuring optimal productivity and efficiency in your day-to-day tasks</p>
      </div>
      <ImageCarousel images={carousel5Images} id={5}/>
    </div>
    <div className="homepage-carousel">
      <div className="homepage-carousel-info">
        <h1 className="homepage-carousel-title">WORKFLO FOR YOUR TEAM</h1>
        <p className="homepage-carousel-message">Experience a cutting-edge software that caters to every team, department, and organization, offering full-picture visibility, seamless collaboration, and powerful automation, all within a single unified platform.</p>
      </div>
      <Table />
    </div>
    <div className="homepage-blue-bar">
      <div className="homepage-blue-bar-info">
        <h1 className="homepage-blue-bar-title">Get Started Now</h1>
        <p className="homepage-blue-bar-message">Embrace the Future of Work with Our All-In-One Solution</p>
        <Link to="/signup" className="get-started-btn" style={{ textDecoration: "none" }}>
          <button className="get-started-btn-2">Get Started</button>
        </Link>
      </div>
    </div>
    {/* <footer className="footer">
      <button className="privacy-btn" onClick={"/privacy-policy"}>
          Privacy Policy
      </button>
      <button className="terms-btn" onClick={"/terms-and-conditions"}>
          Terms and Conditions
      </button>
      <button className="footer-contact-btn" onClick={"/contact-us"}>
          Contact Us
      </button>
      <input type="text" value={email} onChange={}/>
      <button className="subscribe-btn" type="submit">
          Subscribe
      </button>
    </footer> */}
    <button className="scroll-to-top-btn" onClick={scrollToTop} style={{display: visible ? 'block' : 'none'}}>
    {'^'}
    </button>
  </div>
  );
};

export default Homepage;