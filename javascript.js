const pictures = document.querySelector('#pictures');
const buttonToLoad = document.querySelector('#to-load')
const loadButtonContainer = document.querySelector('#load-more')


const urls = [
    'https://rickandmortyapi.com/api/character/224',
    'https://rickandmortyapi.com/api/character/363',
    'https://rickandmortyapi.com/api/character/526',
    'https://rickandmortyapi.com/api/character/661',
    'https://rickandmortyapi.com/api/character/673',
    'https://rickandmortyapi.com/api/character/745',
    'https://rickandmortyapi.com/api/character/450',
    'https://rickandmortyapi.com/api/character/2',
    'https://rickandmortyapi.com/api/character/1'
]

const fetchDePromesas = urls.map(url => 
    fetch(url)
    .then(response => response.json())
)


Promise.all(fetchDePromesas)
.then(data => {
    let dataLimit = data.splice(0,5);
    dataLimit.forEach(element => {
        let li = document.createElement('li');
        let img = document.createElement('img');
        const name = document.createElement('p');
        const status = document.createElement('p');
        const location = document.createElement('p');
        name.textContent = `Name: ${element.name}`
        status.textContent = `Status: ${element.status}`
        location.textContent = `Location: ${element.location.name}`
        img.setAttribute('id', 'images')
        img.setAttribute('src', element.image);
        img.setAttribute('alt', element + 1)
        li.appendChild(img);
        li.appendChild(name);
        li.appendChild(status);
        li.appendChild(location);
        pictures.appendChild(li);
    });
}
)


buttonToLoad.addEventListener('click', moreImgs)

function moreImgs() {
        Promise.all(fetchDePromesas)
        .then(data => {
        let dataLimit = data.splice(5,5);
        dataLimit.forEach(element => {
            let li = document.createElement('li');
            let img = document.createElement('img');
            const name = document.createElement('p');
            const status = document.createElement('p');
            const location = document.createElement('p');
            name.textContent = `Name: ${element.name}`
            status.textContent = `Status: ${element.status}`
            location.textContent = `Location: ${element.location.name}`
            img.setAttribute('id', 'images')
            img.setAttribute('src', element.image);
            img.setAttribute('alt', element + 1)
            li.appendChild(img);
            li.appendChild(name);
            li.appendChild(status);
            li.appendChild(location);
            pictures.appendChild(li);
        })
        })
        loadButtonContainer.removeChild(buttonToLoad);
}

