import './styles/App.css';
import React, { useState } from 'react';
import Card from './components/Card';

const App = () => {
  const [cards, setCards] = useState([
    'obama',
    'harrypotter',
    'sonic',
    '10',
    'inu',
    'bitcoin',
    'satoshi',
    'sproto',
    'bitcoinobama',
    'sprotobama',
    'hpos10i',
    'apple',
    'banana',
    'carrot',
    'watermelon',
  ])

  const [hist, setHist] = useState([]);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(score);

  const processHist = (name) => {
    let fucked = false;
    hist.forEach((move) => {
      if(move === name) {
        setHist([]);
        setScore(0);
        fucked = true;
      }
    });
    if(fucked) return;

    const newHist = [...hist];
    newHist.push(name);
    setHist(newHist);
    setScore(score + 1);
    setMaxScore(Math.max(score + 1, maxScore));
  }

  const shuffleCards = () => {
    let newCards = [...cards];
    for(let i=cards.length-1; i>0; --i) {
      let index = Math.floor(Math.random() * (i + 1))
      let temp = newCards[index];
      newCards[index] = newCards[i];
      newCards[i] = temp;
    }
    setCards(newCards);
  }

  const processClick = (name) => {
    processHist(name);
    shuffleCards();
  }

  return (
    <div id='app'>
      <h1>$BITCOIN HOLDER IQ TEST</h1>
      <h2>dont click the same thing twice retard</h2>
      <h3>IQ: {score}</h3>
      <h3>Highest IQ: {maxScore}</h3>
      <div id='cards'>
        {cards.map((name) => Card(name, processClick))}
      </div>
    </div>
  );
}

export default App;