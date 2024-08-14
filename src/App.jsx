import React from 'react'
import Header from './component/Header'
import Slider from './component/Slider'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import Login from './component/Login'

const App = () => {
  return (
   <Router>
   {/* <Header/> */}
   <Routes>
      <Route path='/' element={<Slider/>}/>
      <Route path='/login' element={<Login/>}/>
   </Routes>
   
   </Router>
  )
}

export default App
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { motion } from 'framer-motion';

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {

//       staggerChildren: 0.7 // Stagger duration
//     }
//   }
// };

// const staggerItem = {
//   hidden: { opacity: 0, y: 200 },
//   show: { opacity: 1, y: 0, transition: { duration: 1 }}
// };

// const App = () => {
//   return (
//     <motion.div
//       variants={staggerContainer}
//       initial="hidden"
//       animate="show"
//       style={{ display: 'flex', gap: 10, alignItems: 'center' }}
//     >
//       {[1, 2, 3, 4].map((item, index) => (
//         <motion.div
//           key={index}
//           variants={staggerItem}
//           style={{
//             width: 100,
//             height: 100,
//             backgroundColor: 'red',
//             marginBottom: 10
//           }}
//         />
//       ))}
//     </motion.div>
//   );
// };


// export default App;