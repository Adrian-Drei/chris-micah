<script setup lang="ts">
import { computed } from "vue";
import { getQueryParam, KEY_QUERY_PARAM } from "../forms/helpers";

const weddingKey = computed(() => {
  const key = getQueryParam(KEY_QUERY_PARAM);
  return key ?? null;
});
</script>

<template>
  <!-- BEGIN RSVP HEADER -->
  <header id="header">
    <div class="nav-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <a :href="'/?key=' + weddingKey" class="nav-logo">
              <img
                src="/src/assets/images/wedding_mm/logo_mm.png"
                alt="Neela"
              />
            </a>

            <!-- BEGIN RSVP MENU -->
            <nav class="navbar">
              <ul class="nav navbar-nav">
                <li>
                  <a :href="'/?key=' + weddingKey">Retour à l'accueil</a>
                </li>
              </ul>

              <button id="nav-mobile-btn">
                <i class="fas fa-bars"></i>
              </button>
              <!-- Mobile menu button -->
            </nav>
            <!-- END RSVP MENU -->
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- END RSVP HEADER -->
</template>

<style scoped></style>
