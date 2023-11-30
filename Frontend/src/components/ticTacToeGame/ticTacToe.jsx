import React, { useRef, useState } from 'react'
import './ticTacToe.css';
import circle_icon from '../assets/circle.png';
import cross_icon from '../assets/cross.png';

let data = ["","","","","","","","",""];

const ticTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);

  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

  const toggle = (e, num) => {
    if(lock){
      return 0;
    }
    if(count % 2 === 0){
      e.target.innerHTML = `<img src='${cross_icon}'>`;
      data[num] = "x";
      setCount(++count);
    }else{
      e.target.innerHTML = `<img src='${circle_icon}'>`;
      data[num] = "o";
      setCount(++count);
    }

    checkWin();
  }//count anlamı şu: 1.kullanıcı x, 2.kullanıcı o yazacak bu yüzden count kullanıyoruz.

  const checkWin = () => {
    if(data[0] === data[1] && data[1] === data[2] && data[2] !== ""){
      won(data[2]);
    }else if(data[3] === data[4] && data[4] === data[5] && data[5] !== ""){
      won(data[5]);
    }else if(data[6] === data[7] && data[7] === data[8] && data[8] !== ""){
      won(data[8]);
    }else if(data[0] === data[3] && data[3] === data[6] && data[6] !== ""){
      won(data[6]);
    }else if(data[1] === data[4] && data[4] === data[7] && data[7] !== ""){
      won(data[7]);
    }else if(data[2] === data[5] && data[5] === data[8] && data[8] !== ""){
      won(data[8]);
    }else if(data[0] === data[4] && data[4] === data[8] && data[8] !== ""){
      won(data[8]);
    }else if(data[2] === data[4] && data[4] === data[6] && data[6] !== ""){
      won(data[6]);
    }
  }

  const won = (win) => {
    setLock(true);

    if(win === "x"){
      document.getElementById('text').innerHTML = `The winner: <img src=${cross_icon}>`;
    }else{
      document.getElementById('text').innerHTML = `The winner: <img src=${circle_icon}>`;
    }
  }

  const reset = () => {
    setLock(false);
    data = ["","","","","","","","",""];
    document.getElementById('text').innerHTML = ``;
    box_array.map((e) => {
      e.current.innerHTML = "";
    })
  }

  return (
    <>
      <div class="screen">
        <div class="board">
          <div class="row1">
            <div class="box" ref={box1} onClick={(e) => {toggle(e,0)}}></div>
            <div class="box" ref={box2} onClick={(e) => {toggle(e,1)}}></div>
            <div class="box" ref={box3} onClick={(e) => {toggle(e,2)}}></div>
          </div>
          
          <div class="row2">
            <div class="box" ref={box4} onClick={(e) => {toggle(e,3)}}></div>
            <div class="box" ref={box5} onClick={(e) => {toggle(e,4)}}></div>
            <div class="box" ref={box6} onClick={(e) => {toggle(e,5)}}></div>
          </div>

          <div class="row3">
            <div class="box" ref={box7} onClick={(e) => {toggle(e,6)}}></div>
            <div class="box" ref={box8} onClick={(e) => {toggle(e,7)}}></div>
            <div class="box" ref={box9} onClick={(e) => {toggle(e,8)}}></div>
          </div>
        </div>

        <div class="text" id="text"></div>

        <div class="row">
          <button class="reset" onClick={() => {reset()}}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default ticTacToe