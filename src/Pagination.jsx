import {act, useState} from "react";

export const Pagination = ({totalNumberOfPages, currentPage, setCurrentPage}) => {
    const totalPages = Math.ceil(totalNumberOfPages / 10);
    const [start, setStart] = useState(0);
    const [active, setActive] = useState(0);
    const end = start+10;
    const handleClick = (index) => {
        setCurrentPage(index*10);
        setActive(index);
        setStart(Math.max(0,active-5+2));
        console.log(Math.max(0,active-5+2),active);
    }
    return (
        <div className="pagination-container">
            <div className="current-page-container">
                <span>Page {active + 1} of {totalPages}</span>
            </div>
            <div className="total-page-container">
                {[...Array(10)].map((_, index) => {
                    return (
                        <button key={index + 1} className={`page-number ${active === start+index ? "active" : ""}`}
                                onClick={() => handleClick(start+index)}>{start+index+1}</button>
                    )
                })}
            </div>
        </div>
    )
}

