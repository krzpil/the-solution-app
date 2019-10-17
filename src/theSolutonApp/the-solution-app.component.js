import {TheSolutionAppTemplate} from './the-solution-app.template';
import {ArticleComponent} from './article/article.component';

import './the-solution-app.css';

export const TheSolutionAppComponent = {

    init() {
        this.TheSolutionAppElement = document.querySelector('#the-solution-app');
        this.render();
        ArticleComponent.init(document.querySelector('.container'));
        ArticleComponent.render();
    },

    render() {
        this.TheSolutionAppElement.innerHTML = TheSolutionAppTemplate();
    }
};
