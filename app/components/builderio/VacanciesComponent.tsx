import type {BuilderContent} from '@builder.io/react';
import {Link, useMatches} from '@remix-run/react';
import clsx from 'clsx';
import React, {useState} from 'react';

import Pagination from '~/components/common/Pagination';
import Typography from '~/components/common/TypographyComponent';
import AddressIcon from '~/components/common/icons/AddressIcon';
import NextArrowIcon from '~/components/common/icons/NextArrowIcon';
import NextArrowWhiteIcon from '~/components/common/icons/NextArrowWhiteIcon';
import UserIcon from '~/components/common/icons/UserIcon';
import {removeVietnameseTones} from '~/helpers/string';
import {useTranslation} from '~/hooks/useTranslation';
import {formatDateTime} from '~/lib/utils';

const DepartmentContent = ({vacancies}: {vacancies: Array<any>}) => {
  const {language} = useTranslation('vacancies');

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7;

  const handlePageChange = (value: any) => {
    setCurrentPage(value);
    setItemStart((value - 1) * pageSize);
    setItemEnd(value * pageSize);
  };

  const [itemStart, setItemStart] = useState(0);
  const [itemEnd, setItemEnd] = useState(pageSize);

  return (
    <div className="bg-main-bg">
      <div className="container department-content-wrapper mt-[48px] flex flex-col gap-[32px]">
        {vacancies?.slice(itemStart, itemEnd)?.map((vacancy, index: number) => {
          const {name, address, numberCandidate, endDate, slug} = vacancy.data;

          return (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className="pb-[28px] flex justify-between border-b border-border-table"
            >
              <div>
                <Typography
                  variant="heading-5"
                  fontFamily="font-inter"
                  fontWeight="font-bold"
                  color="text-deep-blue"
                  className="mb-[9px]"
                >
                  {name}
                </Typography>
                <div className="flex gap-[32px]">
                  <div className="flex items-start">
                    <AddressIcon fill="var(--black-800)" className="mr-1" />
                    <Typography fontSize="text-[16px]" color="text-deep-blue">
                      {address}
                    </Typography>
                  </div>
                  <div className="flex items-start">
                    <UserIcon fill="var(--black-800)" className="mr-1" />
                    <Typography fontSize="text-[16px]" color="text-deep-blue">
                      {language.number_of_candidate} {numberCandidate}
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <Typography
                  fontSize="text-[16px]"
                  color="text-black-800"
                  className="mb-1"
                >
                  {language.end_date}{' '}
                  {formatDateTime({date: new Date(endDate)})}
                </Typography>
                <Link
                  to={`/recruitment/${slug}`}
                  className="py-[8px] flex items-center"
                >
                  <Typography
                    fontFamily="font-standard"
                    fontSize="text-subtitle"
                    color="text-vinamilk-blue"
                    className="mr-2"
                  >
                    {language.view_details}
                  </Typography>
                  <NextArrowIcon stroke="var(--vinamilk-blue)" />
                </Link>
              </div>
            </div>
          );
        })}
        <Pagination
          onPageChange={handlePageChange}
          totalCount={vacancies.length}
          currentPage={currentPage}
          pageSize={pageSize}
          className="my-pagination"
        />
      </div>
    </div>
  );
};

const sortingList = (array: Array<any>) => {
  return array.sort((a, b) => {
    const removeVietnameseA = removeVietnameseTones(a?.data?.name);
    const removeVietnameseB = removeVietnameseTones(b?.data?.name);
    if (removeVietnameseA > removeVietnameseB) return 1;
    if (removeVietnameseA < removeVietnameseB) return -1;
    return 0;
  });
};

