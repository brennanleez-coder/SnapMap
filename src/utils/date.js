export const convertDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleString();
}

export const getYYYYMMDDFromISOString = (isoDateString) => {
    const formattedDate = new Date(isoDateString);
    const yyyyMMdd = formattedDate.toISOString().slice(0, 10);
    // console.log(yyyyMMdd)
    return yyyyMMdd;
}

export const getDateTimeFromISOString = (isoDateString) => {
    const formattedDate = new Date(isoDateString);
    const yyyyMMdd = formattedDate.toISOString().slice(0, 10);
    const time = formattedDate.toISOString().slice(11, 19);
    // console.log(yyyyMMdd)
    return [yyyyMMdd, time];
}