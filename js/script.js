const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=172",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=123"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=185",
        "author": {
            "name": "Alex Capoluongo",
            "image": "https://unsplash.it/300/300?image=180"
        },
        "likes": 20,
        "created": "2021-04-25"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "author": {
            "name": "Kevin Basic",
            "image": "https://unsplash.it/300/300?image=132"
        },
        "likes": 34,
        "created": "2021-01-25"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "author": {
            "name": "Paul Johnson",
            "image": "https://unsplash.it/300/300?image=120"
        },
        "likes": 40,
        "created": "2021-06-09"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=124",
        "author": {
            "name": "Patrick Rowland",
            "image": "https://unsplash.it/300/300?image=194"
        },
        "likes": 53,
        "created": "2021-06-03"
    }
];

// **Milestone 1** - Creiamo il nostro array di oggetti che rappresentano ciascun post (come da esempio).
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy: es 05-03-2022),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// *Non è necessario creare date casuali*
// *Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)*

// **Milestone 2** - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.




posts.forEach((element,index) => {
    const postContainer = document.getElementById('container');
    postContainer.innerHTML += `<div id="post">
                                <div class="post__header">
                                    <div class="post-meta">                    
                                        <div class="post-meta__icon">
                                            <img class="profile-pic" src="${element.author.image}" alt="${element.name}">                    
                                        </div>
                                        <div class="post-meta__data">
                                            <div class="post-meta__author">${element.author.name}</div>
                                            <div class="post-meta__time">${element.created}</div>
                                        </div>                    
                                    </div>
                                </div>
                                <div class="post__text">${element.content}</div>
                                <div class="post__image">
                                    <img src="${element.media}" alt="">
                                </div>
                                <div class="post__footer">
                                    <div class="likes js-likes">
                                        <div class="likes__cta">
                                            <a class="like-button js-like-button" data-postid="${element.id}">
                                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                                <span class="like-button__label">Mi Piace</span>
                                            </a>
                                        </div>
                                        <div class="likes__counter">
                                            Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone
                                        </div>
                                    </div> 
                                </div>            
                            </div>`;
    coloredLike();

    // numberLike(element.likes);
})



// **Milestone 3** - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.


// fare una funzione dove aggiungiamo la classe al div
// richiamare la funzione all'interno del ciclo eachfor


function coloredLike() {
    let likeBtn = (document.querySelectorAll('.like-button'));
    for (let i=0; i<likeBtn.length; i++) {
        console.log(likeBtn[i]);
        let element = likeBtn[i];
        element.addEventListener('click', function(){
            this.classList.toggle('liked');
        })
    }
}

// function numberLike(number) {
//     const likeBtn = document.querySelectorAll('like-button');
//         likeBtn.addEventListener('click' , function() {
//             let newLikes = ++number;
//             const likeNumber = document.querySelectorAll('js-likes-counter');
//             likeNumber.innerHTML = newLikes;
//         });
// }

// function likedPosts() {
//     let heartPosts = [];
//     const likedPost = document.getElementById('post');
//     const likeBtn = document.getElementById('likebtn');
//     likeBtn.addEventListener('click' , function() {
//        heartPosts.push()
//     });
// }