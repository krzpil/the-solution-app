import {ArticleService} from './article.service';
import {ArticleModel} from './article.model';

describe("article.service", () => {
    it("should get two data sources", function () {
        let dataSources = ArticleService.getArticleDataSources();
        expect(dataSources.length).toBe(2);
    });
});

describe("article.model", () => {
    it("should reverse sort", function () {
        let sort = ArticleModel.sort;
        ArticleModel.reverseSort();
        expect(sort).not.toBe(ArticleModel.sort);
    });
});
