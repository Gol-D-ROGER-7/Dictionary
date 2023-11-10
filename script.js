
const button = document.getElementById('search-btn');
const inputWord = document.getElementById('input-word')
const searchedWord = document.getElementById('searched-word')
const meaning = document.getElementById('word-meaning')


const dictionary = (word) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e8067d888cmshd2b538d56dcd82bp111738jsn6ddc130cbe29',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
    .then(response => response.json())
    .then((response) => {
        // console.log(response)
        searchedWord.innerHTML = response.word;
        meaning.innerHTML = response.definition.replace('2.', '<br>2.').replace('3.', '<br>3.').replace('4.', '<br>4.')
    })
}

button.addEventListener('click', (e) => {
    e.preventDefault()
    dictionary(inputWord.value)
    console.log(inputWord.value)
})

