/**
 * ServiceDetailCTA komponenti - Hizmet detay sayfası CTA bölümü
 */
interface ServiceDetailCTAProps {
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton?: string;
}

export default function ServiceDetailCTA({
  title,
  description,
  primaryButton,
  secondaryButton,
}: ServiceDetailCTAProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">{title}</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">{description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto min-w-[240px] h-14 px-8 bg-accent hover:bg-[#d97b20] text-white text-lg font-bold transition-colors shadow-lg shadow-accent/20">
            {primaryButton}
          </button>
          {secondaryButton && (
            <button className="w-full sm:w-auto min-w-[240px] h-14 px-8 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg font-bold transition-colors">
              {secondaryButton}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
