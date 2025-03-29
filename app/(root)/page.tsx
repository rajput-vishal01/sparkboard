import bgImage from "@/assets/bgImg.jpg";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

interface HomeProps {
  searchParams: Promise<{ query?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const query = (await searchParams).query;
  const backgroundUrl = bgImage.src;

  const posts = [
    {
      _id: 1,
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "vishal" },
      description: "this is desc",
      image:
        "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "robots",
      title: "we reobots",
    },
  ];

  return (
    <>
      <section
        className="flex items-center justify-center text-gray-900 px-6 py-12 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundUrl})` }}>
        <div className="text-center max-w-2xl bg-white/80 p-8 rounded-lg shadow-lg">
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

      <section>
        <p className="font-bold text-5xl  mt-4 ml-3">
          {query ? `Search results for ${query}` : `All startups`}
        </p>
        <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
          {posts?.length > 0 ? (
            posts.map((post: any, index: number) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="text-center text-gray-600 font-medium">
              No startups found
            </p>
          )}
        </ul>
      </section>
    </>
  );
}
