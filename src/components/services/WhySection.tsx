/**
 * WhySection komponenti - Neden bu hizmet? bölümü
 */
interface WhyCard {
  icon: string;
  title: string;
  description: string;
  strongText?: string;
}

interface WhySectionProps {
  title: string;
  subtitle?: string;
  cards: WhyCard[];
}

export default function WhySection({ title, subtitle, cards }: WhySectionProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary text-3xl md:text-4xl font-display font-bold mb-4">{title}</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          {subtitle && <p className="text-gray-500 mt-6 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-100 p-8 hover:border-accent/50 transition-colors group"
            >
              <div className="mb-6 inline-flex items-center justify-center p-4 bg-white shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-[40px]">{card.icon}</span>
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-4">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {card.strongText && card.description.includes(card.strongText) ? (
                  <>
                    {card.description.substring(0, card.description.indexOf(card.strongText))}
                    <strong>{card.strongText}</strong>
                    {card.description.substring(
                      card.description.indexOf(card.strongText) + card.strongText.length
                    )}
                  </>
                ) : (
                  card.description
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
