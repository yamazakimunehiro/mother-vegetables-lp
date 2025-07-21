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
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* テキストコンテンツ - モバイルでは2番目 */}
            <div className={`space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-gray-900 leading-tight">
                朝の5秒が、<br />
                <span className="font-normal">一日を変える。</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                35億年前の生命起源から生まれた特殊微粒子配合。<br className="hidden sm:block" />
                崩れ知らずの陶器肌で、24時間美しさが持続。
              </p>
              
              <div>
                <p className="text-xs md:text-sm text-gray-500 mb-2">医薬部外品認定</p>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-thin text-gray-800">
                  Mother Vegetables Confidence
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 mt-1">MV-Si002</p>
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
            
            {/* ビジュアル - モバイルでは最初に表示 */}
            <div className={`relative w-full max-w-lg mx-auto order-1 lg:order-2 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-1000`}>
              {/* プレミアムビジュアルコンテナ */}
              <div className="relative aspect-square">
                {/* 背景のグラデーション球体 */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black rounded-full opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#B8860B]/20 via-transparent to-[#D4C4B0]/20 rounded-full" />
                </div>
                
                {/* ゴールドの光輪 */}
                <div className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at center, transparent 30%, #B8860B 45%, transparent 46%, transparent 60%, #D4C4B0 70%, transparent 71%)',
                    animation: 'rotate 20s linear infinite'
                  }}
                />
                
                {/* 内側の装飾リング */}
                <div className="absolute inset-[10%] rounded-full border border-[#B8860B]/20" />
                <div className="absolute inset-[20%] rounded-full border border-[#D4C4B0]/10" />
                <div className="absolute inset-[30%] rounded-full border border-[#B8860B]/5" />
                
                {/* 中央の製品ディスプレイ */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* 製品コンテナ */}
                    <div className="relative w-48 h-48 md:w-64 md:h-64">
                      {/* 3D効果の層 */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-2xl transform rotate-3 opacity-50" />
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-2xl transform -rotate-3 opacity-70" />
                      
                      {/* メイン製品カード */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden">
                        {/* 上部の光沢効果 */}
                        <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent" />
                        
                        {/* 製品情報 */}
                        <div className="relative h-full flex flex-col justify-center items-center p-6">
                          {/* ロゴマーク */}
                          <div className="w-20 h-20 md:w-24 md:h-24 mb-4 relative">
                            <div className="absolute inset-0 bg-[#B8860B] rounded-full opacity-20 animate-pulse" />
                            <div className="absolute inset-2 bg-[#D4C4B0] rounded-full opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }} />
                            <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                              <span className="text-black font-thin text-lg md:text-xl">MV</span>
                            </div>
                          </div>
                          
                          {/* テキスト */}
                          <div className="text-center">
                            <p className="text-[#B8860B] text-xs tracking-[0.3em] mb-1">LUXURY POWDER</p>
                            <h3 className="text-white text-sm md:text-base font-light tracking-wider mb-2">Mother Vegetables</h3>
                            <p className="text-[#D4C4B0] text-xs tracking-wider">Confidence</p>
                            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#B8860B] to-transparent mx-auto mt-3" />
                            <p className="text-gray-400 text-xs mt-3">MV-Si002</p>
                          </div>
                        </div>
                        
                        {/* コーナーの装飾 */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#B8860B]/30" />
                        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#B8860B]/30" />
                        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#B8860B]/30" />
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#B8860B]/30" />
                      </div>
                    </div>
                    
                    {/* 浮遊する要素 */}
                    <div className="absolute -top-6 -right-6 bg-gradient-to-r from-[#B8860B] to-[#D4C4B0] text-white rounded-full px-4 py-2 text-xs font-medium shadow-xl transform rotate-12 animate-pulse">
                      5秒で完成
                    </div>
                    
                    {/* 認定バッジ */}
                    <div className="absolute -bottom-4 -left-4 bg-white rounded-full px-3 py-1 text-xs shadow-lg">
                      <span className="text-[#B8860B] font-medium">医薬部外品</span>
                    </div>
                  </div>
                </div>
                
                {/* 周囲のパーティクル */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => {
                    const angle = (i * 45) * Math.PI / 180;
                    const radius = 45;
                    const x = 50 + radius * Math.cos(angle);
                    const y = 50 + radius * Math.sin(angle);
                    return (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-[#D4C4B0] rounded-full opacity-40 animate-pulse"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          animationDelay: `${i * 0.2}s`,
                          transform: 'translate(-50%, -50%)'
                        }}
                      />
                    );
                  })}
                </div>
              </div>
              
              {/* 下部の機能説明 */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/5 mb-2">
                    <svg className="w-6 h-6 text-[#B8860B]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                  </div>
                  <p className="text-xs text-gray-600">朝5秒で完成</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/5 mb-2">
                    <svg className="w-6 h-6 text-[#B8860B]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <p className="text-xs text-gray-600">24時間キープ</p>
                </div>
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
      
      <style jsx>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}