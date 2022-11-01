
const nouns = [
  "Paris",
  "Mexico",
  "Costa Rica",
  "Ireland",
]

const paragraph = document.querySelector('p');

for (i = 0; i < nouns.length - 1; i++){
  paragraph.innerHTML += nouns[i] + ', ' ;
}
  paragraph.innerHTML +=  ` and `  + nouns[3]  ;
