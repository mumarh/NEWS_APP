import { useState, useEffect, useTransition } from "react";
import { Getapi } from "../../API/Api";
import Loading from "../../pages/Loading";

export const News = () => {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isPending, startTransition] = useTransition();

  const fetchNews = async (query = "technology") => {
    try {
      const res = await Getapi(query);
      startTransition(() => {
        setNews(res.data.articles); // Articles array
        console.log(res.data.articles);
      });
    } catch (error) {
      console.log("Error Fetching:", error.message);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      fetchNews(searchTerm);
      setSearchTerm("");
    } else {
      alert("Please search the news first!");
    }
  };

  if (isPending) return <Loading />;

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <form onSubmit={handleSubmit} className="mb-6 flex">
        <input
          type="text"
          placeholder="Search news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-700 p-2 rounded mr-2 bg-gray-800 text-white placeholder-gray-400"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {news.length === 0 ? (
        <p>No news available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <div
              key={index}
              className="border border-gray-700 p-4 rounded shadow hover:shadow-lg transition bg-gray-800"
            >
              {/* News Image */}
              {item.urlToImage && (
                <img
                  src={item.urlToImage}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded mb-3"
                />
              )}

              <h2 className="font-bold text-lg mb-2">{item.title}</h2>
              <p className="text-sm text-gray-400 mb-1">
                <strong>Author:</strong> {item.author || "Unknown"}
              </p>
              <p className="text-sm text-gray-400 mb-1">
                <strong>Source:</strong> {item.source.name}
              </p>
              <p className="text-sm text-gray-400 mb-2">
                <strong>Published:</strong>{" "}
                {new Date(item.publishedAt).toLocaleString()}
              </p>
              <p className="mb-2 text-gray-200">{item.description}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
