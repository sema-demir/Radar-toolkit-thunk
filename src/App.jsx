import { useEffect, useState } from "react";
import Header from "./components/Header";
import MapView from "./pages/MapView";
import ListView from "./pages/ListView";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/action/flightAction";
import Modal from "./components/Modal";

const App = () => {
  //harita görünümü aktif mi state i
  const [isMapView, setIsMapView] = useState(true);

  //detayı gösterilecek  elemamın id si
  const [detailId, setDetailId] = useState(null);
  //console.log(detailId);

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
      {isMapView ? <MapView setDetailId={setDetailId} /> : <ListView />}
      {/* detailId varsa ekrana modal bas  */}
      {detailId && (
        <Modal detailId={detailId} close={() => setDetailId(null)} />
      )}
    </div>
  );
};

export default App;
