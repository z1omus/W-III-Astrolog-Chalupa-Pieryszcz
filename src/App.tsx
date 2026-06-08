import './App.css'
import {useState} from "react";
import DiscoveryForm from "./DiscoveryForm.tsx";
import type {Object} from "./Object.ts";
import CatalogList from "./CatalogList.tsx";
import ObjectDetails from "./ObjectDetails.tsx";

function App() {

    const [objects, setObjects] = useState<Object[]>([
        {name: "Planeta 21",type: "planeta",distance: 2343425,link: "https://www.tapeciarnia.pl/tapety/normalne/tapeta-planeta-merkury.jpg"},
        {name: "Gwiazda 232",type: "gwiazda",distance: 212412399,link: "https://cdn.pixabay.com/photo/2016/08/11/18/09/star-1586412_1280.png"},
        {name: "Rakieta 19084",type: "rakieta",distance: 20000032,link: "https://img.magnific.com/premium-zdjecie/rakiety-w-znaku-neonowym-ikona-rakiety-ikona-rakieta-kosmiczna-rakiety-z-latajacym-wektorem-sciezki-ilustracje_912214-40032.jpg?w=2000"},
        {name: "Planeta 11",type: "planeta",distance: 9876665,link: "https://www.tapeciarnia.pl/tapety/normalne/5323_planeta.jpg"},
        {name: "Planetoida 1",type: "planetoida",distance: 10000023039,link: "https://v.wpimg.pl/NGMyODVhYSYsGzl3eRNsM29DbS0_SmJlOFt1ZnlRfXE1TH1zeQ4nKygLKjQ5Rik1OAkuMyZGPitiGD8teR5_aCkQPDQ6CTdoKBQtITJHKnN_GHt9ZVBjISlALmliW31zYEF_fGJFKyJ7SnsnZFB7JnxLbTk"}
    ]);

    /*funkcja dodawania nowego obiektu*/
    function addObject(newObject: Object) {
        setObjects((prev) => [...prev, newObject]);
    }

    const [selectedObject, setSelectedObject] = useState<Object | null>(null);

    return (
            <div className="main-container">
            <div className="panel">
                <CatalogList objects={objects} onSelect={(obj) => setSelectedObject(obj)}/>
            </div>
            <div className="panel-right">
                <div className="panel">
                    <ObjectDetails object={selectedObject}/>
                </div>
                <div className="panel">
                    <DiscoveryForm onAddObject={addObject}/>
                </div>

            </div>
            </div>

    )
}

export default App