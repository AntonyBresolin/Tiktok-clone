import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  let maxHeight;
    if(window.innerHeight <= 800){
        maxHeight = window.innerHeight
    }

  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  //faça quando tiver alguma mudança de estado (atualização na tela) ou quando inicializar o programa
  useEffect(() => {
    getVideos();

    //abre e fecha colchetes é para n deixar em loop.
  }, []);

  return (
    <div className="App" style={{ maxHeight: + "px"}}>
      <div className="app__videos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name= {item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
