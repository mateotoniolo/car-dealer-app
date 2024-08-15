import { useRouter } from 'next/navigation';

const ResultPage = ({ params }: { params: { makeId: string; year: string } }) => {
  const { makeId, year } = params;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold">
        Showing results for {makeId} in {year}
      </h1>
    </div>
  );
};

export default ResultPage;
