import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, Package, Truck, Check, Droplets, ShieldCheck, XCircle, CheckCircle2 } from 'lucide-react';

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-stone-50">
            {/* Hero Section */}
            <section className="relative bg-emerald-950 text-white overflow-hidden pb-32">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1595983713636-61a7a40fb68e?q=80&w=2070&auto=format&fit=crop"
                        alt="Milk delivery"
                        className="w-full h-full object-cover opacity-15"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/95 via-emerald-950/80 to-stone-50"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-32 pb-12 text-center">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-900/30 border border-emerald-700/50 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
                        The Sweetie Boy Farms Experience
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] max-w-4xl mx-auto">
                        Your weekly essentials, <br />
                        <span className="text-emerald-400 font-medium italic">handled.</span>
                    </h1>

                    <p className="text-xl text-emerald-100/70 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Set your order once. No weekly decisions, no grocery store runs. 
                        Fresh milk, spring water, and butcher cuts delivered automatically.
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <button
                            onClick={() => navigate('/build')}
                            className="inline-flex justify-center items-center px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 rounded-2xl font-bold text-xl transition-all shadow-xl hover:shadow-emerald-500/40 transform hover:-translate-y-1"
                        >
                            Build Your Weekly Delivery
                            <ArrowRight className="ml-2 h-6 w-6" />
                        </button>
                        <p className="text-emerald-400/80 font-medium flex items-center gap-2">
                            <Check className="h-4 w-4" /> Takes less than 2 minutes
                        </p>
                    </div>
                </div>
            </section>

            {/* How It Works - Unavoidable Flow */}
            <section className="relative z-20 -mt-20 pb-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-4 lg:gap-6">
                        {[
                            { icon: Calendar, title: "1. Pick a Day", text: "Choose Monday or Wednesday delivery." },
                            { icon: Droplets, title: "2. Set Essentials", text: "Select your weekly staples once." },
                            { icon: Truck, title: "3. We Deliver", text: "Reliable weekly drop-off to your door." },
                            { icon: Check, title: "4. Full Control", text: "Pause, skip, or edit anytime." }
                        ].map((step, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center group hover:border-emerald-200 transition-all duration-300">
                                <div className="h-14 w-14 bg-stone-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-50 transition-colors">
                                    <step.icon className="h-7 w-7" />
                                </div>
                                <h3 className="font-bold text-stone-900 text-lg mb-2">{step.title}</h3>
                                <p className="text-stone-500 text-sm leading-relaxed">{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sourcing & Trust - Comparison Refinement */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest mb-4">
                            <ShieldCheck className="h-4 w-4" />
                            Accountability matters
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight">
                            Knowing where your food <br className="hidden md:block"/> comes from matters.
                        </h2>
                        <p className="text-stone-500 text-lg max-w-2xl mx-auto">
                            We don't rely on ambiguous labels. We rely on knowing the farm. 
                            Sweetie Boy Farms HQ sets the standard, and our curated local partners follow the exact same practices.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-px bg-stone-100 rounded-[2.5rem] overflow-hidden border border-stone-100 shadow-2xl shadow-stone-200/50">
                        {/* Generic Column */}
                        <div className="bg-stone-50/50 p-10 md:p-16">
                            <h3 className="text-stone-400 font-bold text-xs uppercase tracking-[0.2em] mb-10">Industrial Supply</h3>
                            <ul className="space-y-8">
                                <li className="flex items-start gap-4">
                                    <XCircle className="h-5 w-5 text-stone-300 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-stone-900 mb-1">Anonymous Origin</h4>
                                        <p className="text-stone-500 text-sm leading-relaxed">Food is aggregated from thousands of unnamed sources.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <XCircle className="h-5 w-5 text-stone-300 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-stone-900 mb-1">Globally Blended</h4>
                                        <p className="text-stone-500 text-sm leading-relaxed">Supply chains cross borders, blending quality and accountability.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <XCircle className="h-5 w-5 text-stone-300 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-stone-900 mb-1">Labels without Context</h4>
                                        <p className="text-stone-500 text-sm leading-relaxed">Marketing terms hide the reality of how the food was raised.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Sweetie Boy Column */}
                        <div className="bg-white p-10 md:p-16">
                            <h3 className="text-emerald-600 font-bold text-xs uppercase tracking-[0.2em] mb-10">Sweetie Boy Standard</h3>
                            <ul className="space-y-8">
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-stone-900 mb-1">Known Farms</h4>
                                        <p className="text-stone-500 text-sm leading-relaxed">We pick one trusted partner for each category. We know them by name.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-stone-900 mb-1">100-Mile Radius</h4>
                                        <p className="text-stone-500 text-sm leading-relaxed">Food raised closer to home tells a clearer story and tastes fresher.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-stone-900 mb-1">Intentional Practices</h4>
                                        <p className="text-stone-500 text-sm leading-relaxed">Traceable, simple, and high-quality standards you can verify every week.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="mt-16 text-center">
                        <p className="text-stone-400 font-medium italic text-sm italic">"Real food shouldn't be a mystery."</p>
                    </div>
                </div>
            </section>

            {/* The Essentials Breakdown */}
            <section className="py-24 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <div className="space-y-12">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-emerald-600 h-6 w-1 rounded-full"></div>
                                        <h3 className="text-emerald-800 font-bold uppercase tracking-wider text-xs">The Weekly Anchors</h3>
                                    </div>
                                    <h4 className="text-3xl font-bold text-stone-900 mb-4">Water & Milk</h4>
                                    <p className="text-stone-600 text-lg leading-relaxed">
                                        These are the backbone of your delivery. Pure mountain spring water in glass and fresh whole milk, delivered in reusable bottles.
                                    </p>
                                </div>
                                
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-stone-300 h-6 w-1 rounded-full"></div>
                                        <h3 className="text-stone-500 font-bold uppercase tracking-wider text-xs">Optional Provisions</h3>
                                    </div>
                                    <h4 className="text-3xl font-bold text-stone-900 mb-4">Bakery & Butcher</h4>
                                    <p className="text-stone-600 text-lg leading-relaxed">
                                        Add artisan sourdough or grass-fed butcher cuts as needed. They're optional add-ons to your core subscription.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="mt-12">
                                <button
                                    onClick={() => navigate('/build')}
                                    className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-md"
                                >
                                    Build Your Weekly Delivery
                                </button>
                                <p className="mt-3 text-sm text-stone-400">Cancel or pause anytime with one click.</p>
                            </div>
                        </div>
                        
                        <div className="order-1 md:order-2">
                             <img
                                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop"
                                alt="Fresh groceries delivered"
                                className="rounded-3xl shadow-lg w-full h-[500px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;