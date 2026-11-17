<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import CharacterGallery from './components/CharacterGallery.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <AboutSection />
    <CharacterGallery />
    <ProjectsSection />
  </main>
  <SiteFooter />
</template>
