import './FlashCard.css'
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function FlashCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);
    
    const flipCard = () => {
      setIsFlipped(!isFlipped); // toggle flip
    }

    useEffect(() => {
      setIsFlipped(false);
    }, [props]);

    
  return (
    <div 
    className={`card ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
      <div className='front'>
        <h3>{props.question}</h3>
      </div>
      <div className='back'>
      <h3>{props.answer}</h3>
      </div>
    </div>
  );
}

FlashCard.propTypes = {
  question: PropTypes.string.isRequired, // Ensure 'question' is a required string
  answer: PropTypes.string.isRequired, // Ensure 'answer' is a required string
};

export default FlashCard;