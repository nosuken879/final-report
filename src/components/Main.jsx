import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Dance from "./Scene1.jsx";
import Midnight from "./Scene2";
import Drive from "./Scene3";
import Holiday from "./Scene4";

export default function Main() {
  const songs = [
    {videoId:"OPf0YbXqDm0", title:"Mark Ronson ft.Bruno Mars - Uptown Funk", text:"アガる曲といったらやっぱりBruno Marsですよね！\n 老若男女問わず楽しく踊れちゃう超ファンキーな曲です！", scene: "dance"},
    {videoId:"1WTy2yqKI4w", title:"Perfume - チョコレイト・ディスコ", text:"こちらも誰でもアガれる超有名曲！ \n かわいい歌詞とノリノリのビートでアガっちゃいましょう！", scene: "dance"},
    {videoId:"wyx6JDQCslE", title:"LMFAO - Sexy and I Know It", text:"ザ・頭悪い系EDMナンバーワン！ \n 思考を停止させて踊っちゃいましょう！", scene:"dance"},
    {videoId:"ElN_4vUvTPs", title:"Michael Jackson - Human Nature", text:"あの伝説的なアーティストが奏でる優しい歌声と包み込むようなトラック。\n 聞いているだけで日々の疲れが癒されていきます。", scene:"midnight"},
    {videoId:"_0972HfmXO0", title:"MAISONdes ft.りりあ。＆ 南雲ゆうき - 夏空に溶ける", text:"りりあ。さんの透き通った歌声と南雲ゆうきさんのメロウな曲調がステキなハーモニーを奏でる一曲。\n聴いているととてもエモーショナルな気持ちになりますね。", scene:"midnight"},
    {videoId:"gT_tdwluIL8", title:"えんぷてい - 煙", text:"落ち着くような声と包み込むような楽器の音。\nいつまでも寄り添ってくれるような温かみのある楽曲です。", scene:"midnight"},
    {videoId:"LLK4oaXUuLg", title:"TWO DOOR CINEMA CLUB - UNDERCOVER MARTYN", text:"オシャレながらも盛り上がれる名曲！聴いていると気分があがりますね！", scene:"drive"},
    {videoId:"PLgYflfgq0M", title:"Suchmos - STAY TUNE", text:"テクニカルでオシャレなトラックについ耳を奪われてしまうような楽曲。\n深夜の首都高とかで聞きたい一曲です。", scene:"drive"},
    {videoId:"zejYD43HyQo", title:"FLOW - GO!!!", text:"平成を代表するナルトのOP曲ですね！流すだけで車内は大盛り上がりです！", scene:"drive"},
    {videoId:"ClbmWkbocoY", title:"Sheryl Crow - All I Wanna Do", text:"ポップで楽しげだけどどこか気の抜けた曲。お散歩にぴったりですね！", scene:"holiday"},
    {videoId:"fLexgOxsZu0", title:"Bruno Mars - The Lazy Song", text:"今日は何もせずひたすらゴロゴロしたい！そんな昼下がりの曲です。\n休日は難しいこと考えずにダラダラしましょう。", scene:"holiday"},
    {videoId:"S2Cti12XBw4", title:"Maroon 5 - Sunday Morning", text:"晴れ晴れとした日曜の朝の曲。\n今日はどんなことしようかな。そんなワクワクした気持ちにさせてくれる一曲です。", scene:"holiday"},
    {videoId:"", title:"", text:"", scene:""}
  ];

  return(
    <div className="Main">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home/>}></Route>
          <Route path={"/Home"} element={<Home/>}></Route>
          <Route path={"/Scene1"} element={<Dance scene="dance" songs={songs}/>}></Route>
          <Route path={"/Scene2"} element={<Midnight scene="midnight" songs={songs}/>}></Route>
          <Route path={"/Scene3"} element={<Drive scene="drive" songs={songs}/>}></Route>
          <Route path={"/Scene4"} element={<Holiday scene="holiday" songs={songs}/>}></Route>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}