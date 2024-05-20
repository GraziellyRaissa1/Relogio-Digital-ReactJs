
import './App.css';

import React, { useState, useEffect } from 'react'; 

  

function RelogioDigital() { 

  const [hora, setHora] = useState(new Date().toLocaleTimeString()); 

  

  useEffect(() => { 

    const interval = setInterval(() => { 

      setHora(new Date().toLocaleTimeString()); 

    }, 1000); 

  

    return () => clearInterval(interval); 

  }, []); 

  

  return ( 

    <div id='Container'> 
       <div id='content'>
        <h2>Relógio Digital</h2>
       <div id='hora'>
        <p>{hora}</p>
         </div>
       </div>
    </div> 

  ); 

} 

  

export default RelogioDigital; 