const getVacanciesDataByDepartment = (
  departmentData: Array<any>,
  departmentTabSelected: string | number,
) => {
  let vacancies = [];

  if (
    departmentTabSelected !== 'all' &&
    typeof departmentTabSelected === 'number'
  ) {
    vacancies = departmentData[departmentTabSelected]?.data?.jobList?.map(
      (jobItem: any) => jobItem?.job?.value,
    );

    return sortingList(vacancies) || [];
  }

  vacancies = [...departmentData]?.reduce(
    (prev: Array<any>, currentItem: any) => {
      prev.push(
        ...(currentItem?.data?.jobList?.map(
          (jobItem: any) => jobItem?.job?.value,
        ) || []),
      );

      return prev;
    },
    [],
  );

  return sortingList(vacancies) || [];
};

const VacanciesComponent = () => {
  const {language} = useTranslation('vacancies');

  const [root] = useMatches();
  const departmentData: BuilderContent[] = root.data.departmentData;

  const [departmentTabSelected, setDepartmentTabSelected] = useState<
    string | number
  >('all');

  const [vacancies, setVacancies] = useState(
    getVacanciesDataByDepartment(departmentData, 'all'),
  );

  const tabStyles = 'pb-[20px] cursor-pointer relative';

  const handleClickDepartmentTab = (value: string | number) => {
    setDepartmentTabSelected(value);
    setVacancies(getVacanciesDataByDepartment(departmentData, value));
  };

  return (
    <React.Fragment>
      <div className="bg-deep-blue">
        <div className="container pt-[48px]">
          <Typography
            variant="heading-2"
            color="text-vinamilk-cream"
            className="mb-[40px]"
          >
            {language.vacancies_title}
          </Typography>
        </div>
        <div className="container flex gap-[30px]">
          <div className="h-[42px] overflow-y-hidden flex-1">
            <div className="overflow-x-auto">
              <div className="flex gap-[40px] department-tabs-wrapper whitespace-nowrap">
                <Typography
                  as="div"
                  variant="paragraph"
                  color="text-white"
                  className={clsx(tabStyles, {
                    active: departmentTabSelected === 'all',
                  })}
                  onClick={() => handleClickDepartmentTab('all')}
                  aria-hidden="true"
                >
                  {language.all_text}
                </Typography>
                {departmentData?.map((department, index) => {
                  return (
                    <Typography
                      key={department?.data?.id || index}
                      as="div"
                      variant="paragraph"
                      color="text-white"
                      className={clsx(tabStyles, {
                        active: departmentTabSelected === index,
                      })}
                      onClick={() => handleClickDepartmentTab(index)}
                      aria-hidden="true"
                    >
                      {department?.data?.name}
                    </Typography>
                  );
                })}
                {departmentData?.map((department, index) => {
                  return (
                    <Typography
                      key={department?.data?.id || index}
                      as="div"
                      variant="paragraph"
                      color="text-white"
                      className={clsx(tabStyles, {
                        active: departmentTabSelected === index,
                      })}
                      onClick={() => handleClickDepartmentTab(index)}
                      aria-hidden="true"
                    >
                      {department?.data?.name}
                    </Typography>
                  );
                })}
                {departmentData?.map((department, index) => {
                  return (
                    <Typography
                      key={department?.data?.id || index}
                      as="div"
                      variant="paragraph"
                      color="text-white"
                      className={clsx(tabStyles, {
                        active: departmentTabSelected === index,
                      })}
                      onClick={() => handleClickDepartmentTab(index)}
                      aria-hidden="true"
                    >
                      {department?.data?.name}
                    </Typography>
                  );
                })}
                {departmentData?.map((department, index) => {
                  return (
                    <Typography
                      key={department?.data?.id || index}
                      as="div"
                      variant="paragraph"
                      color="text-white"
                      className={clsx(tabStyles, {
                        active: departmentTabSelected === index,
                      })}
                      onClick={() => handleClickDepartmentTab(index)}
                      aria-hidden="true"
                    >
                      {department?.data?.name}
                    </Typography>
                  );
                })}
              </div>
            </div>
          </div>
          <NextArrowWhiteIcon stroke="var(--vinamilk-cream)" />
        </div>
      </div>
      <DepartmentContent vacancies={vacancies} />
    </React.Fragment>
  );
};

export default VacanciesComponent;
