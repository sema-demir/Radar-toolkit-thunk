import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const ListView = ({ setDetailId }) => {
  const flightState = useSelector((store) => store.flightReducer);
  // gösterilecek ilk elemanın state i tuttuk
  const [itemOffset, setItemOffset] = useState(0);

  // sayfa başına gösterilecek eleman sayısı
  const itemsPerPage = 10;

  // son gösterilecek elemanı belirler
  const endOffset = itemOffset + itemsPerPage;

  // belirlenen aralıktaki slice yardımıyla elemanları alır
  const currentItems = flightState.flights.slice(itemOffset, endOffset);

  // maksimum sayfa sayısını belirle
  const pageCount = Math.ceil(flightState.flights.length / itemsPerPage);

  // her yeni sayfa gectiğinde calışır
  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % flightState.flights.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="p-4">
      <table className="table table-dark table-striped table-hover table-responsive mt-5">
        <thead>
          <tr>
            <th>id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.slice(0, 10).map((i) => (
            <tr>
              <td>{i.id}</td>
              <td>{i.code}</td>
              <td>{i.lat}</td>
              <td>{i.lng}</td>
              <td>
                <button onClick={() => setDetailId(i.id)}>Detay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        className="pagination"
        previousLabel="< önceki"
        nextLabel="sonraki >"
      />
    </div>
  );
};

export default ListView;
