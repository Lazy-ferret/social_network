import React, { useState } from 'react'
import styles from './Paginator.module.css'
import cn from 'classnames'

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <div>
            {portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
            }
            {pages
                .filter(p => (p >= leftPortionPageNumber && p <= rightPortionPageNumber))
                .map(p => {
                    return <span
                        className={cn({[styles.selectedPage]: currentPage === p}, styles.pageNumber) }
            onClick={(e) => { onPageChanged(p) }}
            key={p}
                    >{p}</span>
                })}
{
    portionCount > portionNumber &&
    <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>
}
        </div >
    )
}

export default Paginator

