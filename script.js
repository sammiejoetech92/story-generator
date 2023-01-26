const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText =  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"]
const insertY = ["the soup kitchen","Disneyland","the White House"]
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "spontaneously combusted"]


function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(/:insertx:/g, xItem).replace(":inserty:", yItem).replace(":insertz:", zItem)

  function fToC(fahrenheit) {
    // function to convert fahrenheit to centigrade
  const fTemp = fahrenheit;
  const fToCel = (fTemp - 32) * 5 / 9;
    return fToCel;
  } 

  function pToS(stones) {
    // function to Convert pounds to stones 
    return stones * 0.071429
  }


  if(customName.value !== '') {
    // If user type a custom name in the input
    let name = customName.value;
    newStory = newStory.replace(/bob/gi, name)
  }

  if(document.getElementById("uk").checked) {
    // If uk is checked, convert measures from US to UK standards
    let weight = Math.round(pToS(300)) + " stone";
    let temperature =  Math.round(fToC(94)) + " centigrade";
    newStory = newStory.replace(/94 fahrenheit/g, temperature).replace(/300 pounds/g, weight)
  }

  story.textContent = newStory ;

  story.style.visibility = 'visible';
}
result();
