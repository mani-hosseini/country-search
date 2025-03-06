function Countries() {
    return (<section className={'p-6'}>
        <h2 className={'text-2xl font-bold mb-6 text-gray-900'}>Countries</h2>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input placeholder="Search by name..."
                   className="border border-gray-300 rounded px-3 py-2 w-1/2 focus:outline-none focus:border-blue-500"
                   type="text" value=""/><select
            className="border border-gray-300 rounded px-3 py-2 w-1/2 focus:outline-none focus:border-blue-500">
            <option value="">All Regions</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
        </div>
        <ul className={'grid grid-cols-3 gap-6'}>
            <li className="bg-white border border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition"><a
                className="text-blue-600 hover:underline text-lg ">Grenada</a>
                <div className="text-gray-600 text-sm mt-1">Region: Americas <br/>Population: 112,519</div>
            </li>
            <li className="bg-white border border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition"><a
                className="text-blue-600 hover:underline text-lg ">Grenada</a>
                <div className="text-gray-600 text-sm mt-1">Region: Americas <br/>Population: 112,519</div>
            </li>
            <li className="bg-white border border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition"><a
                className="text-blue-600 hover:underline text-lg ">Grenada</a>
                <div className="text-gray-600 text-sm mt-1">Region: Americas <br/>Population: 112,519</div>
            </li>
        </ul>
    </section>)
}

export default Countries
