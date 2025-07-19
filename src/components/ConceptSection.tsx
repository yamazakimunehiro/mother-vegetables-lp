export default function ConceptSection() {
  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-600 mb-4 tracking-[0.2em]">CONCEPT</p>
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-6">
              35億年前から続く、<br />
              <span className="text-gold-gradient">生命の力</span>を肌へ
            </h2>
            <div className="w-20 h-[1px] bg-[#D4C4B0] mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Mother Vegetables Confidence MV-Si002は、
                地球上に生命が誕生した35億年前の環境から
                インスピレーションを得て開発されました。
              </p>
              <p className="text-gray-600 leading-relaxed">
                古代の海に存在した特殊な微粒子構造を現代技術で再現。
                肌表面に極薄のベールを形成し、
                まるで陶器のような滑らかさと輝きを実現します。
              </p>
              <p className="text-gray-600 leading-relaxed">
                朝のたった5秒のひと塗りで、
                24時間崩れ知らずの美しさをキープ。
                忙しい現代を生きるあなたの、
                新しい美の習慣をご提案します。
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#FFF8F0] to-[#FFE4E1] rounded-full relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-6xl font-thin text-gray-800 mb-4">35</p>
                    <p className="text-sm text-gray-600">億年前の生命起源</p>
                    <div className="mt-8">
                      <div className="w-32 h-32 mx-auto relative">
                        <div className="absolute inset-0 border-2 border-[#D4C4B0] rounded-full animate-pulse" />
                        <div className="absolute inset-4 border border-[#D4C4B0] rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
                        <div className="absolute inset-8 border border-[#D4C4B0] rounded-full animate-pulse" style={{animationDelay: '1s'}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}