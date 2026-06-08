import type { Object } from "./Object.ts";

export default function ObjectDetails({ object }: { object: Object | null }) {
    return (
        <div className="details-panel">
            {object ? (
                <div className="nav-panel">
                    <div>
                        <h2>{object.name}</h2>
                        <p style={{ fontSize: "1.1em", color: "#e0e0e0" }}>Jest {object.distance} km od Ziemi</p>
                        <p style={{ fontSize: "0.85em", color: "#888", letterSpacing: "1.5px" }}>{object.type.toUpperCase()}</p>
                    </div>
                    <div>
                        <img className={"details-img"} src={object.link}/>
                    </div>
                </div>
            ) : (
                <p style={{ color: "#888", fontSize: "1.05em", lineHeight: "1.5" }}>
                    ← Wybierz obiekt, który chcesz obejrzeć z listy obok
                </p>
            )}
        </div>
    );
}