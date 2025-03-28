import Form from "next/form";
import { Search } from "lucide-react";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <div className="relative">
        <input
          name="query"
          defaultValue={query}
          className="w-full pr-20 pl-4 py-2 border rounded"
          placeholder="Search Startups"
        />

        <div className="absolute inset-y-0 right-16 flex items-center">
          {query && <SearchFormReset />}
        </div>
        <button
          type="submit"
          className="absolute inset-y-0 right-0 px-4 flex items-center bg-blue-500  rounded-r hover:bg-blue-600 text-white">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
