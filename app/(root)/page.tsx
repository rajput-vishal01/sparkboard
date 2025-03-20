import SearchForm from "../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-amber-500 text-gray-900 px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-black leading-tight">
          Pitch Your Start-Up <br />
          Connect with Entrepreneurs
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Submit ideas, both on pitches, and get noticed in virtual
          competitions.
        </p>
        <div className="mt-6 w-full max-w-md">
          <SearchForm query={query} />
        </div>
      </div>
    </section>
  );
}
