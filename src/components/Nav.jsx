import { BrowserRouter, Link} from "react-router-dom";

export default function Nav() {
  const handleSceneChange = (genre) => {
    setSelectedScene(genre);
  }

  return(
    <nav>
      <ul>
        <BrowserRouter>
        <li><Link to="/Home" onClick={() => handleSceneChange("Home")}>ホーム</Link></li>
        <li><Link to="/Scene1" onClick={() => handleSceneChange("Dance")}>Dance</Link></li>
        <li><Link to="/Scene2" onClick={() => handleSceneChange("Midnight")}>Midnight</Link></li>
        <li><Link to="/Scene3" onClick={() => handleSceneChange("Drive")}>Drive</Link></li>
        <li><Link to="/Scene4" onClick={() => handleSceneChange("Holiday")}>Holiday</Link></li>
        </BrowserRouter>
      </ul>
    </nav>
  );
}