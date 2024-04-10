import ENDPOINTS from "../config/config";

export default function Admin() {

    const response = async () => {
    
        const apiUrl = ENDPOINTS.CATEGORY;

        try {
            
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <h1>Admin</h1>
            <p>Protected route</p>
        </div>
    );
}