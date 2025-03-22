import { useState, useEffect } from 'react';
import './App.css';

function App() {
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

  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [buttonColor, setButtonColor] = useState('black');
  const [textColor, setTextColor] = useState('black');
  const [color, setColor] = useState('white');

  const toggleDarkMode = () => {
    if (color === 'white') {
      setColor('black');
      setButtonColor('white');
      setTextColor('white');
      setBackgroundColor('black');
    } else {
      setColor('white');
      setButtonColor('black');
      setTextColor('black');
      setBackgroundColor('white');
    }
  };

// Función para cambiar el color de fondo a un color aleatorio del array `coloresAbsolutos`
// const HandleColors = () => { 
// 
//   const randomIndex = Math.floor(Math.random() * coloresAbsolutos.length); 
  
//   setBackgroundColor(coloresAbsolutos[randomIndex]); 
// };

  const changeBackgroundColor = () => {
    const randomColor = coloresAbsolutos[Math.floor(Math.random() * coloresAbsolutos.length)];
    setBackgroundColor(randomColor);
  };

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
    document.querySelectorAll('button').forEach(button => {
      button.style.color = buttonColor;
    });
    document.querySelector('p').style.color = textColor;
  }, [backgroundColor, buttonColor, textColor]);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1);
  };

  const total = likeCount - dislikeCount;

  return (
    <main>
      <button onClick={toggleDarkMode} className="light-toggle">
        💡
      </button>
      <div className='Like-Dislike'>
        <div className="card">
          <button onClick={handleLike}>
            I Like it
          </button>
          <button onClick={handleDislike}>
            I don’t Like it
          </button>
          <p className='likes'>Likes: <span>{likeCount}</span></p>
          <p className='dislikes'>Dislikes: <span>{dislikeCount}</span></p>
          <p className='total'>Total: <span>{total}</span></p>
        </div>
      </div>
      <div className='color'>
        <button onClick={changeBackgroundColor}>
          Change Background Color
        </button>
        <h1>The color is: {backgroundColor}</h1>
      </div>
    </main>
  );
}

export default App;
