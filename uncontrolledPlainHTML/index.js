const selectElement = document.querySelector("select");
const answer = selectElement.selectedOptions[0].innerText;

const onChange = (event) => {
    const selectedAnswer = (event.target.value).toLowerCase();

    if (selectedAnswer === '') {
        document.querySelector('.result').innerHTML = '';
        return;
    }

    if (selectedAnswer === 'vatican city') {
        document.querySelector('.result').innerHTML = `"Vatican city" is the correct answer!`;
        return;
    }

    document.querySelector('.result').innerHTML = `Meh! ${selectedAnswer} is NOT the smallest city in the world!`;
};

selectElement.addEventListener('change', onChange);
