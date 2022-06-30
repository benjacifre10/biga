import React from 'react';

import styles from '../../../../styles.module.css';

const Pagination = ({rowsCount, rowCount, page, changePageHandler}) => {
    const pageShowLength = 5;
    const totalPages = Math.ceil(rowsCount/rowCount);
    let pages = [];
    if (totalPages >= 1) {
        const level = Math.ceil(page/pageShowLength) - 1;
        for (let i = 1; i <= pageShowLength; i++) {
            let showPage = i + pageShowLength * level;
            if (showPage <= totalPages) {
                if (showPage === page) pages.push(<li className={styles.biga83__table__pagination_li_active} key={showPage} value={showPage} onClick={ changePageHandler }><span>{showPage}</span></li>);
                else pages.push(<li key={showPage} value={showPage} onClick={ changePageHandler }><span>{showPage}</span></li>);
            }
        }
    }

    return (
        <footer className={styles.biga83__table__pagination_footer}>
            <ul className={styles.biga83__table__pagination_ul}>
                <li className={page === 1 ? ["pag__arrow-left", styles.biga83__table__pagination_li_disabled].join(' ') : ["pag__arrow-left", styles.biga83__table__pagination_li_enabled].join(' ')} value={-1} onClick={ changePageHandler }>
                    <i className="fas fa-chevron-left"/>
                </li>
                { pages }
                <li className={page === totalPages ? ["pag__arrow-right", styles.biga83__table__pagination_li_disabled].join(' ') : ["pag__arrow-right", styles.biga83__table__pagination_li_enabled].join(' ')} value={0} onClick={ changePageHandler }>
                    <i className="fas fa-chevron-right"/>
                </li>
            </ul>
        </footer>
    );
};

export default Pagination;
