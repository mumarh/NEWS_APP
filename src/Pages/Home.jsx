import { useState, useEffect, useTransition } from "react";
import { Getapi } from "../API/Api";
import Loading from "./Loading";

const Home = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [isPending, startTransition] = useTransition();

  const fetchNews = async (search) => {
    try {
      const res = await Getapi(search);
      startTransition(() => {
        setNews(res.data.articles);
        console.log(res.data.articles);
      });
    } catch (error) {
      console.log("Error Fetching:", error.message);
    }
  };

  useEffect(() => {
    fetchNews("Pakistan");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      fetchNews(search);
      setSearch("");
    } else {
      alert("Please search the news first!");
    }
  };

  if (isPending) return <Loading />;

  return (
    <div className="p-4 sm:p-6 bg-gray-900 min-h-screen text-white">
      {/* Search Bar */}
      <form
        onSubmit={handleSubmit}
        className="mb-6 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-2"
      >
        <input
          type="text"
          placeholder="Search news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-600 px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 
             w-full sm:w-72 md:w-96
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
             transition-all duration-300 hover:border-blue-400"
        />
        <button
          type="submit"
          className="w-full sm:w-auto border border-blue-600 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded 
             transition-all duration-300 shadow-md hover:shadow-blue-500/50 hover:border-blue-400"
        >
          Search
        </button>
      </form>

      {/* News Cards */}
      {news.length === 0 ? (
        <p className="text-center text-gray-400 text-sm sm:text-base">
          No news available.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.slice(0, 30).map((item, index) => {
            if (!item.urlToImage) {
              return null;
            } else {
              return (
                <div
                  key={index}
                  className="relative rounded-xl overflow-hidden bg-gray-800 shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 flex flex-col"
                >
                  {/* Image */}
                  <img
                    src={item.urlToImage}
                    alt={item.title}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover"
                  />

                  {/* Card Content */}
                  <div className="p-4 flex flex-col flex-grow">
                    <h2 className="font-bold text-base sm:text-lg mb-2 line-clamp-2">
                      {item.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-400 mb-1">
                      <strong>Author:</strong> {item.author || "Unknown"}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400 mb-1">
                      <strong>Source:</strong> {item.source.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400 mb-2">
                      <strong>Published:</strong>{" "}
                      {new Date(item.publishedAt).toLocaleString()}
                    </p>
                    <p className="mb-3 text-gray-200 text-sm line-clamp-3">
                      {item.description}
                    </p>

                    {/* Stylish Button */}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-block px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-md hover:from-blue-700 hover:to-blue-600 hover:shadow-blue-500/40 transition-all duration-300 text-center"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
