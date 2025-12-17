import React, { useState } from 'react';
import { Check, ChevronRight, MapPin, Minus, Plus, Truck, Info } from 'lucide-react';
import { Product, ProductCategory } from '../types';

const ESSENTIALS: Product[] = [
    { id: 'milk-whole', title: 'Whole Milk', description: 'Cream top, glass bottle.', price: 6.50, unit: 'gal', category: ProductCategory.MILK, imageUrl: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=400&q=80', isSubscriptionStaple: true, farmName: 'McCormick Hill' },
    { id: 'water-spring', title: 'Spring Water', description: '5-gallon glass dispenser refill.', price: 12.00, unit: 'jug', category: ProductCategory.WATER, imageUrl: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=400&q=80', isSubscriptionStaple: true, farmName: 'Blue Ridge Springs' },
    { id: 'milk-oat', title: 'Oat Milk', description: 'Barista blend, organic oats.', price: 5.50, unit: 'qt', category: ProductCategory.MILK, imageUrl: 'https://images.unsplash.com/photo-1596722003831-255d654512e0?q=80&w=600&auto=format&fit=crop', isSubscriptionStaple: true, farmName: 'Happy Oats' },
];

const ADDONS: Product[] = [
    { id: 'bread-sour', title: 'Sourdough Loaf', description: 'Naturally leavened, crisp crust.', price: 8.00, unit: 'loaf', category: ProductCategory.BAKERY, imageUrl: 'https://images.unsplash.com/photo-1586444248902-2f64eddf13cf?q=80&w=600&auto=format&fit=crop', farmName: 'Grain & Hearth' },
    { id: 'eggs-dozen', title: 'Pasture Eggs', description: 'Large brown eggs, dozen.', price: 7.00, unit: 'doz', category: ProductCategory.MILK, imageUrl: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=400&q=80', farmName: 'Sunny Creek' },
    { id: 'beef-ground', title: 'Ground Beef', description: '1lb pack, grass-fed.', price: 9.50, unit: 'lb', category: ProductCategory.BUTCHER, imageUrl: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=400&q=80', farmName: 'Rolling Hills' },
    { id: 'bacon', title: 'Thick Cut Bacon', description: 'Hickory smoked, 1lb.', price: 11.00, unit: 'lb', category: ProductCategory.BUTCHER, imageUrl: 'https://images.unsplash.com/photo-1606851682131-7e8c0716616b?q=80&w=600&auto=format&fit=crop', farmName: 'Rolling Hills' },
];

interface ItemRowProps {
    item: Product;
    cart: { [id: string]: number };
    updateQuantity: (id: string, delta: number) => void;
}

const ItemRow: React.FC<ItemRowProps> = ({ item, cart, updateQuantity }) => (
    <div className="flex items-center justify-between p-5 bg-white border border-stone-100 rounded-2xl hover:border-emerald-100 hover:bg-emerald-50/10 transition-all">
        <div className="flex items-center gap-5">
            <div className="h-16 w-16 rounded-xl bg-stone-50 overflow-hidden flex-shrink-0 border border-stone-100">
                <img src={item.imageUrl} alt={item.title} className="h-full w-full object-cover" />
            </div>
            <div>
                <h4 className="font-bold text-stone-900 leading-none mb-1">{item.title}</h4>
                <p className="text-sm text-stone-500 mb-1">{item.description}</p>
                <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{item.farmName}</div>
            </div>
        </div>
        <div className="flex items-center gap-5">
            <div className="text-right hidden sm:block">
                <div className="font-bold text-stone-900">${item.price.toFixed(2)}</div>
                <div className="text-[10px] text-stone-400 font-bold">PER {item.unit.toUpperCase()}</div>
            </div>
            {cart[item.id] ? (
                <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-100 rounded-xl p-1">
                    <button onClick={() => updateQuantity(item.id, -1)} className="p-1.5 hover:bg-emerald-200 rounded-lg text-emerald-700 transition-colors"><Minus className="h-4 w-4" /></button>
                    <span className="font-bold text-emerald-900 w-6 text-center">{cart[item.id]}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="p-1.5 hover:bg-emerald-200 rounded-lg text-emerald-700 transition-colors"><Plus className="h-4 w-4" /></button>
                </div>
            ) : (
                <button 
                    onClick={() => updateQuantity(item.id, 1)}
                    className="bg-stone-50 hover:bg-emerald-600 hover:text-white text-stone-600 p-2.5 rounded-xl transition-all border border-stone-100 hover:border-emerald-600"
                >
                    <Plus className="h-5 w-5" />
                </button>
            )}
        </div>
    </div>
);

const BuildSubscription: React.FC = () => {
    const [step, setStep] = useState(1);
    const [zip, setZip] = useState('');
    const [day, setDay] = useState<'Mon' | 'Wed' | null>(null);
    const [cart, setCart] = useState<{ [id: string]: number }>({});

    const updateQuantity = (id: string, delta: number) => {
        setCart(prev => {
            const current = prev[id] || 0;
            const next = Math.max(0, current + delta);
            if (next === 0) {
                const { [id]: _, ...rest } = prev;
                return rest;
            }
            return { ...prev, [id]: next };
        });
    };

    const totalCost = [...ESSENTIALS, ...ADDONS].reduce((sum, item) => {
        return sum + (item.price * (cart[item.id] || 0));
    }, 0);

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    const renderStep1 = () => (
        <div className="space-y-10 animate-fade-in max-w-lg mx-auto">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-stone-900 mb-3">Let's find your delivery day.</h2>
                <p className="text-stone-500">Service is currently limited to Asheville neighbors.</p>
            </div>
            
            <div className="bg-stone-50/50 p-8 rounded-3xl border border-stone-100 space-y-8">
                <div>
                    <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 text-center">Your Zip Code</label>
                    <div className="relative max-w-xs mx-auto">
                        <MapPin className="absolute left-4 top-4 h-5 w-5 text-stone-300" />
                        <input 
                            type="text" 
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                            placeholder="28801"
                            className="w-full pl-12 pr-4 py-4 bg-white border border-stone-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-xl font-bold tracking-widest text-center placeholder:text-stone-200 shadow-sm"
                            maxLength={5}
                        />
                    </div>
                </div>

                {zip.length === 5 && (
                    <div className="animate-fade-in space-y-4">
                        <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 text-center">Available Routes</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <button 
                                onClick={() => setDay('Mon')}
                                className={`p-5 rounded-2xl border-2 text-center transition-all ${
                                    day === 'Mon' 
                                    ? 'border-emerald-500 bg-white text-emerald-900 shadow-md ring-4 ring-emerald-50' 
                                    : 'border-white bg-white hover:border-emerald-100 text-stone-500 shadow-sm'
                                }`}
                            >
                                <div className="font-bold text-lg">Mondays</div>
                                <div className="text-[10px] font-bold uppercase opacity-50 mt-1">Next: Aug 12</div>
                            </button>
                            <button 
                                onClick={() => setDay('Wed')}
                                className={`p-5 rounded-2xl border-2 text-center transition-all ${
                                    day === 'Wed' 
                                    ? 'border-emerald-500 bg-white text-emerald-900 shadow-md ring-4 ring-emerald-50' 
                                    : 'border-white bg-white hover:border-emerald-100 text-stone-500 shadow-sm'
                                }`}
                            >
                                <div className="font-bold text-lg">Wednesdays</div>
                                <div className="text-[10px] font-bold uppercase opacity-50 mt-1">Next: Aug 14</div>
                            </button>
                        </div>
                    </div>
                )}
            </div>
            
            <div className="flex flex-col items-center gap-4">
                <button 
                    disabled={!day || zip.length < 5}
                    onClick={nextStep}
                    className="w-full bg-emerald-600 disabled:bg-stone-200 text-white px-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-emerald-600/20"
                >
                    Start My Selection <ChevronRight className="h-5 w-5" />
                </button>
                <p className="text-xs text-stone-400 font-medium">Step 1 of 4 • Takes 2 minutes</p>
            </div>
        </div>
    );

    const renderStep2 = () => (
        <div className="space-y-8 animate-fade-in max-w-2xl mx-auto">
             <div className="text-center">
                <h2 className="text-3xl font-bold text-stone-900 mb-3">Weekly Anchors</h2>
                <p className="text-stone-500">The core of your bin. High quality, fresh, and reliable.</p>
            </div>

            <div className="space-y-3">
                {ESSENTIALS.map(item => <ItemRow key={item.id} item={item} cart={cart} updateQuantity={updateQuantity} />)}
            </div>

            <div className="bg-emerald-50/50 p-5 rounded-2xl flex gap-4 text-emerald-800 text-sm border border-emerald-100">
                <div className="bg-white p-2 rounded-lg h-fit"><Info className="h-5 w-5 text-emerald-600" /></div>
                <p className="leading-relaxed"><strong>Quick Tip:</strong> Most local families start with 1 Gallon of Milk and 2 Jugs of Water. You can adjust this anytime with one click.</p>
            </div>

            <div className="flex justify-between items-center pt-8">
                <button onClick={prevStep} className="text-stone-400 font-bold text-sm uppercase tracking-widest px-4 py-2 hover:text-stone-800 transition-colors">Back</button>
                <button onClick={nextStep} className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-emerald-500 transition-all">
                    Next: Add Provisions
                </button>
            </div>
        </div>
    );

    const renderStep3 = () => (
        <div className="space-y-8 animate-fade-in max-w-2xl mx-auto">
             <div className="text-center">
                <h2 className="text-3xl font-bold text-stone-900 mb-3">Optional Provisions</h2>
                <p className="text-stone-500">Add these to your drop as needed. No pressure, just great food.</p>
            </div>

            <div className="space-y-3">
                {ADDONS.map(item => <ItemRow key={item.id} item={item} cart={cart} updateQuantity={updateQuantity} />)}
            </div>

            <div className="flex justify-between items-center pt-8">
                <button onClick={prevStep} className="text-stone-400 font-bold text-sm uppercase tracking-widest px-4 py-2 hover:text-stone-800 transition-colors">Back</button>
                <button onClick={nextStep} className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-emerald-500 transition-all">
                    Review Drop
                </button>
            </div>
        </div>
    );

    const renderStep4 = () => (
        <div className="space-y-8 animate-fade-in max-w-lg mx-auto">
             <div className="text-center">
                <h2 className="text-3xl font-bold text-stone-900 mb-3">Confirm Your Drop</h2>
                <p className="text-stone-500">Set it once. Never worry about it again.</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100 overflow-hidden">
                <div className="p-8 border-b border-stone-50 bg-stone-50/30 flex justify-between items-center">
                    <div>
                        <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Weekly Route</div>
                        <div className="font-bold text-stone-900 text-lg flex items-center gap-2">
                            <Truck className="h-5 w-5 text-emerald-600" />
                            Every {day}
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Zip</div>
                        <div className="font-bold text-stone-900 text-lg">{zip}</div>
                    </div>
                </div>
                
                <div className="p-8 space-y-5">
                    {Object.keys(cart).length === 0 ? (
                        <p className="text-center text-stone-400 italic py-6">Your bin is currently empty!</p>
                    ) : (
                        [...ESSENTIALS, ...ADDONS].filter(i => cart[i.id]).map(item => (
                            <div key={item.id} className="flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <div className="bg-emerald-50 text-emerald-700 font-bold px-2 py-1 rounded-lg text-xs">{cart[item.id]}x</div>
                                    <span className="text-stone-800 font-semibold">{item.title}</span>
                                </div>
                                <span className="font-bold text-stone-900">${(item.price * cart[item.id]).toFixed(2)}</span>
                            </div>
                        ))
                    )}
                </div>

                <div className="p-8 bg-stone-900 text-white">
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-stone-400 font-bold uppercase tracking-widest text-xs">Weekly Total</span>
                        <span className="text-4xl font-bold text-white">${totalCost.toFixed(2)}</span>
                    </div>
                    <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-emerald-950 py-5 rounded-2xl font-bold shadow-lg transition-all flex items-center justify-center gap-3 text-xl">
                        Schedule My Drop
                    </button>
                    <p className="text-center text-[10px] font-bold uppercase text-stone-500 tracking-widest mt-6">
                        No billing until first drop • Pause or skip anytime
                    </p>
                </div>
            </div>

            <div className="flex justify-center">
                <button onClick={prevStep} className="text-stone-400 hover:text-stone-600 font-bold text-xs uppercase tracking-widest transition-colors">Adjust My Items</button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-stone-50 py-16">
            <div className="max-w-xl mx-auto px-4 mb-16">
                <div className="flex justify-between items-center">
                    {[1, 2, 3, 4].map(s => (
                        <div key={s} className="flex flex-col items-center gap-2">
                            <div 
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                                    s === step ? 'bg-emerald-600 scale-150 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : s < step ? 'bg-emerald-400' : 'bg-stone-200'
                                }`}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {step === 1 && renderStep1()}
                {step === 2 && renderStep2()}
                {step === 3 && renderStep3()}
                {step === 4 && renderStep4()}
            </div>
        </div>
    );
};

export default BuildSubscription;