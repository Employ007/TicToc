import Head from "next/head";

import { global } from "styled-jsx/css";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [playerTurn, setPlayerTurn] = useState(false);
  const [arr1, setArr1] = useState([]);
  const [arr2, setArr2] = useState([]);
  const [dis1, setdis1] = useState(false);
  const [dis2, setdis2] = useState(false);
  const [dis3, setdis3] = useState(false);
  const [dis4, setdis4] = useState(false);
  const [dis5, setdis5] = useState(false);
  const [dis6, setdis6] = useState(false);
  const [dis7, setdis7] = useState(false);
  const [dis8, setdis8] = useState(false);
  const [dis9, setdis9] = useState(false);
  const [match, setMatch] = useState(true);
  const [match1, setMatch1] = useState(true);
  function change(){
    console.log("change")
  }

  function toggle1() {
    console.log("clicked");

    if (playerTurn === false) {
      let id1 = document.getElementById("id1");
      let id2 = document.getElementById("id2");
      id1.style.display = "block";
      id2.style.display = "none";
      setArr1([...arr1, "1"]);
      setdis1(true);
    }
    if (playerTurn === true) {
      let id1 = document.getElementById("id1");
      let id2 = document.getElementById("id2");
      id2.style.display = "block";
      id1.style.display = "none";
      setArr2([...arr2, "1"]);
      setdis1(true);
    }
    if (playerTurn === false) {
      let p2 = document.getElementById("p2");
      let p1 = document.getElementById("p1");
      p2.style.display = "block";
      p1.style.width = "0px";
    }
    if (playerTurn === true) {
      let p1 = document.getElementById("p1");
      p1.style.width = "100%";
      p1.style.display = "block";
    }
    if (playerTurn === false) {
      let p1 = document.getElementById("p1");
      p1.style.display = "none";
    }
    if (playerTurn === true) {
      let p2 = document.getElementById("p2");
      p2.style.display = "none";
    }

    setPlayerTurn(!playerTurn);
    if (arr1.includes("1") && arr1.includes("2") && arr1.includes("3")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("3").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("1") && arr1.includes("4") && arr1.includes("7")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("1") && arr1.includes("5") && arr1.includes("9")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("3") && arr1.includes("6") && arr1.includes("9")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("3") && arr1.includes("5") && arr1.includes("7")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("2") && arr1.includes("5") && arr1.includes("8")) {
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("4") && arr1.includes("5") && arr1.includes("6")) {
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("7") && arr1.includes("8") && arr1.includes("9")) {
      document.getElementById("7").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } 
    

     else if (arr2.includes("1") && arr2.includes("2") && arr2.includes("3")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("3").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("1") && arr2.includes("4") && arr2.includes("7")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("1") && arr2.includes("5") && arr2.includes("9")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("3") && arr2.includes("6") && arr2.includes("9")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("3") && arr2.includes("5") && arr2.includes("7")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("2") && arr2.includes("5") && arr2.includes("8")) {
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("4") && arr2.includes("5") && arr2.includes("6")) {
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("7") && arr2.includes("8") && arr2.includes("9")) {
      document.getElementById("7").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } 
   
  }
  function toggle2() {
    console.log("clicked");

    if (playerTurn === false) {
      let id3 = document.getElementById("id3");
      let id4 = document.getElementById("id4");
      id3.style.display = "block";
      id4.style.display = "none";
      setArr1([...arr1, "2"]);
      setdis2(true);
    }
    if (playerTurn === true) {
      let id3 = document.getElementById("id3");
      let id4 = document.getElementById("id4");
      id4.style.display = "block";
      id3.style.display = "none";
      setArr2([...arr2, "2"]);
      setdis2(true);
    }
    if (playerTurn === false) {
      let p2 = document.getElementById("p2");
      let p1 = document.getElementById("p1");
      p2.style.display = "block";
      p1.style.width = "0px";
    }
    if (playerTurn === true) {
      let p1 = document.getElementById("p1");
      p1.style.width = "100%";
      p1.style.display = "block";
    }
    if (playerTurn === false) {
      let p1 = document.getElementById("p1");
      p1.style.display = "none";
    }
    if (playerTurn === true) {
      let p2 = document.getElementById("p2");
      p2.style.display = "none";
    }

    setPlayerTurn(!playerTurn);
    if (arr1.includes("1") && arr1.includes("2") && arr1.includes("3")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("3").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("1") && arr1.includes("4") && arr1.includes("7")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("1") && arr1.includes("5") && arr1.includes("9")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("3") && arr1.includes("6") && arr1.includes("9")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("3") && arr1.includes("5") && arr1.includes("7")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("2") && arr1.includes("5") && arr1.includes("8")) {
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("4") && arr1.includes("5") && arr1.includes("6")) {
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("7") && arr1.includes("8") && arr1.includes("9")) {
      document.getElementById("7").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } 
    

     else if (arr2.includes("1") && arr2.includes("2") && arr2.includes("3")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("3").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("1") && arr2.includes("4") && arr2.includes("7")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("1") && arr2.includes("5") && arr2.includes("9")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("3") && arr2.includes("6") && arr2.includes("9")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("3") && arr2.includes("5") && arr2.includes("7")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("2") && arr2.includes("5") && arr2.includes("8")) {
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("4") && arr2.includes("5") && arr2.includes("6")) {
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("7") && arr2.includes("8") && arr2.includes("9")) {
      document.getElementById("7").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } 
    
  }
  function toggle3() {
    console.log("clicked");
    
    if (playerTurn === false) {
      let id5 = document.getElementById("id5");
      let id6 = document.getElementById("id6");
      id5.style.display = "block";
      id6.style.display = "none";
      setArr1([...arr1, "3"]);
      setdis3(true);
      
    }
    if (playerTurn === true) {
      let id5 = document.getElementById("id5");
      let id6 = document.getElementById("id6");
      id6.style.display = "block";
      id5.style.display = "none";
      setArr2([...arr2, "3"]);
      setdis3(true);
    }
    if (playerTurn === false) {
      let p2 = document.getElementById("p2");
      let p1 = document.getElementById("p1");
      p2.style.display = "block";
      p1.style.width = "0px";
    }
    if (playerTurn === true) {
      let p1 = document.getElementById("p1");
      p1.style.width = "100%";
      p1.style.display = "block";
    }
    if (playerTurn === false) {
      let p1 = document.getElementById("p1");
      p1.style.display = "none";
    }
    if (playerTurn === true) {
      let p2 = document.getElementById("p2");
      p2.style.display = "none";
    }

    setPlayerTurn(!playerTurn);
    if (arr1.includes("1") && arr1.includes("2") && arr1.includes("3")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("3").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("1") && arr1.includes("4") && arr1.includes("7")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("1") && arr1.includes("5") && arr1.includes("9")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("3") && arr1.includes("6") && arr1.includes("9")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("3") && arr1.includes("5") && arr1.includes("7")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("2") && arr1.includes("5") && arr1.includes("8")) {
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("4") && arr1.includes("5") && arr1.includes("6")) {
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("7") && arr1.includes("8") && arr1.includes("9")) {
      document.getElementById("7").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } 
    

     else if (arr2.includes("1") && arr2.includes("2") && arr2.includes("3")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("3").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("1") && arr2.includes("4") && arr2.includes("7")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("1") && arr2.includes("5") && arr2.includes("9")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("3") && arr2.includes("6") && arr2.includes("9")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("3") && arr2.includes("5") && arr2.includes("7")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("2") && arr2.includes("5") && arr2.includes("8")) {
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("4") && arr2.includes("5") && arr2.includes("6")) {
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("7") && arr2.includes("8") && arr2.includes("9")) {
      document.getElementById("7").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } 
    
  }
  function toggle4() {
    console.log("clicked");

    if (playerTurn === false) {
      let id7 = document.getElementById("id7");
      let id8 = document.getElementById("id8");
      id7.style.display = "block";
      id8.style.display = "none";
      setArr1([...arr1, "4"]);
      setdis4(true);
    }
    if (playerTurn === true) {
      let id7 = document.getElementById("id7");
      let id8 = document.getElementById("id8");
      id8.style.display = "block";
      id7.style.display = "none";
      setArr2([...arr2, "4"]);
      setdis4(true);
    }
    if (playerTurn === false) {
      let p2 = document.getElementById("p2");
      let p1 = document.getElementById("p1");
      p2.style.display = "block";
      p1.style.width = "0px";
    }
    if (playerTurn === true) {
      let p1 = document.getElementById("p1");
      p1.style.width = "100%";
      p1.style.display = "block";
    }
    if (playerTurn === false) {
      let p1 = document.getElementById("p1");
      p1.style.display = "none";
    }
    if (playerTurn === true) {
      let p2 = document.getElementById("p2");
      p2.style.display = "none";
    }

    setPlayerTurn(!playerTurn);
    if (arr1.includes("1") && arr1.includes("2") && arr1.includes("3")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("3").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("1") && arr1.includes("4") && arr1.includes("7")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("1") && arr1.includes("5") && arr1.includes("9")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("3") && arr1.includes("6") && arr1.includes("9")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("3") && arr1.includes("5") && arr1.includes("7")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("2") && arr1.includes("5") && arr1.includes("8")) {
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("4") && arr1.includes("5") && arr1.includes("6")) {
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("7") && arr1.includes("8") && arr1.includes("9")) {
      document.getElementById("7").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } 
    

     else if (arr2.includes("1") && arr2.includes("2") && arr2.includes("3")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("3").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("1") && arr2.includes("4") && arr2.includes("7")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("1") && arr2.includes("5") && arr2.includes("9")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("3") && arr2.includes("6") && arr2.includes("9")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("3") && arr2.includes("5") && arr2.includes("7")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("2") && arr2.includes("5") && arr2.includes("8")) {
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("4") && arr2.includes("5") && arr2.includes("6")) {
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("7") && arr2.includes("8") && arr2.includes("9")) {
      document.getElementById("7").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } 
    
  }
  function toggle5() {
    console.log("clicked");

    if (playerTurn === false) {
      let id9 = document.getElementById("id9");
      let id10 = document.getElementById("id10");
      id9.style.display = "block";
      id10.style.display = "none";
      setArr1([...arr1, "5"]);
      setdis5(true);
    }
    if (playerTurn === true) {
      let id9 = document.getElementById("id9");
      let id10 = document.getElementById("id10");
      id10.style.display = "block";
      id9.style.display = "none";
      setArr2([...arr2, "5"]);
      setdis5(true);
    }
    if (playerTurn === false) {
      let p2 = document.getElementById("p2");
      let p1 = document.getElementById("p1");
      p2.style.display = "block";
      p1.style.width = "0px";
    }
    if (playerTurn === true) {
      let p1 = document.getElementById("p1");
      p1.style.width = "100%";
      p1.style.display = "block";
    }
    if (playerTurn === false) {
      let p1 = document.getElementById("p1");
      p1.style.display = "none";
    }
    if (playerTurn === true) {
      let p2 = document.getElementById("p2");
      p2.style.display = "none";
    }

    setPlayerTurn(!playerTurn);
    if (arr1.includes("1") && arr1.includes("2") && arr1.includes("3")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("3").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("1") && arr1.includes("4") && arr1.includes("7")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("1") && arr1.includes("5") && arr1.includes("9")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("3") && arr1.includes("6") && arr1.includes("9")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("3") && arr1.includes("5") && arr1.includes("7")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("2") && arr1.includes("5") && arr1.includes("8")) {
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("4") && arr1.includes("5") && arr1.includes("6")) {
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("7") && arr1.includes("8") && arr1.includes("9")) {
      document.getElementById("7").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } 
    

     else if (arr2.includes("1") && arr2.includes("2") && arr2.includes("3")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("3").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("1") && arr2.includes("4") && arr2.includes("7")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("1") && arr2.includes("5") && arr2.includes("9")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("3") && arr2.includes("6") && arr2.includes("9")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("3") && arr2.includes("5") && arr2.includes("7")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("2") && arr2.includes("5") && arr2.includes("8")) {
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("4") && arr2.includes("5") && arr2.includes("6")) {
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("7") && arr2.includes("8") && arr2.includes("9")) {
      document.getElementById("7").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } 
   
  }
  function toggle6() {
    console.log("clicked");

    if (playerTurn === false) {
      let id11 = document.getElementById("id11");
      let id12 = document.getElementById("id12");
      id11.style.display = "block";
      id12.style.display = "none";
      setArr1([...arr1, "6"]);
      setdis6(true);
    }
    if (playerTurn === true) {
      let id11 = document.getElementById("id11");
      let id12 = document.getElementById("id12");
      id12.style.display = "block";
      id11.style.display = "none";
      setArr2([...arr2, "6"]);
      setdis6(true);
    }
    if (playerTurn === false) {
      let p2 = document.getElementById("p2");
      let p1 = document.getElementById("p1");
      p2.style.display = "block";
      p1.style.width = "0px";
    }
    if (playerTurn === true) {
      let p1 = document.getElementById("p1");
      p1.style.width = "100%";
      p1.style.display = "block";
    }
    if (playerTurn === false) {
      let p1 = document.getElementById("p1");
      p1.style.display = "none";
    }
    if (playerTurn === true) {
      let p2 = document.getElementById("p2");
      p2.style.display = "none";
    }

    setPlayerTurn(!playerTurn);
    if (arr1.includes("1") && arr1.includes("2") && arr1.includes("3")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("3").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("1") && arr1.includes("4") && arr1.includes("7")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("1") && arr1.includes("5") && arr1.includes("9")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("3") && arr1.includes("6") && arr1.includes("9")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("3") && arr1.includes("5") && arr1.includes("7")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("2") && arr1.includes("5") && arr1.includes("8")) {
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("4") && arr1.includes("5") && arr1.includes("6")) {
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("7") && arr1.includes("8") && arr1.includes("9")) {
      document.getElementById("7").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } 
    

     else if (arr2.includes("1") && arr2.includes("2") && arr2.includes("3")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("3").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("1") && arr2.includes("4") && arr2.includes("7")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("1") && arr2.includes("5") && arr2.includes("9")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("3") && arr2.includes("6") && arr2.includes("9")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("3") && arr2.includes("5") && arr2.includes("7")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("2") && arr2.includes("5") && arr2.includes("8")) {
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("4") && arr2.includes("5") && arr2.includes("6")) {
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("7") && arr2.includes("8") && arr2.includes("9")) {
      document.getElementById("7").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } 
    
  }
  function toggle7() {
    console.log("clicked");

    if (playerTurn === false) {
      let id13 = document.getElementById("id13");
      let id14 = document.getElementById("id14");
      id13.style.display = "block";
      id14.style.display = "none";
      setArr1([...arr1, "7"]);
      setdis7(true);
    }
    if (playerTurn === true) {
      let id13 = document.getElementById("id13");
      let id14 = document.getElementById("id14");
      id14.style.display = "block";
      id13.style.display = "none";
      setArr2([...arr2, "7"]);
      setdis7(true);
    }
    if (playerTurn === false) {
      let p2 = document.getElementById("p2");
      let p1 = document.getElementById("p1");
      p2.style.display = "block";
      p1.style.width = "0px";
    }
    if (playerTurn === true) {
      let p1 = document.getElementById("p1");
      p1.style.width = "100%";
      p1.style.display = "block";
    }
    if (playerTurn === false) {
      let p1 = document.getElementById("p1");
      p1.style.display = "none";
    }
    if (playerTurn === true) {
      let p2 = document.getElementById("p2");
      p2.style.display = "none";
    }

    setPlayerTurn(!playerTurn);
    if (arr1.includes("1") && arr1.includes("2") && arr1.includes("3")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("3").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("1") && arr1.includes("4") && arr1.includes("7")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("1") && arr1.includes("5") && arr1.includes("9")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("3") && arr1.includes("6") && arr1.includes("9")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("3") && arr1.includes("5") && arr1.includes("7")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("2") && arr1.includes("5") && arr1.includes("8")) {
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("4") && arr1.includes("5") && arr1.includes("6")) {
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("7") && arr1.includes("8") && arr1.includes("9")) {
      document.getElementById("7").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } 
    

     else if (arr2.includes("1") && arr2.includes("2") && arr2.includes("3")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("3").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("1") && arr2.includes("4") && arr2.includes("7")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("1") && arr2.includes("5") && arr2.includes("9")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("3") && arr2.includes("6") && arr2.includes("9")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("3") && arr2.includes("5") && arr2.includes("7")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("2") && arr2.includes("5") && arr2.includes("8")) {
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("4") && arr2.includes("5") && arr2.includes("6")) {
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("7") && arr2.includes("8") && arr2.includes("9")) {
      document.getElementById("7").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } 
    
  }
  function toggle8() {
    console.log("clicked");

    if (playerTurn === false) {
      let id15 = document.getElementById("id15");
      let id16 = document.getElementById("id16");
      id15.style.display = "block";
      id16.style.display = "none";
      setArr1([...arr1, "8"]);
      setdis8(true);
    }
    if (playerTurn === true) {
      let id15 = document.getElementById("id15");
      let id16 = document.getElementById("id16");
      id16.style.display = "block";
      id15.style.display = "none";
      setArr2([...arr2, "8"]);
      setdis8(true);
    }
    if (playerTurn === false) {
      let p2 = document.getElementById("p2");
      let p1 = document.getElementById("p1");
      p2.style.display = "block";
      p1.style.width = "0px";
    }
    if (playerTurn === true) {
      let p1 = document.getElementById("p1");
      p1.style.width = "100%";
      p1.style.display = "block";
    }
    if (playerTurn === false) {
      let p1 = document.getElementById("p1");
      p1.style.display = "none";
    }
    if (playerTurn === true) {
      let p2 = document.getElementById("p2");
      p2.style.display = "none";
    }

    setPlayerTurn(!playerTurn);
    if (arr1.includes("1") && arr1.includes("2") && arr1.includes("3")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("3").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("1") && arr1.includes("4") && arr1.includes("7")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("1") && arr1.includes("5") && arr1.includes("9")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("3") && arr1.includes("6") && arr1.includes("9")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("3") && arr1.includes("5") && arr1.includes("7")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("2") && arr1.includes("5") && arr1.includes("8")) {
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("4") && arr1.includes("5") && arr1.includes("6")) {
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("7") && arr1.includes("8") && arr1.includes("9")) {
      document.getElementById("7").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } 
    

     else if (arr2.includes("1") && arr2.includes("2") && arr2.includes("3")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("3").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("1") && arr2.includes("4") && arr2.includes("7")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("1") && arr2.includes("5") && arr2.includes("9")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("3") && arr2.includes("6") && arr2.includes("9")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("3") && arr2.includes("5") && arr2.includes("7")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("2") && arr2.includes("5") && arr2.includes("8")) {
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("4") && arr2.includes("5") && arr2.includes("6")) {
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("7") && arr2.includes("8") && arr2.includes("9")) {
      document.getElementById("7").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } 
    
  }
  function toggle9() {
    console.log("clicked");

    if (playerTurn === false) {
      let id17 = document.getElementById("id17");
      let id18 = document.getElementById("id18");
      id17.style.display = "block";
      id18.style.display = "none";
      setArr1([...arr1, "9"]);
      setdis9(true);
    }
    if (playerTurn === true) {
      let id17 = document.getElementById("id17");
      let id18 = document.getElementById("id18");
      id18.style.display = "block";
      id17.style.display = "none";
      setArr2([...arr2, "9"]);
      setdis9(true);
    }
    if (playerTurn === false) {
      let p2 = document.getElementById("p2");
      let p1 = document.getElementById("p1");
      p2.style.display = "block";
      p1.style.width = "0px";
    }
    if (playerTurn === true) {
      let p1 = document.getElementById("p1");
      p1.style.width = "100%";
      p1.style.display = "block";
    }
    if (playerTurn === false) {
      let p1 = document.getElementById("p1");
      p1.style.display = "none";
    }
    if (playerTurn === true) {
      let p2 = document.getElementById("p2");
      p2.style.display = "none";
    }

    setPlayerTurn(!playerTurn);
    if (arr1.includes("1") && arr1.includes("2") && arr1.includes("3")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("3").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("1") && arr1.includes("4") && arr1.includes("7")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("1") && arr1.includes("5") && arr1.includes("9")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("3") && arr1.includes("6") && arr1.includes("9")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("3") && arr1.includes("5") && arr1.includes("7")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("2") && arr1.includes("5") && arr1.includes("8")) {
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("4") && arr1.includes("5") && arr1.includes("6")) {
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("7") && arr1.includes("8") && arr1.includes("9")) {
      document.getElementById("7").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } 
    

     else if (arr2.includes("1") && arr2.includes("2") && arr2.includes("3")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("3").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("1") && arr2.includes("4") && arr2.includes("7")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("1") && arr2.includes("5") && arr2.includes("9")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("3") && arr2.includes("6") && arr2.includes("9")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("3") && arr2.includes("5") && arr2.includes("7")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("2") && arr2.includes("5") && arr2.includes("8")) {
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("4") && arr2.includes("5") && arr2.includes("6")) {
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("7") && arr2.includes("8") && arr2.includes("9")) {
      document.getElementById("7").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } 
    
  }
  console.log(arr1);
  console.log(arr2);
  function submit() {
    
    if (arr1.includes("1") && arr1.includes("2") && arr1.includes("3")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("3").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("1") && arr1.includes("4") && arr1.includes("7")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("1") && arr1.includes("5") && arr1.includes("9")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("3") && arr1.includes("6") && arr1.includes("9")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("3") && arr1.includes("5") && arr1.includes("7")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("2") && arr1.includes("5") && arr1.includes("8")) {
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("4") && arr1.includes("5") && arr1.includes("6")) {
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } else if (arr1.includes("7") && arr1.includes("8") && arr1.includes("9")) {
      document.getElementById("7").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer One Wins!");
      setMatch(!match);
    } 
    

     else if (arr2.includes("1") && arr2.includes("2") && arr2.includes("3")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("3").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("1") && arr2.includes("4") && arr2.includes("7")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("1") && arr2.includes("5") && arr2.includes("9")) {
      document.getElementById("1").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("3") && arr2.includes("6") && arr2.includes("9")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("3") && arr2.includes("5") && arr2.includes("7")) {
      document.getElementById("3").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("7").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("2") && arr2.includes("5") && arr2.includes("8")) {
      document.getElementById("2").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("4") && arr2.includes("5") && arr2.includes("6")) {
      document.getElementById("4").style.backgroundColor = "blue";
      document.getElementById("5").style.backgroundColor = "blue";
      document.getElementById("6").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } else if (arr2.includes("7") && arr2.includes("8") && arr2.includes("9")) {
      document.getElementById("7").style.backgroundColor = "blue";
      document.getElementById("8").style.backgroundColor = "blue";
      document.getElementById("9").style.backgroundColor = "blue";
      alert("PLayer Two Wins!");
      setMatch1(!match1);
    } 
    else if (match === true && match1 === true){
      alert(
        "Either game is draw or some boxes are empty to fill"
      )
    }
     
  }
  return (
    <>
      <Head>
        <title>Code Mist App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-[100%] flex justify-center bg-[#0099ff65] items-center h-full  ">
        <div className="w-[80%] h-[100px] flex justify-center items-center">
          <ul className="flex md:w-[60%] sm:w-[80%] w-[90%] justify-between font-[500] sm:text-[20px] md:text-[17px]  text-[14px] m-auto">
            <a href="/">
              {" "}
              <li>Replay</li>
            </a>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="w-[100%] h-[657px] flex justify-center flex-col items-center bg-[#00d9ff31]">
        <div className="w-[80%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[35%] m-auto sm:h-[400px] h-[300px] flex flex-col justify-center bg-[#006eff70]">
          <div className="flex mt-[5px]">
            <div className="w-[32%] ml-auto border-solid border-[black] flex justify-center border-t-[transparent] border-l-[transparent] border-[6px] items-center h-[100px] sm:h-[120px] ">
              <button
                className="w-[60%] h-[90%] flex  hover:cursor-pointer justify-center "
                onClick={toggle1}
                onChange={change}
                disabled={dis1}
                id="1"
              >
                <img
                  id="id1"
                  className="h-full w-full hidden"
                  src="https://www.iconpacks.net/icons/2/free-confirm-check-icon-3091-thumb.png"
                  alt=""
                />
                <img
                  className=" w-[90%] h-[90%] mt-[5px] hidden"
                  src="https://icon-library.com/images/cross-icon/cross-icon-1.jpg"
                  alt=""
                  id="id2"
                />
              </button>
            </div>
            <div className="w-[32%] h-[100px] sm:h-[120px] items-center border-solid border-[black] flex justify-center border-[6px]  border-t-[transparent] ">
              <button
                onClick={toggle2}
                id="2"
                disabled={dis2}
                className="w-[60%] h-[90%] flex justify-center"
              >
                <img
                  className="  h-full w-full hidden"
                  src="https://www.iconpacks.net/icons/2/free-confirm-check-icon-3091-thumb.png"
                  alt=""
                  id="id3"
                />
                <img
                  className=" w-[90%] h-[90%] mt-[5px] hidden"
                  src="https://icon-library.com/images/cross-icon/cross-icon-1.jpg"
                  alt=""
                  id="id4"
                />
              </button>
            </div>
            <div className="w-[32%]  mr-auto  border-solid border-[black] flex justify-center border-[6px] border-r-[transparent] border-t-[transparent] h-[100px] sm:h-[120px] items-center">
              <button
                id="3"
                onClick={toggle3}
                disabled={dis3}
                className="w-[60%] h-[90%] flex justify-center"
              >
                <img
                  className="  h-full w-full hidden"
                  src="https://www.iconpacks.net/icons/2/free-confirm-check-icon-3091-thumb.png"
                  alt=""
                  id="id5"
                />
                <img
                  className=" w-[90%] h-[90%] mt-[5px] hidden"
                  src="https://icon-library.com/images/cross-icon/cross-icon-1.jpg"
                  alt=""
                  id="id6"
                />
              </button>
            </div>
          </div>
          <div className="flex ">
            <div className="w-[32%] border-solid border-r-[black] flex justify-center border-b-[black] border-t-[black] border-l-[transparent] border-[6px] ml-auto h-[100px] sm:h-[120px] items-center">
              <button
                id="4"
                disabled={dis4}
                onClick={toggle4}
                className="w-[60%] h-[90%] flex justify-center"
              >
                <img
                  className="  h-full w-full hidden"
                  src="https://www.iconpacks.net/icons/2/free-confirm-check-icon-3091-thumb.png"
                  alt=""
                  id="id7"
                />
                <img
                  className=" w-[90%] h-[90%] mt-[5px] hidden"
                  src="https://icon-library.com/images/cross-icon/cross-icon-1.jpg"
                  alt=""
                  id="id8"
                />
              </button>
            </div>
            <div className="w-[32%] border-solid border-[black] flex justify-center border-[6px] items-center h-[100px] sm:h-[120px]">
              <button
                id="5"
                disabled={dis5}
                onClick={toggle5}
                className="w-[60%] h-[90%] flex justify-center"
              >
                <img
                  className="  h-full w-full hidden"
                  src="https://www.iconpacks.net/icons/2/free-confirm-check-icon-3091-thumb.png"
                  alt=""
                  id="id9"
                />
                <img
                  className=" w-[90%] h-[90%] mt-[5px] hidden"
                  src="https://icon-library.com/images/cross-icon/cross-icon-1.jpg"
                  alt=""
                  id="id10"
                />
              </button>
            </div>
            <div className="w-[32%] border-solid border-r-[transparent] flex items-center justify-center border-[black] border-[6px] mr-auto  h-[100px] sm:h-[120px] ">
              <button
                id="6"
                disabled={dis6}
                onClick={toggle6}
                className="w-[60%] h-[90%] flex justify-center"
              >
                <img
                  className="  h-full w-full hidden"
                  src="https://www.iconpacks.net/icons/2/free-confirm-check-icon-3091-thumb.png"
                  alt=""
                  id="id11"
                />
                <img
                  className=" w-[90%] h-[90%] mt-[5px] hidden"
                  src="https://icon-library.com/images/cross-icon/cross-icon-1.jpg"
                  alt=""
                  id="id12"
                />
              </button>
            </div>
          </div>
          <div className="flex mb-[5px]">
            <div className="w-[32%] border-solid items-center border-[black] flex justify-center border-[6px] ml-auto h-[100px] sm:h-[120px] border-l-[transparent] border-b-[transparent] ">
              <button
                id="7"
                disabled={dis7}
                onClick={toggle7}
                className="w-[60%]  h-[90%] flex justify-center"
              >
                <img
                  className="  h-full w-full hidden"
                  src="https://www.iconpacks.net/icons/2/free-confirm-check-icon-3091-thumb.png"
                  alt=""
                  id="id13"
                />
                <img
                  className=" w-[90%] h-[90%] mt-[5px] hidden"
                  src="https://icon-library.com/images/cross-icon/cross-icon-1.jpg"
                  alt=""
                  id="id14"
                />
              </button>
            </div>
            <div className="w-[32%] border-solid items-center border-[black] flex justify-center border-[6px] border-b-[transparent]  h-[100px] sm:h-[120px] ">
              <button
                id="8"
                disabled={dis8}
                onClick={toggle8}
                className="w-[60%] h-[90%] flex justify-center"
              >
                <img
                  className="  h-full w-full hidden"
                  src="https://www.iconpacks.net/icons/2/free-confirm-check-icon-3091-thumb.png"
                  alt=""
                  id="id15"
                />
                <img
                  className=" w-[90%] h-[90%] mt-[5px] hidden"
                  src="https://icon-library.com/images/cross-icon/cross-icon-1.jpg"
                  alt=""
                  id="id16"
                />
              </button>
            </div>
            <div className="w-[32%] border-solid items-center border-[black] flex justify-center border-[6px] mr-auto border-r-[transparent] border-b-[transparent] h-[100px] sm:h-[120px]">
              <button
                id="9"
                disabled={dis9}
                onClick={toggle9}
                className="w-[60%]  h-[90%] flex justify-center"
              >
                <img
                  className="  h-full w-full hidden"
                  src="https://www.iconpacks.net/icons/2/free-confirm-check-icon-3091-thumb.png"
                  alt=""
                  id="id17"
                />
                <img
                  className=" w-[90%] h-[90%] mt-[5px] hidden"
                  src="https://icon-library.com/images/cross-icon/cross-icon-1.jpg"
                  alt=""
                  id="id18"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="w-[100%] absolute top-[120px] flex flex-col items-center">
          <div className="font-[700]  text-[#ff3a7b] text-[25px]">
            Tic Tac Tao
          </div>
          <div>
            <h1 className="font-[500]  text-[#3da3b1] text-[25px]" id="p1">
              First Player
            </h1>
          </div>
          <div>
            <h1
              className="font-[500] transition-all duration-300 text-[#3da3b1] text-[25px] hidden"
              id="p2"
            >
              Second Player
            </h1>
          </div>
        </div>
        <div className="w-[100%]">
          <div className="w-[100%] flex justify-center">
            {" "}
            <button
              onClick={submit}
              className="w-[200px] h-[30px] bg-[#ff3a7b] mt-[-60px]  mb-[30px] rounded-lg text-[18px] font-[500] text-white shadow-md shadow-[#ff00b3af]"
            >
              Submit
            </button>
          </div>
          <div className="flex justify-center font-sans font-[700] sm:text-[18px] text-[11px] w-[100%]">
            &copy; Copyright to CodeBand Develop by Ahsan.
          </div>
        </div>
      </div>
    </>
  );
}
