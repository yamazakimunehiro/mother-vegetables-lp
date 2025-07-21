"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* 背景画像レイヤー */}
      <div className="absolute inset-0">
        {/* グラデーション背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        
        {/* 高級感のあるパウダーテクスチャ */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(184, 134, 11, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 50%, rgba(212, 196, 176, 0.2) 0%, transparent 50%),
                             radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)`,
          }} />
        </div>
        
        {/* パウダーパーティクル効果 */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-10"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`
              }}
            />
          ))}
        </div>
        
        {/* 中央の光輪エフェクト */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[600px] h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B]/20 via-transparent to-[#D4C4B0]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute inset-8 bg-gradient-to-r from-[#D4C4B0]/10 via-transparent to-[#B8860B]/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
        
        {/* オーバーレイグラデーション */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      </div>
      
      {/* コンテンツレイヤー */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* メインコンテンツ */}
          <div className={`space-y-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
            {/* 製品バッジ */}
            <div className="inline-flex items-center justify-center">
              <div className="bg-gradient-to-r from-[#B8860B] to-[#D4C4B0] p-[1px] rounded-full">
                <div className="bg-black px-6 py-2 rounded-full">
                  <p className="text-xs text-[#B8860B] tracking-[0.3em]">LUXURY FACE POWDER</p>
                </div>
              </div>
            </div>
            
            {/* メインタイトル */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin text-white leading-tight">
              朝の<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#D4C4B0]">5秒</span>が、<br />
              <span className="font-normal">一日を変える。</span>
            </h1>
            
            {/* サブコピー */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              35億年前の生命起源から生まれた特殊微粒子配合。<br className="hidden sm:block" />
              崩れ知らずの陶器肌で、24時間美しさが持続。
            </p>
            
            {/* 製品名 */}
            <div className="space-y-2">
              <p className="text-sm text-[#B8860B] tracking-wider">医薬部外品認定</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-thin text-white tracking-wider">
                Mother Vegetables Confidence
              </h2>
              <p className="text-xl md:text-2xl text-[#D4C4B0]">MV-Si002</p>
            </div>
            
            {/* CTAボタン */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="group relative px-8 py-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B] to-[#D4C4B0] transition-transform duration-300 group-hover:scale-110" />
                <span className="relative text-white text-sm tracking-wider font-medium">
                  購入する
                </span>
              </button>
              
              <button className="px-8 py-4 border border-white/30 text-white text-sm tracking-wider hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                詳細を見る
              </button>
            </div>
            
            {/* 特徴アイコン */}
            <div className="flex items-center justify-center gap-8 md:gap-12 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#B8860B]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <p className="text-xs text-gray-400">朝5秒で完成</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#B8860B]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <p className="text-xs text-gray-400">24時間キープ</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#B8860B]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <p className="text-xs text-gray-400">医薬部外品</p>
              </div>
            </div>
          </div>
          
          {/* フローティング要素 */}
          <div className="absolute top-10 right-10 bg-gradient-to-r from-[#B8860B] to-[#D4C4B0] text-white rounded-full px-4 py-2 text-xs font-medium shadow-xl transform rotate-12 hidden md:block">
            限定販売中
          </div>
        </div>
      </div>
      
      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <p className="text-xs tracking-wider">SCROLL</p>
          <div className="w-px h-12 bg-gray-400 relative overflow-hidden">
            <div className="absolute top-0 w-full h-4 bg-white animate-bounce" />
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.1;
          }
          90% {
            opacity: 0.1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}