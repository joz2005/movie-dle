let current_movie = 0
let next_movie = 0
let correctChoice = 0
let person = {
    name: 'timothy',
    age: 15
}

let movie_data = {}

function change_data(type) {
    if (type === 'comedy'){
        movie_data = {
        1 : ['Your Name', 'https://www.youtube.com/embed/98H7ZjDrbcA?si=G2kZMnuS-ZzXJ4NP&amp;controls=0'],
        2 : ['Home Alone', 'https://www.youtube.com/embed/5O60LjTtfaY?si=DJHbNtOpth7niNPm&amp;controls=0'],
        3 : ['Forrest Gump', 'https://www.youtube.com/embed/Rn5SwEp4CaE?si=Jhg-5LBNVP4qsWuL&amp;controls=0'],
        4 : ['China Man', 'https://www.youtube.com/embed/G95b3ji-tek?si=8MHZDwnJtkLqgfAC&amp;start=5']
        }
    } else if (type === 'action') {
        movie_data = {
            1 : ['John Wick', 'https://www.youtube.com/embed/6qiKf6U_2Zo?si=sl5MfQYKY32o0PbR&amp;controls=0'],
            2 : ['The Matrix', 'https://www.youtube.com/embed/6pI1dlH2Piw?si=_7RFvO3IqdIyKmE_&amp;controls=0'],
            3 : ['Avengers: Endgame', 'https://www.youtube.com/embed/pAEPu9hC7t0?si=LIvpbqO_B3h0V_S9&amp;controls=0']
        }
    } else if (type === 'horror') {
        movie_data = {
            1 : ['The Conjuring', 'https://www.youtube.com/embed/RkQB7WJAsIQ?si=sPOTqv1i6MRlU5B9&amp;controls=0'],
            2 : ['IT', 'https://www.youtube.com/embed/6HaA1w0tJWU?si=hbXiUMdg0hh0uGVs&amp;controls=0'],
            3 : ['Train to Busan', 'https://www.youtube.com/embed/0FijESDWzxo?si=gFbwD2d-2Lk72-zJ&amp;controls=0']
        }
    }
}

function buttonPressed(button) {
    check_if_correct(Number(button));
    changeMovie();
}

function check_if_correct(userChoice) {
    if (userChoice === correctChoice) {
        alert("Correct Choice!");
    }
    else {
        alert("Incorrect Choice! Answer was " + (movie_data[current_movie][0]));
    }
}

function changeMovie() {
    console.log("ok");
    while (next_movie === current_movie) {
        next_movie = Math.floor(Math.random() * Object.keys(movie_data).length) + 1;
    }
    current_movie = next_movie;
    document.querySelector('.video').src = movie_data[current_movie][1]
    changeButtons(current_movie)
}

function randomIntFromInterval(min, max) { 
    // min and max inclusive
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeButtons(exclude) {
    correctChoice = randomIntFromInterval(1, 3);
    let incorrect1, incorrect2;

    do {
        incorrect1 = Math.floor(Math.random() * Object.keys(movie_data).length) + 1;
    } while (incorrect1 === exclude);

    do {
        incorrect2 = Math.floor(Math.random() * Object.keys(movie_data).length) + 1;
    } while (incorrect2 === exclude || incorrect2 === incorrect1);

    // Assign choices based on the value of correctChoice
    if (correctChoice === 1) {
        document.getElementsByClassName("left-choice-button")[0].innerHTML = movie_data[exclude][0];
        document.getElementsByClassName("middle-choice-button")[0].innerHTML = movie_data[incorrect1][0];
        document.getElementsByClassName("right-choice-button")[0].innerHTML = movie_data[incorrect2][0];
    } else if (correctChoice === 2) {
        document.getElementsByClassName("left-choice-button")[0].innerHTML = movie_data[incorrect1][0];
        document.getElementsByClassName("middle-choice-button")[0].innerHTML = movie_data[exclude][0];
        document.getElementsByClassName("right-choice-button")[0].innerHTML = movie_data[incorrect2][0];
    } else {
        document.getElementsByClassName("left-choice-button")[0].innerHTML = movie_data[incorrect1][0];
        document.getElementsByClassName("middle-choice-button")[0].innerHTML = movie_data[incorrect2][0];
        document.getElementsByClassName("right-choice-button")[0].innerHTML = movie_data[exclude][0];
    }
}