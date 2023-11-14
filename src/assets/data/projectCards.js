import platformScreenshot from '../images/platformScreenshot.png';
import taflScreenshot from '../images/taflScreenshot.png';
import weatherScreenshot from '../images/weatherScreenshot.png';
import jateScreenshot from '../images/jateScreenshot.png';
import todoScreenshot from '../images/todoScreenshot.png';
import quizScreenshot from '../images/quizScreenshot.png';
import gitLogo from '../images/tech-logos/github.png';

const projectCards = [
  {
    title: 'Platformer Game',
    text: `this is a platformer game that has enemies, things to collect and lots of game physics. to interact with.

    the game is made with vanilla JS and was a superfun project to work on.`,
    image: platformScreenshot,
    icons: true,
    iconImage: gitLogo,
    iconLink: null,
    subtext: 'placeholder.',
    link: 'fakelink1.fib',
    aspectRatio:'3/4'
  },
  {
    title: 'Tafl Multiplayer Game',
    text: `this is a multiplayer game site that allows users to play the Viking game Tafl with anyone they want.

     it uses socket io and handlebars combined with a sql database to allow users to login, chat, and save and view scores.`,
    image: taflScreenshot,
    icons: true,
    iconImage: gitLogo,
    iconLink: 'fakelink3.fib',
    subtext: 'placeholder.',
    link: 'fakelink2.fib',
    aspectRatio:'3/4'
  },
  {
    title: 'Weather Dashboard',
    text: `A simple weather dashboard that allows users to search for a city and get the current weather and a 5 day forecast.`,
    image: weatherScreenshot,
    icons: true,
    iconImage: gitLogo,
    iconLink: null,
    subtext: 'placeholder.',
    link: 'fakelink3.fib',
    aspectRatio:'3/4'
  },
  {
    title: 'Simple Text Editor',
    text: `A simple text editor that allows users to write and save text files to their computer.`,
    image: jateScreenshot,
    icons: true,
    iconImage: gitLogo,
    iconLink: null,
    subtext: 'placeholder.',
    link: 'fakelink3.fib',
    aspectRatio:'3/4'
  },
  {
    title: 'Todo List',
    text: ` just a simple todo list that allows users to add and remove items from a list. it uses local storage to save the list so it will be there when you come back.`,
    image: todoScreenshot,
    icons: true,
    iconImage: gitLogo,
    iconLink: null,
    subtext: 'placeholder.',
    link: 'fakelink3.fib',
    aspectRatio:'3/4'
  },
  {
    title: 'Quiz Game Site',
    text: `this is a quiz game site that allows users to play a quiz game. It has multiple quizzes and tracks time and scores.`,
    image: quizScreenshot,
    icons: true,
    iconImage: gitLogo,
    iconLink: null,
    subtext: 'placeholder.',
    link: 'fakelink3.fib',
    aspectRatio:'3/4'
  },

  // Add more project card objects here
];
    export default projectCards;