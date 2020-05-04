import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from "./../api/index";

const CountryPicker = ({ handleCountryChange }) => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const initialCountries = await fetchCountries();

            setCountries(initialCountries);
        };

        fetchData();
    }, [setCountries]);
    
    const handleChange = (evt) => {
        handleCountryChange(evt.target.value)
    }
    return (
        <FormControl className="formControl">
            <NativeSelect defaultValue="" onChange={handleChange}>
                <option value="">Global</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;
