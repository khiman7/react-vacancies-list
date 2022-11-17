import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { IJob } from '../types';

import Button from '../components/Button';
import Contacts from '../components/Contacts';

import { ReactComponent as Bookmark } from '../assets/Bookmark.svg';
import { ReactComponent as Share } from '../assets/Share.svg';
import { ReactComponent as Arrow } from '../assets/Arrow.svg';

const formatSalary = (currency: string, salary: string): string => {
  return `${currency} ${salary.replace(/k/g, ' 000').replace(/-/g, ' — ')}`;
};

const Details: React.FC = () => {
  const { job }: { job: IJob } = useLocation().state;

  return (
    <div className="w-full bg-white font-proxima">
      <div className="container 2xl:w-[1400px] mx-auto pt-14 px-4">
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-col w-full sm:basis-7/12 mr-[130px]">
            <section className="order-0">
              <div className="w-full flex flex-col sm:flex-row justify-between pb-0 sm:pb-2 border-b-gray-200 border-b-0 sm:border-b-[1px]">
                <h1 className="pb-3 sm:pb-0 border-b-gray-200 border-b-[1px] sm:border-b-0 text-navy text-[28px] font-bold">
                  Job Details
                </h1>
                <div className="flex flex-row items-center mt-6 sm:mt-0">
                  <button
                    type="button"
                    className="flex flex-row items-center mr-8"
                  >
                    <Bookmark className="mr-2" />
                    <span>Save to my list</span>
                  </button>
                  <button type="button" className="flex flex-row items-center">
                    <Share className="mr-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col mt-0 sm:mt-8">
                <Button className="hidden self-start sm:inline-block">
                  APPLY NOW
                </Button>
                <div className="flex flex-row flex-wrap justify-between mt-8">
                  <h2 className="mb-2 sm:mb-0 text-navy text-2xl font-bold w-full lg:w-7/12 order-first">
                    {job.title}
                  </h2>
                  <div className="flex flex-col order-2 sm:-order-2">
                    <p className="text-navy text-xl font-bold">
                      {formatSalary('€', job.salary)}
                    </p>
                    <p className="self-end sm:self-start -order-1 sm:order-1 font-roboto font-normal text-navy text-xl">
                      Brutto, per year
                    </p>
                  </div>
                  <p className="flex items-center mt-2 text-gray-400 text-[14px] sm:text-xl basis-100">
                    Posted 2 days ago
                  </p>
                </div>
                <div className="mt-4 sm:mt-2 font-roboto text-navy text-lg">
                  {job.description}
                </div>
                <div className="mt-10">
                  <h3 className="text-xl text-navy font-bold">
                    Responsibilities
                  </h3>
                  <p className="mt-2 font-roboto text-navy text-lg">
                    {job.description}
                  </p>
                </div>
                <div className="mt-10">
                  <h3 className="text-xl text-navy font-bold">
                    Compensation & Benefits:
                  </h3>
                  <p className="mt-2 font-roboto text-navy text-lg">
                    Our employees enjoy a wide range of benefits, including:
                  </p>
                  <ul className="px-5 2xl:px-0 font-roboto text-navy text-lg list-square">
                    {job.benefits.map((benefit: string, index: number) => (
                      <li key={`benefit_${index + 1}`}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                <Button className="mt-10 self-center sm:self-start">
                  APPLY NOW
                </Button>
              </div>
            </section>
            {/* Additional info */}
            <section className="mt-[86px] order-2">
              <h1 className="pb-2 text-navy text-[28px] font-bold border-b-[1px] border-b-gray-200">
                Additional info
              </h1>
              <div className="mt-4">
                <p className="font-roboto text-navy text-lg">Employment type</p>
                <div className="flex flex-row mt-[10px]">
                  {job.employment_type.map((type: string, index: number) => (
                    <div
                      key={`employment_type_${index + 1}`}
                      className="flex-1 mr-2 last:mr-0 py-4 bg-indigo-100 border-[1px] border-indigo-200 rounded-lg text-indigo-900 text-center font-bold"
                    >
                      {type}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <p className="font-roboto text-navy text-lg">Benefits</p>
                <div className="flex flex-row mt-[10px]">
                  {job.benefits.map((benefit: string, index: number) => (
                    <div
                      key={`benefit_${index + 1}`}
                      className="flex-1 mr-2 last:mr-0 py-4 bg-yellow-100 border-[1px] border-yellow-300 rounded-lg text-yellow-700 text-center font-bold"
                    >
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section className="mt-[86px] order-1 sm:order-last">
              <h1 className="pb-2 text-navy text-[28px] font-bold border-b-[1px] border-b-gray-200">
                Attached images
              </h1>
              <div className="flex flex-row mt-5 overflow-scroll sm:overflow-hidden">
                {job.pictures.map((url: string, index: number) => (
                  <img
                    key={`picture_${index + 1}`}
                    className="flex-1 w-[210px] mr-2 last:mr-0 rounded-lg"
                    src={`https://picsum.photos/1920/1080?${index}`}
                    alt="Attached photos"
                  />
                ))}
              </div>
            </section>
          </div>
          <div className="flex-1 my-16 sm:my-0">
            <h1 className="mb-5 pb-3 sm:pb-0 border-b-gray-200 border-b-[1px] sm:border-b-0 text-navy text-[28px] font-bold sm:hidden ">
              Contacts
            </h1>
            <Contacts
              name={job.name}
              email={job.email}
              phone={job.phone}
              location={{ lat: job.location.lat, lng: job.location.long }}
            />
          </div>
        </div>
        <Link to="/jobs">
          <button
            className="flex-row justify-center items-center hidden sm:flex my-[100px] px-7 py-4 bg-[#e4e5ea] rounded-lg"
            type="button"
          >
            <Arrow />
            <span className="ml-5 text-[#384564] font-semibold">
              RETURN TO JOB BOARD
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Details;
