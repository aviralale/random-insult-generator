import React, { useState } from 'react';
import IconBxsQuoteLeft from './IconBxsQuoteLeft';
import IconBxsQuoteRight from './IconBxsQuoteRight';

export default function RandomInsultGenerator() {
      const insults = [
        "You're as useful as a screen door on a submarine.",
        "If you were any slower, you'd be going backward.",
        "You're not the sharpest tool in the shed, are you?",
        "I've seen rocks smarter than you.",
        "You're so dense, light bends around you.",
        "You're a few fries short of a Happy Meal.",
        "Is your brain on vacation or is it just naturally slow?",
        "If ignorance were a profession, you'd be a CEO.",
        "You're the reason they put instructions on shampoo bottles.",
        "You're proof that evolution can go in reverse.",
        "You're about as bright as a black hole.",
        "Did you get your degree from a cereal box?",
        "You're like a broken record, repeating the same stupidity.",
        "I've forgotten more than you'll ever know.",
        "You're not even a has-been; you're a never-was.",
        "You must have a talent for being consistently wrong.",
        "It's a wonder you can remember to breathe.",
        "I'd agree with you but then we'd both be wrong.",
        "You're the human equivalent of a participation trophy.",
        "You're so unoriginal, even your insults are boring."
      ];
    
      const [randomInsult, setRandomInsult] = useState('');
    
      const generateRandomInsult = () => {
        const randomIndex = Math.floor(Math.random() * insults.length);
        const insult = insults[randomIndex];
        setRandomInsult(insult);
      };
    
      return (
        <div>
          <div className="quote-container">
            <IconBxsQuoteLeft/>
          {randomInsult && <p className='quote'>{randomInsult}</p>}
          <IconBxsQuoteRight/>
          </div>
          <button className='btn' onClick={generateRandomInsult}>Generate Insult</button>
        </div>
      );
    }
