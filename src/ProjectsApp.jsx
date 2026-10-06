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
    status: "", link: "",
    startDate: "", 
    endDate: "",
      contentBlocks: 
      [
        {
          heading: '',
          text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque in quam ut auctor. Pellentesque feugiat gravida ante at hendrerit. Praesent pellentesque quam at enim rutrum laoreet. Etiam hendrerit tempus neque in ornare. Mauris sit amet ex nec turpis convallis congue tincidunt id magna. Integer nec lobortis neque. Nulla auctor sed arcu a scelerisque. Aliquam fringilla at ligula sit amet dapibus. Aliquam erat volutpat. Etiam vitae leo mauris. Nunc malesuada purus eget malesuada aliquam. Morbi dui nunc, semper ut massa quis, malesuada tempus nulla. Vivamus pellentesque justo magna, et laoreet neque tincidunt vulputate. Etiam pharetra sed arcu ut luctus. Nulla facilisi. Quisque accumsan ipsum convallis elit facilisis dignissim. `,
          image: `/HTMLWebsite/projectImageFiles/VRMicroscope/pinkpantheress.jpeg`,
          caption: `FIG 1: Custom shader graph simulating depth of field and lens distortion.`
        },
        {
          text: ` Vestibulum vitae dolor pulvinar, faucibus tellus eu, convallis sapien. Nunc quis mi mauris. Ut et leo nunc. Proin eu eros ut massa efficitur aliquam. Quisque nec sem sollicitudin, finibus turpis laoreet, interdum nunc. Sed vel cursus odio. Nam a massa id nunc fringilla fermentum. Etiam egestas quis orci vel blandit. Vestibulum felis sem, consequat sed semper sit amet, interdum vitae erat. Pellentesque varius magna quis purus rhoncus ornare. Nam dictum quam quis arcu malesuada, eget cursus nunc iaculis. Praesent urna mauris, placerat at aliquet sed, finibus eu ipsum. Donec eget auctor mauris. Suspendisse viverra ullamcorper volutpat. Nulla ac elementum`,
          
        },
        {
          text: ` Aliquam laoreet ligula in felis rutrum ornare. Sed consectetur, ante sit amet viverra rhoncus, orci risus convallis felis, id vestibulum elit odio sit amet nibh. Sed dignissim iaculis ex, nec imperdiet velit dignissim vitae. Pellentesque dignissim lacus ut ex tincidunt congue. Vivamus porta vitae ex ac aliquet. Donec ultrices, arcu et maximus molestie, lectus sapien facilisis enim, vel mattis velit justo eu mauris. Nulla ornare metus a erat fringilla bibendum. Nunc mauris mi, aliquam quis enim ut, porta vestibulum sem. Ut faucibus mauris quis ante dapibus, et efficitur eros mollis. Aliquam nec nibh ultrices, porttitor turpis nec, varius nunc. `,
          image: `/HTMLWebsite/projectImageFiles/VRMicroscope/pinkpantheress.jpeg`,
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
    title: "Fractals/DTM", 
    category: "Simulation", 
    shortDesc: "A Unity project for research to study the human ability to handle motion sickness and the effects of high motion in virtual reality. It also tests the DTM state of a person under certain conditions.", 
    tags: ["VR", "Unity", "C#"], 
    status: "In Progress", link: "",
    startDate: "September 2025", 
    endDate: "In Progress",

      contentBlocks: 
      [
        {
          heading: `Overview`,
          text: ` This project aims to reduce motion sickness and monitor a user's relaxation and mobility experience while using virtual reality.`,
          image: '/HTMLWebsite/projectImageFiles/VRFractal/2DFractalAfar.png',
          caption: `FIG 1: Looking at a 2D fractal room and the host area from the outside view.`
        },
        {
          text: ` It is common knowledge that virtual reality headsets can cause motion sickness for some people, and it is one of the few reasons that virtual reality headsets have not taken off as much as science fiction and what people expected them to be. My mentor and I chose to study this for this research project to better understand motion sickness in virtual reality, how to reduce it, and how to improve user interaction with virtual reality. That is why we are working with fractals and measuring how users process intense movement in the environment to help us understand it and find ways to reduce it.`,
          
        },
        {
          heading: `Tools`,
          text: ` This project uses the Unity Game Engine, C#, XR Toolkit, Unity Network, and a few XR libraries for internet connections. This project used the Meta Quest Pro, Meta Quest 3, and Meta Quest 3S headsets, each with different functionality. The Meta Quest Pro has a camera that tracks eye movement and blinks. This benefits the research because it helps track when the user needs to blink, as they may be stressed and rely on blinking or closing their eyes to reduce motion sickness.`,
          
        },
        {
          text: ` Without the Meta Quest Pro, we want to test different headsets, since each has different hardware specs that affect the graphics, the look of the environment, and the fractals used. Surprisingly, this also affects motion sickness, depending on the limitations or power of the heavy graphics used in this research.`,
          
        },
        {
          heading: `Process`,
          text: ` With Fractals, I spent a month studying how to make them. I designed concepts for how to make this project work so both the researcher and the test subject can interact with it and observe it.`,
          image: '/HTMLWebsite/projectImageFiles/VRFractal/2DMaterialAssetFolder.png',
          caption: `FIG 2: Fractals materials that are created for the project`
        },
        {
          text: ` I noticed that fractals are very demanding on the CPU and GPU, and the Meta Quest 3s is supposed to be less powerful than the other three, so it should not handle heavy movement or many objects in the environment. Therefore, the best idea was to have fractals attach to the test subjects, and wherever the test subject moves, the fractals move with them.`,
          
        },
        {
          text: ` This is a common video game trick developers use for weather effects such as rain, snow, and even fog. Usually, developers make the weather follow the player to reduce GPU load and frame drops.`,
          
        },
        {
          text: ` A stable, high framerate matters because if it dips below 30 FPS, you'll notice a delay, movement will feel choppy, and things can get unstable enough to crash the program. To explain the importance of a stable framerate of 30 or greater, think of it like using a computer with heavy loads of tabs open in a web browser. The computer starts running slowly and starts stuttering, to the point that it is unresponsive. When it becomes responsive again, the things you were doing during the frozen state act up and do everything that happened during those frozen moments, such as mouse movement, button presses, menu pop-ups, and more.`,
          
        },
        {
          text: ` That is what will happen to users in the program when the frame rate is low and struggling to catch up.`,
          
        },
        {
          text: ` Therefore, the solution is to reduce the number of fractals in the program and have them follow the player. This makes it easier to manage hardware capabilities, and it applies to all three headsets.`,
          
        },
        {
          text: ` For this project, I wanted different fractal scenarios for the test subject to witness fractals on the wall that move, and fractals that follow and surround the player.`,
          
        },
        {
          text: ` The host will control the display and decide how the fractals loop, speed up, or slow down. This will help manage and test the subject's ability to handle fractals, and provide a way to note whether that limit can be surpassed at a later date.`,
          
        },
        {
          text: ` The DMT experience is also part of the fractals research. It is there for relaxation and to see how the effects of a calming environment feel under a substance while wearing virtual reality. We want to test how a subject feels, what the experience is like, and whether wearing the headset affects motion sickness or the overall experience.`,
          
        },
        {
          text: ` This experience is still under development and is being improved. The player walks through the forest, experiencing a calming space while listening to music that helps calm them, but eventually encounters a psychedelic experience of colors and shapes to see whether the transition from the forest to this experience affects them.`,
          
        },
        {
          text: ` Working with two different clients to meet both their demands, received feedback, adjusted things, and ensured they were satisfied with the concept and development of the research project for the testing phase with actual volunteers.`,
          
          
        },
        {
          text: ` This project needed to meet standards, including a lobby, a room environment, and a way to separate the host from the test subject. That is why I dedicated time to designing and planning how one spawns, is labeled as a host, and is labeled as the subject for the experiment. To ensure only the subject experiences fractals, the host has a control panel to control the fractals manually. At the same time, the subject is limited to a space where they are bound, while in the DTM experience, the subject freely walks around in an open field.`,
          
        },
        
      ]
  },

  { 
    id: 2,
    title: "Inventory Managment", 
    category: "Desktop Application", 
    shortDesc: "A beta software for an Electronic Store needing to manage their inventory and online orders.", 
    tags: ["Java", "JFrame", "MYSql"], 
    status: "Beta/Complete", link: "https://github.com/vicDcano/CSC481Management",
    startDate: "August 27, 2024", 
    endDate: "December 8, 2024",

      contentBlocks: 
      [
        {
          heading: `Overview`,
          text: ` This project was designed as an inventory order for a small electronics shop for a class group assignment. It is meant to be a prototype as we had limited number of weeks and because it is a class setting for undergrads, it is due to time restraints.`,
          image: '/HTMLWebsite/projectImageFiles/DatabaseManagementEltronicStore/MYSQLDatabase.png',
          caption: `FIG 1: Custom shader graph simulating depth of field and lens distortion.`,
        },
        {
          text: ` In this group project, we switch roles every three weeks to learn how to work as a team, as if we were a real tech company handling clients' needs and wants. We make sure everyone contributes while also seeing what it is like in a tech company, which might influence the roles we want after graduation and teach us how software development works.`,
          
        },
        {
          heading: `Mission and Goal:`,
          text: ` A small electronics store owner wants software to track online orders and inventory, and to notify the owner when an item is low.`,
          image: '/HTMLWebsite/projectImageFiles/DatabaseManagementEltronicStore/InsideSoftware.png',
          caption: `FIG 2: Custom shader graph simulating depth of field and lens distortion.`
        },
        {
          text: ` The approach for this was to make a desktop application that tracks the inventory of the store while also accounting for the customer's orders, but when an item in their inventory is low or none at all, the owner will be notified that the item(s) are running low and given the option to place a reorder.`,
          image: '/HTMLWebsite/projectImageFiles/DatabaseManagementEltronicStore/OrdersTab.png',
          caption: `FIG 3: The Orders Tab functionality.`
        },
        {
          text: ` The later idea of notifying the owner was a feature we thought of during development because it would be helpful, improve the owner experience, and make reordering easier.`,
        },
        {
          heading: `Tools:`,
          text: ` In this project, we used Java for the backend, Swing with JFrame for the front end, and MySQL to store data and track inventory.`
        },
        {
          text: ` We chose Java because most of the group knows it, and half took the Database class, so MySQL followed as the best option for data management.`
        },
        {
          heading: `Process`,
          text: ` At the start of the project, we asked about people's strengths and weaknesses, what they are comfortable with and how well they know certain technologies such as Git, their knowledge of libraries, and work schedules.`
        },
        {
          text: ` It is important to us that, as a team, we know who needs help understanding or picking up a new skill, how many resources and how much effort it takes to teach someone a new skill, and that we make time to meet as a group. We strive balance and communication as much as possible as well as provide a quick an easy things to catch them up to speed with youtube videos or shadow us when we show them how certain software is being used.`
        },
        {
          text: ` We adapted to SCRUM agile methodology in where we meet once a week to discuss how the project is going. I usually lead the weekly meetings as a group leader and try to start the conversation in having people talk about any difficulties that may delay the project or ways to expand the project at a resonible time frame but mostly talk about the task that was done that previous week and new task that are upcoming and if we can procceed to them accordingly.`,
        },
        {
          text: ` The weekly SCRUM meeting also brought up ideas and topics about the customer and data safety, how to better protect our customer, whether it should be an online application too, and whether the desktop application should have an always online connectivity.`,
        },
        {
          text: ` Communication was key for this project, and we made sure to do so in every meeting. We also circled back to those ideas the following week because we needed time to think about them and see whether it was worth integrating into our project.`,
        },
        {
          heading: ` Result:`,
          text: ` This led to a working prototype that satisfied our customer demands and expectations with a user friendly interface that is easy to be read by anyone. We presented it and had a working demo that took new orders in the user interface, how they are stored in the database, how we encrypt the user login information and when an inventory is running low. We as well made it easy to lookup customer orders, specific keyterms to look up inventory and how to organize inventory by.`,
        }
      ]
  },

  { 
    id: 3, 
    title: "VR Microscope", 
    category: "Simulation", 
    shortDesc: "An interactive research project in the Unity game engine that users can use to examine cell samples and other samples under a microscope, a new way to enhance learning.", 
    tags: ["C#", "Unity", "XR Toolkit"], 
    status: "In Development",
    startDate: "January 2026", 
    endDate: "Ongoing", 

      contentBlocks: 
      [
        {
          heading: `Overview`,
          text: ` My task was to build the backend that lets users look through the microscope, examine samples, zoom in and out, and swap samples for others. The project was built in the Unity game engine for research in virtual reality and educational tools to enhance learning environments. `,
          image: '/HTMLWebsite/projectImageFiles/VRMicroscope/MicroscopeFrontViewlab.png',
          caption: `FIG 1: Front view of the microscope that is being used for this project.`
        },
        {
          text: ` We are improving how students interact and learn through virtual reality because research shows it helps students understand learning materials more easily and access that information. Therefore, the project explored this in certain school subjects, such as biology. We wanted to make biology more accessible and provide another tool for underprivileged schools and those with mobility challenges, especially with cell samples that are hard to obtain. This project really is something worth doing to help students and to make learning more accessible to people.`,
        },
        {
          heading: 'Tools',
          text: ` This project had to be built on a Meta Quest 3 headset, as it is the most capable and most affordable virtual reality headset on the market. We used the Unity game engine as the platform to create this lab experiment in virtual reality, and to use any virtual reality headset, we had to use XR libraries and XR tools to manage and move around in virtual reality.`,
          
        },
        {
          heading: `Process`,
          text: ` The process for creating this project started with designing it by hand to show what it would look like and how it should function in virtual reality, since we are doing it as a multiplayer online experience for the class. I designed the project to simulate how the user should see it when they click the microscope, the outside view from a bystander perspective, and how the viewer who interacts with the microscope should be able to see the sample in front of them.`,  
        },
        {
          text: ` This project provided a challenge where the samples had to switch out realistically, or close to realistically, in how one would interact with a microscope in real life. The head of the research definitely wanted to lean into realism and accuracy as much as possible, as this would enhance one's idea of how to use a microscope in real life if the opportunity arises. I kept it as realistic as the client wanted, and I achieved this through time, research, and trial and error to create a working beta project with a microscope and by using game development tricks and such to get away with certain things, such as looking at samples while keeping it hidden from other people who are not using the same microscope and the illusion of looking through a hole, giving the user a zoom in and out option.`,
          image: '/HTMLWebsite/projectImageFiles/VRMicroscope/ViewingSample.png',
          caption: `FIG 2: A sample being examined in virtual reality.`
        },
        {
          text: ` This led me to make things more distinct and helpful so students know what they are highlighting, and to keep the controls from being too difficult. I'm working to keep it simple and not overwhelming for the people using this project to learn. I designed the project for simplicity, using the thumbstick to zoom in and out in the sample, and using one button to grab and hold sample slides, releasing them when they let go of the button. When they point toward the microscope, I added a visual cue to show that the microscope is interactive and available to use.`,
          image: '/HTMLWebsite/projectImageFiles/VRMicroscope/MicroscopeFrontViewlab.png',
          caption: `FIG 3: Front view of the microscope that is being used for this project.`
        },
        {
          text: ` When the user confirms with the microscope that they want to view the sample, they click a button and enter a state where their view shows the sample, but only to the individual who entered that view. This triggers a UI panel that immediately appears in front of the user's view and prevents them from seeing anything outside their sample viewing panel.`,
          image: '/HTMLWebsite/projectImageFiles/VRMicroscope/SideViewOutsideMicroscope.png',
          caption: `FIG 4: Outside view of what it is like for the user seeing the sample.`,
          
        },
        
      ]
    },

    {
      id: 4, 
      title: "VR Physics", 
      category: "Simulation", 
      shortDesc: "Interactive physics lab and experiments in virtual reality.", 
      tags: ["C#", "Unity", "XR Toolkit"], 
      status: "In Development",
      startDate: "January 2022", 
      endDate: "May 2025",

      contentBlocks:
      [
        {
          heading: `Overview`,
          text: ` Built the backend code for a physics lab that helps users learn physics in a fun, interactive way, making it more accessible in the Unity game engine.`,
        },
        {
          text: ` Virtual reality is shaping how people approach technology and is advancing education by combining learning formats into an environment that helps users understand. Physics is a hard subject to grasp, which is why it was chosen for this research project and how to better help students learn physics in a much more engaging way that can help them better understand the subject.`,
        },
        {
          text: ` I was brought in to handle the backend work and served as a lead developer during my undergrad, ensuring the quality of the projects for this research. I implemented SCRUM and held weekly meetings to discuss progress and ensure new team members got up to speed.`,
        },
        {
          Heading: `Tools`,
          text: ` I used the Unity Game engine for the entire project, along with XR libraries that handle virtual reality physics and movement, using the Meta Quest 2, Meta Quest 3, and Meta Quest Pro headsets in the lab. `,
        },
        {
          text: ` We also use real world lab experiments to guide, help adjust, and better understand the physics experiments we bring into virtual reality.`,
        },
        {
          heading: `Process for Kinematics`,
          text: ` To approach this project, we had to discuss what exactly needed to be covered and what kind of experiments we should start with. This led to a standard, easy experiment that usually starts every physics course. We had a simple conversation about friction and the velocity of a ball on a given surface. That idea led us to create different scenarios for a ball to roll down a ramp and study how force acts on it, such as a frictionless ramp, a sticky surface, and more.`,
        },
        {
          text: ` I designed how it should look on simple paper and relearned this subject in physics so it can be as accurate as possible in how it is done, and the challenges we can make it do for students to try to learn, such as filling in the missing information that is needed to complete the lesson. An example would be, what is the angle of the ramp that the ball came down from, what is the final velocity of the ball, and follow any of the basic kinematic formulas that physics uses. This is a perfect testing ground for approaching this research project, so that we can start small, see the accuracy and eventually build upon bigger things and show it is possible to make physics more approachable and digestible for students to learn and bridge the gap of accessibility for those who do not have the resources to obtain certain lab experiments.`,
        },
        {
          text: ` I designed the UI for this kinematics experiment, including the ramp type, its current angle, and the timer. I used the Unity game engine physics logic and the pre-built surface materials, such as rubber, stickiness, ice, and other materials that can affect the ball in any shape or form when needed.`,
        },
        {
          heading: `Process for classical mechanics`,
          text: ` The next experiment was to do classical mechanics with a pendulum. The users are to grab the ball of the pendulum, put it at an angle, and let go. See the pendulum swing side to side. They take the formulas they know from simple mechanics or simple harmonic motion and apply them to what they learn in the learning environment. `,
          image: '/HTMLWebsite/projectImageFiles/VRPhysics/NoUIPendelumn.png',
          caption: `FIG:Pendulum setup.`
        },
        {
          text: ` I designed and built the backend, the UI, and the logic for this experiment, including how it looks and is handled. I managed to make a design choice where, if the user grabs the pendulum, the angle and the marker show how far it is from its starting point and where the user took it. Meaning, if the starting point is zero degrees, then if the user grabs it and puts it at a thirty-two-degree angle from either side, then it will show everything between thirty-two degrees and zero degrees as a single color, indicating this for the purpose of using that information in their formula.`,
          image: '/HTMLWebsite/projectImageFiles/VRPhysics/UIPendelumn.png',
          caption: `FIG:Pendulum setup with the UI all around it.`
        },
        {
          text: ` The setup was a challenge, and the execution was too, because during development the pendulum swung toward the user instead of side by side. Therefore, it took a lot of careful trial and error, and we found solutions that let it swing side by side. It took a lot to understand how to make this project work, as we used a real life pendulumn as reference, including the weight the ball should be. With extensive research and looking close to the real life experiment, it was achieved in virtual reality.`,
        },
        {
          text: ` We made a UI to change the ball's weight, show how the ball and string reduce speed over time, include a timer, and show the angles, the ball's starting point, and how to set up the experiment. I added a way to remove or bring the pendulum lab experiment to the user so they can adjust it or place it at certain spawn areas.`,
        },
        {
          heading: `Process for projectile motion`,
          text: ` For the next experiment, we decided to make it more fun and interactive, as our mission is to make physics more interactive and easier to understand. We decided to use projectile motion as our next idea, and what I will be doing in the backend of the research. I focused less on the design and more on the backbone and logic, making it usable for different scenarios to demonstrate projectile motion.`,
          image: '/HTMLWebsite/projectImageFiles/VRPhysics/CanonProjectile.png',
          caption: `FIG:Projectile Motion setup where the cannon is position in front of the target.`
        },
        {
          text: ` Projectile motion can be used in many different ways, but similarly it uses the same formula and idea. It can be used to take down pirate ships, hit floating targets, shoot into a wastebasket, and more. In any scenario where an object launches from one position to another while soaring through the air, you can solve it with a projectile motion formula; that is why it was important to focus more on the backend than the overall look and to dedicate it to a certain scenario. `,
        },
        {
          text: ` I found a cannon online and put it in the Unity project, where I could change the angle at which it shoots the cannonball at the start. All I wanted to do with this reference was so that you could substitute the cannon with a hand or slingshot or anything that the scenario needs, but the projectile coming out of the starting point is the same, with how you adjust the speed of the object and its angle of being launched from.`,
        },
        {
          text: ` After that, I made targets for the object to hit and destroy. After the target is destroyed, the object despawns, and a new target at a different height or even a different position appears, and it is up to the user to figure out the angle and velocity.`,
        },
        {
          text: ` This led to a more interactive projectile motion experiment where the user has to figure out, from one of the following problems, either the object's velocity or the cannon's launch angle to hit the target from the target's position, along with other given factors.`,
        },
        
      ]
    },

    {
      id: 5,
      title: "Website/Portfolio",
      category: "Web Development",
      shortDesc: "A personalized website for potential clients to see and explore my work experience as well as see the creativity I bring to my projects.",
      tags: ["HTML&CSS", "React.JS", "JavaScript"],
      status: "July 2024",
      startDate: "Never Ending",

      contentBlocks:
      [
        {

        }

      ]
    },
  
];

