import noImage from '../../assets/no-image.png';

export const articleItemTemplate = (data) => {
    if (data.loading) {
        return `
            <section class="spinner"></section>
            <section class="spinner"></section>
            `;
    }
    if (data.error) {
        return `<section class="error">An error occurred please try again later</section>`;
    }
    if (data.result) {
        if (data.result.length) {
            return data.result.map(article => `
            <article class="article">
                <div class="image">
                    <div class="thumbnail" style="background-image: url(${article.image || noImage})"></div>
                </div>
                <div class="content">
                    <h3 class="title"><a>${article.title || 'Title'}</a></h3>
                    <time class="date">${article.date || '1. januar 1970'}</time>
                    <p class="preamble">${article.preamble || ''}</p>
                </div>
            </article>
        `).join('');
        } else {
            return `<section class="empty">There are no articles to display</section>`;
        }
    }
};
