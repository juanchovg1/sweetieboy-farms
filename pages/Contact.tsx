import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitted'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitted');
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-stone-50">
            <div className="grid lg:grid-cols-5 gap-20">
                
                {/* Contact Info */}
                <div className="lg:col-span-2">
                    <h1 className="text-4xl font-bold text-stone-900 mb-6">We're here to help.</h1>
                    <p className="text-stone-500 mb-12 text-lg leading-relaxed">
                        Have a question about your route? Need to adjust an order? 
                        We're local people, and we respond quickly.
                    </p>

                    <div className="space-y-10">
                        {[
                            { icon: Mail, title: "Email Us", detail: "hello@sweetieboyfarms.com", sub: "Replies within 2 hours" },
                            { icon: Phone, title: "Call Us", detail: "(555) 123-4567", sub: "Mon-Fri, 9am - 5pm EST" },
                            { icon: MapPin, title: "Headquarters", detail: "123 Harvest Lane, Asheville, NC", sub: "Proudly local since the start" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-5">
                                <div className="p-3 bg-white rounded-xl shadow-sm border border-stone-100 text-emerald-600">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-stone-900 mb-1">{item.title}</h3>
                                    <p className="text-stone-600 font-medium">{item.detail}</p>
                                    <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mt-1">{item.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form */}
                <div className="lg:col-span-3">
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-stone-100 relative overflow-hidden">
                        {formStatus === 'submitted' ? (
                            <div className="text-center py-20 animate-fade-in">
                                <div className="h-20 w-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                                </div>
                                <h3 className="text-3xl font-bold text-stone-900 mb-3">Message received.</h3>
                                <p className="text-stone-500 text-lg">We'll get back to you shortly.</p>
                                <button 
                                    onClick={() => setFormStatus('idle')}
                                    className="mt-8 text-emerald-600 font-bold text-sm uppercase tracking-widest hover:text-emerald-700 underline underline-offset-8 transition-all"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest ml-1">Your Name</label>
                                        <input 
                                            type="text" 
                                            required 
                                            className="w-full px-5 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                                            placeholder="Sarah Jenkins"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest ml-1">Email Address</label>
                                        <input 
                                            type="email" 
                                            required 
                                            className="w-full px-5 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                                            placeholder="sarah@example.com"
                                        />
                                    </div>
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest ml-1">How can we help?</label>
                                    <select className="w-full px-5 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all appearance-none cursor-pointer">
                                        <option>Delivery Day Question</option>
                                        <option>Adjust My Weekly Bin</option>
                                        <option>Technical Support</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest ml-1">Message</label>
                                    <textarea 
                                        required
                                        rows={5}
                                        className="w-full px-5 py-4 bg-stone-50 border border-stone-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all resize-none"
                                        placeholder="Write your message here..."
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-5 rounded-2xl transition-all shadow-lg hover:shadow-emerald-600/20 text-lg"
                                >
                                    Send Message
                                </button>
                                <p className="text-center text-[10px] font-bold text-stone-300 uppercase tracking-widest">
                                    Local support • No bots • 100% Human
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;