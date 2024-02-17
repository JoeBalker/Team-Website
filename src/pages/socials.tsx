// import Head from 'next/head'
// import Marquee from 'react-fast-marquee'
// import { Facebook, Instagram, Youtube } from '../components/Post';

// // Yes i know that this section is super unoptimised
// // But to be honest im way too lazy to deal with making a function that takes in imputs
// // function togglePopup(thing) {
// //   const popup = document.getElementById(thing);
// //   popup.classList.toggle('active');
// // // }
// // import{ JSDOM } from 'jsdom';
// // // const { JSDOM } = require('jsdom');
// // const  = require('domino');

// // // Create a fake DOM environment
// // const window = new JSDOM('').window;
// // global.document = window.document;

// // // Apply the styles to the DOM
// // const styleElement = document.createElement('style');
// // styleElement.textContent = styles;
// // document.head.appendChild(styleElement);

// // // Your JavaScript logic
// // function adjustPopupPosition() {
// //   const popup = document.getElementById('popup');
// //   if (!popup) return; // Popup not found

// //   const rect = popup.getBoundingClientRect();
// //   const isOffScreen = rect.bottom < 0 || rect.top > window.innerHeight;

// //   if (isOffScreen) {
// //     popup.style.position = 'fixed';
// //   } else {
// //     popup.style.position = 'absolute';
// //   }
// // }

// // // Call the adjustPopupPosition function whenever needed
// // adjustPopupPosition();

// // tis a desperate time
// // sudo deletepopups.exe()


// // function showPopup0() {
// //   const popup = document.getElementById('popup0');
// //   popup.classList.add('active');
// // }
// // function hidePopup0() {
// //   const popup = document.getElementById('popup0');
// //   popup.classList.remove('active');
// // }
// // function showPopup1() {
// //   const popup = document.getElementById('popup1');
// //   popup.classList.add('active');
// // }
// // function hidePopup1() {
// //   const popup = document.getElementById('popup1');
// //   popup.classList.remove('active');
// // }
// // function showPopup2() {
// //   const popup = document.getElementById('popup2');
// //   popup.classList.add('active');
// // }
// // function hidePopup2() {
// //   const popup = document.getElementById('popup2');
// //   popup.classList.remove('active');
// // }
// // function showPopup3() {
// //   const popup = document.getElementById('popup3');
// //   popup.classList.add('active');
// // }
// // function hidePopup3() {
// //   const popup = document.getElementById('popup3');
// //   popup.classList.remove('active');
// // }

// // // Define types
// // interface ElementPosition {
// //   bottom: number;
// //   height: number;
// // }

// // function getElementPosition(element: HTMLElement): ElementPosition {
// //   const { bottom, height } = element.getBoundingClientRect();
// //   return { bottom, height };
// // }

// // // Check if element is off-screen
// // function isOffScreen(elementPosition: ElementPosition, windowHeight: number, scrollTop: number): boolean {
// //   return (scrollTop + windowHeight) >= elementPosition.bottom;
// // }

// // // Function to handle scroll event
// // function handleScroll() {
// //   const popup = document.getElementById('popup2');
// //   const contentElement = document.getElementById('page');
// //   if (!popup || !contentElement) return;

// //   const { height } = contentElement.getBoundingClientRect();
// //   const windowHeight = window.innerHeight;
// //   const scrollTop = window.scrollY || window.pageYOffset;
// //   const elementPosition = getElementPosition(contentElement);

// //   if (isOffScreen(elementPosition, windowHeight, scrollTop)) {
// //       popup.style.position = 'fixed';
// //   } else {
// //       popup.style.position = 'absolute';
// //   }

// // }
// // if(typeof window !== 'undefined')
// // {
// //   window.addEventListener('scroll', handleScroll);
// // }
// // function strat() {
  
// // } // Get element position
// // // Add scroll event listener
// // strat();
// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Socials | 4788</title>
//         <meta name="description" content="Curtin FRC's Socials" />
//       </Head>
//       <div className="page" id='page'>
//         <div className='hero' style={{ justifyContent: "flex-start"}}>
//           <Marquee speed={25} gradient={false} direction='left' style={{ opacity: 0.80 }}>
//             <h1>Socials</h1>
//           </Marquee>
//           <div className="column posts">
//             <ul>
//               <div id='parent'>
//                 <li><h2><a href='https://github.com/CurtinFRC' className="popup-trigger">Our Github</a></h2></li>
//                 <div style={{"marginLeft":"20%"}} className='popup' id="popup0">
//                   <p>The Official Curtin FRC github page</p>
//                 </div>
//               </div>
//               <div id='parent'>
//                 <li><h3><a href='https://www.facebook.com/Team4788' className="popup-trigger">Our Facebook</a></h3></li>
//                 <div style={{"marginLeft":"20%"}}className="popup" id="popup1">
//                   <Facebook url="https://www.facebook.com/photo?fbid=650239157108479&set=a.468333625299034"/>
//                 </div>
//               </div>
//               <div id='parent'>
//                 <li><h3><a href='https://www.instagram.com/frcteam4788/' className="popup-trigger">Our instagram</a></h3></li>
//               <div style={{"marginLeft":"20%"}} className="popup" id="popup2">
//                 <Instagram url="https://www.instagram.com/p/Cq5pNEChgbY/?hl=en"/>
//               </div>
//               </div>
//               <div id='parent'>
              
//               <li><h3><a href='https://www.youtube.com/@CurtinFRC4788CantControl' className="popup-trigger">Our Youtube</a></h3></li>
//               <div style={{"marginLeft":"20%"}} className="popup" id="popup3">
//                 <Youtube url="https://www.youtube.com/watch?v=UvU8SDmH-LA"/>
//               </div>
//               </div>
//               <p style={{"marginBottom":"0%"}}/>
//             </ul>
//           </div>
//         </div>
//         <div className='heros'> </div>
//       </div>
//     </>
//   )
// }
