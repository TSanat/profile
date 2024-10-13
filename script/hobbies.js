const buttonA = document.getElementById('a')

const buttonB = document.getElementById('b')

const buttonC = document.getElementById('c')

const buttonD = document.getElementById('d')

const text = document.getElementById('text')

const first = "Hobbies are essential for relaxation and personal growth. Whether " +"\n"+
  "it’s reading, painting, sports, or gardening, they allow us to " +"\n"+
  "express ourselves, improve skills, and connect with others. Hobbies " +"\n"+
  "bring joy, balance, and fulfillment, nurturing both our well-being and " +"\n"+
  "happiness amidst daily life."

let clickCounts = {
  'a': 0,
  'b': 0,
  'c': 0,
  'd': 0
}

function resetCount(){
  clickCounts.a = 0
  clickCounts.b = 0
  clickCounts.c = 0
  clickCounts.d = 0
}
function changeTextA(){
  clickCounts.a++;
  if (clickCounts.a === 2) {
    text.innerHTML = first;
    resetCount();
  }
  else{
    text.innerText = "Volleyball is one of my favorite sports! I love " + "\n" +"the excitement of being part of a team and the strategy" + "\n"
      + "involved in each game. There’s nothing quite like the feeling of spiking the ball over the net or" + "\n"
      + " making a great save. Playing volleyball keeps me active and helps improve my coordination."

    clickCounts.b = 0
    clickCounts.c = 0
    clickCounts.d = 0
  }
}

function changeTextB(){
  clickCounts.b++;
  if (clickCounts.b === 2) {
    text.innerHTML = first;
    resetCount();
  }
  else{
    text.innerText = "Coding has become my favorite hobby, blending creativity and problem-solving. I enjoy" +"\n"+ "transforming ideas into functional projects, whether it's a simple app or a game. Each challenge" +"\n"+ "teaches me something new, and the thrill of seeing my code work is unbeatable. Connecting with" +"\n"+ "fellow coders inspires me even more, fueling my passion to learn and grow. It’s truly fulfilling!"
    clickCounts.a = 0
    clickCounts.c = 0
    clickCounts.d = 0
  }
}
function changeTextC(){
  clickCounts.c++;
  if (clickCounts.c === 2) {
    text.innerHTML = first;
    resetCount();
  }
  else{
    text.innerText = "Walking is one of my favorite pastimes. It clears my mind" +"\n"+
      "and refreshes my body. Whether on local trails or in the" +"\n"+
      "neighborhood, each walk gives me a chance to reflect and" +"\n"+
      "unwind in nature. Sometimes, I even find inspiration for" +"\n"+
      "my coding projects during these peaceful moments."
    clickCounts.a = 0
    clickCounts.b = 0
    clickCounts.d = 0
  }
}
function changeTextD(){
  clickCounts.d++;
  if (clickCounts.d === 2) {
    text.innerHTML = first;
    resetCount();
  }
  else{
    text.innerText = "I enjoy crafting plots for mini films. One idea is about a young girl who discovers  " +"\n"+ "her grandmother’s diary, revealing parallel struggles and dreams. As she connects with " +"\n"+ "her grandmother’s past, she finds inspiration to pursue her own passions, highlighting the enduring " +"\n"+ "bonds between generations and the power of family."
    clickCounts.a = 0
    clickCounts.b = 0
    clickCounts.c = 0
  }
}

buttonA.addEventListener('click', changeTextA);
buttonB.addEventListener('click', changeTextB);
buttonC.addEventListener('click', changeTextC);
buttonD.addEventListener('click', changeTextD);
