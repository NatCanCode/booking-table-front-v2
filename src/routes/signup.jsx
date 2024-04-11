import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div>
            <Link to="/">Go to Home</Link>
            <h1>Signup</h1>
            <input type="text" placeholder="email" />
            <input type="password" placeholder="password" />
            <button>Valider</button>
            </div>
    )
}
