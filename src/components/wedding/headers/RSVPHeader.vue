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
                  <a :href="'/?key=' + weddingKey">Découvrir notre histoire</a>
                </li>

                <li><a href="#rsvp">Faire part de Mariage</a></li>

                <li class="dropdown">
                  <a
                    href="#the-wedding"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    >Le Mariage<b class="caret"></b
                  ></a>
                  <ul class="dropdown-menu">
                    <li><a href="#location">Localisation & déroulement</a></li>
                    <li>
                      <a href="#bmiadsgmen"
                        >Demoiselles d'honneur & garçons d'honneur</a
                      >
                    </li>
                    <li><a href="#giftregistry">Projet après Mariage</a></li>
                    <li><a href="#countdown">Décompte</a></li>
                    <li><a href="#testimonials">Citations</a></li>
                  </ul>
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
