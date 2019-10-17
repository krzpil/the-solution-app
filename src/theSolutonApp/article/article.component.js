import {articleTemplate} from './article.template';
import {ArticleService} from './article.service';
import {ArticleModel as filter, sortTypes} from './article.model';
import {ArticleItemComponent} from './article-item/article-item.component';
import './article.css';

export const ArticleComponent = {
    init(container) {
        this.container = container;
        this.articleDataSources = ArticleService.getArticleDataSources();
        this.render();
    },

    render() {
        this.container.innerHTML = articleTemplate(this.articleDataSources, filter);
        this.initItems();
        this.postRender();
    },

    initItems() {
        ArticleItemComponent.init(this.container.querySelector('.articles'), this.articleDataSources, filter);
        this.renderItems();
    },

    renderItems() {
        ArticleItemComponent.render();
    },

    postRender() {
        this.articleDataSources.forEach(dataSource => {
            let liElement = this.container.querySelector(`.filter li[datasourceid="${dataSource.id}"]`);
            liElement.addEventListener('click', event => {
                filter.dataSources[dataSource.id] = !filter.dataSources[dataSource.id];
                if (filter.dataSources[dataSource.id]) {
                    event.currentTarget.querySelector('.checkbox').classList.add('checked');
                } else {
                    event.currentTarget.querySelector('.checkbox').classList.remove('checked');
                }
                this.initItems();
            });
        });

        let sortElement = this.container.querySelector('.sort');
        sortElement.addEventListener('click', event => {
            filter.reverseSort();
            if (filter.sort === sortTypes.DESC) {
                sortElement.classList.remove('asc');
                sortElement.classList.add('desc');
            } else {
                sortElement.classList.remove('desc');
                sortElement.classList.add('asc');
            }
            this.renderItems();
        });
    }
};
