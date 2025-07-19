export default function GuaranteeSection() {
  const guarantees = [
    { number: "01", label: "送料無料" },
    { number: "02", label: "安心の医薬部外品" },
    { number: "03", label: "専門スタッフサポート" }
  ];

  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#b8860b]">30日間返金保証</h2>
            <p className="text-base md:text-lg text-gray-600 mb-8">
              万が一、お肌に合わない場合は<br />
              商品到着後30日以内であれば全額返金いたします
            </p>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8">
              {guarantees.map((item) => (
                <div key={item.number}>
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#b8860b]/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-base md:text-lg font-light text-[#b8860b]">{item.number}</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-700">{item.label}</p>
                </div>
              ))}
            </div>
            <button className="bg-[#b8860b] hover:bg-[#9a7209] text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl">
              安心して今すぐ試してみる
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}