import {ConfettiContext} from './ConfettiContext';
import { useState } from 'react';
import {Outlet} from 'react-router-dom';

const ConfettiContextLayout = () => {
const [confetti,setConfetti] = useState("false");
  return (
    <ConfettiContext.Provider value = {{confetti,setConfetti}}>
      <Outlet/>
    </ConfettiContext.Provider>
  );
};

export default ConfettiContextLayout;