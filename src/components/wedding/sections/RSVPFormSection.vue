<script setup lang="ts">
import RSVPFormComponent from "../forms/RSVPFormComponent.vue";
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
            <h2 class="title">They're getting married!</h2>
            <p>
              They said yes! Chris and Micah are getting married on October 13,
              2026, and invite you to share this wonderful moment with them.
            </p>
            <p>
              The wedding celebrations will take place over several days.
              Please complete the invitation form. Feel free to contact us if
              you have any questions.
            </p>

            <a href="/" class="btn btn-primary">
              Discover our story
            </a>

            <blockquote class="neela-quote small extra-margin">
              Please RSVP<br />by September 13, 2026
            </blockquote>

            <strong>
              Here is a short video explaining how to RSVP to our wedding:
              <br />

              <a href="#">
                <i class="fa-brands fa-youtube fa-2x"></i>
              </a>
            </strong>

            <br />
            <br />

            <strong>
              <i class="fa-sharp fa-solid fa-circle-info me-1"></i>
              If you have any questions or trouble completing the wedding
              invitation, please contact us and we will be happy to help.
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
