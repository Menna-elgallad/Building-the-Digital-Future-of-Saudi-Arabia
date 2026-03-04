<script setup>
import { ref } from "vue";

const props = defineProps({
  show: Boolean,
  active: String,
});

const emit = defineEmits(["navigate"]);

const mobileOpen = ref(false);

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "portfolio", label: "Portfolio" },
  { id: "process", label: "Process" },
  { id: "why-us", label: "Why Us" },
  { id: "contact", label: "Contact" },
];

const navigate = (id) => {
  emit("navigate", id);
  mobileOpen.value = false;
};
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-in-out translate-y-0 opacity-100 md:translate-y-0 md:opacity-100"
    :class="
      show
        ? 'md:translate-y-0 md:opacity-100'
        : 'md:-translate-y-full md:opacity-0'
    "
  >
    <div
      class="bg-cream/95 backdrop-blur-sm border-b border-cream-border shadow-sm"
    >
      <div
        class="flex h-14 md:h-16 px-4 sm:px-6 lg:px-10 items-center justify-end md:justify-center w-full max-w-full"
      >
        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-1 flex-wrap justify-center">
          <button
            v-for="link in links"
            :key="link.id"
            @click="navigate(link.id)"
            class="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
            :class="
              active === link.id
                ? 'text-ink bg-cream-dark'
                : 'text-gray-500 hover:text-ink hover:bg-cream-dark'
            "
          >
            {{ link.label }}
          </button>
        </nav>

        <!-- Mobile menu button -->
        <button
          class="md:hidden p-2.5 -mr-2 rounded-lg text-ink hover:bg-cream-dark transition-colors flex-shrink-0"
          @click="mobileOpen = !mobileOpen"
          aria-label="Toggle menu"
          :aria-expanded="mobileOpen"
        >
          <svg
            v-if="!mobileOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile menu dropdown -->
      <div
        class="md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-cream-border"
        :class="mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'"
      >
        <nav
          class="px-4 py-3 flex flex-col gap-0.5 max-h-[70vh] overflow-y-auto"
        >
          <button
            v-for="link in links"
            :key="link.id"
            @click="navigate(link.id)"
            class="px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors w-full"
            :class="
              active === link.id
                ? 'text-ink bg-cream-dark'
                : 'text-gray-600 hover:text-ink hover:bg-cream-dark'
            "
          >
            {{ link.label }}
          </button>
        </nav>
      </div>
    </div>
  </header>
</template>
