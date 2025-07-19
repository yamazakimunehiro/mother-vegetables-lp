"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* 背景のシルクテクスチャ */}
      <div className="absolute inset-0 silk-texture opacity-5" />
      
      {/* グラデーション背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111] via-black to-[#0a0a0a]" />
      
      {/* パールグロウエフェクト */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pearl-glow opacity-5" />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-5xl mx-auto">
          {/* メインタイトル */}
          <div className={`space-y-8 ${isVisible ? 'luxury-reveal' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin text-white tracking-wider leading-tight">
              朝の<span className="text-gold-gradient">5秒</span>が、<br />
              一日を<span className="relative inline-block">
                変える
                <div className="absolute -bottom-4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B8860B] to-transparent" />
              </span>。
            </h1>
            
            {/* サブコピー */}
            <p className="text-lg md:text-xl text-gray-400 font-light tracking-wider max-w-3xl mx-auto">
              35億年前の生命起源から生まれた特殊微粒子配合<br />
              崩れ知らずの陶器肌で、24時間美しさが持続
            </p>
            
            {/* 製品名 */}
            <div className="py-8">
              <p className="text-xs text-gray-500 mb-2 tracking-[0.3em]">MEDICAL GRADE ORGANIC</p>
              <h2 className="text-2xl md:text-3xl font-thin text-white tracking-[0.1em]">
                Mother Vegetables Confidence
              </h2>
              <p className="text-lg text-gray-400 mt-2">MV-Si002</p>
            </div>
            
            {/* CTA ボタン */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <button className="group relative px-12 py-5 bg-white text-black overflow-hidden transition-all duration-500 hover:scale-105">
                <span className="relative z-10 text-sm tracking-[0.2em]">購入する</span>
                <div className="absolute inset-0 crystal-effect opacity-0 group-hover:opacity-100" />
              </button>
              
              <button className="px-12 py-5 border border-gray-600 text-white text-sm tracking-[0.2em] transition-all duration-300 hover:border-white hover:text-white">
                詳細を見る
              </button>
            </div>
            
            {/* 特徴アイコン */}
            <div className="flex items-center justify-center gap-12 pt-12">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 border border-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-xs text-gray-400">送料無料</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 border border-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">30</span>
                </div>
                <p className="text-xs text-gray-400">30日間返品保証</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 border border-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">★</span>
                </div>
                <p className="text-xs text-gray-400">医薬部外品</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-gray-500 tracking-[0.2em]">SCROLL</p>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
        </div>
      </div>
    </section>
  );
}