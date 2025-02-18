// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
              })
            })
          })
        })
      })
    })
  })
  console.log("steak call")
});



// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
        });
      });
    });
  });
  console.log("potatoes call")
});

// Bonus 1s

const drawTableFood = () => {
  document.getElementById("table").style.display = "block";
  console.log("drawfood call")
}


function addButton() {
  document.querySelector("button").style.display = "block"
}



// Iteration 3 using async and await 

async function makeFood() {
  const step0 = await addFood(brusselSprouts[0], "#brusselSprouts");
  const step1 = await addFood(brusselSprouts[1], "#brusselSprouts");
  const step2 = await addFood(brusselSprouts[2], "#brusselSprouts");
  const step3 = await addFood(brusselSprouts[3], "#brusselSprouts");
  const step4 = await addFood(brusselSprouts[4], "#brusselSprouts");
  const step5 = await addFood(brusselSprouts[5], "#brusselSprouts");
  const step6 = await addFood(brusselSprouts[6], "#brusselSprouts");
  const step7 = await addFood(brusselSprouts[7], "#brusselSprouts");
  const step8 = await addFood(brusselSprouts[8], "#brusselSprouts");
  console.log("sprout call")
  const drawFood = await drawTableFood();
  let served =  await Promise.all([addFood, makeFood, drawTableFood]).then(() => {
    console.log("finish")
    addButton()
    });

}


makeFood();










  
