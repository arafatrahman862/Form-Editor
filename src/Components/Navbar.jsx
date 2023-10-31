import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=' mx-8'>
            <div className="navbar bg-green-400 rounded-lg">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">From Editor</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal  px-1 ">

                        <li>
                            <Link to="/question" className='font-semibold'>Question </Link>

                        </li>
                        <li>
                            <Link to="/answer" className='font-semibold'>Answer </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;