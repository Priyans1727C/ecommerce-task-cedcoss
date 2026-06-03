import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Search, ShoppingCart, User } from 'lucide-react';

// Sample product data from the image
const productsData = [
  { id: 1, name: 'EXECUTIVE MATTE NOTEBOOK', regularPrice: 12.95, bulkPrice: 9.50, image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&q=80' },
  { id: 2, name: 'PREMIUM GRAPHITE SET', regularPrice: 24.00, bulkPrice: 18.20, image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&q=80' },
  { id: 3, name: "ARTIST'S PRO SKETCHBOOK", regularPrice: 32.50, bulkPrice: 22.00, image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&q=80' },
  { id: 4, name: 'MINIMALIST BRASS WEIGHTS', regularPrice: 45.00, bulkPrice: 38.00, image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&q=80' },
  { id: 5, name: 'ARCHIVAL LINEN BINDER', regularPrice: 28.00, bulkPrice: 21.50, image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500&q=80' },
  { id: 6, name: 'SIGNATURE FOUNTAIN PEN', regularPrice: 85.00, bulkPrice: 64.00, image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80' },
  { id: 7, name: 'OAK DESKTOP ORGANIZER', regularPrice: 110.00, bulkPrice: 88.00, image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&q=80' },
  { id: 8, name: 'WATERPROOF STONE PAD', regularPrice: 18.00, bulkPrice: 12.40, image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500&q=80' },
  { id: 9, name: 'CONTINUOUS GRAPH ROLL', regularPrice: 42.00, bulkPrice: 31.00, image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=500&q=80' },
  { id: 10, name: 'HAND-STITCHED JOURNAL', regularPrice: 55.00, bulkPrice: 42.00, image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=500&q=80' },
  { id: 11, name: 'COMPRESSED CHARCOAL SET', regularPrice: 14.50, bulkPrice: 9.95, image: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=500&q=80' },
  { id: 12, name: 'ALUMINUM PRECISION CUTTER', regularPrice: 19.00, bulkPrice: 15.20, image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=500&q=80' },
];

export default function ProductGridPage() {
  const [currentPage, setCurrentPage] = useState(3);

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      
      {/* Filter and Sort Toolbar Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10 px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          
          {/* Dropdown Filters */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-600">
            <button className="flex items-center gap-1.5 hover:text-blue-600 transition">
              Category <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
            <button className="flex items-center gap-1.5 hover:text-blue-600 transition">
              Color <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
            <button className="flex items-center gap-1.5 hover:text-blue-600 transition">
              Price <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Items Counter & Sorting */}
          <div className="flex items-center justify-between sm:justify-end gap-6 text-sm">
            <span className="text-slate-500 font-medium">56 Items</span>
            <div className="flex items-center gap-1">
              <span className="text-slate-500">Sort By:</span>
              <button className="font-semibold text-blue-700 flex items-center gap-1 hover:text-blue-800">
                Best Sellers <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {productsData.map((product) => (
            <div key={product.id} className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-100">
              
              {/* Product Image Wrapper */}
              <div className="aspect-square bg-slate-900 flex items-center justify-center overflow-hidden relative">
                {/* Fallback styling placeholder matching the UI screenshot style */}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-300 mix-blend-luminosity"
                />
              </div>

              {/* Product Info */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-bold text-xs tracking-wider text-slate-800 uppercase mb-2 line-clamp-1">
                  {product.name}
                </h3>
                
                {/* Pricing block */}
                <div className="flex items-baseline gap-2 mt-auto text-xs font-semibold">
                  <span className="text-slate-400 font-medium">
                    ${product.regularPrice.toFixed(2)} Regular
                  </span>
                  <span className="text-slate-400 font-light">•</span>
                  <span className="text-amber-600 font-bold">
                    ${product.bulkPrice.toFixed(2)} Bulk
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-2 mt-16">
          
          {/* Previous Button */}
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm">
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-1 mx-2">
            {[1, 2].map((page) => (
              <button 
                key={page} 
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 text-sm font-semibold rounded-lg transition ${
                  currentPage === page ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {page}
              </button>
            ))}
            
            {/* Active Selected Page Accent (Matching Screen's Blue Box #3) */}
            <button className="w-10 h-10 text-sm font-semibold rounded-lg bg-blue-600 text-white shadow-sm">
              3
            </button>

            {[4, 5].map((page) => (
              <button 
                key={page} 
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 text-sm font-semibold rounded-lg transition ${
                  currentPage === page ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm">
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

      </main>
    </div>
  );
}