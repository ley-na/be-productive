const tagsWrapper = document.querySelector('.strategies__tags');
const tags = tagsWrapper.querySelectorAll('.tag');
const strategiesWrapper = document.querySelector('.strategy-wrapper');
const strategies = strategiesWrapper.querySelectorAll('.strategy');

import { Article } from "./js/Article";

import { data } from "./js/data";

window.onload = function () {
    console.log('I am loaded');
    // Render data
    if (data) {
        renderArticlesToDom();
    }

    // Tags
    addTagsClickHandler();
}

const addTagsClickHandler = () => {
    tagsWrapper.addEventListener('click', (evt) => {
        // console.log(evt);
        if (evt.target.classList.contains('tag')) {
            let clickedTag = evt.target;
            removeSelectedTags();
            selectClickedTag(clickedTag);

            if (clickedTag.innerHTML === 'All') {
                showAllStrategies();
            } else {
                filterStrategiesBySelectedTag(clickedTag.innerHTML);
            }
        }
    })
}

const removeSelectedTags = () => {
    tags.forEach(tag => {
        tag.classList.remove('tag_selected');
        tag.classList.add('tag_bordered');
    })
}

const selectClickedTag = (clickedTag) => {
    clickedTag.classList.remove('tag_bordered');
    clickedTag.classList.add('tag_selected');
}

const showAllStrategies = () => {
    strategies.forEach(strategy => {
        strategy.classList.remove('strategy_hidden');
    })
}

const filterStrategiesBySelectedTag = (selectedTag) => {
    console.log(strategies);
    strategies.forEach(strategy => {
        let tags = strategy.querySelectorAll('.tag');
        strategy.classList.add('strategy_hidden');
        tags.forEach(tag => {
            if (tag.innerHTML === selectedTag) {
                strategy.classList.remove('strategy_hidden');
            }
        })
    })
}

const renderArticlesToDom = () => {
    let strategiesContainer = getStrategiesContainer();
    generateArticle(data).forEach(article => {
        strategiesContainer.append(article.getTemplate());
    })
}

const getStrategiesContainer = () => {
    strategiesWrapper.innerHTML = '';
    return strategiesWrapper;
}

const generateArticle = (data) => {
    let articles = [];

    data.forEach(article => {
        articles.push(new Article(article));
    })

    return articles;
}