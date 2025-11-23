import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L, { LatLngExpression, LatLngBoundsExpression, Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

// Type LatLngTuple pour TS
type LatLngTuple = [number, number];

// Icône Leaflet
const icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

// Type restaurant
interface RestaurantType {
    id: number;
    nom: string;
    lat: number;
    lng: number;
    horaires: string;
    photo: string;
    distance?: number;
}

// Fake restaurants (à remplacer par ton API)
const restaurantsFrance: RestaurantType[] = [
    { 
        id: 1, 
        nom: "100% CROUSTI Aulnay-sous-Bois", 
        lat: 48.9387, 
        lng: 2.4485, 
        horaires: "11h-18h", 
        photo: "/Franchise.png"  
    },
    { 
        id: 2, 
        nom: "100% CROUSTI Paris", 
        lat: 48.8566, 
        lng: 2.3522, 
        horaires: "10h-22h", 
        photo: "/Franchise.png" 
    },
    { 
        id: 3, 
        nom: "100% CROUSTI Lyon", 
        lat: 45.764, 
        lng: 4.8357, 
        horaires: "9h-21h", 
        photo: "/Franchise.png"  
    },
    { 
        id: 4, 
        nom: "100% CROUSTI Marseille", 
        lat: 43.2965, 
        lng: 5.3698, 
        horaires: "11h-23h", 
        photo: "/Franchise.png" 
    },
    { 
        id: 5, 
        nom: "100% CROUSTI Lille", 
        lat: 50.6292, 
        lng: 3.0573, 
        horaires: "10h-22h", 
        photo: "/Franchise.png"  
    },
    { 
        id: 6, 
        nom: "100% CROUSTI Toulouse", 
        lat: 43.6045, 
        lng: 1.4442, 
        horaires: "9h-22h", 
        photo: "/Franchise.png" 
    },
];

// Calcul distance Haversine
function distanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Routing component
interface RoutingProps {
    from: LatLngTuple;
    to: LatLngTuple;
}
const RoutingMachine: React.FC<RoutingProps> = ({ from, to }) => {
    const map = useMap();
    useEffect(() => {
        if (!from || !to) return;
        const control = L.Routing.control({
        waypoints: [L.latLng(from), L.latLng(to)],
        lineOptions: { styles: [{ color: "blue", opacity: 0.6, weight: 5 }] },
        show: false,
        addWaypoints: false,
        routeWhileDragging: false,
        }).addTo(map);

        return () => map.removeControl(control);
    }, [from, to, map]);
    return null;
};

export default function RestaurantPage() {
    const [position, setPosition] = useState<LatLngTuple>([46.2276, 2.2137]); // centre France
    const [search, setSearch] = useState<string>("");
    const [filteredRestaurants, setFilteredRestaurants] = useState<RestaurantType[]>(restaurantsFrance);
    const [mapInstance, setMapInstance] = useState<LeafletMap | null>(null);
    const [routeTo, setRouteTo] = useState<LatLngTuple | null>(null);

    // Géolocalisation utilisateur
    useEffect(() => {
        navigator.geolocation?.getCurrentPosition(pos =>
        setPosition([pos.coords.latitude, pos.coords.longitude])
        );
    }, []);

    // Filtre + tri distance
    useEffect(() => {
        const result = restaurantsFrance
        .filter(r => r.nom.toLowerCase().includes(search.toLowerCase()))
        .map(r => ({ ...r, distance: distanceKm(position[0], position[1], r.lat, r.lng) }))
        .sort((a, b) => (a.distance! - b.distance!));
        setFilteredRestaurants(result);
    }, [search, position]);

    const franceBounds: LatLngBoundsExpression = [
        [41.0, -5.5],
        [51.5, 10.0],
    ];

    const recenterOnUser = () => mapInstance?.setView(position, 8);
    const findClosestRestaurant = () => {
        if (filteredRestaurants.length > 0) {
        const closest = filteredRestaurants[0];
        setRouteTo([closest.lat, closest.lng]);
        mapInstance?.setView([closest.lat, closest.lng], 10);
        }
    };

    return (
        <div className="container py-5">
            {/* Barre recherche */}
            <div className="input-group mb-3">
                <span className="input-group-text bg-dark text-white">🔍</span>
                <input className="form-control" placeholder="Rechercher un restaurant..." value={search} onChange={e => setSearch(e.target.value)} />
            </div>

            <div className="mb-3 d-flex gap-2">
                <button className="btn btn-primary flex-fill" onClick={recenterOnUser}>📍 Centrer sur ma position</button>
                <button className="btn btn-success flex-fill" onClick={findClosestRestaurant}>🏆 Plus proche</button>
            </div>

            {/* Carte */}
            <div className="card shadow border-0 mb-4">
                <MapContainer
                bounds={franceBounds}
                scrollWheelZoom
                className="rounded"
                style={{ height: "500px", width: "100%" }}
                whenReady={(event) => setMapInstance(event.target)}
                >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
                />

                <Marker position={position} icon={icon}>
                    <Popup>📍 Vous êtes ici</Popup>
                </Marker>

                <MarkerClusterGroup chunkedLoading>
                    {filteredRestaurants.map(r => (
                    <Marker key={r.id} position={[r.lat, r.lng]} icon={icon}>
                        <Popup>
                        <h5>{r.nom}</h5>
                        <img src={r.photo} alt={r.nom} style={{ width: "100%", marginBottom: "5px" }} />
                        <p>Horaires: {r.horaires}</p>
                        <p>Distance: {r.distance?.toFixed(1)} km</p>
                        <button className="btn btn-sm btn-info w-100" onClick={() => setRouteTo([r.lat, r.lng])}>Itinéraire</button>
                        </Popup>
                    </Marker>
                    ))}
                </MarkerClusterGroup>

                {routeTo && <RoutingMachine from={position} to={routeTo} />}

                </MapContainer>
            </div>

            {/* Liste restaurants */}
            <h3 className="fw-bold mt-4">Restaurants disponibles</h3>
            <div className="row mt-3">
                {filteredRestaurants.map(r => (
                <div key={r.id} className="col-md-4 mb-4">
                    <div className="card shadow-sm border-0 h-100">
                    <img src={r.photo} alt={r.nom} className="card-img-top" />
                    <div className="card-body d-flex flex-column">
                        <h5 className="fw-bold">{r.nom}</h5>
                        <p className="text-muted mb-2">⏰ {r.horaires}</p>
                        <p className="text-muted mb-2">Distance: {r.distance?.toFixed(1)} km</p>
                        <button className="btn btn-dark mt-auto" onClick={() => setRouteTo([r.lat, r.lng])}>Voir sur la carte</button>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}
