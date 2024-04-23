import {Map, YMaps} from "react-yandex-maps";


export default function Test(){
   return <YMaps>
     <Map defaultState={{center: [55.75, 37.57], zoom: 9}} style={{
       width: '98.9vw',
       height: '100vh'
     }}/>
   </YMaps>
  
}