import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>Benvenuto in Tris App</h1>
      <Link to="/game" className="start-button">Inizia a giocare</Link>
    </div>
  );
}