import { useState, useEffect, useRef } from 'react'; // Importing necessary React hooks for state management, side effects, and mutable refs
// import '../HTMLWebsite/styles/project-styles.css'; //Calling the CSS style sheet for the project
import myImage from '../HTMLWebsite/imageFiles/pattern_checkerboard.png'; // Calling out the image to use as background

// ==========================================
// DATABASE (THE "ROM" DATA)
// ==========================================

// This array holds all the data for the projects. 
// Keeping it outside the main function ensures it doesn't get re-created every time the screen updates.

{/*
  Two different formats of project we have to do to maintain certain formats and how should look on the website:

  Content block format:
  { 
    id: #, 
    title: "", 
    category: "", 
    shortDesc: "", 
    tags: ["", "", ""], 
    status: "",
    startDate: "", 
    endDate: "",
      contentBlocks: 
      [
        {
          text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque in quam ut auctor. Pellentesque feugiat gravida ante at hendrerit. Praesent pellentesque quam at enim rutrum laoreet. Etiam hendrerit tempus neque in ornare. Mauris sit amet ex nec turpis convallis congue tincidunt id magna. Integer nec lobortis neque. Nulla auctor sed arcu a scelerisque. Aliquam fringilla at ligula sit amet dapibus. Aliquam erat volutpat. Etiam vitae leo mauris. Nunc malesuada purus eget malesuada aliquam. Morbi dui nunc, semper ut massa quis, malesuada tempus nulla. Vivamus pellentesque justo magna, et laoreet neque tincidunt vulputate. Etiam pharetra sed arcu ut luctus. Nulla facilisi. Quisque accumsan ipsum convallis elit facilisis dignissim. `,
          image: `../HTMLWebsite/projectImageFiles/VRMicroscope/pinkpantheress.jpeg`,
          caption: `FIG 1: Custom shader graph simulating depth of field and lens distortion.`
        },
        {
          text: ` Vestibulum vitae dolor pulvinar, faucibus tellus eu, convallis sapien. Nunc quis mi mauris. Ut et leo nunc. Proin eu eros ut massa efficitur aliquam. Quisque nec sem sollicitudin, finibus turpis laoreet, interdum nunc. Sed vel cursus odio. Nam a massa id nunc fringilla fermentum. Etiam egestas quis orci vel blandit. Vestibulum felis sem, consequat sed semper sit amet, interdum vitae erat. Pellentesque varius magna quis purus rhoncus ornare. Nam dictum quam quis arcu malesuada, eget cursus nunc iaculis. Praesent urna mauris, placerat at aliquet sed, finibus eu ipsum. Donec eget auctor mauris. Suspendisse viverra ullamcorper volutpat. Nulla ac elementum`,
          
        },
        {
          text: ` Aliquam laoreet ligula in felis rutrum ornare. Sed consectetur, ante sit amet viverra rhoncus, orci risus convallis felis, id vestibulum elit odio sit amet nibh. Sed dignissim iaculis ex, nec imperdiet velit dignissim vitae. Pellentesque dignissim lacus ut ex tincidunt congue. Vivamus porta vitae ex ac aliquet. Donec ultrices, arcu et maximus molestie, lectus sapien facilisis enim, vel mattis velit justo eu mauris. Nulla ornare metus a erat fringilla bibendum. Nunc mauris mi, aliquam quis enim ut, porta vestibulum sem. Ut faucibus mauris quis ante dapibus, et efficitur eros mollis. Aliquam nec nibh ultrices, porttitor turpis nec, varius nunc. `,
          image: `../HTMLWebsite/projectImageFiles/VRMicroscope/pinkpantheress.jpeg`,
          caption: `FIG 1: Custom shader graph simulating depth of field and lens distortion.`
        }
      ]
    }

  
    Simple format:
    { id: 2, title: "", category: "", shortDesc: "", tags: [], status: "",
    startDate: "", endDate: "", images: [], repoLink: "", liveLink: "",
    longDesc: "" }
*/}

