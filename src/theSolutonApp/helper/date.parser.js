/**
 * Function designed to parse Norway local date format (DD. MMMM YYYY)
 * @param formattedDate: string - locale date
 * @returns number (timestamp)
 */

export const parseDate = (formattedDate) => {
    const months = {'januar': 0, 'februar': 1, 'mars': 2, 'april': 3, 'mai': 4, 'juni': 5, 'juli': 6, 'august': 7, 'september': 8, 'oktober': 9, 'november': 10, 'desember': 11};
    let res = formattedDate.match(/^(\d+)\W*(\w+)\W*(\d+)$/);
    if(res.length === 4){
        let [, day, month, year] = res;
        return (new Date(year, months[month.toLowerCase()], day)).getTime();
    }else{
        throw Error(`Sorry, can't parse this: ${formattedDate}`);
    }
}
