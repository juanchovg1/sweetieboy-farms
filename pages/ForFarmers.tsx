import React from 'react';
import { Truck, Store, BarChart3, Users, CheckCircle } from 'lucide-react';

const ForFarmers: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-stone-900 text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        You Grow. <span className="text-emerald-400">We Handle the Rest.</span>
                    </h1>
                    <p className="text-xl text-stone-300 max-w-2xl mx-auto mb-10">
                        Join the Sweetie Boy Farms network. We provide the logistics, marketing, and technology so you can focus on what you do best: farming.
                    </p>
                    <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-emerald-900/50 transition-all">
                        Apply to Join Network
                    </button>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-stone-900 mb-4">Why partner with us?</h2>
                            <p className="text-stone-600">
                                The modern food system is broken for small farmers. We're rebuilding it from the ground up to be fair, transparent, and profitable for producers.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="h-10 w-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                                        <Truck className="h-5 w-5 text-emerald-600" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-stone-900 text-lg">Zero-Headache Logistics</h3>
                                    <p className="text-stone-500">We pick up from your farm gate. No more early morning market setups or delivery route planning.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="h-10 w-10 bg-amber-100 rounded-lg flex items-center justify-center">
                                        <Store className="h-5 w-5 text-amber-600" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-stone-900 text-lg">Instant Customer Base</h3>
                                    <p className="text-stone-500">List your products on our high-traffic marketplace. We handle marketing, SEO, and customer support.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <BarChart3 className="h-5 w-5 text-blue-600" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-stone-900 text-lg">Data & Insights</h3>
                                    <p className="text-stone-500">Know exactly what to plant next season based on real customer demand data.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <img 
                            src="https://picsum.photos/seed/farmeripad/600/800" 
                            alt="Farmer using tablet" 
                            className="rounded-2xl shadow-2xl"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs border border-stone-100">
                            <div className="flex items-center gap-3 mb-2">
                                <Users className="h-5 w-5 text-emerald-600" />
                                <span className="font-bold text-stone-900">Community First</span>
                            </div>
                            <p className="text-sm text-stone-500">"Sweetie Boy Farms doubled my direct-to-consumer sales in 3 months."</p>
                            <p className="text-xs font-bold text-stone-400 mt-2">— John D., Cedar Grove Farm</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Steps */}
            <section className="bg-stone-50 py-20 border-y border-stone-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-stone-900 mb-12">How to get started</h2>
                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                            <div className="h-12 w-12 bg-stone-900 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 md:mr-6 mb-4 md:mb-0">1</div>
                            <div className="text-left">
                                <h3 className="font-bold text-lg text-stone-900">Submit an Application</h3>
                                <p className="text-stone-500">Tell us about your farm, your practices, and what you grow.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                            <div className="h-12 w-12 bg-stone-900 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 md:mr-6 mb-4 md:mb-0">2</div>
                            <div className="text-left">
                                <h3 className="font-bold text-lg text-stone-900">Site Visit & Vetting</h3>
                                <p className="text-stone-500">We visit every farm to ensure quality and sustainable practices match our standards.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                            <div className="h-12 w-12 bg-stone-900 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 md:mr-6 mb-4 md:mb-0">3</div>
                            <div className="text-left">
                                <h3 className="font-bold text-lg text-stone-900">Onboarding & Launch</h3>
                                <p className="text-stone-500">We help you set up your digital storefront and schedule your first pickup.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ForFarmers;