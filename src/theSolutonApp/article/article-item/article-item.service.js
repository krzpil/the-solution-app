import {conf} from '../../../../environment';

const uriPrefix = '/articles';

/**
 * Fetches and returns articles by category. It is possible to ask for few categories, in such case function will join results and return them all at once.
 * @param categories: string | array - when string is provided function makes single request to server and returns response
 *                                  - when array is provided function makes bulk of requests to server and returns one array with all responses
 * @returns {Promise}
 */

export const getArticles = (categories) => {
    if (typeof categories === 'string') { //TypeScript could be handy here
        categories = [categories];
    }
    if (Array.isArray(categories)) {
        return new Promise((resolve, reject) => {
            Promise.all(categories.map(category => fetch(`${conf.baseURI}${uriPrefix}/${category}`))).then(values => { //make all backend calls
                Promise.all(values.map(v => v.json())).then(values => //get all *.json()
                    resolve(values.flatMap(v => v.articles))
                ).catch(reason => {
                    reject(reason);
                });
            }).catch(reason => {
                reject(reason);
            })
        });
    }
};
