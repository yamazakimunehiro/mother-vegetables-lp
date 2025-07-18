"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Parallax Background Layers */}
      <div className="absolute inset-0 parallax-layer">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gray-100/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gray-100/20 to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Loading Animation */}
      <div className={`fixed inset-0 bg-white z-50 transition-opacity duration-1000 ${loaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin" />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="min-h-screen flex items-center justify-center py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl w-full">
              {/* Left Content */}
              <div className="order-2 lg:order-1">
                <div className="max-w-xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
                    朝の5秒が、<br />
                    <span className="font-normal">一日を変える。</span>
                  </h1>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    35億年前の生命起源から生まれた特殊微粒子配合。<br />
                    崩れ知らずの陶器肌で、24時間美しさが持続。
                  </p>
                  
                  <div className="mb-8">
                    <p className="text-sm text-gray-500 mb-2">医薬部外品認定</p>
                    <h2 className="text-3xl font-light text-gray-800 mb-1">
                      Mother Vegetables Confidence
                    </h2>
                    <p className="text-xl text-gray-600">MV-Si002</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 text-lg transition-all duration-300 relative overflow-hidden group">
                      <span className="relative z-10">購入する</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                    </button>
                    
                    <button className="border-2 border-gray-300 hover:border-gray-800 text-gray-800 px-8 py-4 transition-all duration-300 group">
                      <span className="flex items-center">
                        詳細を見る
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <div>
                      <span>送料無料</span>
                    </div>
                    <div>
                      <span>30日間返品保証</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Visual */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  {/* Main Visual */}
                  <div className="aspect-square relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl shadow-inner" />
                    <div className="absolute inset-0 flex items-center justify-center p-12">
                      <div className="w-full max-w-sm">
                        <div className="relative text-center space-y-8">
                          {/* Timeline Visual */}
                          <div className="flex items-center justify-center space-x-6 mb-8">
                            {/* Morning Icon */}
                            <div className="flex flex-col items-center">
                              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center shadow-lg mb-2">
                                <svg viewBox="0 0 24 24" className="w-8 h-8 text-orange-500">
                                  <path fill="currentColor" d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.16 16.5,6.65L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.23 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17Z"/>
                                </svg>
                              </div>
                              <p className="text-xs font-medium text-gray-700">AM 7:00</p>
                              <p className="text-xs text-gray-500">朝のメイク</p>
                            </div>
                            
                            {/* Arrow */}
                            <div className="flex-1 max-w-[80px]">
                              <div className="h-1 bg-gradient-to-r from-orange-200 via-purple-200 to-indigo-200 rounded-full relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400">
                                    <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"/>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            
                            {/* Night Icon */}
                            <div className="flex flex-col items-center">
                              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center shadow-lg mb-2">
                                <svg viewBox="0 0 24 24" className="w-8 h-8 text-indigo-600">
                                  <path fill="currentColor" d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z"/>
                                </svg>
                              </div>
                              <p className="text-xs font-medium text-gray-700">PM 11:00</p>
                              <p className="text-xs text-gray-500">美しさキープ</p>
                            </div>
                          </div>
                          
                          {/* Central Message */}
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl blur-xl opacity-50" />
                            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                              <h3 className="text-xl font-light text-gray-700 mb-2">朝の5秒で</h3>
                              <p className="text-2xl font-medium text-gray-900 mb-4">24時間美しさ持続</p>
                              <div className="w-16 h-px bg-gray-300 mx-auto mb-4" />
                              <p className="text-sm text-gray-600">
                                特殊微粒子が肌表面に<br />
                                均一な層を形成
                              </p>
                            </div>
                          </div>
                          
                          {/* Powder Effect Visual */}
                          <div className="flex justify-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" />
                            <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" style={{animationDelay: '0.2s'}} />
                            <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" style={{animationDelay: '0.4s'}} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-full px-6 py-3 shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl">
                    <p className="text-sm font-medium text-gray-800">5秒で完成</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 text-gray-400">
            <p className="text-xs tracking-wider">SCROLL</p>
            <div className="w-px h-12 bg-gray-300 relative overflow-hidden">
              <div className="absolute top-0 w-full h-4 bg-gray-600 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}