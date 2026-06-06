import {type ChangeEvent, useState} from "react";
import type {Object} from "./Object.ts";

function DiscoveryForm({onAddObject}:{onAddObject: (obj: Object) => void}) {
    const[inputName, setInputName] = useState('');
    const[inputType, setInputType] = useState('');
    const[inputDistance, setInputDistance] = useState('');
    const[inputLink, setInputLink] = useState('');

    const [form, setForm] = useState({
        name: "",
        type: "",
        distance: "",
        link: "",
    });

    function handleInputNameChange(e: ChangeEvent<HTMLInputElement>){
        setInputName(e.target.value);
    }
    function handleInputTypeChange(e: ChangeEvent<HTMLInputElement>){
        setInputType(e.target.value);
    }
    function handleInputDistanceChange(e: ChangeEvent<HTMLInputElement>){
        setInputDistance(e.target.value);
    }
    function handleInputLinkChange(e: ChangeEvent<HTMLInputElement>){
        setInputLink(e.target.value);
    }
    function handleSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();

        onAddObject({
            name: form.name,
            type: form.type,
            distance: Number(form.distance),
            link: form.link,
        });

        setForm({
            name: "",
            type: "",
            distance: "",
            link: "",
        });
    }


    return(
        <>
        <h1>Formularz</h1>
        <form onSubmit={handleSubmit}>
            <label>Podaj nazwę obiektu:<input
            type={"text"}
            value={inputName}
            onChange={handleInputNameChange}
            /></label><br/>
            <label>Podaj typ obiektu:<input
                type={"text"}
                value={inputType}
                onChange={handleInputTypeChange}
            /></label><br/>
            <label>Podaj dystans obiektu od Ziemii<input
            type={"number"}
            value={inputDistance}
            onChange={handleInputDistanceChange}
            />[km]</label><br/>
            <label>Podaj link do zdjęcia:<input
            type={"text"}
            value={inputLink}
            onChange={handleInputLinkChange}
            /></label><br/>
            <button type={"submit"}>Dodaj obiekt do bazy</button>
            </form>
        </>
    )
}
export default DiscoveryForm;