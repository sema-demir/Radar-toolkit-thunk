import { useEffect, useState } from "react";
import Header from "./components/Header";
import MapView from "./pages/MapView";
import ListView from "./pages/ListView";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/action/flightAction";

const App = () => {
  //harita görünümü aktif mi state i
  const [isMapView, setIsMapView] = useState(true);
  const dispatch = useDispatch();
  //ucuş verilerini al
  useEffect(() => {
    dispatch(getFlights());
  }, []);
  return (
    <div>
      <Header />
      <div className="view-buttons">
        <button
          onClick={() => setIsMapView(true)}
          className={isMapView ? "active" : ""}
        >
          Harita Görünümü
        </button>
        <button
          onClick={() => setIsMapView(false)}
          className={isMapView ? "" : "active"}
        >
          Liste Görünümü
        </button>
      </div>
      {/* hangi görünümün ekrana basılacagını belirlemek için */}
      {isMapView ? <MapView /> : <ListView />}
    </div>
  );
};

export default App;
