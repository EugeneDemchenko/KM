export function selectTour() {
    let tourBtn = document.querySelector('.tours__button')
    let tourBtn2 = document.querySelectorAll('.tours__button')
    let coveredVideos = document.querySelectorAll('.covered')


    let btnOne = document.querySelector('#buttonOne')
    let btnTwo = document.querySelector('#buttonTwo')
    let btnThree = document.querySelector('#buttonThree')
    let videoOne = document.querySelector('#videoOne')
    let videoTwo = document.querySelector('#videoTwo')
    let videoThree = document.querySelector('#videoThree')
    let tourPrice = document.querySelector('.tours__price')


    const showVideo1 = () => {
        btnOne.classList.add('tours__button--active')
        btnTwo.classList.remove('tours__button--active')
        btnThree.classList.remove('tours__button--active')
        videoOne.classList.remove('covered')
        videoTwo.classList.add('covered')
        videoThree.classList.add('covered')
        tourPrice.innerHTML = '4 449 грн./людина'
    }
    const showVideo2 = () => {
        btnOne.classList.remove('tours__button--active')
        btnTwo.classList.add('tours__button--active')
        btnThree.classList.remove('tours__button--active')
        videoOne.classList.add('covered')
        videoTwo.classList.remove('covered')
        videoThree.classList.add('covered')
        tourPrice.innerHTML = '7 500 грн./людина'

    }
    const showVideo3 = () => {
        btnOne.classList.remove('tours__button--active')
        btnTwo.classList.remove('tours__button--active')
        btnThree.classList.add('tours__button--active')
        videoOne.classList.add('covered')
        videoTwo.classList.add('covered')
        videoThree.classList.remove('covered')
        tourPrice.innerHTML = '9 991 грн./людина'

    }
    btnOne.addEventListener('click', showVideo1 )
    btnTwo.addEventListener('click', showVideo2 )
    btnThree.addEventListener('click', showVideo3 )
}