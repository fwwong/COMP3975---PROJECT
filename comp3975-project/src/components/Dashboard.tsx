import Footer from "./nav/Footer";
import Navbar from "./nav/Navbar";

export default function Dashboard() {
    return (
        <div>
            <Navbar />
            <h1>Dashboard</h1>
            <p>Protected route</p>
            <Footer />
        </div>
    );
}