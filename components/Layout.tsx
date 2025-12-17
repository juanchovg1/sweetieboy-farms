import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag, Droplets, User } from 'lucide-react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path: string) => location.pathname === path ? "text-emerald-800 font-semibold" : "text-stone-600 hover:text-emerald-700";

    const handleStart = () => {
        navigate('/build');
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="flex flex-col min-h-screen bg-stone-50 font-sans text-stone-800">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                            <div className="bg-emerald-600 p-2 rounded-lg">
                                <Droplets className="h-6 w-6 text-white" />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-emerald-950">
                                Sweetie Boy <span className="text-emerald-600">Farms</span>
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8 items-center">
                            <Link to="/" className={isActive('/')}>Home</Link>
                            <Link to="/about" className={isActive('/about')}>Our Mission</Link>
                            <Link to="/contact" className={isActive('/contact')}>Support</Link>
                        </nav>

                        {/* Actions */}
                        <div className="hidden md:flex items-center gap-4">
                            <button className="text-stone-500 hover:text-emerald-700 font-medium text-sm">
                                Log in
                            </button>
                            <button 
                                onClick={handleStart}
                                className="bg-emerald-600 text-white px-5 py-2.5 rounded-full hover:bg-emerald-700 transition-colors shadow-sm font-medium flex items-center gap-2"
                            >
                                Build Weekly Delivery
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-stone-500 hover:text-stone-700 p-2"
                            >
                                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-stone-100 shadow-lg absolute w-full">
                        <div className="px-4 pt-4 pb-6 space-y-4">
                            <Link to="/" className="block text-lg font-medium text-stone-700" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                            <Link to="/about" className="block text-lg font-medium text-stone-700" onClick={() => setIsMobileMenuOpen(false)}>Our Mission</Link>
                            <Link to="/contact" className="block text-lg font-medium text-stone-700" onClick={() => setIsMobileMenuOpen(false)}>Support</Link>
                            <hr className="border-stone-100"/>
                            <button 
                                onClick={handleStart}
                                className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold"
                            >
                                Build Weekly Delivery
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-emerald-950 text-emerald-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-2">
                            <div className="bg-emerald-800 p-2 rounded-lg">
                                <Droplets className="h-6 w-6 text-emerald-100" />
                            </div>
                            <span className="font-bold text-xl tracking-tight">
                                Sweetie Boy Farms
                            </span>
                        </div>
                        <div className="flex gap-8 text-sm font-medium">
                            <Link to="/about" className="hover:text-white transition-colors">About</Link>
                            <Link to="/contact" className="hover:text-white transition-colors">Support</Link>
                            <a href="#" className="hover:text-white transition-colors">Terms</a>
                            <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        </div>
                        <div className="text-xs text-emerald-400">
                            &copy; {new Date().getFullYear()} Sweetie Boy Farms.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;