<script setup lang="ts">
import RSVPFormComponent from "../forms/RSVPFormComponent.vue";
</script>

<template>
  <!-- BEGIN RSVP FORM SECTION -->
  <section id="rsvp" class="section-bg-color overflow-content-over">
    <div class="side-flowers"></div>

    <div class="container max-lg:pb-20">
      <div class="row gx-6">
        <div class="col-xl-6 col-lg-5 overflow-image-wrapper center">
          <img
            src="../../../assets/images/logo.png"
            alt="logo"
            class="size-20"
          />

          <div data-animation-direction="from-top" data-animation-delay="250">
            <h2 class="title">They're getting married!</h2>
            <p>
              They said yes! Chris and Micah are getting married on October 13,
              2026, and invite you to share this wonderful moment with them.
            </p>
            <p>
              The wedding celebrations will take place over several days. Please
              complete the invitation form. Feel free to contact us if you have
              any questions.
            </p>
            <p class="font-bold uppercase">Adults-only celebration</p>
            <p>
              While we love your little ones, our ceremony and reception will be
              adults-only, except for children in the wedding entourage. Thank
              you for understanding.
            </p>

            <blockquote class="neela-quote small extra-margin">
              Please RSVP<br />by August 31, 2026
            </blockquote>

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
                <span class="normal-case">Number:</span>
                <a href="sms:+639636325881">09636325881</a>
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
