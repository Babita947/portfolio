// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#808080", "#FCBC0F", "#F85F36"];
// const colors = ["#808080"];
const fontIcons = [ 'fa-subscript', 'fa-star-o','fa-paper-plane-o', 'fa-percent', 'fa-code', 'fa-at', 'fa-ban'];

const numBalls = 30;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  const a = 'fa ';
  const M = Math.random()* (0.6- 1) + 0.6;
  let ball = document.createElement("div");
  // let ball = document.body;
  const balli = ball.appendChild(document.createElement("span"));
  balli.className =  a + fontIcons[Math.floor(Math.random() * fontIcons.length)];
  balli.style.color = colors[Math.floor(Math.random() * colors.length)];
 balli.style.opacity = 0.7;
  ball.style.left = `${Math.random() * 90.4}%`;
  ball.style.top = `${Math.random() * 90.5}%`;
  balli.style.transform = `scale(${i>22 ?M*14:M*5})`;
  ball.style.width = `${Math.random()}em`;
  balli.style.fontSize = 'x-large';
  ball.style.height = ball.style.width;
  ball.style.position = 'fixed';
  // ball.style.backgroundSize = 'auto';
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    y: Math.random() * (i % 2 === 0 ? -18 : 18),
    x: Math.random()*(0)
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 4) * 5000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

function getRandomIndex(usedIndexs, maxIndex) {
    var min = 0;
    var max = maxIndex - 1;
    var index = Math.floor(Math.random()*(max-min+1)+min);

    while(usedIndexs.indexOf(index) > -1) {
        if (index < max) {
            index++;
        } else {
          index = 0;
        }
    }

    return index;
}