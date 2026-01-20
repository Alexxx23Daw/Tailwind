//Selecciono el boton
const markAll = document.querySelector('#mark-all');

const numberElement = document.querySelector('#number');
const posts = document.querySelectorAll('.post');

posts.forEach(post => {
    post.addEventListener('click', () => {
       post.querySelector('.not-read').classList.remove('not-read'); 
        updateNotifications();
    });   
});

//Al boton le escucho un click
markAll.addEventListener('click', () => {

    //Selecciono los elementos que tengan la clase .not-read
    const notReadElements = document.querySelectorAll('.not-read');

    //Recorrer todos los elementos y eliminar la clase .not-read
    notReadElements.forEach(notReadElement => {
        notReadElement.classList.remove('not-read');
    });

    updateNotifications();

});

const updateNotifications = () => {
    //Como ya no existen, vuelvo a contar los que quedan y actualizo el numero
    const notReadElementsActual = document.querySelectorAll('.not-read');
    numberElement.innerText = notReadElementsActual.length;
}