console.log("AYO! This is Jeo!")

//Declare multiple things when the page loads
  // Timer set at 1:00 / 60s
let timer = 60;
   // Current Score set at 0
let score = 0;
  // High Score set at whatever the current high score is
    // Default at 0 but change after round changes
let highscore = 0;
    // NOTE! High score WILL reset with every reload

// Timer Countdown that runs when "begin" button is clicked
function timeBegin() {
  const timeInterval = setInterval(() => {
    if (timer === 0) {
      game.highscoreCheck()
      clearInterval(timeInterval);
      document.querySelector(".timer").removeEventListener("click", beginGame);
    } else {
      timer--
      console.log(timer)
    }
    const timerText = document.querySelector(".timer")
    timerText.innerHTML = `Timer: ${timer}s`
  }, 1000)
}

// Start Game! Array
let game = {
  playerBurger: [],
  customerBurger: ["topBun", "patty", "bottomBun"],

// Create a "customerBurger" function
  // Creates an array where it ALWAYS starts with a "topBun", randomizes the middle ingredients, ALWAYS has a "patty", and always ends with a "bottomBun"
  customerOrder: function () {

    // All of the randomizers
    let randomOrder = Math.floor(Math.random() * 5);
    let threeItems = Math.floor(Math.random() * 3);
    let twoItems = Math.floor(Math.random() * 6);
    let oneItem = Math.floor(Math.random() * 4);

    // Everything Burger
    if (randomOrder === 4) {
      game.customerBurger.splice(2, 0, "cheese")
      game.customerBurger.splice(1, 0, "lettuce")
      game.customerBurger.splice(1, 0, "tomato")
      game.customerBurger.splice(1, 0, "onion")
      document.getElementById("ticket").innerHTML = "The customer wants an everything burger! <br><br> Top Bun, Onion, Tomato, Lettuce, Patty, Cheese, Bottom Bun"

    // Burgers with only 3 ingredients inside
    } else if (randomOrder === 3) {
      if (threeItems === 2) {
        game.customerBurger.splice(1, 0, "lettuce")
        game.customerBurger.splice(1,0, "tomato")
        game.customerBurger.splice(1, 0, "onion")
        document.getElementById("ticket").innerHTML = "The customer wants no cheese! <br><br> Top Bun, Onion, Tomato, Lettuce, Patty, Bottom Bun"
      } else if (threeItems === 1) {
        game.customerBurger.splice(2, 0, "cheese")
        game.customerBurger.splice(1, 0, "lettuce")
        game.customerBurger.splice(1, 0, "tomato")
        document.getElementById("ticket").innerHTML = "The customer wants no onion! <br><br> Top Bun, Tomato, Lettuce, Patty, Cheese, Bottom Bun"
      } else {
        game.customerBurger.splice(2, 0, "cheese")
        game.customerBurger.splice(1, 0, "lettuce")
        game.customerBurger.splice(1, 0, "onion")
        document.getElementById("ticket").innerHTML = "The customer wants no tomato! <br><br> Top Bun, Onion, Lettuce, Patty, Cheese, Bottom Bun"
      }

    // Burgers with only 2 ingredients inside
    } else if (randomOrder === 2) {
      if (twoItems === 5) {
        game.customerBurger.splice(2, 0, "cheese")
        game.customerBurger.splice(1, 0, "lettuce")
        document.getElementById("ticket").innerHTML = "The customer wants no tomato and no onion! <br><br> Top Bun, Lettuce, Patty, Cheese, Bottom Bun"
      } else if (twoItems === 4) {
        game.customerBurger.splice(2, 0, "cheese")
        game.customerBurger.splice(1, 0, "tomato")
        document.getElementById("ticket").innerHTML = "The customer wants no lettuce and no onion! <br><br> Top Bun, Tomato, Patty, Cheese, Bottom Bun"
      } else if (twoItems === 3) {
        game.customerBurger.splice(2, 0, "cheese")
        game.customerBurger.splice(1, 0, "onion")
        document.getElementById("ticket").innerHTML = "The customer wants no cheese and no onion! <br><br> Top Bun, Tomato, Lettuce, Patty, Bottom Bun"
      } else if (twoItems === 2) {
        game.customerBurger.splice(1, 0, "lettuce")
        game.customerBurger.splice(1, 0, "onion")
        document.getElementById("ticket").innerHTML = "The customer wants no tomato and no cheese! <br><br> Top Bun, Onion, Lettuce, Patty, Bottom Bun"
      } else if (twoItems === 1) {
        game.customerBurger.splice(1, 0, "tomato")
        game.customerBurger.splice(1, 0, "onion")
        document.getElementById("ticket").innerHTML = "The customer wants no cheese and no lettuce! <br><br> Top Bun, Onion, Tomato, Patty, Bottom Bun"
      } else {
        game.customerBurger.splice(1, 0, "lettuce")
        game.customerBurger.splice(1, 0, "tomato")
        document.getElementById("ticket").innerHTML = "The customer wants no onion and no cheese! <br><br> Top Bun, Tomato, Lettuce, Patty, Bottom Bun"
      }

    // Burgers with only 1 ingredient inside
    } else if (randomOrder === 1) {
      if (oneItem === 3) {
        game.customerBurger.splice(1, 0, "onion")
      } else if (oneItem === 2) {
        game.customerBurger.splice(1, 0, "tomato")
      } else if (oneItem === 1) {
        game.customerBurger.splice(1, 0, "lettuce")
      } else {
        game.customerBurger.splice(2, 0, "cheese")
        document.getElementById("ticket").innerHTML = "The customer wants a cheeseburger with extra meat! <br><br> Top Bun, Patty, Cheese, Bottom Bun"
      }

    // Plain Burger
    } else {
      game.customerBurger
      document.getElementById("ticket").innerHTML = "The customer wants a plain hamburger! <br><br> Top Bun, Patty, Bottom Bun"
    }
  },

// Create a "burgerMaker" function
  // Starts with an empty array for players and with each ingredient button pressed will UNSHIFT the ingredient into the array.
  // Building from the bottom up will mean an UNSHIFT and not a POP
  // REMINDER that UNSHIFT will add one or more elements to the BEGINNING of an array
  burgerMaker: function(event) {
      const gameChoice = ["topBun", "onion", "tomato", "lettuce", "patty", "cheese", "bottomBun"]
    if (event.target.id === "topBun") {
      game.playerBurger.unshift(gameChoice[0])
      document.querySelector(".topBunPic").style.display="block"
      console.log("Top Bun")
    } else if (event.target.id === "onion") {
      game.playerBurger.unshift(gameChoice[1])
      document.querySelector(".onionPic").style.display="block"
      console.log("Onion")
    } else if (event.target.id === "tomato") {
      game.playerBurger.unshift(gameChoice[2])
      document.querySelector(".tomatoPic").style.display="block"
      console.log("Tomato")
    } else if (event.target.id === "lettuce") {
      game.playerBurger.unshift(gameChoice[3])
      document.querySelector(".lettucePic").style.display="block"
      console.log("Lettuce")
    } else if (event.target.id === "patty") {
      game.playerBurger.unshift(gameChoice[4])
      document.querySelector(".pattyPic").style.display="block"
      console.log("Patty")
    } else if (event.target.id === "cheese") {
      game.playerBurger.unshift(gameChoice[5])
      document.querySelector(".cheesePic").style.display="block"
      console.log("Cheese")
    } else {
      game.playerBurger.unshift(gameChoice[6])
      document.querySelector(".bottomBunPic").style.display="block"
      console.log("Bottom Bun")
    }
    // console.log(game.playerBurger)
  },

// Burger Check!
  orderCheck: function() {
    if (game.playerBurger.toString() === game.customerBurger.toString()) {
      console.log("Good Burger!")
      document.querySelector(".check").innerHTML = "Great Job! 50 Points!"
      score += 50
      document.querySelector("#score").innerHTML = `Current Score = ${score}`
    } else {
      console.log("WTF Burger?")
      document.querySelector(".check").innerHTML = "What'd you do? Build this upside down?!?"
      score -= 100
      document.querySelector("#score").innerHTML = `Current Score = ${score}`
    }
    game.resetMe()
  },

// Reset function!
  // Hides all pictures
  // Empties out the player's burger array
  // creates a new customer burger
  resetMe: function() {
    document.querySelector(".bottomBunPic").style.display="none"
    document.querySelector(".cheesePic").style.display="none"
    document.querySelector(".pattyPic").style.display="none"
    document.querySelector(".lettucePic").style.display="none"
    document.querySelector(".tomatoPic").style.display="none"
    document.querySelector(".onionPic").style.display="none"
    document.querySelector(".topBunPic").style.display="none"
    game.playerBurger = []
    game.customerBurger = ["topBun", "patty", "bottomBun"],
    game.customerOrder()
  },

  // When timer runs down to 0
    // End Game
    // Compare current score to high score
  highscoreCheck: function () {
    if (score > highscore) {
      highscore = score
      document.querySelector("#highscore").innerHTML = `High Score = ${highscore}`
      document.querySelector(".results").innerHTML = "Great job! You got a new high score! You are a burger master!"
    } else if ((score >= 0) && (score <= highscore)) {
      document.querySelector(".results").innerHTML = "You've got some happy customers!"
    } else {
      document.querySelector(".results").innerHTML = "Wow. You did terrible. What was that?"
    }
    document.querySelector(".check").innerHTML = "Time's Up!"
    document.getElementById("reset").style.display = "block"
    document.getElementById("orderUp").style.display = "none"
  }
}

