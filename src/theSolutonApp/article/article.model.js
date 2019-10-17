export const sortTypes = {
    ASC: 'asc',
    DESC: 'desc'
};

export const ArticleModel = {
    sort: sortTypes.DESC,
    reverseSort() {
        this.sort = this.sort === sortTypes.DESC ? sortTypes.ASC : sortTypes.DESC;
    },
    dataSources: []
};
