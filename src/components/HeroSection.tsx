"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* 背景のテクスチャパターン */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* アンビエント呼吸エフェクト */}
      <div className="absolute top-32 right-20 w-96 h-96 bg-gray-200/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12 md:py-20">
        <div className="max-w-7xl mx-auto w-full">
          {/* モバイルファースト：縦配置 */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* テキストコンテンツ */}
            <div className={`space-y-6 md:space-y-8 text-center lg:text-left ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-gray-900 leading-tight">
                朝の5秒が、<br />
                <span className="font-normal">一日を変える。</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                35億年前の生命起源から生まれた特殊微粒子配合。<br className="hidden sm:block" />
                崩れ知らずの陶器肌で、24時間美しさが持続。
              </p>
              
              <div className="hidden md:block">
                <p className="text-sm text-gray-500 mb-2">医薬部外品認定</p>
                <h2 className="text-2xl md:text-3xl font-thin text-gray-800">
                  Mother Vegetables Confidence
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mt-1">MV-Si002</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-6 md:px-8 py-3 md:py-4 bg-black text-white text-sm tracking-wider hover:bg-gray-900 transition-all duration-300">
                  購入する
                </button>
                <button className="px-6 md:px-8 py-3 md:py-4 border-2 border-black text-black text-sm tracking-wider hover:bg-black hover:text-white transition-all duration-300">
                  詳細を見る
                </button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-6 md:gap-8 text-sm text-gray-600">
                <span>送料無料</span>
                <span>30日間返品保証</span>
              </div>
            </div>
            
            {/* ビジュアル - モバイルでは下に表示 */}
            <div className={`relative w-full max-w-lg mx-auto ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} transition-all duration-1000 delay-300`}>
              {/* メインビジュアルコンテナ */}
              <div className="relative">
                {/* 背景の装飾 */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#B8860B]/10 via-transparent to-[#D4C4B0]/10 rounded-3xl blur-2xl" />
                
                {/* メインカード */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl border border-gray-100">
                  {/* 製品ビジュアル */}
                  <div className="relative mb-8">
                    {/* 円形の背景 */}
                    <div className="aspect-square relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8F0] via-white to-[#FFE4E1] rounded-full" />
                      
                      {/* 中心のパウダーエフェクト */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          {/* パウダー粒子のアニメーション */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="grid grid-cols-3 gap-2">
                              {[...Array(9)].map((_, i) => (
                                <div 
                                  key={i}
                                  className="w-1 h-1 bg-[#D4C4B0] rounded-full animate-pulse"
                                  style={{ animationDelay: `${i * 0.1}s` }}
                                />
                              ))}
                            </div>
                          </div>
                          
                          {/* 中央の製品表示 */}
                          <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center shadow-2xl">
                            <div className="text-center">
                              <p className="text-[#B8860B] text-xs md:text-sm font-light tracking-wider">LUXURY</p>
                              <p className="text-white text-lg md:text-xl font-thin">MV-Si002</p>
                              <div className="w-8 h-px bg-[#B8860B] mx-auto mt-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* 周りの装飾リング */}
                      <div className="absolute inset-8 border border-[#D4C4B0]/30 rounded-full animate-pulse" />
                      <div className="absolute inset-12 border border-[#D4C4B0]/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                      <div className="absolute inset-16 border border-[#D4C4B0]/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>
                  </div>
                  
                  {/* タイムラインビジュアル */}
                  <div className="flex items-center justify-between mb-6">
                    {/* 朝のアイコン */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center shadow-md">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-orange-500">
                          <path fill="currentColor" d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.16 16.5,6.65L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.23 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17Z"/>
                        </svg>
                      </div>
                      <p className="text-xs font-medium text-gray-700 mt-1">AM 7:00</p>
                    </div>
                    
                    {/* 矢印 */}
                    <div className="flex-1 mx-4">
                      <div className="h-1 bg-gradient-to-r from-orange-200 via-purple-200 to-indigo-200 rounded-full relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400">
                            <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* 夜のアイコン */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center shadow-md">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-indigo-600">
                          <path fill="currentColor" d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z"/>
                        </svg>
                      </div>
                      <p className="text-xs font-medium text-gray-700 mt-1">PM 11:00</p>
                    </div>
                  </div>
                  
                  {/* メッセージ */}
                  <div className="text-center">
                    <p className="text-sm md:text-base font-light text-gray-700">朝の5秒で</p>
                    <p className="text-lg md:text-xl font-medium text-gray-900">24時間美しさ持続</p>
                  </div>
                  
                  {/* フローティング要素 */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#B8860B] to-[#D4C4B0] text-white rounded-full px-4 py-2 text-xs font-medium shadow-lg transform rotate-12">
                    5秒で完成
                  </div>
                </div>
              </div>
              
              {/* モバイル用の製品情報 */}
              <div className="md:hidden mt-8 text-center">
                <p className="text-xs text-gray-500 mb-2">医薬部外品認定</p>
                <h2 className="text-xl font-thin text-gray-800">
                  Mother Vegetables Confidence
                </h2>
                <p className="text-base text-gray-600 mt-1">MV-Si002</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <p className="text-xs tracking-wider">SCROLL</p>
          <div className="w-px h-12 bg-gray-300 relative overflow-hidden">
            <div className="absolute top-0 w-full h-4 bg-gray-600 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}