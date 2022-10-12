

let advArticle = function(advantage) {

    let element = document.createElement('article')
    element.classList.add('adv-article')
    
    element.innerHTML = `
        <img class="advSection__icon" src="${advantage.icon}" alt="icon" />
            <h1 class="advSection__headline">${advantage.headline}</h1>
            <p class="advSection__text">${advantage.text}</p>
    `
    
    return element
    }
    
    export default advArticle