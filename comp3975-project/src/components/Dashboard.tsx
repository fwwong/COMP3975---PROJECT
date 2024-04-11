import Footer from "./nav/Footer";
import Navbar from "./nav/Navbar";
import SearchBar from "./nav/SearchBar";
import { Link } from "react-router-dom";
import Categories from "./test_data/Categories";
//import useStore from "../stores/test_list_store";

export default function Dashboard() {
    //const listings = useStore((state) => state.listings);
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-semibold text-center mb-6 pt-10">Dashboard</h1>
      <div className="p-10">
      <SearchBar />
      <Categories />
      <Link
        to="/create-listing"
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Create Listing
      </Link>
        <ul className="mt-6 space-y-4">
        {/* {listings.map((listing) => (
            <li key={listing.id} className="bg-white p-4 rounded-lg shadow-md">
                <Link
                    to={`/listing/${listing.id}`}
                    className="text-blue-500 hover:underline"
                >
                    {listing.title}
                </Link>
            </li>
        ))} */}
        </ul>
        </div>
      <Footer />
    </div>
  );
}
