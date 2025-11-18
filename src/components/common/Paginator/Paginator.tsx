import React from 'react'
import s from './paginator.module.css'

const Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage}: {totalUsersCount: any; pageSize: any; onPageChanged: any; currentPage: any}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {
                // @ts-ignore
                pages.map((p: any) => <span onClick={() => onPageChanged(p)}
                                            className={`${currentPage === p ? s.selected : ''} ${s.paginationBtn}`}>{p}</span>)}
        </div>
    )
}


export default Paginator;