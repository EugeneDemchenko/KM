import data from '../data/reviews.json';
console.log(data);

export function cardsDeploy() {
  const item = document.querySelector('.review__card');

  const card = data.map(el => {
    const newElement = `
    <li class='item review__item'>
    <picture>
    <source
      srcset="
        https://res.cloudinary.com/dmb2n4te8/image/upload/v1677007294/KM/Review_tablet_1x_h4o4hc.png 1x,
        https://res.cloudinary.com/dmb2n4te8/image/upload/v1677007312/KM/Review_tablet_2x_go3tsn.png 2x,
        https://res.cloudinary.com/dmb2n4te8/image/upload/v1677007312/KM/Review_tablet_3x_p7je37.png 3x
      "
      media="(max-width:1279px)"
      type="image/png"
    />
    <source
      srcset="
        https://res.cloudinary.com/dmb2n4te8/image/upload/v1677007210/KM/Review_desk_1x_otakfi.png 1x,
        https://res.cloudinary.com/dmb2n4te8/image/upload/v1677007312/KM/Review_desk_2x_u4qdty.png 2x,
        https://res.cloudinary.com/dmb2n4te8/image/upload/v1677007312/KM/Review_desk_3x_onv1yp.png 3x
      "
      media="(min-width:1280px)"
      type="image/png"
    />
    <img
      class="review__photo--background"
      src="https://res.cloudinary.com/dmb2n4te8/image/upload/v1677007294/KM/Review_tablet_1x_h4o4hc.png"
      alt="nature photo"
    />
  </picture>

    <img src=${el.avatar} alt='avatar' class='review__avatar'/>
    <h3 class='review__item--title'>${el.username}</h3>
    <p class='review__text'>${el.comment}</p>
    
    <picture>
    <source
      srcset="
        ${el.photo1x1} 1x,
        ${el.photo1x2} 2x,
        ${el.photo1x3} 3x
      "
      media="(max-width:767px)"
      type="image/png"
    />
    <source
      srcset="
        ${el.photo2x1} 1x,
        ${el.photo2x2} 2x,
        ${el.photo2x3} 3x
      "
      media="(min-width:768px) and (max-width:1279px)"
      type="image/png"
    />
    <source
      srcset="
        ${el.photo3x1} 1x,
        ${el.photo3x2} 2x,
        ${el.photo3x3} 3x
      "
      media="(min-width:1280px)"
      type="image/png"
    />
    <img src=${el.photo1x1} alt='photo'class='review__photo--back'/>
  </picture>
    </li>
    `;
    return newElement;
  });

  item.insertAdjacentHTML('beforeend', [...card].join(''));
}

export function rotateCards() {
  const card = document.querySelector('.review__item');

  const anotherSide = () => {
    card.classList.toggle('rotate');
  };

  card.addEventListener('click', anotherSide);
}
