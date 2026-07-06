<script setup lang="ts">
import { computed } from "vue";
import { getQueryParam, KEY_QUERY_PARAM } from "../forms/helpers";

import RSVPFormComponent from "../forms/RSVPFormComponent.vue";

const weddingKey = computed(() => {
  const key = getQueryParam(KEY_QUERY_PARAM);
  return key ?? null;
});
</script>

<template>
  <!-- BEGIN RSVP FORM SECTION -->
  <section id="rsvp" class="section-bg-color overflow-content-over">
    <div class="side-flowers"></div>

    <div class="container">
      <div class="row gx-6">
        <div class="col-xl-6 col-lg-5 overflow-image-wrapper center">
          <i
            class="icon-diamond-ring icon_large"
            data-animation-direction="from-top"
            data-animation-delay="250"
          ></i>
          <div data-animation-direction="from-top" data-animation-delay="250">
            <h2 class="title">Ils vont se marier !</h2>
            <p>
              Ils se sont dit oui! Mélaine et Michel se marient les DD et DD MM
              YYYY et vous invitent à partager ce merveilleux moment à leurs
              côtés.
            </p>
            <p>
              La cérémonie de mariage se déroulera sur plusieurs jours. Vous
              trouverez le carton d'invitation à remplir. N'hésitez pas à nous
              contacter si vous avez la moindre question ou autre.
            </p>

            <a :href="'/?key=' + weddingKey" class="btn btn-primary">
              Découvrir notre histoire
            </a>

            <blockquote class="neela-quote small extra-margin">
              Merci de confirmer votre présence<br />avant le DD MM YYYY
            </blockquote>

            <strong>
              Voici une petite vidéo explicative pour vous aider à confirmer
              votre présence à notre Mariage:
              <br />

              <a href="#">
                <i class="fa-brands fa-youtube fa-2x"></i>
              </a>
            </strong>

            <br />
            <br />

            <strong>
              <i class="fa-sharp fa-solid fa-circle-info me-1"></i>
              Si vous avez la moindre question ou problème dans le remplissage
              du Faire part de Mariage. N'hésitez pas à nous contacter afin que
              nous puissions vous aider à le remplir.
            </strong>

            <br />
            <br />

            <ul class="contact-info">
              <li>
                <span>E-mail:</span>
                <a href="mailto:mariage.mm@loremipsum.com">
                  mariage.mm@loremipsum.com
                </a>
              </li>
            </ul>

            <ul class="sn-icons">
              <li>
                <a href="#"><i class="fab fa-instagram-square"></i></a>
              </li>
            </ul>
          </div>
        </div>

        <!-- BEGIN RSVP FORM -->
        <RSVPFormComponent />
        <!-- END RSVP FORM -->
      </div>
    </div>
  </section>
  <!-- END RSVP FORM SECTION -->
</template>

<style scoped></style>
