import './App.css';
import {Map, YMaps} from "react-yandex-maps";
import {useState} from "react";
import {Maximize} from "lucide-react";

function App() {
  const [size, setSize] = useState<string>("medium")
  
  return (
    <div className="App">
      
      <div className={`${size == 'medium' ? 'camera-container-medium' : 'camera-container-large'}`}>
        <div className='camera-blocks'>
          <div className='camera'>КАМЕРА</div>
          <span className='changeSize'
                onClick={() => setSize(prev => prev === 'medium' ? ' large' : 'medium')}>
            <Maximize/>
          </span>
        </div>
      </div>
      <YMaps>
        <Map defaultState={{center: [55.75, 37.57], zoom: 9}} className='map'/>
      </YMaps>
    </div>
  );
}

export default App;
