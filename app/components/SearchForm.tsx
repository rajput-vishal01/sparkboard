import Form from "next/form";
import { Search } from "lucide-react";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({ query }: { query?: string }) => {
    return (
        <Form action="/" scroll={false} className="flex items-center gap-3 w-full max-w-sm relative">
            <input
                name="query"
                defaultValue={query}
                className="border border-gray-300 rounded-md p-2 w-full bg-white text-black placeholder-gray-500 pr-10 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Search Startups"
            />
            <button 
                type="submit" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-md hover:bg-primary-100 transition"
            >
                <Search className="size-5" />
            </button>
        </Form>
    );
}

export default SearchForm;
