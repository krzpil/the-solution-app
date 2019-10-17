import {getArticles} from './article-item.service';
import {parseDate} from '../../helper/date.parser';
import {delayMe} from '../../helper/delay-me';
import {articleItemTemplate} from './article-item.template';
import './article-item.css';
import {sortTypes} from '../article.model';

export const ArticleItemComponent = {
    init(container, articleDataSources, filter) {
        this.container = container;
        this.articleDataSources = articleDataSources;
        this.filter = filter;
        this.articles = {loading: true};

        getArticles(this.articleDataSources.filter(ads => this.filter.dataSources[ads.id]).map(ads => ads.uri))
            .then(delayMe(600))
            .then(result => {
                this.articles = {result};
                this.render();
            }).catch(reason => {
            this.articles = {error: reason};
            this.render();
        })
    },

    sortArticles() {
        this.articles.result && this.articles.result.sort((article1, article2) => {
            let multiplier = this.filter.sort === sortTypes.DESC ? -1 : 1;
            try {
                multiplier *= (parseDate(article1.date) - parseDate(article2.date));
            } catch (e) {
                console.error(`Well, parsing locale date is hard; ${e}`);
            }
            return multiplier;
        })
    },

    render() {
        this.sortArticles();
        this.container.innerHTML = articleItemTemplate(this.articles);
    },
};
