import {builder} from '@builder.io/react';
import {defer, type LoaderArgs} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import {useMemo} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// @ts-ignore
import {useTable, useSortBy} from 'react-table';
// @ts-ignore
import {v4 as uuidv4} from 'uuid';

import {apiKey} from '~/builder/builder_env';
import BuilderCustomComponent from '~/components/builderio/BuilderComponent';
import {INVESTOR_RELATIONS} from '~/builder/constantId';
import {seoPayload} from '~/lib/seo.server';
import {routeHeaders, CACHE_SHORT} from '~/data/cache';
import Typography from '~/components/common/TypographyComponent';
import DownloadIcon from '~/components/icons/DownloadIcon';
import TableSortIcon from '~/components/icons/TableSortIcon';
import {useTranslation} from '~/hooks/useTranslation';

builder.init(apiKey);
export const headers = routeHeaders;

export async function loader({params, request, context}: LoaderArgs) {
  const {language, country} = context.storefront.i18n;

  let locale;

  if (Object.keys(params).length === 0) {
    locale = 'Default';
  } else if (
    params.locale &&
    params.locale.toLowerCase() === `${language}-${country}`.toLowerCase()
  ) {
    locale = params.locale.toLowerCase();
  }

  const page = await builder
    .get('page-section', {
      userAttributes: {
        locale,
      },
      options: {
        query: {
          id: INVESTOR_RELATIONS,
        },
        locale,
      },
    })
    .toPromise();

  const quarter_report: any = await fetch(
    `https://cdn.builder.io/api/v2/content/quarter-report?apiKey=${apiKey}`,
  ).then((response) => response.json());
  const annual_report: any = await fetch(
    `https://cdn.builder.io/api/v2/content/annual-report?apiKey=${apiKey}`,
  ).then((response) => response.json());

  const isPreviewing = new URL(request.url).searchParams.has('builder.preview');

  if (!page && !isPreviewing) {
    throw new Response('Page Not Found', {
      status: 404,

      statusText:
        "We couldn't find this page, please check your url path and if the page is published on Builder.io.",
    });
  }

  const seo = seoPayload.home();

  return defer(
    {
      page,
      locale,
      seo,
      quarter_report,
      annual_report,
    },
    {
      headers: {
        'Cache-Control': CACHE_SHORT,
      },
    },
  );
}

