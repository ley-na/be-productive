const tagsWrapper = document.querySelector('.strategies__tags');
const tags = tagsWrapper.querySelectorAll('.tag');

window.onload = function () {
    console.log('I am loaded');

    addTagsClickHandler();
}

const addTagsClickHandler = () => {
    tagsWrapper.addEventListener('click', (evt) => {
        console.log(evt);
        if (evt.target.classList.contains('tag')) {
            let clickedTag = evt.target;
            removeSelectedTags();
            selectClickedTag(clickedTag);
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
