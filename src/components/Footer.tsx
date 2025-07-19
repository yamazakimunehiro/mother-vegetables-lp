export default function Footer() {
  const links = [
    { label: "会社概要", href: "#" },
    { label: "プライバシーポリシー", href: "#" },
    { label: "特定商取引法", href: "#" },
    { label: "お問い合わせ", href: "#" }
  ];

  return (
    <footer className="py-20 bg-black border-t border-[#b8860b]/20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl text-[#b8860b] mb-4 font-light tracking-wider">
            Mother Vegetables Confidence
          </h3>
          <p className="text-lg text-gray-400 mb-8">MV-Si002</p>
          
          <div className="flex justify-center space-x-8 text-gray-400 mb-12 text-sm">
            {links.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="hover:text-[#b8860b] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mb-8" />
          
          <p className="text-gray-500 font-light">
            © 2025 Mother Vegetables Confidence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}