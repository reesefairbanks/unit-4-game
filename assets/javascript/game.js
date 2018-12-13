/* Computer generates random number between 19-120
    Create user's total score
    Create 4 crystals
        Each crystal has a randomly generated value 1-12
    User clicks crystals
        Add value to user's total score
    If total score goes above random number player loses
        Reset game
            computer chooses new random number
            Total score goes to zero
            Crystals generate new value
        Losses increase
        Alert player lost
    If total score equals random number, player wins
        reset game
        Wins increase
        Alert player wins
    Else game continues    
*/
document.ready(function() {
    function randomNumber(min,max) {
        return Math.floor(Math.random() * max) + min;
    }
    var computerChoice = randomNumber(19,120);
    console.log(computerChoice);
    var blueCrystal = randomNumber(1,12);
    var redCrystal = randomNumber(1,12);
    var yellowCrystal = randomNumber(1,12);
    var greenCrystal = randomNumber(1,12);
    console.log(blueCrystal, redCrystal, yellowCrystal, greenCrystal);
});

