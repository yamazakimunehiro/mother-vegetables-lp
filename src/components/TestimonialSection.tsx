"use client";

import { useState } from "react";
import Image from "next/image";

export default function TestimonialSection() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const testimonials = [
    {
      id: 1,
      name: "東京都 A.K様 (42歳)",
      comment: "朝のメイクが本当に楽になりました。毛穴が目立たなくなり、肌が陶器のように滑らかに。夕方になってもテカリや崩れがなく、朝の仕上がりがそのまま続きます。もう手放せません！",
      beforeImage: "Before Photo 1",
      afterImage: "After Photo 1"
    },
    {
      id: 2,
      name: "大阪府 M.S様 (38歳)",
      comment: "初めて使った時の感動が忘れられません。本当に陶器のような滑らかな肌になりました。特に小鼻周りの毛穴が全く目立たなくなって、素肌に自信が持てるように。メイク直しの回数も激減しました。",
      beforeImage: "Before Photo 2",
      afterImage: "After Photo 2"
    },
    {
      id: 3,
      name: "神奈川県 Y.T様 (35歳)",
      comment: "仕事で一日中マスクをしていても化粧崩れしにくく、本当に快適です。肌への負担も感じず、むしろ使い続けるうちに肌の調子が良くなってきました。友人にも『肌がキレイになった』と褒められます。",
      beforeImage: "Before Photo 3",
      afterImage: "After Photo 3"
    }
  ];

  const surveyResults = [
    { label: "化粧崩れが減った", percentage: 98 },
    { label: "肌の調子が良くなった", percentage: 95 },
    { label: "陶器肌になれた", percentage: 97 },
    { label: "リピートしたい", percentage: 99 }
  ];

  return (
    <>
      <section id="voice" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-600 mb-4 tracking-wider">お客様の声</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              実際にご使用いただいた<br />
              お客様の喜びの声
            </h2>
            <div className="w-20 h-1 bg-gray-300 mx-auto" />
          </div>
          
          <div className="max-w-7xl mx-auto">
            {/* Testimonial Cards */}
            <div className="mb-20">
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex justify-center">
                    <div className="testimonial-card rounded-3xl p-8 luxury-shadow hover:shadow-2xl transition-all duration-500 w-full max-w-md">
                      <div className="flex flex-col items-center">
                        <div>
                          <h4 className="text-lg font-light mb-6 text-gray-800 tracking-wider">使用前</h4>
                          <div 
                            className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-6 group cursor-pointer transition-all duration-300 hover:shadow-xl"
                            onClick={() => setModalImage(`before${testimonial.id}`)}
                          >
                            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                              <p className="text-gray-500">{testimonial.beforeImage}</p>
                            </div>
                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                              <p className="text-sm font-medium text-gray-700">Before</p>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                              <svg viewBox="0 0 24 24" className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <path fill="currentColor" d="M15,3H9V5H15M19,5H21V7H19M19,9H21V11H19M19,13H21V15H19M19,17H21V19H19M17,21H15V23H17M13,21H11V23H13M9,21H7V23H9M5,21H3V19H5M5,17H3V15H5M5,13H3V11H5M5,9H3V7H5M21,21H19V19H17V21H15V19H13V21H11V19H9V21H7V19H5V21H3V3H5V5H7V3H9V5H11V3H13V5H15V3H17V5H19V3H21M19,19V5H5V19H19M9,8V16L15,12L9,8Z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-light mb-6 text-gray-800 tracking-wider">使用後</h4>
                          <div 
                            className="relative aspect-square bg-gradient-to-br from-[#fff8f0] to-[#ffe4e1] rounded-2xl overflow-hidden mb-6 group cursor-pointer transition-all duration-300 hover:shadow-xl"
                            onClick={() => setModalImage(`after${testimonial.id}`)}
                          >
                            <div className="w-full h-full bg-gradient-to-br from-[#fff8f0] to-[#ffe4e1] flex items-center justify-center">
                              <p className="text-gray-600">{testimonial.afterImage}</p>
                            </div>
                            <div className="absolute bottom-4 left-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-4 py-2 rounded-full shadow-md">
                              <p className="text-sm font-medium">After</p>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                              <svg viewBox="0 0 24 24" className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <path fill="currentColor" d="M15,3H9V5H15M19,5H21V7H19M19,9H21V11H19M19,13H21V15H19M19,17H21V19H19M17,21H15V23H17M13,21H11V23H13M9,21H7V23H9M5,21H3V19H5M5,17H3V15H5M5,13H3V11H5M5,9H3V7H5M21,21H19V19H17V21H15V19H13V21H11V19H9V21H7V19H5V21H3V3H5V5H7V3H9V5H11V3H13V5H15V3H17V5H19V3H21M19,19V5H5V19H19M9,8V16L15,12L9,8Z"/>
                              </svg>
                            </div>
                          </div>
                          <div className="text-center">
                            <p className="text-base text-gray-700 mb-3 font-light leading-relaxed">
                              "{testimonial.comment}"
                            </p>
                            <p className="text-sm text-gray-500">{testimonial.name}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Survey Results */}
            <div className="bg-gray-50 rounded-2xl p-8 mt-16">
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">ご愛用者様アンケート結果</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {surveyResults.map((result, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">{result.label}</span>
                      <span className="font-bold text-gray-900">{result.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-gray-600 to-gray-800 h-3 rounded-full transition-all duration-1000"
                        style={{width: `${result.percentage}%`}}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 text-center mt-4">※2024年10月実施 n=500</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setModalImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={() => setModalImage(null)}
          >
            ×
          </button>
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-light mb-6 text-center">
              {modalImage.startsWith('before') ? '使用前の肌状態' : '使用後の肌状態'}
            </h3>
            <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
              <p className="text-gray-500 text-xl">
                {modalImage.startsWith('before') ? 'Before' : 'After'} Photo {modalImage.slice(-1)}
              </p>
            </div>
            <p className="text-center mt-6 text-gray-600">
              {modalImage.startsWith('before') ? '毛穴・凹凸が目立つ肌の状態' : '陶器のような滑らかな肌へ変化'}
            </p>
          </div>
        </div>
      )}
    </>
  );
}