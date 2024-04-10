import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import useStore from "../stores/test_list_store";

function Dashboard() {
  const listings = useStore((state) => state.listings);

  // const [listings, setListings] = useState([]);

  // useEffect(() => {
  //   fetchListings();
  // });

  // const fetchListings = async () => {
  //   try {
  //     const response = await api.get("/listings");
  //     setListings(response.data);
  //   } catch (error) {
  //     console.error("Error fetching listings:", error);
  //   }
  // };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
      <SearchBar />
      <Categories />
      <Link
        to="/create-listing"
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Create Listing
      </Link>
      <ul className="mt-6 space-y-4">
        {listings.map((listing) => (
          <li key={listing.id} className="bg-white p-4 rounded-lg shadow-md">
            <Link
              to={`/listing/${listing.id}`}
              className="text-blue-500 hover:underline"
            >
              {listing.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
