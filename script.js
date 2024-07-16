  function start() {
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("rock").style.visibility = "visible";
    document.getElementById("paper").style.visibility = "visible";
    document.getElementById("scissors").style.visibility = "visible";
  }
  
  const clickedHand = ["<img src='rock.jpeg' id='img1'>", "<img src='paper.jpeg' id='img1'>", "<img src='scissor.jpeg' id='img1'>"];
  const clickedRightHand = ["<img src='rock.jpeg' id='img2'>", "<img src='paper.jpeg' id='img2'>", "<img src='scissor.jpeg' id='img2'>"];
  
  function game(position) {
    document.getElementById("img1").style.animation = 'shakeLeft 1s 5 ease-in-out';
    document.getElementById("img2").style.animation = 'shakeRight 1s 5 ease-in-out';
  
    const random = Math.floor(Math.random() * 3);
    setTimeout(() => {
      document.getElementById("hand2").innerHTML = clickedRightHand[random];
      document.getElementById("hand1").innerHTML = clickedHand[position];
      
      setTimeout(() => {
        if (random === position) {
          alert("MATCH DRAW!!");
        } else if (
          (position === 0 && random === 2) ||
          (position === 1 && random === 0) ||
          (position === 2 && random === 1)
        ) {
          alert("YOU ARE WINNER , GOOD JOB !!");
        } else {
          alert("COMPUTER IS WINNER, TRY NEXT TIME !!");
        }
        resetGame();
      }, 1000);
    }, 1000);
  }
  
  function resetGame() {
    setTimeout(() => {
      document.getElementById("img1").style.animation = '';
      document.getElementById("img2").style.animation = '';
      document.getElementById("hand1").innerHTML = "<img src='rock.jpeg' id='img1'>";
      document.getElementById("hand2").innerHTML = "<img src='rock.jpeg' id='img2'>";
      document.getElementById("start").style.visibility = "visible";
      document.getElementById("rock").style.visibility = "hidden";
      document.getElementById("paper").style.visibility = "hidden";
      document.getElementById("scissors").style.visibility = "hidden";
    }, 3000);
  }
  