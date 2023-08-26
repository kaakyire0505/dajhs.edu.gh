const open_menu = document.getElementById('open-menu')
const close_menu = document.getElementById('close-menu')
const navlinks = document.getElementById('navbar')

// ? closing of mobile menu navigations
close_menu.onclick = () => {
    navlinks.style.display = 'none'
    open_menu.style.display = 'block'
    close_menu.style.display = 'none'
}

// ? opening of mobile menu navigations
open_menu.onclick = () => {
    navlinks.style.display = 'block'
    open_menu.style.display = 'none'
    close_menu.style.display = 'block'
}



const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
const result = document.getElementById('result')
const phonetic = document.getElementById('phonetic')
const example = document.getElementById('example')
const searchButton = document.getElementById('search-button')
const searchInput = document.getElementById('search-input')
const sound = document.getElementById('sound')

searchButton.addEventListener('click', (e) => {
 e.preventDefault()
 fetch(`${url} ${searchInput.value}`)
 .then(res => res.json())
 .then(word => {
    result.innerHTML = `
    <div class="sample">
    <div> 
    <p>*${word[0].word} <br>
    <small class="text-muted">${word[0].meanings[0].partOfSpeech} ${word[0].phonetic}</small>
    </p>
    </div>
   
    <div><i class="uil uil-volume-off" id="sound" onclick="playSound()"></i></div>
    
    <div class="definition">
    <h5>Meaning</h5>
    ${word[0].meanings[0].definitions[0].definition}
    </div>
    
    <div class="synonyms">
    <h5>Synonyms</h5>
    ${word[0].meanings[0].synonyms}
    </div>

    <div class="antonyms">
    <h5>Antonyms</h5>
    ${word[0].meanings[0].antonyms}
    </div>
    
    <div class="examples">
    ${word[0].meanings[0].definitions[0].example}
    </div>
    </div> 
    `
 })
})
sound.addEventListener('click', (e) => {
    e.preventDefault()
    const voice = `https:${word[0].phonetics[0].audio}`
    const audio = new Audio(voice)
    audio.play()
})





// ? going to admin side
const adform = document.getElementById('adform')
const key = document.getElementById('key') 

key.addEventListener('click', (e) => {
    e.preventDefault()
        adform.style.display = 'block'
})



// ? displaying of validation form for pupils
const oneform = document.getElementById('oneform')
const twoform = document.getElementById('twoform')
const threeform = document.getElementById('threeform')
const link1 = document.getElementById('link1')
const link2 = document.getElementById('link2')
const link3 = document.getElementById('link3')

link1.addEventListener('click', (e) => {
    e.preventDefault()
    oneform.style.display = 'block'
})

link2.addEventListener('click', (e) => {
    e.preventDefault()
    twoform.style.display = 'block'
})

link3.addEventListener('click', (e) => {
    e.preventDefault()
    threeform.style.display = 'block'
})




// ? printing portal sheet
const printbtn = document.getElementById('print')
const printcontent = document.querySelector('.table')
printbtn.addEventListener('click', (e) => {
    document.body.innerHTML = printcontent.innerHTML
    e.preventDefault()
    window.print()
})

