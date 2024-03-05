import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../../constants";
import axios from "axios";
export const getFlights = createAsyncThunk("flights/getFlights", async () => {
  const res = await axios.request(options);
  //gelenm veriyi formatla dizi içerisinde gelen veriyi nesnelere cevir
  const formatted = res.data.aircraft.map((item) => ({
    id: item[0],
    code: item[1],
    lat: item[2],
    lng: item[3],
  }));
  console.log(formatted);
  //aksiyonun payloadı olarak formatlanan veriyi ekle
  return formatted;
});
