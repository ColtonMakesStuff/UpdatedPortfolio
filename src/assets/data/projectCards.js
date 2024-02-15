import platformScreenshot from '../images/platformScreenshot.png';
import taflScreenshot from '../images/taflScreenshot.png';
import weatherScreenshot from '../images/weatherScreenshot.png';
import jateScreenshot from '../images/jateScreenshot.png';
import todoScreenshot from '../images/todoScreenshot.png';
import quizScreenshot from '../images/quizScreenshot.png';
import presentScreenshot from '../images/presentAppScreenshot.png';
import gitLogo from '../images/tech-logos/github.png';
import AIMazeScreenShot from '../images/AIMazeScreenShot.png';
import CalenderScreenshot from '../images/CalenderScreenshot.png';

const projectCards = [
  {
    title: 'Planner/Calender App',
    text: `This project is a personal planner application inspired by the Moleskine notebook/planner aesthetic, designed for mobile devices. It uses a MongoDB database and a Node.js server with a custom API to manage user data, events, and retrieve information for specific dates.`,
    image: CalenderScreenshot,
    icons: true,
    iconImage: gitLogo,
    iconLink: 'https://github.com/ColtonMakesStuff/planner_calender/blob/main/README.md',
    subtext: null,
    link: null,
  },
  {
    title: 'Platformer Game',
    text: `this is a platformer game that has enemies, things to collect and lots of game physics. to interact with.

    the game is made with vanilla JS and was a superfun project to work on.`,
    image: platformScreenshot,
    icons: true,
    iconImage: gitLogo,
    iconLink: 'https://github.com/ColtonMakesStuff/platformer',
    subtext: null,
    link: null,
  },
  {
    title: 'Tafl Multiplayer Game',
    text: `this is a multiplayer game site that allows users to play the Viking game Tafl with anyone they want.

     it uses socket io and handlebars combined with a sql database to allow users to login, chat, and save and view scores.`,
    image: taflScreenshot,
    icons: true,
    iconImage: gitLogo,
    iconLink: 'https://github.com/ColtonMakesStuff/toff-leo/blob/main/README.md',
    subtext: null,
    link: null,
  },
  {
    title: 'Machine Learning Maze',
    text: `A maze and machine learning algorithm made from scratch in JS using a SARSA learning algorithm.`,
    image: AIMazeScreenShot,
    icons: true,
    iconImage: gitLogo,
    iconLink: 'https://github.com/ColtonMakesStuff/q_learning_maze',
    subtext: 'AI Maze.',
    link: 'https://machinelearningmaze.netlify.app',
  },
  {
    title: 'Weather Dashboard',
    text: `A simple weather dashboard that allows users to search for a city and get the current weather and a 5 day forecast.`,
    image: weatherScreenshot,
    icons: true,
    iconImage: gitLogo,
    iconLink: 'https://github.com/ColtonMakesStuff/weatherApp/blob/main/assets/README.md',
    subtext: 'weather dashboard.',
    link: 'https://coltonmakesstuff.github.io/weatherApp/',
  },
  {
    title: 'Simple Text Editor',
    text: `A simple text editor that allows users to write and save text files to their computer.`,
    image: jateScreenshot,
    icons: true,
    iconImage: gitLogo,
    iconLink: 'https://github.com/ColtonMakesStuff/PWA-text-editor',
    subtext: 'JATE',
    link: 'https://colton-text-editor-d34550b80c1a.herokuapp.com',
    aspectRatio:'3/4'
  },
  
  {
    title: 'Quiz Game Site',
    text: `this is a quiz game site that allows users to play a quiz game. It has multiple quizzes and tracks time and scores.`,
    image: quizScreenshot,
    icons: true,
    iconImage: gitLogo,
    iconLink: `https://github.com/ColtonMakesStuff/StudyGame`,
    subtext: 'Study Games.',
    link: 'https://coltonmakesstuff.github.io/StudyGame/index.html',
  },
  {
    title: 'Present Social Media App',
    text: ` Present is a photo centric social media application optimized for mobile devices that allows users to post photos with captions describing them, and like other posts and follow other users.`,
    image: presentScreenshot,
    icons: true,
    iconImage: gitLogo,
    iconLink: `https://github.com/ColtonMakesStuff/Present`,
  }

  // Add more project card objects here
];
    export default projectCards;