const myProjects = [
  { 
    id: 1, 
    title: "VR Microscope", 
    category: "Simulation", 
    shortDesc: "Interactive microscope done in the Unity game engine, examining samples under a microscope.", 
    tags: ["C#", "Unity", "XR Toolkit"], 
    status: "In Development",
    startDate: "January 2026", 
    endDate: "Ongoing", 
    
    // NEW: The "Rich Content" layout array. 
    // You can add text, an image, and a caption to each block.
      contentBlocks: 
      [
        {
          text: ` This project main purpose was done for research in helping and unsderstanding biology in a virtual reality. Giving the idea and feeling of looking at samples from a microscope level.`,
          image: `../HTMLWebsite/projectImageFiles/VRMicroscope/pinkpantheress.jpeg`,
          caption: `FIG 1: Custom shader graph simulating depth of field and lens distortion.`
        },
        {
          text: ` i used online assets such as the model`,
          
        },
        {
          text: ` Aliquam laoreet ligula in felis rutrum ornare. Sed consectetur, ante sit amet viverra rhoncus, orci risus convallis felis, id vestibulum elit odio sit amet nibh. Sed dignissim iaculis ex, nec imperdiet velit dignissim vitae. Pellentesque dignissim lacus ut ex tincidunt congue. Vivamus porta vitae ex ac aliquet. Donec ultrices, arcu et maximus molestie, lectus sapien facilisis enim, vel mattis velit justo eu mauris. Nulla ornare metus a erat fringilla bibendum. Nunc mauris mi, aliquam quis enim ut, porta vestibulum sem. Ut faucibus mauris quis ante dapibus, et efficitur eros mollis. Aliquam nec nibh ultrices, porttitor turpis nec, varius nunc. `,
          image: `../HTMLWebsite/projectImageFiles/VRMicroscope/pinkpantheress.jpeg`,
          caption: `FIG 1: Custom shader graph simulating depth of field and lens distortion.`
        }
      ]
    },

    { 
      id: 2, title: "", category: "", shortDesc: "", tags: [], status: "",
    startDate: "", endDate: "", 
    longDesc: "" 
  },
  
];

