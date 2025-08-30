import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import '../../styles/home/HomeCards.css'
import RadialBarChart from '../charts/CircleChart'
import { RxCross2 } from "react-icons/rx"; 

const HomeCards = ({categories}) => {
  const [open,setOpen] = useState(false);
  return (
    <>
      <div className='category-card-main'>
      {
        categories.map((data) => (
          <div className='category-card' onClick={() => setOpen(true)}>
            <div>
              <img src={data.image} alt={data.name}/>
              <h3>{data.name}</h3>
            </div>
            <div>
              {/* <RadialBarChart/> */}
            </div>
          </div>
            
          ))
        }
      </div>
    {open && (
        <div className='open-main'>
          <div className='open-top'>
            <h1>Are you Ready, Select the Level</h1>
            <RxCross2 size={30} color='white' onClick={() => setOpen(false)}/>
          </div>
          {/* <div className='open-info'>
            <div className='open-info1'> */}
          
      <div class="main-box container">
        <div class="button-box container">
          <button class="button">
            <p class="title">Easy</p>
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Handshake.png"
              alt="Handshake"
            />
            <p class="description">Warm-up round<br />take it easy!</p>
          </button>

          <button class="button2">
            <p class="title">Medium</p>

            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Astronaut%20Light%20Skin%20Tone.png"
              alt="Man"
            />
            <p class="description">Step it up<br />now it gets tricky!</p>
          </button>

          <button class="button3">
            <p class="title">hard</p>
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Locked.png"
              alt="Locked"
            />
            <p class="description">Only for the brave<br />can you crack it?</p>
          </button>
        </div>
      </div>


    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

            </div>

        //   </div>
        // </div>
      )}

    </>
      
  )
}

export default HomeCards
