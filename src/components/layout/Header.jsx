import { useState } from 'react';
import MenuBar from './MenuBar';

const Header = () => {

    const [menuStatus, setMenuStatus] = useState('inactive');

    const html = document.documentElement;
    menuStatus === 'active' ? html.classList.add('overflow-hidden') : html.classList.remove('overflow-hidden');

    return <header className="w-full h-16 bg-primary shadow-secondary shadow-2xl rounded-xs flex items-center justify-start p-5 gap-18">
        <MenuBar className={`${menuStatus === 'active' ? 'translate-x-[0%]' : 'translate-x-[-125%]'}`} />

        <menu id="menu" onClick={() => setMenuStatus(menuStatus === 'inactive' ? 'active' : 'inactive')} className={`w-7 h-4 relative z-50 flex items-center justify-center cursor-pointer`}>
            <div id="menu-line"className={`w-full h-0.5 transition-all duration-75 bg-black ${menuStatus === 'active' ? 'invisible before:visible before:rotate-[43deg] before:top-2/4 after:visible after:bottom-2/5 after:rotate-[-43deg]' : 'visible'} before:transition-all before:duration-300 before:content-[""] before:absolute before:w-full before:h-0.5 before:bg-black before:top-0 after:transition-all after:duration-300 after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-black after:bottom-0`}></div>
        </menu>

        <h1 className="text-2xl font-anton lg:text-4xl lg:tracking-wide">Cine Comédia</h1>
    </header>
}

export default Header;