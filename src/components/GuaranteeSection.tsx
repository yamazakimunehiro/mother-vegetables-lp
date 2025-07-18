export default function GuaranteeSection() {
  const guarantees = [
    { number: "01", label: "送料無料" },
    { number: "02", label: "安心の医薬部外品" },
    { number: "03", label: "専門スタッフサポート" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">30日間返金保証</h2>
            <p className="text-lg text-gray-700 mb-8">
              万が一、お肌に合わない場合は<br />
              商品到着後30日以内であれば全額返金いたします
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {guarantees.map((item) => (
                <div key={item.number}>
                  <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-light text-gray-700">{item.number}</span>
                  </div>
                  <p className="text-gray-700">{item.label}</p>
                </div>
              ))}
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-full text-lg font-bold transition-all duration-300">
              安心して今すぐ試してみる
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}