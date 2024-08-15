// app/result/[makeId]/[year]/page.tsx

import ClientResultPage from './ClientResultPage';

export async function generateStaticParams() {
  //Random values
  return [
    { makeId: '441', year: '2024' },
    { makeId: '460', year: '2021' },
  ].map(({ makeId, year }) => ({
    params: { makeId, year },
  }));
}

const ResultPage = ({
  params,
}: {
  params: { makeId: string; year: string };
}) => {
  const { makeId, year } = params;

  return (
    <div>
      <ClientResultPage makeId={makeId} year={year} />
    </div>
  );
};

export default ResultPage;
