const translations = {
  id: {
    navServices:"Layanan",navHow:"Cara Kerja",navAbout:"Tentang",login:"Masuk",getStarted:"Mulai Sekarang",
    eyebrow:"PARTNER PROMOSI DIGITALMU",heroTitle:'Make your brand<br><span>impossible to ignore.</span>',
    heroDesc:"Satu tempat untuk merencanakan promosi digital, terhubung dengan kreator, dan memantau performa kampanye.",
    exploreServices:"Jelajahi Layanan",seeHow:"Lihat Cara Kerja",trustText:"Dibuat untuk kreator dan bisnis yang ingin tumbuh secara autentik.",
    builtFor:"DIBUAT UNTUK GENERASI BARU",servicesTitle:"Semua yang dibutuhkan<br>untuk mengembangkan brand.",servicesDesc:"Pilih dukungan promosi digital sesuai kebutuhan. Fokus pada strategi, kreativitas, dan audiens yang nyata.",
    service1:"Strategi Kampanye",service1d:"Rencanakan tujuan, audiens, kanal, dan langkah kampanye dengan lebih terarah.",
    service2:"Kolaborasi Kreator",service2d:"Temukan peluang kolaborasi dengan kreator yang relevan dengan brand.",
    service3:"Produksi Konten",service3d:"Dukungan ide, desain, video, dan materi kreatif untuk kampanye.",
    service4:"Iklan & Analitik",service4d:"Kelola iklan resmi dan pahami hasil kampanye melalui laporan performa.",
    howTitle:"Dari ide menjadi dampak<br>dalam tiga langkah.",howDesc:"Alur yang jelas membantu kamu tetap fokus pada tujuan kampanye.",
    step1:"Ceritakan tujuanmu",step1d:"Ceritakan brand, target audiens, dan hasil yang ingin dicapai.",
    step2:"Bangun kampanyemu",step2d:"Pilih dukungan yang sesuai dan susun rencana bersama tim.",
    step3:"Pantau progres nyata",step3d:"Pantau pekerjaan dan evaluasi performa kampanye dengan transparan.",
    workspaceTitle:'Pantau semua hal<br><span>yang sedang berjalan.</span>',workspaceDesc:"Dashboard BuzzHub dirancang agar kamu bisa melihat kampanye, aktivitas, dan pembaruan dalam satu tempat.",workspaceCta:"Dapatkan akses awal",
    ctaTitle:"Siap membuat brand-mu<br>jadi perbincangan?",ctaDesc:"Ceritakan kebutuhan promosi digitalmu. Tim BuzzHub akan membantu menentukan langkah berikutnya.",contactUs:"Hubungi BuzzHub"
  },
  en: {
    navServices:"Services",navHow:"How It Works",navAbout:"About",login:"Log in",getStarted:"Get Started",
    eyebrow:"YOUR DIGITAL PROMOTION PARTNER",heroTitle:'Make your brand<br><span>impossible to ignore.</span>',
    heroDesc:"One place to plan digital promotion, connect with creators, and track campaign performance.",
    exploreServices:"Explore Services",seeHow:"See How It Works",trustText:"Built for creators and businesses who want to grow authentically.",
    builtFor:"BUILT FOR THE NEXT GENERATION OF",servicesTitle:"Everything to move<br>your brand forward.",servicesDesc:"Choose digital promotion support that fits your goals. Focus on strategy, creativity, and real audiences.",
    service1:"Campaign Strategy",service1d:"Plan your goals, audience, channels, and campaign direction with clarity.",
    service2:"Creator Collaboration",service2d:"Find collaboration opportunities with creators relevant to your brand.",
    service3:"Content Production",service3d:"Get creative support for ideas, design, video, and campaign assets.",
    service4:"Ads & Analytics",service4d:"Manage official advertising and understand results through performance reports.",
    howTitle:"From idea to impact<br>in three steps.",howDesc:"A clear process helps you stay focused on your campaign goals.",
    step1:"Tell us your goal",step1d:"Share your brand, target audience, and the outcome you want to achieve.",
    step2:"Build your campaign",step2d:"Choose the right support and shape a plan with the team.",
    step3:"Track real progress",step3d:"Monitor the work and evaluate campaign performance transparently.",
    workspaceTitle:'A clearer view of<br><span>everything in motion.</span>',workspaceDesc:"The BuzzHub dashboard helps you see campaigns, activity, and updates in one place.",workspaceCta:"Get early access",
    ctaTitle:"Ready to make your<br>brand buzz?",ctaDesc:"Tell us what your digital promotion needs look like. The BuzzHub team can help plan your next step.",contactUs:"Contact BuzzHub"
  }
};
let language = "id";
const toggle = document.getElementById("languageToggle");
toggle.addEventListener("click", () => {
  language = language === "id" ? "en" : "id";
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[language][key]) el.innerHTML = translations[language][key];
  });
});
document.getElementById("mobileMenu").addEventListener("click", () => {
  const nav = document.querySelector(".desktop-nav");
  const visible = nav.style.display === "flex";
  nav.style.display = visible ? "none" : "flex";
  if (!visible) {
    Object.assign(nav.style, {position:"absolute",top:"65px",left:"0",right:"0",padding:"18px",background:"#141827",border:"1px solid #30364a",borderRadius:"12px",flexDirection:"column",gap:"18px"});
  }
});
