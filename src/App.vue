<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import AOS from "aos";
import NavBar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ExpertiseSection from "./components/ExpertiseSection.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
import BarberAppSection from "./components/BarberAppSection.vue";
import BarberResultsSection from "./components/BarberResultsSection.vue";
import DailyReportSection from "./components/DailyReportSection.vue";
import VirtualClinicSection from "./components/VirtualClinicSection.vue";
import WhyUsSection from "./components/WhyUsSection.vue";
import ProcessSection from "./components/ProcessSection.vue";
import ContactSection from "./components/ContactSection.vue";

const showNav = ref(false);
const activeSection = ref("home");

const navSections = [
  "home",
  "about",
  "expertise",
  "portfolio",
  "process",
  "why-us",
  "contact",
];

const handleScroll = () => {
  showNav.value = window.scrollY > 80;

  // At bottom of page: always highlight contact
  const atBottom =
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 50;
  if (atBottom) {
    activeSection.value = "contact";
    return;
  }

  for (const id of [...navSections].reverse()) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= 120) {
      activeSection.value = id;
      break;
    }
  }
};

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });

  const initAOS = () => {
    const isMobile = window.innerWidth < 768;
    AOS.init({
      once: true,
      offset: isMobile ? 20 : 120,
      duration: 650,
      easing: "ease-out-cubic",
      delay: 0,
    });
  };

  initAOS();

  // Refresh after Vue layout + a frame so mobile gets correct positions
  requestAnimationFrame(() => {
    setTimeout(() => AOS.refresh(), 100);
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="bg-cream font-sans overflow-x-hidden min-w-0">
    <NavBar
      :show="showNav"
      :active="activeSection"
      @navigate="scrollToSection"
    />

    <HeroSection />
    <AboutSection />
    <ExpertiseSection />
    <PortfolioSection />
    <BarberAppSection />
    <BarberResultsSection />
    <VirtualClinicSection />
    <DailyReportSection />
    <ProcessSection />
    <WhyUsSection />
    <ContactSection />
  </div>
</template>
