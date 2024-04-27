import {useEffect, useRef, useState} from 'react'
import {Map, YMaps} from 'react-yandex-maps'
import './App.css'
import Events from './components/events/events'

function App() {
  const [size, setSize] = useState<string>('medium')
  const [streamUrl, setStreamUrl] = useState('');
  
  useEffect(() => {
    const video = document.getElementById('video');
    //@ts-ignore
    let ws;
    
    if (streamUrl) {
      ws = new WebSocket('ws://localhost:9999');
      ws.onmessage = (event) => {
        const blob = new Blob([event.data], {type: 'video/mp4'}); // Указывайте тип контента, если он известен
        //@ts-ignore
        video.src = URL.createObjectURL(blob);
      };
      
      return () => {
        //@ts-ignore
        if (ws) {
          ws.close();
        }
      };
    }
  }, [streamUrl]);
  
  //@ts-ignore
  const handleSubmit = (event) => {
    event.preventDefault();
    //@ts-ignore
    ipcRenderer.invoke('start-rtsp-stream', streamUrl);
  };
  return (
    <div style={{
      height: '100%',
      width: '100%'
    }}>
      <div>
        <div
          className={`${
            size == 'medium'
              ? 'camera-container-medium'
              : 'camera-container-large'
          }`}
        >
          <div className='camera-blocks'>
            <div
              // className='camera'
            >
              <video id="video" width="720" controls autoPlay></video>
            </div>
          </div>
          <div className='input-area'>
            <div className='input-block'>
              <form id="streamForm" onSubmit={handleSubmit}>
                <input type="text" id="streamUrl" placeholder="Введите RTSP URL" className='input'
                       value={streamUrl}
                       onChange={e => setStreamUrl(e.target.value)}/>
                <button type="submit">Запустить поток</button>
              </form>
            </div>
          </div>
        </div>
        <Events/>
      </div>
      f
      <YMaps>
        <Map
          defaultState={{center: [56.1, 35.87], zoom: 15}}
          className='map'
        />
      </YMaps>
    </div>
  )
}

export default App