export default function ProjectsApp() 
{

  // ==========================================
  // STATE MANAGEMENT (THE COMPONENT's MEMORY)
  // ==========================================
  
  // Tracks which project is currently active (highlighted in the center of the wheel). Starts at index 0.
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  // Tracks if the "ANIM: OFF" button was clicked, freezing the CSS animations.
  const [isStatic, setIsStatic] = useState(false); 
  
  // THE STATE MACHINE FLAG: 
  // false = "Character Select" wheel view
  // true = "Results HUD" details view
  const [isViewingDetails, setIsViewingDetails] = useState(false); 
  
  // ==========================================
  // REFS (MUTABLE VARIABLES THAT DON'T TRIGGER RE-RENDERS)
  // ==========================================
  
  // Provides a direct hook to the DOM element holding the scrolling wheel (used for mobile swipe math)
  const viewportRef = useRef(null);
  
  // Acts as a "throttle" or "debounce" for the mouse wheel.
  // It prevents a single flick of the mouse wheel from scrolling through 10 projects instantly.
  const isCooldown = useRef(false); 

  // ==========================================
  // EFFECT 1: VANILLA HTML COMMUNICATION
  // ==========================================

  // This listens for the custom event that was attached to the button in the HTML nav bar.
  // When it hears 'toggleArcadeAnimation', it flips the isStatic state on or off.
  useEffect(() => {

    const handleExternalToggle = () => {setIsStatic((prev) => !prev);};

    window.addEventListener('toggleArcadeAnimation', handleExternalToggle);
    
    // Cleanup function: removes the listener if the component ever unmounts to prevent memory leaks
    return () => window.removeEventListener('toggleArcadeAnimation', handleExternalToggle);
  }, []);

  // ==========================================
  // WHEEL NAVIGATION LOGIC (INFINITE LOOP)
  // ==========================================

  const changeSelection = (direction) => {

    // Safety check: If we are looking at the details screen, lock the wheel so it doesn't spin in the background
    if (isViewingDetails) return; 

    setSelectedIndex((prev) => {

      const nextIndex = prev + direction;
      
      // Infinite Loop Math:
      // If we go backwards past 0, jump to the very last project in the array.
      if (nextIndex < 0) return myProjects.length - 1;
      
      // If we go forwards past the last project, the modulo operator (%) wraps it back to 0.
      return nextIndex % myProjects.length;
    });
  };

  // ==========================================
  // EFFECT 2: KEYBOARD & MOUSE WHEEL CONTROLS
  // ==========================================

  useEffect(() => {

    // Up/Down Arrow key handler
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') changeSelection(1);
      if (e.key === 'ArrowUp') changeSelection(-1);
    };

    // Mouse wheel handler
    const handleWheel = (e) => {

      if (isViewingDetails) return; // Disables wheel scrolling on the details screen
      e.preventDefault(); // Stops the whole webpage from scrolling down
      
      // If the cooldown is active (we just scrolled), ignore this input entirely
      if (isCooldown.current) return;

      // DeltaY determines the direction of the physical mouse scroll wheel
      if (e.deltaY > 0) 
      {
        changeSelection(1);
      }
      
      else if (e.deltaY < 0) 
      {
        changeSelection(-1);
      }

      // Lock the inputs by setting cooldown to true
      isCooldown.current = true;
      
      // Unlock the inputs after 180 milliseconds, allowing the user to scroll again
      setTimeout(() => {isCooldown.current = false;}, 180);

    };

    // Attach the listeners to the browser window
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: false }); 

    // Cleanup function
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };

  }, [isViewingDetails]); // Add isViewingDetails here so the hook updates its logic when the state machine changes

  // ==========================================
  // MOBILE TOUCH SWIPE LOGIC
  // ==========================================

  const handleMobileScroll = () => {

    // Only run this logic if the user is on a mobile-sized screen (< 768px) and NOT on the details screen
    if (!viewportRef.current || window.innerWidth > 768 || isViewingDetails) return;

    const container = viewportRef.current;
    const cards = container.querySelectorAll('.wheel-card');
    
    // Find the exact horizontal center of the mobile screen
    const containerCenter = container.getBoundingClientRect().left + container.offsetWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    // Loop through every single card and measure its distance from the center of the screen
    cards.forEach((card, idx) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      // Keep track of whichever card is currently the closest to the center
      if (distance < minDistance) 
      {
        minDistance = distance;
        closestIndex = idx;
      }

    });

    // If the closest card is different from our current selection, update the state to make it the new active card
    if (closestIndex !== selectedIndex)
    {
      setSelectedIndex(closestIndex);
    }

    };

    useEffect(() => {
      if (isViewingDetails) 
      {
        document.body.classList.add('hide-arcade-assets');
      } 
      else 
      {
        document.body.classList.remove('hide-arcade-assets');
      }
    }, [isViewingDetails]);

  // Grab the data for the currently selected project to use in the HTML rendering below
  const activeProject = myProjects[selectedIndex];

  // ==========================================
  // STAGE 2: THE DETAILS SCREEN (RESULTS HUD)
  // ==========================================

  // If the user clicked "PRESS START", isViewingDetails becomes true, and React renders this block instead.
  if (isViewingDetails) 
  {

    return (

      <div className={`details-screen-container ${isStatic ? 'static-mode' : ''}`}>
        
        {/* THE NEW TWO-COLUMN MASTER WRAPPER */}
        <div className="hud-master-wrapper">

          {/* COLUMN 1: Your original hud-layout untouched */}
          <div className="hud-layout">
            
            {/* Top Briefing Panel */}
            <div className="hud-panel">

              <div className="hud-header-content">
                
                <div className="hud-title-group">

                  <span className="category-tag">SYSTEM LOG // {activeProject.category}</span>
                  <h1>{activeProject.title}</h1>
                  <h3>Status: {activeProject.status}</h3>
                  
                  {/* Dynamically generates the tech tags based on the array data */}
                  <div className="tag-row" style={{ justifyContent: 'flex-start' }}>

                    {activeProject.tags.map(tag => (<span key={tag} className="tech-tag">{tag}</span>))}

                  </div>

                </div>

                {/* Action Buttons pushed to the right. Uses '&&' to only render the button IF a link exists in the data */}
                <div className="hud-action-bar">
                  {activeProject.repoLink && <a href={activeProject.repoLink} target="_blank" rel="noreferrer" className="select-button" style={{padding: '10px 15px', fontSize: '1rem'}}>GITHUB_REPO</a>}
                  {activeProject.liveLink && <a href={activeProject.liveLink} target="_blank" rel="noreferrer" className="select-button" style={{padding: '10px 15px', fontSize: '1rem'}}>LIVE_DEMO</a>}
                </div>

              </div>

            </div>

           {/* Main Content & Gallery Panel */}
            {/* Dynamically checks if we are using the old side-gallery layout or the new full-width inline layout */}
            <div className={`hud-panel hud-body ${!activeProject.contentBlocks && activeProject.images && activeProject.images.length > 0 ? 'has-images' : 'no-images'}`}>
              
              <div className="hud-text-content">
                <h2 style={{color: '#45f3ff', marginTop: 0}}>// MISSION OVERVIEW</h2>
                
                {/* LAYOUT A: The Aligned "Side-by-Side" System Manual */}
                {activeProject.contentBlocks ? (
                  <div className="system-manual-layout" style={{ marginTop: '30px' }}>
                    {activeProject.contentBlocks.map((block, index) => (
                      
                      // Dynamically adds the 'has-side-image' class if this specific paragraph has a picture
                      <div key={index} className={`content-block ${block.image ? 'has-side-image' : ''}`}>
                        
                        <div className="block-text">
                          {block.text && <p>{block.text}</p>}
                        </div>
                        
                        {block.image && (
                          <div className="block-visual">
                            <img src={block.image} alt={`${activeProject.title} detail ${index + 1}`} className="hud-image" />
                            {block.caption && <span className="image-caption">{block.caption}</span>}
                          </div>
                        )}
                        
                      </div>
                      
                    ))}
                  </div>
                ) : (
                  /* LAYOUT B: The original fallback for older projects */
                  <p>{activeProject.longDesc || activeProject.desc}</p>
                )}
                
              </div>

              {/* ONLY renders the side gallery if we are NOT using the new contentBlocks layout */}
              {!activeProject.contentBlocks && activeProject.images && activeProject.images.length > 0 && (
                <div className="hud-image-gallery">
                  {activeProject.images.map((imgSrc, index) => (
                    <img key={index} src={imgSrc} alt={`${activeProject.title} render ${index + 1}`} className="hud-image" />
                  ))}
                </div>
              )}

            </div>

          </div> {/* Closes Column 1: hud-layout */}


          

        </div> {/* Closes hud-master-wrapper */}

        {/* COLUMN 2: The Dedicated Button Track */}
          <div className="return-sidebar">
            <button 
              className="return-btn"
              onClick={() => setIsViewingDetails(false)}
            >
              &lt; Go Back
            </button>
          </div>

      </div>
    );
  }

   // =================================================
  // STAGE 1: THE CHARACTER SELECT SCREEN (IDLE MODE)
  // =================================================

  // If isViewingDetails is false, React skips the block above and renders the main wheel interface.
  return (

    <div className={`ddr-container ${isStatic ? 'static-mode' : ''}`}>
      
      {/* LEFT COLUMN: Main Info Display Panel */}
      <div className="ddr-info-panel">

        <div className="arcade-header">
          <span className="category-tag">{activeProject.category}</span>
          <h1>{activeProject.title}</h1>
        </div>
        
        <div className="project-preview-box">
          <p>{activeProject.shortDesc}</p>
        </div>

        <div className="tech-radar">

          <h3>SYSTEM TECH</h3>

          <div className="tag-row">

            {activeProject.tags.map(tag => (<span key={tag} className="tech-tag">{tag}</span>))}

          </div>
          
        </div>
        
        {/* State Machine Trigger: Sets isViewingDetails to true */}
        <button 
          className="select-button"
          onClick={() => setIsViewingDetails(true)}
        >
          PRESS START / DETAILS
        </button>

      </div>

      {/* RIGHT COLUMN: Re-Engineered Floating Wheel Viewport */}
      {/* The viewport handles the onScroll event for mobile touch devices */}
      <div className="ddr-wheel-viewport" ref={viewportRef} onScroll={handleMobileScroll}>

        <div className="ddr-wheel">
          
          {/* We map through every project to render a card for it */}
          {myProjects.map((project, index) => {
            
            // --- THE INFINITE LOOP VISUAL MATH ---
            // 'visibleOffset' determines how far away a card is from the center. 
            // 0 = center, 1 = one slot down, -1 = one slot up.
            let visibleOffset = index - selectedIndex;
            const halfLength = myProjects.length / 2;
            
            // If the math determines a card is further away than half the list length, 
            // we wrap it around to the other side to create the infinite scrolling illusion!
            if (visibleOffset > halfLength) visibleOffset -= myProjects.length;
            if (visibleOffset < -halfLength) visibleOffset += myProjects.length;

            const isActive = index === selectedIndex;

            // This dynamically generates the CSS for each specific card based on its offset math
            const inlineStyle = {

              '--offset': visibleOffset,

              // Moves the card up/down the Y axis, and pushes active cards left (-35px) to stick out
              transform: `translateY(calc(${visibleOffset} * 75px)) translateX(${isActive ? '-35px' : '0px'}) scale(${isActive ? 1.15 : 0.92})`,

              // Fades out cards that are more than 3 slots away from the center
              opacity: Math.abs(visibleOffset) > 3 ? 0 : 1 - Math.abs(visibleOffset) * 0.25,

              // Ensures the center card always renders ON TOP of the cards behind it
              zIndex: 10 - Math.abs(visibleOffset)
            };

            return (

              <div
                key={project.id}
                className={`wheel-card ${isActive ? 'active' : ''}`}
                style={inlineStyle}

                // Clicking a card forces it to become the active selection
                onClick={() => setSelectedIndex(index)}
                onMouseEnter={() => {

                  // Only allow hovering to select if we are on a desktop display (prevents mobile touch bugs)
                  if (window.innerWidth > 768) setSelectedIndex(index);
                }}
              >

                <div className="wheel-card-inner">

                  {/* Formats the ID numbers. If it's less than 10, it adds a leading zero (e.g. "01") */}
                  <span className="wheel-id">{project.id < 10 ? `0${project.id}` : project.id}</span>
                  <span className="wheel-title">{project.title}</span>

                </div>

              </div>

            );
          })}

        </div>

      </div>

    </div>

  );
  
}