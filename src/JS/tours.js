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

    const showVideo1 = () => {
        btnOne.classList.add('tours__button--active')
        btnTwo.classList.remove('tours__button--active')
        btnThree.classList.remove('tours__button--active')
        videoOne.classList.remove('covered')
        videoTwo.classList.add('covered')
        videoThree.classList.add('covered')
    }
    const showVideo2 = () => {
        btnOne.classList.remove('tours__button--active')
        btnTwo.classList.add('tours__button--active')
        btnThree.classList.remove('tours__button--active')
        videoOne.classList.add('covered')
        videoTwo.classList.remove('covered')
        videoThree.classList.add('covered')
    }
    const showVideo3 = () => {
        btnOne.classList.remove('tours__button--active')
        btnTwo.classList.remove('tours__button--active')
        btnThree.classList.add('tours__button--active')
        videoOne.classList.add('covered')
        videoTwo.classList.add('covered')
        videoThree.classList.remove('covered')
    }
    btnOne.addEventListener('click', showVideo1 )
    btnTwo.addEventListener('click', showVideo2 )
    btnThree.addEventListener('click', showVideo3 )
}
