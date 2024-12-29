import Nav from "./Nav";

export default function Header({selectedScene, setSelectedScene}) {
  return(
    <header>
      <h1>シーン別おすすめ曲紹介</h1>
      <Nav selectedScene={selectedScene} setSelectedScene={setSelectedScene} />
    </header>
  );
}