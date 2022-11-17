import React from 'react';
import { useQuery } from 'react-query';

import JobsList from '../components/JobsList';
import { getJobs } from '../services/jobs.service';
import { IJob } from '../types';

const Jobs = () => {
  const { data, isSuccess }: { data: IJob[] | undefined; isSuccess: boolean } =
    useQuery({
      queryKey: ['jobs'],
      queryFn: getJobs,
    });

  return (
    <div className="w-full bg-light-blue font-proxima">
      <div className="container 2xl:w-[1400px] mx-auto pt-5">
        {isSuccess && <JobsList jobs={data as IJob[]} />}
      </div>
    </div>
  );
};

export default Jobs;
