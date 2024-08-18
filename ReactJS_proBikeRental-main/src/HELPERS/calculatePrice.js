import { getDay } from "./dateFormat";

var base = 0;
var result = 0;

function repeat3and5(day_calendar, rep) {

    let inc1 = 1;

    let days_stored = [day_calendar];

    for (let i = 0; i <= rep; i++) {

        if (days_stored[i] >= 31) {
            days_stored.push(inc1);
            inc1 += 1;
        } else {
            days_stored.push(days_stored[i] + 1);
        }
    }

    return days_stored;
}


export const calculatePrice = (useDatePickerValue, useRentBy, setPriceTotalRent, data = JSON.parse(localStorage.getItem('data_bike_storage'))) => {

    let day_rent = getDay(useDatePickerValue);

    let data_storage = {};

    switch (data?.bike_type) {

        case "Electric bike":
            base = day_rent <= 14 ? 10 : 12;
            result = useRentBy * base;
            break;

        case "Regular bike":
            var day_repeat = repeat3and5(day_rent, 1);

            for (let i = 0; i <= (day_repeat.length - 1); i++) {
                base = day_rent <= 14 ? 10 : 12;
            }

            if (useRentBy <= day_repeat.length) {
                result = base;

            } else {
                result = (useRentBy * base) - (base * 2); 
            }

            break;

        case "Old bike":

            var day_repeat = repeat3and5(day_rent, 3);

            for (let i = 0; i <= (day_repeat.length - 1); i++) {
                base = day_rent <= 14 ? 10 : 12;
                result = base;
            }

            if (useRentBy <= day_repeat.length) {
                result = base;

            } else {
                result = (useRentBy * base) - (base * 4); 

            }

            break;
    }


    data_storage.id = data?.id;
    data_storage.bike_type = data?.bike_type;
    data_storage.name_bike = data?.name_bike;
    data_storage.price_total = result;
    data_storage.rentBy = useRentBy;

    setPriceTotalRent(result);

    localStorage.setItem('data_bike_storage', JSON.stringify(data_storage));

}