// document.querySelector('html').style.backgroundColor = 'red';

var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised: :insertx: weighs 300 pounds, and it was a hot day.';

var insertX = ['Willy the Goblin',
'Big Daddy',
'Father Christmas'];

var insertY = ['the soup kitchen',
'Disneyland',
'the White House'];

var insertZ = ['spontaneously combusted',
'melted into a puddle on the sidewalk',
'turned into a slug and crawled away'];


// EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);

function result() {
 alert("I've been clicked!");
 var newStory = storyText;
 var xItem = randomValueFromArray(insertX);
 var yItem = randomValueFromArray(insertY);
 var zItem = randomValueFromArray(insertZ);
 //Replaces x,y,z placeholder with random array items
 newStory = newStory.replace(/:insertx:/g, xItem).replace(/:inserty:/g, yItem).replace(/:insertz:/g, zItem);

  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300 * 0.0714286) + ' stone';
    var temperature =  Math.round((94 - 32) * (5/9)) + ' centigrade';
    newStory = newStory.replace(/94 fahrenheit/g, temperature).replace(/300 pounds/g, weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
