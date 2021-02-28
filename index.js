


    var randomNumber1;
    var randomNumber2;

    randomNumber1= Math.floor((Math.random()*6) + 1);
    randomNumber2= Math.floor((Math.random()*6) + 1);

    var imageName1= "images/dice" + randomNumber1 + ".png"
    var imageName2= "images/dice" + randomNumber2 + ".png"

    console.log(randomNumber1);
    console.log(randomNumber2);

    document.querySelector(".img1 ").setAttribute("src", imageName1 )
    document.querySelector(".img2 ").setAttribute("src", imageName2 )


    if( randomNumber1> randomNumber2 ){

        document.querySelector("h1").textContent ="✌Player1 Wins!";

    }
    else if  (randomNumber2> randomNumber1 ){
        document.querySelector("h1").textContent ="Player2 Wins!✌";
    }
    else {
        document.querySelector("h1").textContent = "🤞Draw!";
    }
