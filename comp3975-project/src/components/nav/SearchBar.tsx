export default function SearchBar() {
    return (
        <div className="flex items-center">
            <input type="text" placeholder="Search" className="border-4 border-gray-300 p-4 rounded-lg w-full" />
            <button className="bg-blue-500 text-white p-4 rounded-lg ml-2">Search</button>
        </div>
    )
}