import {Link} from "react-router-dom";

function About() {
    return (
        <section className={'w-[80%] mt-14 flex items-center justify-center m-auto'}>
            <div className={'container mx-auto px-4 max-w-4xl'}>
                <h1 className={'text-4xl font-extrabold text-gray-900 mb-6 text-center'}>About This Website</h1>
                <p className={'text-xl text-gray-700 leading-relaxed mb-4'}>This website uses the <span
                    className={'text-blue-600'}>REST Countries API</span> to
                    display comprehensive information about countries from
                    around the world.</p>
                <p className={'text-xl text-gray-700 leading-relaxed mb-4'}>Explore our data to learn about country
                    names,
                    capitals, regions, populations, flags, and much more. Whether you’re curious about a particular
                    country or looking for insights about global regions, our interactive explorer makes it easy.

                </p>
                <p className={'text-xl text-gray-700 leading-relaxed mb-4'}>Our goal is to build a fully responsive and
                    modern web application using the latest technologies, including React Router v7 for seamless routing
                    and Tailwind CSS for a beautiful, responsive user interface.

                </p>
            </div>

        </section>
    )
}

export default About
