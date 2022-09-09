import React, {useState} from 'react'
import styled from 'styled-components'
import { useTheme } from 'styled-components'

function craps() {
//styles
  const PlaceNumbers = styled.button`
font-size: 30px;
margin: 10px;
padding: 20px;
`;

const PlaceNumberWrapper = styled.div`
display: flex;
width: 100vw;
justify-content: center;
flex-direction: row;
`
const Passline = styled.button`
width: 100vw;
height: 40px;`
const Dontpassline = styled.button`
width: 100vw;
margin-top: 10px;
height: 40px;`


const [diceroll, setdiceroll] = useState([])
const [Hard, setHard] = useState("soft")
const [StartingBalance, setStartingBalance] = useState({player1: 300 })

const [currentBets, setcurrentBets] = useState({placebets: {4:0,
5:0, 6:0,8:0,9:0,10:0}})
const [thePoint, setthePoint] = useState(null);
const [pointWinner, setPointWinner] = useState(null)
console.log(currentBets)
const Rollthedice = ()=> {
let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;
let currentRollnumber = dice1 + dice2; 
if(thePoint === null&& currentRollnumber !== 3 && currentRollnumber !== 2 && currentRollnumber !== 12 && currentRollnumber !== 7  ) {
  setthePoint(currentRollnumber)
} else if(thePoint !== null && currentRollnumber === 7) {
  setthePoint(null)
  setPointWinner(false)

} else if( thePoint === currentRollnumber) {
setthePoint(null);
setPointWinner(true)
}



if(dice1 === dice2){
    setHard("Hard")
} else
 {
    setHard("Soft")
}
    setdiceroll([dice1, dice2])
    
  }
  return (
    <div>
      <PlaceNumberWrapper>

<PlaceNumbers>4</PlaceNumbers>
<PlaceNumbers>5</PlaceNumbers>
<PlaceNumbers>6</PlaceNumbers>
<PlaceNumbers>8</PlaceNumbers>
<PlaceNumbers>9</PlaceNumbers>
<PlaceNumbers>10</PlaceNumbers>
      </PlaceNumberWrapper>

      <Passline>Passline</Passline>
      <Dontpassline>Don't Passline</Dontpassline>
        

      

<h2>the point is {thePoint}</h2>
{pointWinner ? "winner": ""}
        <h1>{diceroll}</h1>
<h1>is it hard? {Hard}</h1>
        <button onClick={()=> {
            return Rollthedice();
        }}>Dice roll</button>
<h1>Player 1 starting Balance {StartingBalance.player1}</h1>
    </div>
  )
}
export default craps