export function Table({
  columnData,
  report,
  language,
}: {
  columnData: any;
  report: any;
  language: any;
}) {
  const descDefault = useMemo(
    () => [
      {
        id: 'data.year',
        desc: true,
      },
    ],
    [],
  );
  const data = useMemo(() => report, [report]);
  const columns = useMemo(() => columnData, [columnData]);
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
    useTable(
      {
        columns,
        data,
        initialState: {
          sortBy: descDefault,
        },
      },
      useSortBy,
    );

  if (!rows.length) {
    return <>No data</>;
  }

  return (
    <table
      {...getTableProps()}
      className={'w-full border-collapse border border-border-table'}
    >
      <thead>
        {headerGroups.map((headerGroup: any) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={uuidv4()}>
            {headerGroup.headers.map((column: any) => {
              if (
                column.id == 'data.year' ||
                column.id == 'data.quarter' ||
                column.id == 'data.reportDate'
              ) {
                return (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={uuidv4()}
                    className={
                      column.isSorted
                        ? column.isSortedDesc
                          ? 'desc text-vinamilk-blue text-left py-2 px-1 bg-background-table border border-white first:border-l-border-table last:border-r-border-table'
                          : 'asc text-vinamilk-blue text-left py-2 px-1 bg-background-table border border-white first:border-l-border-table last:border-r-border-table'
                        : 'text-vinamilk-blue text-left py-2 px-1 bg-background-table border border-white first:border-l-border-table last:border-r-border-table'
                    }
                  >
                    <div className={'flex items-center'}>
                      {column.render('Header')}{' '}
                      <TableSortIcon
                        className={
                          column.isSorted
                            ? column.isSortedDesc
                              ? 'mx-2 transition-all desc'
                              : 'mx-2 transition-all rotate-180 asc'
                            : 'mx-2 transition-all'
                        }
                      />{' '}
                    </div>
                  </th>
                );
              } else {
                return (
                  <th
                    {...column.getHeaderProps()}
                    key={uuidv4()}
                    className={
                      'text-vinamilk-blue text-left py-2 px-1 bg-background-table border border-white first:border-l-border-table last:border-r-border-table'
                    }
                  >
                    {column.render('Header')}
                  </th>
                );
              }
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row: any) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={uuidv4()}>
              {row.cells.map((cell: any) =>
                typeof cell.value !== 'object' ? (
                  <td
                    {...cell.getCellProps()}
                    key={uuidv4()}
                    className={'text-left py-2 px-1 border border-border-table'}
                  >
                    {cell.column.id == 'data.otherDisclosures'
                      ? tdTagDownload(cell.value, 'otherDisclosures')
                      : cell.render('Cell')}
                  </td>
                ) : (
                  <td
                    {...cell.getCellProps()}
                    key={uuidv4()}
                    className={'border border-border-table'}
                  >
                    {Object.entries(cell.value).map((item: any) => (
                      <div
                        key={uuidv4()}
                        className={
                          'border-b border-b-border-table last:border-b-0'
                        }
                      >
                        {renderData(item, language)}
                      </div>
                    ))}
                  </td>
                ),
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default function InvestorPage() {
  const {page, locale, quarter_report, annual_report}: any =
    useLoaderData<typeof loader>();
  const language = {};

  const quarter_columns = [
    {
      Header: 'year',
      accessor: 'data.year',
    },
    {
      Header: 'quarter',
      accessor: 'data.quarter',
    },
    {
      Header: 'reportDate',
      accessor: 'data.reportDate',
    },
    {
      Header: 'financialReports',
      accessor: 'data.financialReports',
    },
    {
      Header: 'explanation',
      accessor: 'data.explanation',
    },
    {
      Header: 'investorNewsletter',
      accessor: 'data.investorNewsletter',
    },
  ];
  const annual_columns = [
    {
      Header: 'year',
      accessor: 'data.year',
    },
    {
      Header: 'reportDate',
      accessor: 'data.reportDate',
    },
    {
      Header: 'report',
      accessor: 'data.report',
    },
    {
      Header: 'otherDisclosures',
      accessor: 'data.otherDisclosures',
    },
  ];

  return (
    <>
      {page && (
        <BuilderCustomComponent
          model="page-section"
          content={page}
          locale={locale}
        />
      )}
      <div className={'container mb-6'}>
        <Typography className="uppercase text-center" variant="heading-1">
          {'reportAndEvents'}
        </Typography>
        <Tabs>
          <TabList
            className={
              'w-full bg-factory-blue text-black-800 flex cursor-pointer'
            }
          >
            <Tab
              className={
                'w-1/2 flex items-center justify-center py-4 focus:outline-none hover:opacity-90 capitalize'
              }
            >
              {'quarterReport'}
            </Tab>
            <Tab
              className={
                'w-1/2 flex items-center justify-center py-4 focus:outline-none hover:opacity-90 capitalize'
              }
            >
              {'annualReport'}
            </Tab>
          </TabList>
          <TabPanel>
            <Table
              columnData={quarter_columns}
              report={quarter_report.results}
              language={language}
            />
          </TabPanel>
          <TabPanel>
            <Table
              columnData={annual_columns}
              report={annual_report.results}
              language={language}
            />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

function tdTagDownload(url: string, title: string) {
  if (!url) {
    return null;
  }
  return (
    <div
      className={
        'flex items-center text-left py-2 px-1 group hover:bg-[#F6F8E0] hover:flex-row-reverse hover:justify-end'
      }
    >
      {' '}
      <span
        className={'transition-all bg-vinamilk-cream  group-hover:bg-[#F6F8E0]'}
      >
        {title}
      </span>
      <a href={url} download={'report'} target="_blank" rel="noreferrer">
        <DownloadIcon className={'mx-2 invisible group-hover:visible'} />
      </a>
    </div>
  );
}

function tdTagTime(time: number) {
  const date = new Date(time);
  return date.toLocaleDateString('en-GB');
}

function renderData(data: any, language: any) {
  switch (data[0]) {
    case 'consolidatedFinancialReportDate':
    case 'separateFinancialStatementsDate':
    case 'annualReportDate':
    case 'corporateGovernanceReportDate':
    case 'sustainabilityReportDate':
      return (
        <div className={'text-left py-2 px-1'}>
          {' '}
          <span>{tdTagTime(data[1])}</span>
        </div>
      );
    case 'consolidatedFinancialReport':
      return tdTagDownload(data[1], 'consolidatedFinancialReport');
    case 'separateFinancialStatements':
      return tdTagDownload(data[1], 'separateFinancialStatements');
    case 'changesInBusinessResults':
    case 'profitPresentation':
      return tdTagDownload(data[1], 'explanation');
    case 'newsletter1':
    case 'newsletter2':
      return tdTagDownload(data[1], 'newsletter');
    case 'annualReport':
      return tdTagDownload(data[1], 'annualReport');
    case 'corporateGovernanceReport':
      return tdTagDownload(data[1], 'corporateGovernanceReport');
    case 'sustainabilityReport':
      return tdTagDownload(data[1], 'sustainabilityReport');
    default:
      return data[0];
  }
}
