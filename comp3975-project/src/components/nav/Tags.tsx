import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt, faTv } from "@fortawesome/free-solid-svg-icons";
import { faCarrot, faChessKnight, faBiking, faBook } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export default function Tags() {
  // Replace with an API GET -- These are placeholders for now
  const tags = [
    {
      name: "Electronics",
      description: "Find the latest electronics and gadgets here.",
      icon: faTv,
      link: "/electronics", // Specify the link for Electronics
    },
    {
      name: "Fashion",
      description: "Stay in style with the latest fashion trends.",
      icon: faShirt,
      link: "/fashion", // Specify the link for Fashion
    },
    {
      name: "Home & Garden",
      description: "Find everything you need for your home and garden.",
      icon: faCarrot,
      link: "/home-garden", // Specify the link for Home & Garden
    },
    { 
      name: "Books", 
      description: "Find the latest books and novels here.",
      icon: faBook,
      link: "/books", // Specify the link for Books
    },
    {
      name: "Toys & Games",
      description: "Find the latest toys and games for kids of all ages.",
      icon: faChessKnight,
      link: "/toys-games", // Specify the link for Toys & Games
    },
    {
      name: "Sports & Outdoors",
      description: "Find everything you need for your sports and outdoor activities.",
      icon: faBiking,
      link: "/sports-outdoors", // Specify the link for Sports & Outdoors
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 p-10">
      {tags.map((tag, index) => (
        <Link key={index} to={tag.link} className="hover:opacity-80">
          <div
            className="bg-white p-4 rounded-lg shadow-lg text-center"
          >
            <FontAwesomeIcon icon={tag.icon} className="text-3xl mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-800">{tag.name}</h2>
            <p className="text-gray-600">{tag.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