export default function ProjectsApp() 
{

  // ==========================================
  // STATE MANAGEMENT (THE COMPONENT's MEMORY)
  // ==========================================
  
  // Helper to read the web address bar
  const getUrlParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };

  // Tracks which project is active. Checks URL first, then session memory, then defaults to 0.
  const [selectedIndex, setSelectedIndex] = useState(() => {
    const urlId = getUrlParam('id');
    if (urlId !== null) 
    {
      // Matches the ID in the URL to the exact project in your array
      const index = myProjects.findIndex(p => p.id === parseInt(urlId));
      return index !== -1 ? index : 0;
    }

    return 0;
    // const saved = sessionStorage.getItem('savedIndex');
    // return saved ? parseInt(saved) : 0;
  });
  
  const [isStatic, setIsStatic] = useState(false); 
  
  // Tracks if we are looking at the details. Checks URL first, then memory.
  const [isViewingDetails, setIsViewingDetails] = useState(false);

  // const [isViewingDetails, setIsViewingDetails] = useState(() => {
  //   const urlView = getUrlParam('view');
  //   if (urlView === 'details') return true;
  //   if (urlView === 'select') return false;
  //   return sessionStorage.getItem('viewingDetails') === 'true';
  // });

  // ==========================================
  // REFS (MUTABLE VARIABLES)
  // ==========================================
  
  // Provides a direct hook to the DOM element holding the scrolling wheel (used for mobile swipe math)
  const viewportRef = useRef(null);
  
  // Acts as a "throttle" or "debounce" for the mouse wheel.
  // It prevents a single flick of the mouse wheel from scrolling through 10 projects instantly.
  const isCooldown = useRef(false);
  
  // This is for the touchscreen portion when in mobile phone
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  // ==========================================
  // URL ROUTING, MEMORY AND SCROLL RESET
  // ==========================================
  useEffect(() => {

    try{
      const currentProject = myProjects[selectedIndex];
      const newUrl = new URL(window.location.href);

      // Only tracks the project ID in the URL bar
      newUrl.searchParams.set('id', currentProject.id);

      // Ensure the 'view' parameter is permantely deleted from the address bar
      newUrl.searchParams.delete('view');

      // Silently updates the URL
      window.history.replaceState({}, '', newUrl.href);
    }
    catch(error){
      console.error("Failed to update URL:", error);
    }

    if(isViewingDetails)
    {
      const scrollContainer = document.querySelector('.details-screen-container');

      if (scrollContainer) 
      {
        scrollContainer.scrollTop = 0;
      }
    }
    // Save to session storage as a backup
    // sessionStorage.setItem('savedIndex', selectedIndex);

    // Update the URL silently without reloading the page
    // const currentProject = myProjects[selectedIndex];
    // const newUrl = new URL(window.location.href);

    // newUrl.searchParams.set('id', currentProject.id);

    // // Keep the URL clean by only including the 'view' parameter when necessary
    // if(isViewingDetails)
    // {
    //   newUrl.searchParams.set('view', 'details');
    // }
    
    // else
    // {
    //   newUrl.searchParams.delete('view');
    // }

    // window.history.replaceState({}, '', newUrl.href);

    // // Force the scrollbar to the top whenever the details screen is active
    // if (isViewingDetails) 
    // {
    //   const scrollContainer = document.querySelector('.details-screen-container');

    //   if (scrollContainer) 
    //   {
    //     scrollContainer.scrollTop = 0;
    //   }
    // }
  }, [selectedIndex, isViewingDetails]);

  // ==========================================
  // MOBILE TOUCH SWIPE LOGIC
  // ==========================================

  const handleTouchStart = (e) => {
    // Records the starting position of the finger
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (isViewingDetails) return;

    // Records the position where the finger lifts off the screen
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const deltaX = touchStartX.current - touchEndX;
    const deltaY = touchStartY.current - touchEndY;

    // Ensure the swipe was long enough to count as a gesture (prevents accidental taps from spinning the wheel)
    if (Math.abs(deltaX) > 40 || Math.abs(deltaY) > 40) {
      
      // Determine if it was mostly a left/right swipe or an up/down swipe
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal Swipe: Left goes forward, Right goes backward
        if (deltaX > 0) changeSelection(1);
        else changeSelection(-1);
      } else {
        // Vertical Swipe: Up goes forward, Down goes backward
        if (deltaY > 0) changeSelection(1);
        else changeSelection(-1);
      }
      
    }
  };

  // ==========================================
  // VANILLA HTML COMMUNICATION
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
  // KEYBOARD & MOUSE WHEEL CONTROLS
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
        document.body.classList.add('hide-footer-items');
      } 
      else 
      {
        document.body.classList.remove('hide-arcade-assets');
        document.body.classList.remove('hide-footer-items');
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
                  <h3>Status: {activeProject.status}

                    {activeProject?.link && (
                      <span>
                      {" "}| Link: <a href={activeProject.link} target="_blank" rel="noreferrer">{activeProject.link}</a>
                      </span>
                    )}

                  </h3>
                  
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
                
                

               {/* LAYOUT A: The Wikipedia Wrap-Around */}
                {activeProject.contentBlocks ? (
                  <div className="system-manual-layout" style={{ marginTop: '30px', display: 'block' }}>
                    {activeProject.contentBlocks.map((block, index) => (
                      
                      <div key={index} className="content-block-wiki">

                        {/* IMAGE: Renders FIRST so it anchors to the right immediately */}
                        {block.image && (
                          <div className="block-visual-wiki">
                            <img src={block.image} alt={`${activeProject.title} detail ${index + 1}`} className="hud-image" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            {block.caption && <span className="image-caption">{block.caption}</span>}
                          </div>
                        )}

                        {/* TEXT: Renders SECOND so it naturally flows around the image */}
                        {block.heading && <h1 className="article-heading" style={{ marginTop: 0 }}>{block.heading}</h1>}
                        {block.text && <p style={{ marginTop: 0, lineHeight: 1.6 }}>{block.text}</p>}
                        
                      </div>
                      
                    ))}
                    {/* This ensures the page background stretches all the way to the bottom of the last image */}
                    <div style={{ clear: 'both' }}></div>
                  </div>
                ) : (
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
              onClick={(e) => 
              {
                e.preventDefault();
                window.location.search = `?id=${activeProject.id}`;
              }
            }
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
      <div 
        className="ddr-wheel-viewport" 
        ref={viewportRef} 
        onTouchStart={handleTouchStart} 
        onTouchEnd={handleTouchEnd}
      >

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