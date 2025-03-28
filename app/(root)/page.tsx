import bgImage from "@/assets/bgImg.jpg";
import SearchForm from "@/components/SearchForm";

interface HomeProps {
  searchParams: Promise<{ query?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const query = (await searchParams).query;
  const backgroundUrl = bgImage.src;

  return (
    <section
      className="min-h-screen flex items-center justify-center text-gray-900 px-6 py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundUrl})` }}>
      <div className="text-center max-w-3xl bg-white/80 p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
          Pitch Your Start-Up <br />
          Connect with Entrepreneurs
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Submit ideas, both on pitches, and get noticed in virtual
          competitions.
        </p>
        <div className="mt-8 w-full max-w-lg mx-auto">
          <SearchForm query={query} />
        </div>
      </div>
    </section>
  );
}
