import React, {useState} from 'react'
import s from './paginator.module.css'

const Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage, portionSize = 10}: {totalUsersCount: any; pageSize: any; onPageChanged: any; currentPage: any, portionSize: number }) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize);

    const [portionNumber, setPortionNumber] = useState<number>(1);

    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div>
            {portionNumber > 1 && <button onClick={ () => { setPortionNumber(portionNumber - 1) }}>PREV</button>}

            {
                // @ts-ignore
                pages.filter((p: any) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p: any) => <span onClick={() => onPageChanged(p)}
                                            className={`${currentPage === p ? s.selected : ''} ${s.paginationBtn}`}>{p}</span>)}

            {portionCount > portionNumber && <button onClick={ () => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
        </div>
    )
}


export default Paginator;