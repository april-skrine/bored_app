import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'


function Home() {
  const navigate = useNavigate()
  const [mood, setMood] = useState('mood')

  const handleSelect = e => {
    setMood(e.target.value)
  }
  
  const pushRoute = () => {
    navigate(`/${mood}`)
  }
  
  return (
    <div>Home
      <select onChange={handleSelect} value={mood}>
        <option hidden value={'mood'}>choose bored</option>
        <option value={'chill'}>chill</option>
        <option value={'adventurous'}>adventurous</option>
        <option value={'hungry'}>hungry</option>
        <option value={'creative'}>creative</option>
        <option value={'wild'}>wild</option>
      </select>
      <button onClick={pushRoute}>meow</button>
    </div>
  )
}

export default Home
