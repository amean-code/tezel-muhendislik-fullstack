import { contactInfo } from "@/data/contact";

/**
 * EmergencySection komponenti - Acil durum hattı bölümü
 */
export default function EmergencySection() {
  return (
    <section className="bg-[#F8F9FA] border-t border-gray-200 py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Acil Durum Kartı */}
          <div className="bg-white p-8 border border-gray-200 rounded-sm shadow-sm flex flex-col sm:flex-row items-center gap-6">
            <div className="size-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
              <span className="material-symbols-outlined text-4xl">emergency_home</span>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-bold text-primary mb-1">{contactInfo.emergency.title}</h4>
              <p className="text-gray-500 text-sm mb-3">{contactInfo.emergency.description}</p>
              <a
                className="inline-flex items-center gap-2 text-red-600 font-black text-xl hover:text-red-700 transition-colors"
                href={`tel:${contactInfo.emergency.phone.replace(/\s/g, "")}`}
              >
                <span className="material-symbols-outlined">call</span>
                {contactInfo.emergency.phone}
              </a>
            </div>
          </div>

          {/* Mühendislik Garantisi */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-bold text-lg">
              <span className="material-symbols-outlined text-accent">verified_user</span>
              <span>Mühendislik Garantisi</span>
            </div>
            <p className="text-gray-600">
              Tezel Mühendislik olarak taleplerinize en geç 24 saat içerisinde teknik ekibimiz
              tarafından detaylı bir inceleme ile dönüş yapılmaktadır.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-6 mt-2">
              <div className="flex -space-x-3">
                <div className="size-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                  <img
                    alt="Engineer"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTIiox2f59ZAfaPdZ99H3Pf4QnqYTLRSGA_CmgNbLWevajFPMpCCiM4muOEDvgCgD6fBC2O-ODi2nm-oGThXgIBlG1e7wF2xX7cijkaZwg68UL__Ky20I5uRY-Jhcqm-78fgqaS0HFgGRf6PWUBFHi70IpipE5nxOd7sUXyXr-y-A42jObiCgYFe99pekljG3a9vCUzSgIpZYMz0-a5E7gSQNF7y5SWAMGnCAfB8Jn9duTaIqy778BIJrD96oyWgL4PMPfO4kXTwY"
                  />
                </div>
                <div className="size-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                  <img
                    alt="Engineer"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK6cYm22GbwrW1oDCWpPionnMrGxssSRWElNOv1dhxwtQC0oBFdKKyXkd2gfRby5lWtJsZQxLEnXhQoR4EeCIMcaNr64f65gA7Q5L1IgOJEja-pHHwGnFY3u_Qp05FJuic22U8DVAgXwR_Ye5S5yuQ8kJHOuJINXGIWbk1NbAQTvogWAydL09nUXdEONtwsE3Tbwr_tsq7874Gkh6GgyDtM1xUmeKiqBqfH9zQS8GO0xnyj21OASbTcJKf9HRO1LmESny2tfjQUik"
                  />
                </div>
                <div className="size-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                  <img
                    alt="Engineer"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyHL9PSQkkC4VlzZkV4t5Zen9rQ3rFaoqq6gB4VJ9KLCbjJ_lw-UH9G-cbgg6UJTvN49XjfZXhE9y2Qbsdgo42KzzshDfLE4okr3boEc5RRppDH5OeRYbViGBri_py-a7KecNQTGE5gSXmzjAZdFwVsy9HKiqT7WtW_3ilN4k-vEd7SHhpwbIV48S0miS-ZlmX6h3S0vgwLxxAJjpHX_Lf_Nn-5RIbe6YaEX_BvRmFyNet1t9BgIaNebrc5mRFDOpDp6Kpz5Lk8d4"
                  />
                </div>
                <div className="size-10 rounded-full border-2 border-white bg-accent text-white flex items-center justify-center text-xs font-bold">
                  +50
                </div>
              </div>
              <span className="text-sm font-semibold text-gray-500">Uzman Mühendis Kadrosu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
