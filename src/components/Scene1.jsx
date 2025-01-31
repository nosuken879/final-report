import YouTube from "react-youtube";

export default function Scene1({scene, songs}) {
  const filteredSongs = songs.filter(song => song.scene === scene);

  return(
    <scene>
      <h2>Dance</h2>
      <p className="scene-introduce">ここでは勝手に体が動いちゃうようなアガる曲を紹介するぞ！！</p>
      <p className="indent"></p>
      <div className="video-container">
        {filteredSongs.map((song, index) => {
          return(
            <div key={index}>
              <h3>{index+1}曲目：{song.title}</h3>
              <p></p>
              <YouTube videoId={song.videoId} title={song.title} />
              <p>{song.text}</p>
              <p className="indent"></p>
            </div>
          );
        })}
      </div>
    </scene>
  );
}