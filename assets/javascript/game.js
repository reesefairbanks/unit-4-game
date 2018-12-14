/* Computer generates random number between 19-120
    Create user's total score
    Create 4 crystals
        Each crystal has a randomly generated value 1-12
    User clicks crystals
        Add value to user's total score
    If total score goes above random number player loses
        Reset game
            Computer chooses new random number
            Total score goes to zero
            Crystals generate new value
        Losses increase
        Alert player lost
    If total score equals random number, player wins
        Reset game
        Wins increase
        Alert player wins
    Else game continues    
*/
//document.ready(function() {
    function randomNumber(min,max) {
        return Math.floor(Math.random() * max) + min;
    }
    var targetNumber = randomNumber(19,120);
    var counter = 0;
    //var blueCrystal = randomNumber(1,12);
    //var redCrystal = randomNumber(1,12);
    //var yellowCrystal = randomNumber(1,12);
    //var greenCrystal = randomNumber(1,12);
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    $("#number-to-guess").text(targetNumber);

    $(".crystal-image").on("click", function() {

    });
    // Compare random number with user's score to determine win or lose
    if (counter === targetNumber) {
        alert("You win!");
      }
  
      else if (counter >= targetNumber) {
        alert("You lose!!");
      }
//});

