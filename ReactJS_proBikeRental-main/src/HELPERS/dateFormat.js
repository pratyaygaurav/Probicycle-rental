var date = new Date;

export const dateFormatInit = () => {
    let format_date = (date.getFullYear()).toString() + "-" + (date.getMonth() + 1).toString().padStart(2, '0') + "-" + date.getDate().toString();

    return format_date;

}

export const getDay = (date1 = "") => {

    let obj_date1 = new Date(date1.replace(/-/g, '\/'));

    return obj_date1.getDate();
}