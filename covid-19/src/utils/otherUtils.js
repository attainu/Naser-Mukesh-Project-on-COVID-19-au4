export function todaysDate() {
    let today = new Date();
    let date = `${today.getDate()}/${(today.getMonth()+1)}/${today.getFullYear()}`
    return date;
}