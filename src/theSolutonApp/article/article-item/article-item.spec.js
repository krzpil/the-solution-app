import {getArticles} from './article-item.service';

describe("article-item.service", () => {
    it("should make 2 api calls", function () {
        global.fetch = jasmine.createSpy().and.callFake(() => Promise.resolve({json: () => ({articles: []})}));

        getArticles(['category_1', 'category_2']);
        expect(global.fetch).toHaveBeenCalledTimes(2);
    });
});
