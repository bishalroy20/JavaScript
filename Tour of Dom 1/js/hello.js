// console.log("helo bole chole gelo")
// console.log(document)

const sections = document.querySelectorAll('section');
// console.log(sections);

for(const section of sections){
    section.style.border = '2px solid red';
    section.style.marginBottom = '10px';
    // console.log(section);


    section.classList.add('section-add'); // css e section add class ta add kora ase
}


// Nodelist HTMLCollection

// const parent = document.getElementById('players').childNodes[3].childNodes[1].parentNode;

// console.log(parent); // ul#players




// create element and set innerText and find the parent

// Nodelist HTMLCollection

const p = document.createElement('li'); // li tag create korbe
p.innerText = "Neymar"; // li tag er moddhe text add korbe

const playerlist = document.getElementById('player-list'); // parent ke dhore nilam (ul#players)
playerlist.appendChild(p); // parent er moddhe li tag ta add korbe



// create element and set child and parent

const maincontainer = document.getElementById('main-container');

const placesection = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "Places to visit";
placesection.appendChild(h1);

maincontainer.appendChild(placesection);


// easier to create html 

const bookstore = document.createElement('section');
bookstore.innerHTML = `
    <h1>Book Store</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
    <ul>
        <li>Book 1</li>
        <li>Book 2</li>
        <li>Book 3</li>
    </ul>
`;  
maincontainer.appendChild(bookstore);
