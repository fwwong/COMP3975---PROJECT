export default function Tags() {
    return (
        <div className="grid grid-cols-3 gap-4 p-10">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <img src="favicon.ico" alt="Logo" className="h-32 w-32 mx-auto" />
                <h2 className="text-xl font-bold text-gray-800">Electronics</h2>
                <p className="text-gray-600">Find the latest electronics and gadgets here.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <img src="favicon.ico" alt="Logo" className="h-32 w-32 mx-auto" />
                <h2 className="text-xl font-bold text-gray-800">Fashion</h2>
                <p className="text-gray-600">Stay in style with the latest fashion trends.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <img src="favicon.ico" alt="Logo" className="h-32 w-32 mx-auto" />
                <h2 className="text-xl font-bold text-gray-800">Home & Garden</h2>
                <p className="text-gray-600">Find everything you need for your home and garden.</p>
            </div>
        </div>
    );
}
