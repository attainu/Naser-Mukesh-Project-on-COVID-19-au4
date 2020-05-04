const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let newUrl = url;

    if (country) {
        newUrl = `${url}/countries/${country}`
    }
    try {
        const res = await fetch(newUrl);
        const { confirmed, recovered, deaths, lastUpdate } = await res.json();
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.log(error.message);
    }
};

export const fetchDailyData = async () => {
    try {
        const res = await fetch(`${url}/daily`);
        const parseRes = await res.json();

        return parseRes.map(({confirmed, deaths, reportDate: date}) => (
            {confirmed: confirmed.total, deaths: deaths.total, date}
        ));
    } catch (error) {
        console.log(error.message);
    }
};

export const fetchCountries = async () => {
    try {
        const res =await fetch(`${url}/countries`)
        const {countries} = await res.json();

        return countries.map(country => (country.name));
    } catch (error) {
        console.log(error.message)
    }
}