export default function FAQSection() {
  const faqs = [
    {
      question: "敏感肌でも使えますか？",
      answer: "はい、医薬部外品認定を受けた安全な処方です。敏感肌の方でも安心してお使いいただけます。"
    },
    {
      question: "いつ使えばいいですか？",
      answer: "スキンケアの後、メイクの仕上げまで、どのタイミングでもお使いいただけます。下地の上からでも、ファンデーションの後でも、お好みのタイミングでご使用ください。"
    },
    {
      question: "どのくらい持ちますか？",
      answer: "1日1回の使用で、1gは約30日、2gは約60日、5gは約150日ご使用いただけます。"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-600 mb-4 tracking-wider">よくあるご質問</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              よくあるご質問
            </h2>
            <div className="w-20 h-1 bg-gray-300 mx-auto" />
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold mb-3 text-gray-900">Q. {faq.question}</h3>
                <p className="text-gray-600">A. {faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}