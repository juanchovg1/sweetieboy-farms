import React from 'react';
import { Plus, Info } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-stone-100 group flex flex-col h-full">
            <div className="relative aspect-square overflow-hidden bg-stone-100">
                <img 
                    src={product.imageUrl} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                />
                {product.isFeatured && (
                    <span className="absolute top-3 left-3 bg-amber-400 text-amber-900 text-xs font-bold px-2 py-1 rounded-full">
                        Local Favorite
                    </span>
                )}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                   <button className="bg-white p-1.5 rounded-full shadow-md text-stone-600 hover:text-emerald-600">
                     <Info className="h-4 w-4" />
                   </button>
                </div>
            </div>
            
            <div className="p-4 flex flex-col flex-grow">
                <div className="mb-1 text-xs font-medium text-emerald-600 uppercase tracking-wide">
                    {product.farmName}
                </div>
                <h3 className="font-bold text-stone-800 text-lg mb-1 leading-tight">{product.title}</h3>
                <p className="text-stone-500 text-sm line-clamp-2 mb-4 flex-grow">{product.description}</p>
                
                <div className="flex items-center justify-between mt-auto">
                    <div>
                        <span className="text-lg font-bold text-stone-900">${product.price.toFixed(2)}</span>
                        <span className="text-stone-400 text-sm"> / {product.unit}</span>
                    </div>
                    <button className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 p-2 rounded-lg transition-colors flex items-center gap-1 font-medium text-sm">
                        <Plus className="h-4 w-4" />
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;