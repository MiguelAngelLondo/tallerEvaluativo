import { useState, useEffect } from 'react';

export const Number1 = () => {
  const [color, setColor] = useState('white');
  const [buttonColor, setButtonColor] = useState('black');
  const [textColor, setTextColor] = useState('black');
  const [backgroundColor, setBackgroundColor] = useState('white');

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

  useEffect(() => {
   
    document.body.style.backgroundColor = backgroundColor;
    document.querySelectorAll('button').forEach(button => {
      button.style.color = buttonColor;
      button.style.backgroundColor = backgroundColor === 'white'; 
    });

    document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span').forEach(element => {
      element.style.color = textColor;
    });
  }, [backgroundColor, buttonColor, textColor]);

  return (
    <button onClick={toggleDarkMode} className="light-toggle">
      💡
    </button>
  );
};