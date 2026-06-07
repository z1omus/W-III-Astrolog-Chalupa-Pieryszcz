import React, { type ChangeEvent, useState } from "react";
import type { Object } from "./Object.ts";

function DiscoveryForm({ onAddObject }: { onAddObject: (obj: Object) => void }) {
    const [inputName, setInputName] = useState('');
    const [inputType, setInputType] = useState('');
    const [inputDistance, setInputDistance] = useState('');
    const [inputLink, setInputLink] = useState('');

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        onAddObject({
            name: inputName,
            type: inputType,
            distance: Number(inputDistance),
            link: inputLink || "https://cdn-icons-png.flaticon.com/512/1043/1043286.png",
        });

        setInputName('');
        setInputType('');
        setInputDistance('');
        setInputLink('');
    }

    const isFormValid = inputName && inputType && inputDistance;

    return (
        <form onSubmit={handleSubmit}>
            <h3>Dodaj nowy obiekt</h3>

            <div className="form-group">
                <label>Nazwa:</label>
                <input type="text" value={inputName} onChange={(e: ChangeEvent<HTMLInputElement>) => setInputName(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Typ:</label>
                <input type="text" value={inputType} onChange={(e: ChangeEvent<HTMLInputElement>) => setInputType(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Odległość od Ziemi:</label>
                <input type="number" value={inputDistance} onChange={(e: ChangeEvent<HTMLInputElement>) => setInputDistance(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Link do zdjęcia:</label>
                <input type="text" value={inputLink} onChange={(e: ChangeEvent<HTMLInputElement>) => setInputLink(e.target.value)} />
            </div>

            <button type="submit" disabled={!isFormValid}>Dodaj</button>
            {!isFormValid && <p className="error-text">Uzupełnij wymagane pola</p>}
        </form>
    );
}

export default DiscoveryForm;