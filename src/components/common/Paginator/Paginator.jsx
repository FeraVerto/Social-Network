import React, { useState } from 'react';
import s from './Paginator.module.css';
import classNames from "classnames";


let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChange, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.paginator}>
            {portionNumber > 0 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <div className={s.number}>
                        <span className={classNames({
                            [s.selectedPage]: currentPage === p
                        }, s.pageNumber)}
                            key={p}
                            onClick={() => {
                                onPageChange(p);
                            }}>{p}</span>
                    </div>
                })}
            { portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}

        </div>)
}

export default Paginator;