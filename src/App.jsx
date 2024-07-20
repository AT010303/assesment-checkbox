import { useState } from "react";

function App() {
  const [selectedPages, setSelectedPages] = useState([]);

  const handlePageSelect = (page) => {
    if (selectedPages.includes(page)) {
      setSelectedPages(selectedPages.filter((p) => p !== page));
    } else {
      setSelectedPages([...selectedPages, page]);
    }
  };

  const handleSelectAll = () => {
    if (selectedPages.length === 4) {
      setSelectedPages([]);
    } else {
      setSelectedPages(["Page 1", "Page 2", "Page 3", "Page 4"]);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-4 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <label htmlFor="all-pages" className="font-montserrat ">
            All pages
          </label>
          <input
            type="checkbox"
            className="custom-checkbox"
            checked={selectedPages.length === 4}
            onChange={handleSelectAll}
          />
        </div>
        <hr className="border-t border-gray-300 mb-4" />
        <div className="flex justify-between items-center mb-4">
          <label htmlFor="page-1" className="font-montserrat">
            Page 1
          </label>
          <input
            type="checkbox"
            className="custom-checkbox"
            checked={selectedPages.includes("Page 1")}
            onChange={() => handlePageSelect("Page 1")}
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <label htmlFor="page-2" className="font-montserrat">
            Page 2
          </label>
          <input
            type="checkbox"
            className="custom-checkbox"
            checked={selectedPages.includes("Page 2")}
            onChange={() => handlePageSelect("Page 2")}
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <label htmlFor="page-3" className="font-montserrat">
            Page 3
          </label>
          <input
            type="checkbox"
            className="custom-checkbox"
            checked={selectedPages.includes("Page 3")}
            onChange={() => handlePageSelect("Page 3")}
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <label htmlFor="page-4" className="font-montserrat">
            Page 4
          </label>
          <input
            type="checkbox"
            className="custom-checkbox"
            checked={selectedPages.includes("Page 4")}
            onChange={() => handlePageSelect("Page 4")}
          />
        </div>
        <hr className="border-t border-gray-300 mb-4" />
        <button className="bg-yellow-button hover:bg-yellow-button-hover text-black font-montserrat text-center py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex items-center justify-center">
          Done
        </button>
      </div>
    </div>
  );
}

export default App;
