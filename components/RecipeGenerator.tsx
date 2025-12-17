import React, { useState } from 'react';
import { Sparkles, ChefHat } from 'lucide-react';
import { generateRecipeIdea } from '../services/geminiService';

const RecipeGenerator: React.FC = () => {
    const [ingredients, setIngredients] = useState<string>('');
    const [recipe, setRecipe] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        if (!ingredients.trim()) return;
        
        setLoading(true);
        const ingredientList = ingredients.split(',').map(i => i.trim());
        const result = await generateRecipeIdea(ingredientList);
        setRecipe(result);
        setLoading(false);
    };

    return (
        <div className="bg-gradient-to-br from-emerald-50 to-stone-100 rounded-2xl p-6 sm:p-8 border border-emerald-100 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 opacity-10">
                <ChefHat className="h-48 w-48 text-emerald-800" />
            </div>
            
            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="h-5 w-5 text-amber-500" />
                    <h3 className="text-lg font-bold text-emerald-900">Farm Kitchen Assistant</h3>
                </div>
                
                <p className="text-stone-600 mb-4 text-sm">
                    Not sure what to make with your harvest? Enter some ingredients below and let our AI suggest a rustic meal.
                </p>

                <div className="space-y-3">
                    <div>
                        <input
                            type="text"
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                            placeholder="e.g. kale, sweet potatoes, eggs"
                            className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white/80"
                        />
                    </div>
                    
                    <button 
                        onClick={handleGenerate}
                        disabled={loading || !ingredients}
                        className={`w-full py-2 px-4 rounded-lg font-medium text-white shadow-sm transition-all ${
                            loading || !ingredients 
                            ? 'bg-stone-300 cursor-not-allowed' 
                            : 'bg-emerald-600 hover:bg-emerald-700 hover:shadow-md'
                        }`}
                    >
                        {loading ? 'Cooking up ideas...' : 'Get Recipe Idea'}
                    </button>
                </div>

                {recipe && (
                    <div className="mt-6 p-4 bg-white rounded-xl shadow-sm border border-emerald-50 animate-fade-in">
                        <p className="text-stone-700 italic font-medium">"{recipe}"</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecipeGenerator;