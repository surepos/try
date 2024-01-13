import { useEffect, useState } from 'react';

function Game() {
  const [userChoice, setUserChoice] = useState('');
  const [myChoice, setMyChoice] = useState('');
  const [playerWin, setPlayerWin] = useState('');
  const [gameOn, setGameOn] = useState(false);
  const [counter, setCounter] = useState(3);
  const [modalOpen, setModalOpen] = useState(false);
  const pickMyChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    setMyChoice(choices[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    pickMyChoice();
  }, []);

  const setChoice = (e) => {
    setUserChoice(e.target.dataset.id);
    setGameOn(!gameOn);
  };

  const checkResult = () => {
    if (myChoice === 'rock' && userChoice === 'scissors') {
      setPlayerWin('You Lose');
    } else if (myChoice === 'scissors' && userChoice === 'paper') {
      setPlayerWin('You Lose');
    } else if (myChoice === 'paper' && userChoice === 'rock') {
      setPlayerWin('You Lose');
    } else if (myChoice === 'scissors' && userChoice === 'rock') {
      setPlayerWin(' You Win');
    } else if (myChoice === 'rock' && userChoice === 'paper') {
      setPlayerWin('You Win');
    } else if (myChoice === 'paper' && userChoice === 'scissors') {
      setPlayerWin('You Win');
    } else{
        setPlayerWin('Draw');
    }
  };
  useEffect(() => {
    const timer = counter > 0? setInterval(()=>{
      setCounter(counter-1);
    }, 1000) : checkResult();
    return () =>{
      clearInterval(timer);
    }
    }, [counter, setChoice]);

 const restartGame= ()=>{
    setGameOn(!gameOn);
    pickMyChoice()
    setCounter(3)
    setPlayerWin("")
 }
 const toggle = ()=>{
  setModalOpen(true)
 }
 const toggle2 = ()=>{
  setModalOpen(false)
 }
 console.log(modalOpen)
  return (
    <>
    <div className="game-box">
      <div className="game-container">
        <div className='game-header'>
        <div className='game-let'>
            Let's play 

          </div>
          <div className="game-text">
            <span>Rock</span>
            <span>Paper</span>
            <span>Scissors</span>
          </div>
          
        </div>
        {gameOn ? (
          <div className='game-game'>
            <div className="game-user">
              <span className="text">You Picked</span>
              <div className = {`icon icon--${userChoice}`} ></div>
            </div>
            <div className="result-play">
            <span className="text">{playerWin}</span>
            {
              counter == 0 ?<button onClick={restartGame}>Play Again</button> : ""
            }
            
            </div>
            <div className="game-me">
            <span className="text" style={{ marginLeft: counter !== 0 ? "4rem" : "0px" }}>Sura picked</span>

             {
              counter == 0 ?  <div className = {`icon icon--${myChoice}`} ></div> :
              <div className="counter">{counter}</div> 
             }
            </div>


            {/* myChoice:{myChoice} <br />
            userChoice: {userChoice} <br />
            Result: {playerWin} <br /> <br />
            <button onClick={restartGame}>Restart Game</button> */}

          </div>
        ) : (
          <div className='game-play'>
            <img src="./models/bg-triangle.svg" alt="Triangle" className='triangle' />
            <div className="game-items">
            <div
              data-id="paper"
              className="icon icon--paper"
              onClick={setChoice}>
             
            </div>
            <div
              data-id="scissors"
              className="icon icon--scissors"
              onClick={setChoice}>
             
            </div>
            <div data-id="rock" className="icon icon--rock" onClick={setChoice}>
              
            </div>
            </div>
            
          </div>
        )}
      </div>
      <div className='footer'>
        {!gameOn && <button onClick={toggle} className='rules'>Rules</button>}
         
      </div> 
      { modalOpen && <div className="modal-container">
    <div className="modal-box">
      <div className="modal-header">
        <h1>Rules</h1>
        <button onClick={toggle2} >
          <img src="./models/icon-close.svg" alt="close" />
        </button>
      </div>
      <img className='img-rules' src="./models/image-rules.svg" alt="Rules" />
    </div>
  </div> }
    </div>
   
  </>
  );
}
export default Game;
