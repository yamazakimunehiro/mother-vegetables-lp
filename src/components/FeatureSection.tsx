export default function FeatureSection() {
  const features = [
    {
      title: "朝の5秒で完成",
      subtitle: "忙しい朝でも",
      description: "特殊微粒子がワンタッチで均一に広がり、プロのメイクアップアーティストが仕上げたような陶器肌が瞬時に完成。",
      icon: "⏱",
      gradient: "from-[#FFF8F0] to-[#FFE4E1]"
    },
    {
      title: "24時間崩れない",
      subtitle: "夜まで美しく",
      description: "独自の密着技術により、汗や皮脂に強く、マスクをしても崩れない。朝の美しさが夜まで続きます。",
      icon: "✨",
      gradient: "from-[#F0F8FF] to-[#E6E6FA]"
    },
    {
      title: "肌に優しい",
      subtitle: "医薬部外品認定",
      description: "35億年前の生命起源から抽出した天然由来成分を配合。敏感肌の方でも安心してお使いいただけます。",
      icon: "🌿",
      gradient: "from-[#F0FFF0] to-[#E0FFE0]"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-600 mb-4 tracking-[0.2em]">FEATURES</p>
            <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-6">
              なぜ、選ばれ続けるのか
            </h2>
            <div className="w-20 h-[1px] bg-[#D4C4B0] mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 h-full luxury-shadow transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 text-center">
                    {feature.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}