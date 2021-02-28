randomtext= () =>{
    // paragraphs from wikipedia...
    textarray = ['Paragraphs are commonly numbered using the decimal system, where (in books) the integral part of the decimal represents the number of the chapter and the fractional parts are arranged in each chapter in order of magnitude. Thus in Whittaker and Watson\' 1921 A Course of Modern Analysis, chapter 9 is devoted to Fourier Series; within that chapter 9.6 introduces Riemann\'s theory, the following section 9.61 treats an associated function, following 9.62 some properties of that function, following 9.621 a related lemma, while 9.63 introduces Riemann\'s main theorem, and so on. Whittaker and Watson attribute this system of numbering to Giuseppe Peano on their "Contents" page, although this attribution does not seem to be widely credited elsewhere. Gradshteyn and Ryzhik is another book using this scheme since its third edition in 1951.' ,
            'Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the first main entry in the Grand Theft Auto series since 2008\'s Grand Theft Auto IV. Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer and arms smuggler Trevor Philips and their efforts to commit heists while under pressure from a corrupt government agency and powerful criminals. The open world design lets players freely roam San Andreas\' open countryside and the fictional city of Los Santos, based on Los Angeles.The game is played from either a third-person or first-person perspective, and its world is navigated on foot and by vehicle. Players control the three lead protagonists throughout single-player and switch among them, both during and outside missions. The story is centred on the heist sequences, and many missions involve shooting and driving gameplay. A "wanted" system governs the aggression of law enforcement response to players who commit crimes. Grand Theft Auto Online, the game\'s online multiplayer mode, lets up to 30 players engage in a variety of different cooperative and competitive game modes.',
            'The Taj Mahal. \'Crown of the Palace\', is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan (reigned from 1628 to 1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall. Construction of the mausoleum was essentially completed in 1643, but work continued on other phases of the project for another 10 years. The Taj Mahal complex is believed to have been completed in its entirety in 1653 at a cost estimated at the time to be around 32 million rupees, which in 2020 would be approximately 70 billion rupees (about U.S. 956 million). The construction project employed some 20,000 artisans under the guidance of a board of architects led by the court architect to the emperor, Ustad Ahmad Lahauri.',
            'Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end, each comprising two bails balanced on three stumps. The batting side scores runs by striking the ball bowled at the wicket with the bat (and running between the wickets), while the bowling and fielding side tries to prevent this (by preventing the ball from leaving the field, and getting the ball to either wicket) and dismiss each batter (so they are "out"). Means of dismissal include being bowled, when the ball hits the stumps and dislodges the bails, and by the fielding side either catching the ball after it is hit by the bat and before it hits the ground, or hitting a wicket with the ball before a batter can cross the crease in front of the wicket. When ten batters have been dismissed, the innings ends and the teams swap roles. The game is adjudicated by two umpires, aided by a third umpire and match referee in international matches. They communicate with two off-field scorers who record the match\'s statistical information. Forms of cricket range from Twenty20, with each team batting for a single innings of 20 overs, to Test matches played over five days.',
            'Table tennis, also known as ping-pong and whiff-whaff, is a sport in which two or four players hit a lightweight ball, also known as the ping-pong ball, back and forth across a table using small rackets. The game takes place on a hard table divided by a net. Except for the initial serve, the rules are generally as follows: players must allow a ball played toward them to bounce one time on their side of the table, and must return it so that it bounces on the opposite side at least once. A point is scored when a player fails to return the ball within the rules. Play is fast and demands quick reactions. Spinning the ball alters its trajectory and limits an opponent\'s options, giving the hitter a great advantage. Table tennis is governed by the worldwide organization International Table Tennis Federation (ITTF), founded in 1926. ITTF currently includes 226 member associations. The table tennis official rules are specified in the ITTF handbook. Table tennis has been an Olympic sport since 1988, with several event categories. From 1988 until 2004, these were men\'s singles, women\'s singles, men\'s doubles and women\'s doubles. Since 2008, a team event has been played instead of the doubles.',
            'A virus is a submicroscopic infectious agent that replicates only inside the living cells of an organism. Viruses infect all types of life forms, from animals and plants to microorganisms, including bacteria and archaea. Since Dmitri Ivanovsky\'s 1892 article describing a non-bacterial pathogen infecting tobacco plants and the discovery of the tobacco mosaic virus by Martinus Beijerinck in 1898, more than 6,000 virus species have been described in detail of the millions of types of viruses in the environment. Viruses are found in almost every ecosystem on Earth and are the most numerous type of biological entity. The study of viruses is known as virology, a subspeciality of microbiology. When infected, a host cell is forced to rapidly produce thousands of identical copies of the original virus. When not inside an infected cell or in the process of infecting a cell, viruses exist in the form of independent particles, or virions, consisting of: the genetic material, i.e. long molecules of DNA or RNA that encode the structure of the proteins by which the virus acts a protein coat, the capsid, which surrounds and protects the genetic material; and in some cases an outside envelope of lipids. The shapes of these virus particles range from simple helical and icosahedral forms to more complex structures. Most virus species have virions too small to be seen with an optical microscope, as they are one-hundredth the size of most bacteria.'
    ]
    return textarray[Math.floor(Math.random() * textarray.length)];
}
rtext=randomtext();
document.querySelector('#origin-text p').innerHTML=rtext;   
window.onload = () => {
    const myInput = document.getElementById('test-area');
    myInput.onpaste = e =>{ alert("Typo-Meter don't allow Copy and Paste.."); e.preventDefault();}
   }

const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");


var timer = [0,0,0,0];
var interval;
var timerRunning = false;

function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}


function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}


function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0,textEntered.length);
    console.log(textEntered)
    if (textEntered == originText) {
        clearInterval(interval);
        testWrapper.style.border = "6px solid #f2f2f2";
    } else {
        if (textEntered == originTextMatch) {
            testWrapper.style.border = "6px solid #0000ff";
        } else {
            testWrapper.style.border = "6px solid #ff0000";
        }
    }

}


function start() {
    let textEnterdLength = testArea.value.length;
    if (textEnterdLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
    console.log(textEnterdLength);
}

  

function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    timerRunning = false;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.border = "4px solid #f2f2f2";
}


testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);