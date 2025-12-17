import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, ShieldCheck, HeartHandshake } from 'lucide-react';

const About: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
            
            {/* Story */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl font-bold text-stone-900 mb-6">Our Story</h1>
                    <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
                        <p>
                            Sweetie Boy Farms began with a simple observation: Small farms were producing the best food in the country, but they were struggling to survive against industrial giants.
                        </p>
                        <p>
                            Farmers were spending more time at market stalls and driving delivery trucks than they were in the fields. We realized that if we could solve the logistics and technology puzzle, we could unlock a massive local food economy.
                        </p>
                        <p>
                            Today, we are building the "Amazon for Farmers" — but with a soul. We use advanced routing algorithms and modern e-commerce tools to make buying local as easy as one click, while ensuring the farmer takes home the lion's share of the profit.
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <img 
                        src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop" 
                        alt="Our Fresh Produce" 
                        className="rounded-2xl shadow-lg rotate-2 hover:rotate-0 transition-transform duration-500"
                    />
                </div>
            </div>

            {/* Mission */}
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-stone-900 mb-12">Our Core Values</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        <div className="h-16 w-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                            <Leaf className="h-8 w-8" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Sustainability</h3>
                        <p className="text-stone-500 text-sm">Reducing food miles and supporting regenerative agriculture.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="h-16 w-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                            <ShieldCheck className="h-8 w-8" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Transparency</h3>
                        <p className="text-stone-500 text-sm">Know exactly where your food comes from and who grew it.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="h-16 w-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                            <HeartHandshake className="h-8 w-8" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Fairness</h3>
                        <p className="text-stone-500 text-sm">Ensuring farmers earn a living wage for their hard work.</p>
                    </div>
                </div>
            </div>
            
            {/* Call to Action */}
            <div className="bg-emerald-900 rounded-3xl p-12 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
                <p className="text-emerald-100 max-w-xl mx-auto mb-8">
                    Whether you are a customer looking for better food, or a farmer looking for a better market, there is a place for you here.
                </p>
                <button 
                    onClick={() => navigate('/contact')}
                    className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-3 rounded-xl font-bold transition-colors"
                >
                    Get Started Today
                </button>
            </div>
        </div>
    );
};

export default About;