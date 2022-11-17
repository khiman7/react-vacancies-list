import React, { useState, useEffect, HTMLAttributes } from 'react';
import ReactPaginate from 'react-paginate';

import { IJob } from '../../types';

import Card from '../Card';
import { ReactComponent as ArrowLeft } from '../../assets/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../assets/ArrowRight.svg';

interface IJobsListProps extends HTMLAttributes<HTMLDivElement> {
  jobs: IJob[];
}

const JobsList: React.FC<IJobsListProps> = ({ jobs }) => {
  const [currentItems, setCurrentItems] = useState<IJob[]>();
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(jobs.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(jobs.length) / itemsPerPage);
  }, [itemOffset, itemsPerPage, jobs]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % jobs.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="flex flex-col">
      {currentItems?.map((job, index) => (
        <Card key={job.id} job={job} tabIndex={index} />
      ))}
      <ReactPaginate
        breakLabel="..."
        previousLabel={<ArrowLeft />}
        nextLabel={<ArrowRight />}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName="flex flex-row justify-center items-center self-center my-12 px-6 rounded-lg bg-white drop-shadow-md"
        pageClassName="w-8 py-3 font-proxima font-bold text-lg text-center text-gray-500"
        activeClassName="mt-[4px] border-b-4 border-blue-500"
        previousClassName="pr-7"
        nextClassName="pl-7"
      />
    </div>
  );
};

export default JobsList;
