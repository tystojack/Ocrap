import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";

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
  `;
  const Passline = styled.button`
    width: 100vw;
    height: 40px;
  `;
  const Dontpassline = styled.button`
    width: 100vw;
    margin-top: 10px;
    height: 40px;
  `;

  const [diceroll, setdiceroll] = useState([]);
  const [Hard, setHard] = useState("soft");
  const [StartingBalance, setStartingBalance] = useState({ player1: 300 });

  const [passLine, setPassLine] = useState({
    player1: [0, 0],
  });
  const [pointBets, setpointBets] = useState({
    player1: [0, 0, 0, 0, 0, 0],
  });

  const [betState, setbetState] = useState({
    player1: { placebets: [0, 0, 0, 0, 0, 0], passLine: [0, 0] },
  });
  const [thePoint, setthePoint] = useState(null);
  const [pointWinner, setPointWinner] = useState(null);

  const setPlacebets = (index) => {
    let oldbalance = pointBets.player1;
    let oldnumber = pointBets.player1[index];

    let newnumber = oldnumber + 1;
    oldbalance.splice(index, 1, newnumber);

    setpointBets({
      ...pointBets,
      player1: oldbalance,
    });
    let oldbankroll = StartingBalance.player1;
    let newbankroll = oldbankroll - 1;
    setStartingBalance({
      ...StartingBalance,
      player1: newbankroll,
    });
  };
  const setPassLinefunction = (index) => {
    let oldbalance = passLine.player1;
    console.log(oldbalance);
    let oldnumber = passLine.player1[index];
    let newnumber = oldnumber + 1;
    oldbalance.splice(index, 1, newnumber);
    console.log(oldbalance);
    let oldbankroll = StartingBalance.player1;
    let newbankroll = oldbankroll - 1;
    setStartingBalance({
      ...StartingBalance,
      player1: newbankroll,
    });
    setPassLine({
      ...passLine,
      player1: oldbalance,
    });
  };
  const Payout = () => {
    console.log(pointbets, "placebets inside");
  };
  const Rollthedice = () => {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let currentRollnumber = dice1 + dice2;
    let indexofPlacebet = null;
    //paying placebets
    console.log(currentRollnumber, thePoint);
    let result = "come out";
    if (thePoint === null) {
      switch (currentRollnumber) {
        case (currentRollnumber = 2):
          console.log("2 craps");

          result = "craps";
          setPassLine({
            ...passLine,
            player1: [0,0],
          });
       
          break;
        case (currentRollnumber = 3):
          console.log("craps 3");
          result = "craps";
          setPassLine({
            ...passLine,
            player1: [0,0],
          });
         
          break;
        case (currentRollnumber = 4):
          console.log("point is 4");
          setthePoint(currentRollnumber);
          result = [0, 1, 2];
          indexofPlacebet = 0;
          break;
        case (currentRollnumber = 5):
          console.log("point is 5");
          setthePoint(currentRollnumber);
          indexofPlacebet = 1;
          break;
        case (currentRollnumber = 6):
          console.log("point is 6");
          setthePoint(currentRollnumber);
          indexofPlacebet = 2;
          break;
        case (currentRollnumber = 7):
          console.log("winner");
          result = "winner";

          let newPayout = passLine.player1[0]  ;
          let oldBalance = StartingBalance.player1;
          let finalPayout = newPayout + oldBalance;
          setStartingBalance({
            ...StartingBalance,
            player1: finalPayout
          })
          
          break;
        case (currentRollnumber = 8):
          console.log("point is 8");
          setthePoint(currentRollnumber);
          indexofPlacebet = 3;
          break;
        case (currentRollnumber = 9):
          console.log("point is 9");
          setthePoint(currentRollnumber);
          indexofPlacebet = 4;

          break;
        case (currentRollnumber = 10):
          setthePoint(currentRollnumber);
          console.log("point is 10");
          indexofPlacebet = 5;
          break;
        case (currentRollnumber = 11):
        
          console.log("winner");
          result = "winner";

           newPayout = passLine.player1[0]  ;
           oldBalance = StartingBalance.player1;
           finalPayout = newPayout + oldBalance;
          setStartingBalance({
            ...StartingBalance,
            player1: finalPayoutcd 
          })
         
          break;
          case (currentRollnumber = 12):
            console.log("12 craps");
  
            result = "craps";
            setPassLine({
              ...passLine,
              player1: [0,0],
            });
         
            break;
      }
    } else if (thePoint !== null) {
      switch (currentRollnumber) {
        case (currentRollnumber = thePoint):
          console.log("point winner");
          setthePoint(null);
          break;
        case (currentRollnumber = 2):
          console.log("hello world 2");
          result = "craps";
          indexofPlacebet = 0;
          break;
        case (currentRollnumber = 3):
          console.log("hello world 3");
          result = "craps";
          indexofPlacebet = 0;
          break;
        case (currentRollnumber = 4):
          console.log("point is 4");
          result = [0, 1, 2];
          indexofPlacebet = 0;
          break;
        case (currentRollnumber = 5):
          console.log("point is 5");
          indexofPlacebet = 1;
          break;
        case (currentRollnumber = 6):
          console.log("point is 6");
          indexofPlacebet = 2;
          break;
        case (currentRollnumber = 7):
          console.log("7 out");
          result = "7 out";
          setpointBets({
            ...pointBets,
            player1: [0, 0, 0, 0, 0, 0],
          });
          setthePoint(null);
          break;
        case (currentRollnumber = 8):
          console.log("point is 8");
          indexofPlacebet = 3;
          break;
        case (currentRollnumber = 9):
          console.log("point is 9");
          indexofPlacebet = 4;

          break;
        case (currentRollnumber = 10):
          console.log("point is 10");
          indexofPlacebet = 5;
          break;
      }
    }
    console.log(result);

    if (thePoint != null && currentRollnumber === 7) {
    } else if (indexofPlacebet !== null && thePoint != null) {
      let newPayout = pointBets.player1[indexofPlacebet] * 2;
      let oldBalance = StartingBalance.player1;
      let finalPayout = newPayout + oldBalance;
      setStartingBalance({
        ...StartingBalance,
        player1: finalPayout,
      });
    }

    // if (
    //   thePoint === null &&
    //   currentRollnumber !== 3 &&
    //   currentRollnumber !== 2 &&
    //   currentRollnumber !== 12 &&
    //   currentRollnumber !== 7
    // ) {
    //   //setting the point
    //   setthePoint(currentRollnumber);
    // } else if (thePoint !== null && currentRollnumber === 7) {
    //   setthePoint(null);
    //   setPointWinner(false);
    // } else if (thePoint === currentRollnumber) {
    //   setthePoint(null);
    //   setPointWinner(true);
    // }

    //point logic

    if (dice1 === dice2) {
      setHard("Hard");
    } else {
      setHard("Soft");
    }

    setdiceroll([dice1, dice2]);
  };

  return (
    <div>
      <h2>the point is {thePoint}</h2>
      {pointWinner ? "winner" : ""}
      <h1>{diceroll}</h1>
      {/* <h1>is it hard? {Hard}</h1> */}
      <button
        onClick={() => {
          return Rollthedice();
        }}
      >
        Dice roll
      </button>
      <h1>Player 1 starting Balance {StartingBalance.player1}</h1>
      {JSON.stringify(pointBets.player1)}
      <PlaceNumberWrapper>
        <PlaceNumbers
          onClick={() => {
            setPlacebets(0);
          }}
        >
          4
        </PlaceNumbers>
        <PlaceNumbers
          onClick={() => {
            setPlacebets(1);
          }}
        >
          5
        </PlaceNumbers>
        <PlaceNumbers
          onClick={() => {
            setPlacebets(2);
          }}
        >
          6
        </PlaceNumbers>
        <PlaceNumbers
          onClick={() => {
            setPlacebets(3);
          }}
        >
          8
        </PlaceNumbers>
        <PlaceNumbers
          onClick={() => {
            setPlacebets(4);
          }}
        >
          9
        </PlaceNumbers>
        <PlaceNumbers
          onClick={() => {
            setPlacebets(5);
          }}
        >
          10
        </PlaceNumbers>
      </PlaceNumberWrapper>
      {JSON.stringify(passLine.player1)}
      <Passline
        onClick={() => {
          setPassLinefunction(0);
        }}
      >
        Passline
      </Passline>
      <Passline onClick={()=> {
        setPassLinefunction(1)
      }}>Odds</Passline>
      {/* <Dontpassline>Don't Passline</Dontpassline> */}
    </div>
  );
}
export default craps;
