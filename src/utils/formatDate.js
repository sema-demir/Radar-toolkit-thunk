import moment from "moment/moment";
import "moment/locale/tr";

// unix formatındaki veriyi normal formata çevirmek için
const formatDate = (unix_time) => {
  // unix fomatındaki saniye verisini date ile kullanmak  için 1000 ile carpıp ms ye çevirdik
  const date = new Date(unix_time * 1000);

  // tarihi moment ile formatlıyoruz
  //calendar özelliği tarihi bugün ve yarın seklinde veriyor
  return moment(date).calendar();
};

export default formatDate;
