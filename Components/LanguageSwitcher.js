"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import Image from "next/image";

const languages = [
  { code: "en", label: "English", icon: "/icons/flag.svg" },
  { code: "ar", label: "العربية", icon: "/icons/arflag.svg" },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const selectedLang = languages.find((lang) => lang.code === language);

  return (
    <div className="flex items-center gap-2 border border-[#B7B7B7]  rounded-lg px-3 py-2 bg-white">
      <div className="relative w-5 h-5">
        <Image
          src={selectedLang?.icon || "/icons/flag.svg"}
          alt={`${selectedLang?.label} flag`}
          fill
          className="object-contain"
        />
      </div>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="text-sm text-[#429AFF] font-medium bg-white focus:outline-none"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
