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
    player1: [0, 0, 0, 0],
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
  };
  const setPassLinefunction = (index) => {
    let oldbalance = passLine.player1;
    console.log(oldbalance);
    let oldnumber = passLine.player1[index];
    let newnumber = oldnumber + 1;
    oldbalance.splice(index, 1, newnumber);
    console.log(oldbalance);

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
    switch (currentRollnumber) {
      case (currentRollnumber = 4):
        indexofPlacebet = 0;
        break;
      case (currentRollnumber = 5):
        indexofPlacebet = 1;
        break;
      case (currentRollnumber = 6):
        indexofPlacebet = 2;
        break;
      case (currentRollnumber = 8):
        indexofPlacebet = 3;
        break;
      case (currentRollnumber = 9):
        indexofPlacebet = 4;
        break;
      case (currentRollnumber = 10):
        indexofPlacebet = 5;
        break;
    }
    if (indexofPlacebet !== null && thePoint != null) {
      let newPayout = pointBets.player1[indexofPlacebet] * 2;
      let oldBalance = StartingBalance.player1;
      let finalPayout = newPayout + oldBalance;
      setStartingBalance({
        ...StartingBalance,
        player1: finalPayout,
      });
    }

    if (
      thePoint === null &&
      currentRollnumber !== 3 &&
      currentRollnumber !== 2 &&
      currentRollnumber !== 12 &&
      currentRollnumber !== 7
    ) {
      //setting the point
      setthePoint(currentRollnumber);
    } else if (thePoint !== null && currentRollnumber === 7) {
      setthePoint(null);
      setPointWinner(false);
    } else if (thePoint === currentRollnumber) {
      setthePoint(null);
      setPointWinner(true);
    }

    if (dice1 === dice2) {
      setHard("Hard");
    } else {
      setHard("Soft");
    }

    setdiceroll([dice1, dice2]);
    console.log(pointBets, "place bets inside rooll");
  };
  console.log(betState, "the bet state");
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
      {/* <Dontpassline>Don't Passline</Dontpassline> */}
    </div>
  );
}
export default craps;
