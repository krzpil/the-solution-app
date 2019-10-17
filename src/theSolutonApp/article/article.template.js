import {sortTypes} from './article.model';

export const articleTemplate = (dataSources, filter) => `
    <section class="filter">
        <h4>Data sources</h4>
        <ul>
            ${dataSources.map(dataSource => `
                <li datasourceid="${dataSource.id}">
                    <i class="checkbox ${filter.dataSources[dataSource.id] ? 'checked' : ''}"></i> ${dataSource.category}
                </li>`).join('')}
        </ul>
    </section>
    <section class="sort ${filter.sort === sortTypes.ASC ? 'asc' : ''}"><a>Sort by date</a> <i class="icon"></i></section>
    <section class="articles"></section>
`;
