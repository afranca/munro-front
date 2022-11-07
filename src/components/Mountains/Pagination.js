import React from 'react'
import classes from './Pagination.module.css';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {

  const lastPageNumber = Math.ceil(totalPosts/postsPerPage);  
  const nextPage = currentPage+1;
  const previousPage = currentPage-1;

  const changePageHandler = (numb) =>{
    // This makes sure the controls don't point
    // at pages ouf of boundaries 
    if (numb < 1){
        numb = 1;
    } else if (numb > lastPageNumber){
        numb = lastPageNumber;
    }
    
    paginate(numb);
  };  

  const pageNumbers = []; 

  // This decides the interval of pages currently displayed
  // in the pagination controls
  let lastPageNumberOnDisplay;
  let firstPageNumberOnDisplay;
  if (currentPage <= 3){
    firstPageNumberOnDisplay = 1;
    lastPageNumberOnDisplay = 5;
  } else if (currentPage >= lastPageNumber - 3){
    firstPageNumberOnDisplay = lastPageNumber - 4;
    lastPageNumberOnDisplay = lastPageNumber;
  } else {
    firstPageNumberOnDisplay = currentPage - 2;
    lastPageNumberOnDisplay = currentPage + 2;
  }

  for (let i = firstPageNumberOnDisplay; i<=lastPageNumberOnDisplay; i++){
    pageNumbers.push(i);
  }
  return (
    <nav>
        <ul className={classes.pagination}>
        <li key={Math.random()} className={classes.pageItem}>
            <a href='!#' className={classes.pageLink} onClick={ () => changePageHandler(1) }>
                «
            </a>    
        </li>
        <li key={Math.random()} className={classes.pageItem}>
            <a href='!#' className={classes.pageLink} onClick={ () => changePageHandler(previousPage) }>
                ⟨   
            </a>          
        </li>

            {pageNumbers.map( (number) => (
                <li key={number} className={classes.pageItem}>
                    <a href='!#' className={classes.pageLink} onClick={ () => changePageHandler(number) }>
                        {number}
                    </a>
                </li>
            ))}

        <li key={Math.random()} className={classes.pageItem}>
            <a href='!#' className={classes.pageLink} onClick={ () => changePageHandler(nextPage) }>
                ⟩
            </a>              
        </li>
        <li key={Math.random()} className={classes.pageItem}>
            <a href='!#' className={classes.pageLink} onClick={ () => changePageHandler(lastPageNumber) }>
                »
            </a>        
        </li>            
        </ul>
        Page: {currentPage}
    </nav>
  )
}

export default Pagination