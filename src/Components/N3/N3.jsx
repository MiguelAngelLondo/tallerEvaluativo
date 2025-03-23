import React, { useState, useEffect } from 'react';

export const N3 = () => {
  const coloresAbsolutos = [
    "#FF0000",     // Rojo
    "#00FF00",     // Verde
    "#0000FF",     // Azul
    "#FFFF00",     // Amarillo
    "#FF00FF",     // Magenta
    "#00FFFF",     // Cian
    "#000000",     // Negro
    "#FFFFFF",     // Blanco
    "#808080",     // Gris
    "#800000",     // Marrón oscuro
    "#808000",     // Oliva
    "#800080",     // Púrpura
    "#008080",     // Verde azulado
    "#C0C0C0",     // Plata
    "#FFA500",     // Naranja
    "#A52A2A"      // Marrón
  ];

  const [backgroundColor, setBackgroundColor] = useState('white');
  const [textColor, setTextColor] = useState('black'); // Estado para el color del texto

  const changeBackgroundColor = () => {
    const randomColor = coloresAbsolutos[Math.floor(Math.random() * coloresAbsolutos.length)];
    setBackgroundColor(randomColor);

    
    if (randomColor === "#000000") {
      setTextColor('white'); 
    } else {
      setTextColor('black'); 
    }
  };

  useEffect(() => {

    document.body.style.backgroundColor = backgroundColor;

 
    document.querySelectorAll('button').forEach(button => {
      button.style.color = textColor;
      button.style.backgroundColor = backgroundColor === '#000000'; 
    });

   
    document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span').forEach(element => {
      element.style.color = textColor;
    });
  }, [backgroundColor, textColor]);

  return (
    <div className='color' style={{ color: textColor }}>
      <button onClick={changeBackgroundColor}>
        Change Background Color
      </button>
      <h1>The color is: {backgroundColor}</h1>
      <hr></hr>
    </div>
  );
};