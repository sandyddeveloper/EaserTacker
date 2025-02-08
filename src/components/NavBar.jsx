import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <button onClick={() => navigate("/")} className="-m-1.5 p-1.5">
                        <img className="h-10 w-auto" src="https://discordbanners.vercel.app/static/img/logo.svg" alt="Logo" />
                    </button>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setIsMobileOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open menu</span>
                        <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {[
                        { name: "About", path: "/about" },
                        { name: "Features", path: "/features" },
                        { name: "Price", path: "/pricing" },
                        { name: "Company", path: "/company" },
                        { name: "Docx", path: "/docs" }
                    ].map((item) => (
                        <button
                            key={item.name}
                            onClick={() => navigate(item.path)}
                            className="text-[17px] font-semibold text-gray-900"
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <button onClick={() => navigate('/login')} className="text-[17px] font-semibold text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </button>
                </div>
            </nav>

            {/* Mobile Navbar */}
            {isMobileOpen && (
                <div className="lg:hidden fixed inset-0 z-50" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileOpen(false)}></div>
                    <div className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <button onClick={() => navigate("/")} className="flex items-center space-x-2 text-lg font-semibold text-black hover:text-yellow-400 transition-all duration-300 p-1.5">
                                <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
                                <span className="text-xl font-bold uppercase">EaserTrack</span>
                            </button>

                            <button onClick={() => setIsMobileOpen(false)} type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                                <span className="sr-only">Close menu</span>
                                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {[
                                        { name: "About", path: "/about" },
                                        { name: "Features", path: "/features" },
                                        { name: "Price", path: "/pricing" },
                                        { name: "Company", path: "/company" }
                                    ].map((item) => (
                                        <button
                                            key={item.name}
                                            onClick={() => {
                                                navigate(item.path);
                                                setIsMobileOpen(false);
                                            }}
                                            className="-mx-3 block w-full text-left rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </button>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <button
                                        onClick={() => {
                                            navigate('/login');
                                            setIsMobileOpen(false);
                                        }}
                                        className="-mx-3 block w-full text-left rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
