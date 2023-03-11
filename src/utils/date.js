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
