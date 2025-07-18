export default function FeatureSection() {
  const features = [
    {
      number: "1",
      title: "肌への優しさ",
      description: "医薬部外品認定の処方で、敏感肌の方にも安心。特殊な微粒子が肌表面に優しく密着し、自然な美しさを引き出します。"
    },
    {
      number: "2",
      title: "長時間持続",
      description: "独自の微粒子技術により、朝から夜まで崩れ知らず。汗や皮脂に強く、美しい仕上がりが24時間続きます。"
    },
    {
      number: "3",
      title: "陶器肌仕上げ",
      description: "光を美しく拡散させる特殊構造により、毛穴や凹凸を自然にカバー。滑らかで上品な陶器肌を演出します。"
    }
  ];

  return (
    <section id="feature" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm text-gray-600 mb-4 tracking-wider">特徴</p>
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-800 tracking-wide">
            三つの約束
          </h2>
          <div className="w-20 h-1 bg-gray-300 mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center group luxury-reveal"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="mb-10">
                <div className="w-24 h-24 mx-auto relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <linearGradient id={`grad${index + 1}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#f8f8f8', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#e8e8e8', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>
                    {/* Outer rings */}
                    <circle cx="50" cy="50" r="48" fill="none" stroke="#e0e0e0" strokeWidth="0.5" opacity="0.3" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e0e0e0" strokeWidth="0.3" opacity="0.2" />
                    <circle cx="50" cy="50" r="42" fill={`url(#grad${index + 1})`} opacity="0.1" />
                    {/* Main circle */}
                    <circle cx="50" cy="50" r="40" fill="white" opacity="0.95" />
                    {/* Inner design */}
                    <circle cx="50" cy="50" r="38" fill="none" stroke="#f0f0f0" strokeWidth="0.5" />
                    {/* Number */}
                    <text x="50" y="55" textAnchor="middle" fontSize="24" fill="#888" fontWeight="300">
                      {feature.number}
                    </text>
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-2 tracking-wider">第{feature.number}の約束</p>
              <h3 className="text-xl mb-4 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm px-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}