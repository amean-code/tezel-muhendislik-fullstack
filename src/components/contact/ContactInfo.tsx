"use client";

import { contactInfo } from "@/data/contact";
import { AnimatedCard } from "@/components/ui/AnimatedSection";

/**
 * ContactInfo komponenti - İletişim bilgileri bölümü
 */
export default function ContactInfo() {
  return (
    <div className="lg:col-span-5 flex flex-col gap-10">
      <div className="space-y-8">
        <div>
          <h3 className="text-primary text-2xl font-bold mb-6 border-l-4 border-accent pl-4">
            İletişim Bilgileri
          </h3>
          <p className="text-gray-600 mb-8">
            Merkez ofisimiz ve teknik destek birimlerimizle aşağıdaki kanallar üzerinden irtibata
            geçebilirsiniz.
          </p>
        </div>

        {/* Adres */}
        <AnimatedCard index={0}>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 size-12 bg-gray-100 flex items-center justify-center rounded-sm">
              <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
            </div>
            <div>
              <h4 className="text-primary font-bold text-lg">{contactInfo.office.title}</h4>
              <p className="text-gray-600 mt-1">
                {contactInfo.office.address}
                {contactInfo.office.addressLine2 && (
                  <>
                    <br />
                    {contactInfo.office.addressLine2}
                  </>
                )}
              </p>
            </div>
          </div>
        </AnimatedCard>

        {/* Telefon */}
        <AnimatedCard index={1}>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 size-12 bg-gray-100 flex items-center justify-center rounded-sm">
              <span className="material-symbols-outlined text-primary text-2xl">call</span>
            </div>
            <div>
              <h4 className="text-primary font-bold text-lg">Telefon</h4>
              <p className="text-gray-600 mt-1">{contactInfo.phone.number}</p>
              <p className="text-gray-600 mt-1">{contactInfo.phone2.number}</p>
              {contactInfo.phone2.hours && (
                <p className="text-gray-500 text-sm mt-1">{contactInfo.phone2.hours}</p>
              )}
            </div>
          </div>
        </AnimatedCard>

        {/* E-posta */}
        <AnimatedCard index={2}>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 size-12 bg-gray-100 flex items-center justify-center rounded-sm">
              <span className="material-symbols-outlined text-primary text-2xl">mail</span>
            </div>
            <div>
              <h4 className="text-primary font-bold text-lg">E-posta</h4>
              <p className="text-gray-600 mt-1">{contactInfo.email.primary}</p>
              {contactInfo.email.sales && (
                <p className="text-gray-600 mt-0.5">{contactInfo.email.sales}</p>
              )}
            </div>
          </div>
        </AnimatedCard>
      </div>

      {/* Harita */}
      <div className="w-full h-64 bg-gray-100 border border-gray-200 rounded-sm overflow-hidden relative">
        <iframe
          src="https://www.google.com/maps?q=36.9626163,30.7724901&hl=tr&z=17&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
          title="Tezel Mühendislik Konumu - Atatürk Mah. 22052 Sk. No:19, Aksu/Antalya"
        />
        <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 text-xs text-gray-500 rounded-sm shadow-sm">
          <a
            href="https://www.google.com/maps/@36.9626163,30.7724901,3a,75y,326.31h,88.15t/data=!3m7!1e1!3m5!1sdkNwie-gbefmUocRyCGNaw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D1.8488952480739727%26panoid%3DdkNwie-gbefmUocRyCGNaw%26yaw%3D326.3069814429421!7i16384!8i8192!18m1!1e1?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Google Maps'te Aç
          </a>
        </div>
      </div>
    </div>
  );
}
