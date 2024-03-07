export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.480658",
    bl_lng: "25.73472",
    tr_lat: "42.527912",
    tr_lng: "44.865926",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "e4f5ce1768msh41219fbd34033ffp143b1bjsn94b55b3d9b12",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

export const headerOpt = {
  headers: {
    "X-RapidAPI-Key": "e4f5ce1768msh41219fbd34033ffp143b1bjsn94b55b3d9b12",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
