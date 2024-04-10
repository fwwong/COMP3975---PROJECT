export default function Tags() {
    { /* Replace with a API GET -- These are placeholder for now*/}
    const tags = [
        { name: 'Electronics', description: 'Find the latest electronics and gadgets here.' },
        { name: 'Fashion', description: 'Stay in style with the latest fashion trends.' },
        { name: 'Home & Garden', description: 'Find everything you need for your home and garden.' },
        { name: 'Books', description: 'Find the latest books and novels here.' },
        { name: 'Toys & Games', description: 'Find the latest toys and games for kids of all ages.' },
        { name: 'Sports & Outdoors', description: 'Find everything you need for your sports and outdoor activities.' }
    ];

    return (
        <div className="grid grid-cols-3 gap-4 p-10">
            {tags.map((tag, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                    <img src="favicon.ico" alt="Logo" className="h-32 w-32 mx-auto" />
                    <h2 className="text-xl font-bold text-gray-800">{tag.name}</h2>
                    <p className="text-gray-600">{tag.description}</p>
                </div>
            ))}
        </div>
    );
}
