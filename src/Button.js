import { useState } from 'react';

const Button = ({ text }) => {
  const [showText, setShowText] = useState(false)

  const handleClick = () => {
    setShowText(!showText)
  }

  return <button onClick={handleClick}>{text}</button>
}

export default Button;