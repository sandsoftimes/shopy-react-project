import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import cap from './assets/cap.png'
import perfume from './assets/perfume.png'
import shoes from './assets/shoes.png'
import arrow from './assets/arrow.png'
import weather from './assets/weather.png'
import views from './assets/views.png'
import rightside from './assets/rightside.png'
import rightleft from './assets/rightleft.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 class="logoPY">Sh<span class="makeorange">O</span>py</h1>
    <ul>
      <li><a href="" class="l1">Men</a></li>
      <li><a href="" class="l1">Women</a></li>
      <li><a href="" class="l1">Accessories</a></li>
      <li><a href="" class="l1">Summer Sale</a></li>
      <li><a href="" class="l1">Kids</a></li>
    </ul>
    
    <h1 align="left" class="discoverD">Discover New <br /> Collection</h1>
    <p align="left" class="fashionF">Fashion is the part of daily air <br /> and it changes all the time, <br /> with all the events.</p>
    <h1 class="numberO">#01</h1>
    <h1 class="twentyfiveoff">25% </h1>
    <p class="offnewarri"><b>Off New Arrivals</b></p>
    <h1 align="left" class="ournewprod">Our Feature <br /> Products</h1>
    <p align="left" class="ifwedefine">If we define Buzz buy in three words, it will be <br /> elegant, classic, and high-quality.</p>
    
    <div class="searchbar">
    <input type="text" placeholder="Search"></input>
    </div>
    <div class="line-dotted"></div>

    <button class="startshop">Start Shopping</button>
    <button class="seeall">See All</button>

    <img class="capC" src={cap} alt="" />
    <img class="shoesS" src={shoes} alt="" />
    <img class="perfumeP" src={perfume} alt="" />
    <img class="arrowA" src={arrow} alt="" />
    <img class="weatherW" src={weather} alt="" />
    <img class="viewsV" src={views} alt="" />
    <img class="rightR" src={rightside} alt="" />
    <img class="rightleft1" src={rightleft} alt="" />
    <img class="rightleft2" src={rightleft} alt="" />

    <div class="bottomcolor"></div>

    </>
  )
}

export default App
