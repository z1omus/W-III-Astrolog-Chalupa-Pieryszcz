import type { Object } from "./Object.ts";

export default function CatalogList({ objects, onSelect }: { objects: Object[], onSelect: (o: Object) => void }) {
    return (
        <>
            <h3>Odkryte obiekty:</h3>
            <div className="catalog-list-wrapper">
                {objects.map((obj, i) => (
                    <div key={i} className="catalog-item" onClick={() => onSelect(obj)}>
                        <img src={obj.link || "https://cdn-icons-png.flaticon.com/512/1043/1043286.png"} alt="" className="catalog-img" />
                        <span>{obj.name}</span>
                    </div>
                ))}
            </div>
        </>
    );
}