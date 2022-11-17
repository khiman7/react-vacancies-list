import React, { HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import { IJob } from '../../types';

import { ReactComponent as Bookmark } from '../../assets/Bookmark.svg';
import { ReactComponent as Location } from '../../assets/Location.svg';
import { ReactComponent as Star } from '../../assets/Star.svg';

interface IStarRatingProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  starClassName?: string;
}

const StarRating: React.FC<IStarRatingProps> = ({ value, starClassName }) => {
  return (
    <div className="flex flex-row">
      {Array(5)
        .fill(1)
        .map((_, index) => (
          <Star
            className={starClassName}
            key={`star_${index + 1}`}
            fill={value >= index + 1 ? '#38415d' : '#fff'}
          />
        ))}
    </div>
  );
};

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  job: IJob;
}

const Card: React.FC<ICardProps> = ({ job }) => {
  const posted = Math.round(
    (Date.now() - new Date(job.createdAt).getTime()) / 1000 / 3600 / 24
  );

  return (
    <div className="flex flex-col mx-2 sm:flex-row justify-between mb-1 px-4 py-6 bg-[#eff0f5] sm:bg-white rounded drop-shadow-md">
      <div className="flex flex-row flex-1">
        <img
          className="w-20 h-20 rounded-full shrink-0"
          src={`${job.pictures[0]}?${job.id}`}
          alt="Location"
        />
        <div className="ml-7">
          <Link to={`/details/${job.id}`} state={{ job }}>
            <h2 className="text-cyan-800 font-bold">{job.title}</h2>
          </Link>
          <p className="mt-2 text-gray-500">Department name • {job.name}</p>
          <div className="flex flex-row mt-2">
            <Location />
            <p className="ml-2 text-gray-500">{job.address}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row -order-1 sm:order-1 mb-4 sm:mb-0 pl-[108px] sm:pl-0">
        <div className="flex justify-center items-center">
          <StarRating starClassName="w-[10px] sm:w-[20px]" value={5} />
        </div>
        <div className="flex flex-grow flex-col ml-8">
          <Bookmark className="self-end hidden sm:block hover:cursor-pointer hover:fill-slate-500" />
          <p className="self-end mt-auto text-gray-400">
            Posted {posted} days ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
