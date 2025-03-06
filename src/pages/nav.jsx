import {  Link } from "react-router-dom";

function Nav() {
    return (
        <section className={'w-[80%] m-auto py-8 flex items-center space-x-14 min-h-[50px]'}>
            <Link to="/" className={'text-2xl text-black font-bold'}>REST <span className={'text-[#2563EB]'}>EXPLORE</span></Link>
            <span className={'h-full w-[1px] bg-gray-700'}>&nbsp;</span>
            <nav className={'flex items-center space-x-4'}>
                <Link className={'text-gray-700 hover:text-black text-[18px] transition-all'} to="/">Home</Link>
                <Link className={'text-gray-700 hover:text-black text-[18px] transition-all'} to="/countries">Countries</Link>
                <Link className={'text-gray-700 hover:text-black text-[18px] transition-all'} to="/about">About</Link>
            </nav>
        </section>
    );
}

export default Nav;