const TagsWrapper = document.querySelector('.strategies__tags');

window.onload = function () {
    console.log('I am loaded');

    addTagsClickHandler();
}

const addTagsClickHandler = () => {
    TagsWrapper.addEventListener('click', (evt) => {
        console.log(evt);
        if (evt.target.classList.contains('.tag')) {
            removeSelectedTags();
        }
    })
}

const removeSelectedTags = () => {

}
