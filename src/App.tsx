import './App.css'
import {useState} from "react";
import DiscoveryForm from "./DiscoveryForm.tsx";
import type {Object} from "./Object.ts";

function App() {

  const [objects, setObjects] = useState<Object[]>([
    {name: "Rakieta 21",type: "rakieta",distance: 2343425,link: "weergwgr.od"},
    {name: "Gwiazda 232",type: "gwiazda",distance: 212412399,link: "weergwgr.od"},
    {name: "Rakieta 19084",type: "rakieta",distance: 20000032,link: "weergwgr.od"},
    {name: "Planeta 11",type: "planeta",distance: 9876665,link: "weergwgr.od"},
    {name: "Planetoida 1",type: "planetoida",distance: 10000023039,link: "weergwgr.od"}
  ]);
  function addObject(newObject: Object) {
    setObjects((prev) => [...prev, newObject]);
  }

  return (
    <>
     <DiscoveryForm onAddObject={addObject}/>
      <div>
        {objects.map((item, index) => (
            <div key={index}>
              <h3>{item.name}</h3>
              <p>{item.type}</p>
              <p>{item.distance}</p>
              <a href={item.link}>link</a>
            </div>
        ))}
      </div>
    </>
  )
}

export default App
