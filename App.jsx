/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import AreaSubpage from './components/AreaSubpage';
import Navbar from './components/Navbar'
import BottomMenu from './components/BottomMenu'

import React from 'react';


function App(): React.JSX.Element {

  return (
   <>
   <Navbar/>
   <AreaSubpage/>
   <BottomMenu/>
   </>
  );
}


export default App;
