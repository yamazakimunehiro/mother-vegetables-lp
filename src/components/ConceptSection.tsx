export default function ConceptSection() {
  return (
    <section id="concept" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-600 mb-4">CONCEPT</p>
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-800 tracking-wide">
              一般的なパウダーとの違い
            </h2>
            <div className="w-20 h-1 bg-gray-300 mx-auto" />
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 mb-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-gray-100/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-gray-100/20 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-start space-x-4 mb-8">
                <div className="flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-400">
                    <path fill="currentColor" d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-light mb-4 text-gray-800">一般的なパウダーの問題点</h3>
                  <p className="text-lg leading-relaxed text-gray-600">
                    表面を覆うだけの従来品は、時間経過で皮脂や汗により崩れ、
                    毛穴を詰まらせる原因となってしまいます。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-900">
                    <path fill="currentColor" d="M12,2L2,7L12,12L22,7L12,2M12,7A3,3 0 0,1 15,10A3,3 0 0,1 12,13A3,3 0 0,1 9,10A3,3 0 0,1 12,7M12,22L2,17V12L12,17L22,12V17L12,22Z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-light mb-4 text-gray-800">Mother Vegetables Confidenceの革新</h3>
                  <p className="text-lg leading-relaxed text-gray-700">
                    天然由来の特殊な微粒子が光を拡散させ、
                    肌の凹凸を自然にカバー。
                    <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-gray-800 font-medium">
                      陶器のような仕上がり
                    </span>
                    を実現しながら、肌への優しさも両立しました。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}