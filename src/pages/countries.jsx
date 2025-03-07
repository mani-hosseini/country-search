import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Countries() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("");

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get("https://restcountries.com/v3.1/all");
                setCountries(response.data);
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };
        fetchCountries();
    }, []);

    const filteredCountries = countries.filter(country =>
        (search === "" || country.name.common.toLowerCase().includes(search.toLowerCase())) &&
        (region === "" || country.region.toLowerCase() === region.toLowerCase())
    );

    return (
        <section className={'p-6'}>
            <h2 className={'text-2xl font-bold mb-6 text-gray-900'}>Countries</h2>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <input
                    placeholder="Search by name..."
                    className="border border-gray-300 rounded px-3 py-2 w-1/2 focus:outline-none focus:border-blue-500"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select
                    className="border border-gray-300 rounded px-3 py-2 w-1/2 focus:outline-none focus:border-blue-500"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                >
                    <option value="">All Regions</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
            <ul className={'grid grid-cols-3 gap-6'}>
                {filteredCountries.map(country => (
                    <li key={country.cca3}
                        className="bg-white border border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition">
                        <Link to={`/country/${country.cca3}`}
                              className="text-blue-600 hover:underline text-lg ">{country.name.common}</Link>
                        <div className="text-gray-600 text-sm mt-1">
                            Region: {country.region} <br/>
                            Population: {country.population.toLocaleString()}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Countries;