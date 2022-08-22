export class Article {
    constructor({id, title, urlToImage, tags, ...rest}) {
        this.id = id;
        this.title = title;
        this.url = urlToImage;
        this.tags = tags;
    }

    // Article generator
    getTemplate() {
        let template = '';
        let article = document.createElement('article');

        article.className = 'strategy block-shadowed';
        article.setAttribute('data-id', this.id)

        if (this.url) {
            template += `<img class="strategy__image" src=${this.url} alt="strategy">`
        }

        if (this.title || this.tags) {
            template += `<div class="strategy__content">`;

            if (this.title) {
                template += `<h3 class="strategy__title">${this.title}</h3>`
            }

            if (this.tags) {
                template += `<div class="strategy__tags tags">`;

                this.tags.map(tag => {
                    template += `<span class="tag tag_colored">${tag}</span>`
                })
            }

            template += `</div>`;
        }

        article.innerHTML = template;
        return article;
    }
}