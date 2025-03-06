import {Link} from "react-router-dom";

function Home() {
    return (
        <section className={'w-[80%] m-auto mt-14'}>
            <div className={'w-1/2  space-y-5'}>
                <h1 className={'text-4xl  tracking-tight text-gray-900 sm:text-5xl'}>Explore Countries with<span
                    className={'text-[#2563EB]'}>Real-Time Data</span></h1>
                <p className={'text-[20px] text-gray-900'}>Discover details about every country around the world – from capitals to regions!</p>
                <div className={'flex space-x-4'}>
                    <Link className={'flex items-center justify-center px-6 py-3 text-lg text-white bg-blue-600 rounded-md hover:bg-blue-700'} to="/countries">Explore Now</Link>
                    <Link className={'flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600'} to="/about">Learn More</Link>
                </div>
            </div>

        </section>
    )
}

export default Home
