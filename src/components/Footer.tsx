const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-white">SeedConnect</h3>
                    <p className="text-sm text-gray-400 mt-1">
                        Empowering entrepreneurs and investors to grow together.
                    </p>
                </div>

                <ul className="flex flex-wrap justify-center gap-6 text-sm">
                    <li>
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            How It Works
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            Businesses
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                <p className="text-sm text-gray-500 text-center md:text-right">
                    &copy; {new Date().getFullYear()}{" "}
                    <span className="text-white font-medium">SeedConnect</span>. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;