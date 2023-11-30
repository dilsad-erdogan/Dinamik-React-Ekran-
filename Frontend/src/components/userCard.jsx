import React, { useState } from 'react'
import LoginSign from './loginSign'
import WeatherApp from './weatherApp/weather'
import TicTacToe from './ticTacToeGame/ticTacToe'
import MovieApp from './movieApp/movie'
import './style.css'

const userCard = () => {
  const [page, setPage] = useState("UserCard");

  return (
    <>
      {page==="LoginSign"?(<LoginSign></LoginSign>):
        (   
          <div class="container">
            <div class="header">
              <div class="text cursor" onClick={() => {setPage("LoginSign")}}>Çıkış Yap</div>
              <div class="underline"></div>
            </div>

            {
              page==="WeatherApp"?(<WeatherApp></WeatherApp>):
              (
                page==="TicTacToe"?(<TicTacToe></TicTacToe>):
                (
                  page==="MovieApp"?(<MovieApp></MovieApp>):
                  (
                    <div>              
                      <div class="inputs">
                        <div class="input">
                          <div class="text" onClick={() => {setPage("WeatherApp")}}>Weather App</div>
                        </div>
                  
                        <div class="input">
                          <div class="text" onClick={() => {setPage("TicTacToe")}}>Tic Tac Toe Game</div>
                        </div>
    
                        <div class="input">
                          <div class="text" onClick={() => {setPage("MovieApp")}}>Movie App</div>
                        </div>
                      </div>
                    </div>
                  )
                )
              ) 
            }
          </div>
        )
      }
    </>
  )
}

export default userCard