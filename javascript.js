let movies = [
    { title: "Fast & Furious Presents: Hobbs & Shaw", watched: false },
    { title: "Rocky", watched: false },
    { title: "Rambo", watched: false },
    { title: "The Expendables", watched: false },
    { title: "Transporter", watched: false },
    { title: "Crank", watched: false },
    { title: "San Andreas", watched: false }
];

function showMovies() {
    let list = document.getElementById("movieList");
    list.innerHTML = "";

    for (let i = 0; i < movies.length; i++) {
        let li = document.createElement("li");

        let span = document.createElement("span");
        span.textContent = movies[i].title;
        span.className = "movieTitle";

        if (movies[i].watched) {
            span.classList.add("watched");
        }

        span.onclick = function () {
            movies[i].watched = !movies[i].watched;
            showMovies();
        };

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Remove";
        deleteBtn.className = "deleteBtn";

        deleteBtn.onclick = function () {
            movies.splice(i, 1);
            showMovies();
        };

        li.appendChild(span);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    }
}

function addMovie() {
    let input = document.getElementById("movieInput");
    let movie = input.value.trim();

    if (movie !== "") {
        movies.push({ title: movie, watched: false });
        input.value = "";
        showMovies();
    }
}

function searchMovies() {
    let input = document.getElementById("searchInput");
    let filter = input.value.toLowerCase();
    let li = document.getElementsByTagName("li");

    for (let i = 0; i < li.length; i++) {
        let text = li[i].textContent.toLowerCase();

        if (text.includes(filter)) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

document.getElementById("movieInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addMovie();
    }
});

showMovies();