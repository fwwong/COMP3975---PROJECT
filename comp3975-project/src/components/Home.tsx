import Footer from "./nav/Footer";
import Navbar from "./nav/Navbar";
import SearchBar from "./nav/SearchBar";
import Tags from "./nav/Tags";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-800 py-32 text-center">
        <img src="favicon.ico" alt="Logo" className="h-32 w-32 mx-auto" />
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to Market Mingle</h1>
        <p className="text-lg text-white">Find what you need quickly with our powerful search engine.</p>
        <div className="mt-8 p-10">
          <SearchBar />
        </div>
      </div>
      <div className="bg-gray-900 py-10 text-center">
        <h1 className="text-2xl font-bold text-white">Search by Tags</h1>
      </div>
      <div className="p-5">
      <Tags />
      </div>
    <Footer />  
    </div>
  );
}
