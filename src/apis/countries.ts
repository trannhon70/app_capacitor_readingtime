import axios from "axios"

export type CountriesType = {
        _id: string;
        countryName: string;
        timezone: number;
        currency: string;
        createdAt: Date;
        updatedAt: Date;
}
export const getListCountries = async () => {
        const res = await axios.get('/countries/list');
        return res.data;
}