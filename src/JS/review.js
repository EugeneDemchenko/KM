import data from '../data/reviews.json'
console.log(data);

const item = document.querySelector('.review__card')

const card = data.map(el => {
    const newElement = `
    <li class='item review__item'>
    <img srcset=${el.avatar} alt='avatar' class='review__avatar'/>
    <h3 class='review__item--title'>${el.username}</h3>
    <p class='review__text'>${el.comment}</p>
    <img src=${el.photo} alt='photo'class='review__photo--back'/>
    </li>
    `
    return newElement
})

item.insertAdjacentHTML('beforeend', [...card].join(''))