document.getElementById("orderUp").addEventListener("click", game.orderCheck);

// Top line is different than bottom block

document.getElementById("topBun").addEventListener("click", game.burgerMaker);
document.getElementById("onion").addEventListener("click", game.burgerMaker);
document.getElementById("tomato").addEventListener("click", game.burgerMaker);
document.getElementById("lettuce").addEventListener("click", game.burgerMaker);
document.getElementById("patty").addEventListener("click", game.burgerMaker);
document.getElementById("cheese").addEventListener("click", game.burgerMaker);
document.getElementById("bottomBun").addEventListener("click", game.burgerMaker);

// Clicking the "Begin" button
  // When clicked it will fire multiple functions
    // Timer Countdown
    // Generate customer order
    // Create display for customer order
    // Hide the "begin" button so it can't be clicked again

const beginGame = document.getElementById("begin")
beginGame.addEventListener("click", () => {
  document.getElementById("begin").style.display="none"
  timeBegin()
  document.getElementById("orderUp").style.display="block"
  game.customerOrder()
  console.log(game.customerBurger)
  document.querySelector(".results").innerHTML = "Get those orders out!"
})

const playAgain = document.getElementById("reset")
playAgain.addEventListener("click", () =>  {
  document.getElementById("reset").style.display = "none"
  timeBegin()
  document.getElementById("orderUp").style.display = "block"
  game.resetMe()
  console.log(game.customerBurger)
  timer = 60
  score = 0
  document.querySelector("#score").innerHTML = `Current Score = ${score}`
  document.querySelector(".check").innerHTML = "Here's a new order!"
  document.querySelector(".results").innerHTML = "Get those orders out!"
})