const tagsWrapper = document.querySelector('.strategies__tags');
const tags = tagsWrapper.querySelectorAll('.tag');
const strategiesWrapper = document.querySelector('.strategy-wrapper');
const strategies = strategiesWrapper.querySelectorAll('.strategy');

import { Article } from "./js/Article";

const data = [
    {
        id: 1,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: './src/img/strategies/1.jpg',
        tags: ['Art', 'Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    },
    {
        id: 2,
        title: 'Motivation Is The First Step To Success',
        urlToImage: './src/img/strategies/2.jpg',
        tags: ['Culture'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    },
    {
        id: 3,
        title: 'Success Steps For Your Personal Or Business Life',
        urlToImage: './src/img/strategies/3.jpg',
        tags: ['Culture', 'Design', 'Art'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2020'
    }
];

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
        console.log(evt);
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
}

const getStrategiesContainer = () => {
    strategiesWrapper.innerHTML = '';
    return strategiesWrapper;
}
