import React, { useState } from "react";
import Potter_nav from "./Potter_nav";
import { Outlet, useParams } from "react-router-dom";

function Layout() {
    const {catagory} = useParams()
    const [select, setSelect] = useState("");

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-300">
            <Potter_nav category={setSelect} setLanguage={(lang) => setSelect(lang)} />

            <div className="p-8">
                <div className="flex items-center justify-items-center justify-between align-middle">
                    <h1 className="text-4xl font-bold text-yellow-400 mb-4 text-center">
                        Harry Potter {select || "Books"}
                    </h1>
                    <p className="text-lg text-center text-gray-400 mb-6">
                        Language selected: <span className="text-yellow-300">en (English)</span>
                    </p>
                </div>
            </div>
                <Outlet />
        </div>
    );
}

export default Layout;
