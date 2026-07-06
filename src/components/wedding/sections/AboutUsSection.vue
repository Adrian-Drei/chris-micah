<script setup lang="ts">
import { getImageFormat } from "@/utils/helpers";
</script>

<template>
  <!-- BEGIN ABOUT US SECTION -->
  <section id="about-us">
    <div class="container">
      <div class="row about-elems-wrapper">
        <div
          class="element col-md-6 col-xl-4 offset-xl-2"
          data-animation-direction="from-left"
          data-animation-delay="300"
        >
          <div class="image">
            <img
              src="https://placehold.co/600x600?text=Placeholder"
              alt="Michel"
            />
            <div class="hover-info neela-style">
              <div class="content">
                <h3>Micah<small>The Bride</small></h3>
                <p>
                  I feel incredibly blessed and excited to spend every day for
                  the rest of my life with him!
                </p>
                <ul class="sn-icons">
                  <li>
                    <a href="#"><i class="fab fa-instagram-square"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          class="divider-about-us"
          data-animation-direction="fade"
          data-animation-delay="500"
        >
          <i class="icon-two-hearts"></i>
        </div>

        <div
          class="element col-md-6 col-xl-4"
          data-animation-direction="from-right"
          data-animation-delay="400"
        >
          <div class="image">
            <img
              src="https://placehold.co/600x600?text=Placeholder"
              alt="Michel"
            />
            <div class="hover-info neela-style">
              <div class="content">
                <h3>Chris<small>The Groom</small></h3>
                <p>
                  She is everything I've ever dreamed of, and I can't wait to
                  spend the rest of my life with her!
                </p>
                <ul class="sn-icons">
                  <li>
                    <a href="#"><i class="fab fa-instagram-square"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div
          class="about-us-desc col-lg-8 offset-lg-2"
          data-animation-direction="from-bottom"
          data-animation-delay="300"
        >
          <h3>We're Getting Married for Life!</h3>
          <p>
            "Family isn't just about blood... Home is wherever you are... I
            can't wait to continue spending every single day by your side." –
            Micah
          </p>
          <p>
            "Today and always, beyond tomorrow, I need you by my side forever,
            as my best friend, my lover, and my soulmate." – Chris
          </p>
          <img
            src="/src/assets/images/wedding_mm/signature.png"
            alt="Signature"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- END ABOUT US SECTION -->
</template>

<style scoped></style>
