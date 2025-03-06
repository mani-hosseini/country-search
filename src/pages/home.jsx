import {Link} from "react-router-dom";

function Home() {
    return (
        <section className={'w-[80%] m-auto'}>
            <div className={'w-1/3 space-y-5'}>
                <h1 className={'font-bold text-4xl'}>Explore Countries with<span
                    className={'text-[#2563EB]'}>Real-Time Data</span></h1>
                <p className={'text-[20px] text-gray-900'}>Discover details about every country around the world – from capitals to regions!</p>
                <div className={'space-x-4'}>
                    <Link className={'inline-block bg-[#2563EB] text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-all'} to="/countries">Explore Now</Link>
                    <Link className={'inline-block bg-gray-200 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-300 transition-all'} to="/about">Learn More</Link>
                </div>
            </div>

        </section>
    )
}

export default Home
