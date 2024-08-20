import {Pagination} from 'react-bootstrap';

const CustomPagination = ({currentPage, totalPages, onPageChange}) => {
  const handlePageClick = (pageNumber) => {
    if(pageNumber !== currentPage && pageNumber > 0 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  const renderPageItems = () => {
    const pageItems = [];
    const delta = 2;
    const range = [];

    for(let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if(currentPage - delta > 2) {
      range.unshift('...');
    }
    if(currentPage - delta === 3) {
      range.unshift(2);
    }

    if(currentPage + delta < totalPages - 1) {
      range.push('...');
    }
    if(currentPage + delta === totalPages - 2) {
      range.push(totalPages - 1);
    }

    pageItems.push(<Pagination.Item
      key={1}
      active={currentPage === 1}
      onClick={() => handlePageClick(1)}
    >
      1
    </Pagination.Item>);

    range.forEach((page, index) => {
      if(page === '...') {
        pageItems.push(<Pagination.Ellipsis key={`ellipsis-${index}`}/>);
      } else {
        pageItems.push(<Pagination.Item
          key={page}
          active={currentPage === page}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </Pagination.Item>);
      }
    });

    if(totalPages > 1) {
      pageItems.push(<Pagination.Item
        key={totalPages}
        active={currentPage === totalPages}
        onClick={() => handlePageClick(totalPages)}
      >
        {totalPages}
      </Pagination.Item>);
    }

    return pageItems;
  };

  return (<div className="d-flex justify-content-center mt-4">
    <Pagination>
      <Pagination.Prev
        disabled={currentPage === 1}
        onClick={() => handlePageClick(currentPage - 1)}
      />
      {renderPageItems()}
      <Pagination.Next
        disabled={currentPage === totalPages}
        onClick={() => handlePageClick(currentPage + 1)}
      />
    </Pagination>
  </div>);
};

export default CustomPagination;
