import './App.css'
import {useState} from "react";
import DiscoveryForm from "./DiscoveryForm.tsx";
import type {Object} from "./Object.ts";

function App() {

  const [object] = useState<Object[]>([
    {name: "Rakieta 21",type: "rakieta",distance: 2343425,url: "weergwgr.od"},
    {name: "Gwiazda 232",type: "gwiazda",distance: 212412399,url: "weergwgr.od"},
    {name: "Rakieta 19084",type: "rakieta",distance: 20000032,url: "weergwgr.od"},
    {name: "Planeta 11",type: "planeta",distance: 9876665,url: "weergwgr.od"},
    {name: "Planetoida 1",type: "planetoida",distance: 10000023039,url: "weergwgr.od"}
  ]);


  return (
    <>
     <DiscoveryForm/>
    </>
  )
}

export default App
