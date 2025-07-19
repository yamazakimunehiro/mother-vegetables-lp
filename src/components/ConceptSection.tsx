export default function ConceptSection() {
  return (
    <section className="py-20 md:py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-600 mb-4 tracking-[0.2em]">CONCEPT</p>
            <h2 className="text-2xl md:text-4xl font-thin text-gray-900 mb-6">
              35億年前から続く、<br />
              <span className="text-gold-gradient">生命の力</span>を肌へ
            </h2>
            <div className="w-20 h-[1px] bg-[#D4C4B0] mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
            <div className="space-y-6 text-center">
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
          </div>
        </div>
      </div>
    </section>
  );
}