<script setup lang="ts">
import { getImageFormat } from "@/utils/helpers";

const textDialog =
  "« Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. »";
</script>

<template>
  <!-- BEGIN TIMELINE SECTION -->
  <section id="loveline">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
          <div class="timeline">
            <!-- FIRST TEXTO -->
            <div
              class="year"
              data-animation-direction="from-top"
              data-animation-delay="250"
            >
              <span class="neela-style">YYYY</span>
            </div>

            <div class="gallery-container">
              <div
                class="timeline-gallery-wrapper"
                data-animation-direction="from-left"
                data-animation-delay="250"
              >
                <div class="timeline-gallery owl-carousel">
                  <div class="item">
                    <a
                      class="hover-img"
                      :href="getImageFormat('620x430')"
                      data-lightbox="gallery-timeline"
                      title="Nos premier textos"
                      ><span class="btn btn-light btn-sm">+</span></a
                    >
                    <img :src="getImageFormat('620x430')" alt="" />
                  </div>

                  <div class="item">
                    <a
                      class="hover-img"
                      :href="getImageFormat('620x430')"
                      data-lightbox="gallery-timeline"
                      title="Nos premier textos"
                      ><span class="btn btn-light btn-sm">+</span></a
                    >
                    <img :src="getImageFormat('620x430')" alt="" />
                  </div>

                  <div class="item">
                    <a
                      class="hover-img"
                      :href="getImageFormat('620x430')"
                      data-lightbox="gallery-timeline"
                      title="Nos premier textos"
                      ><span class="btn btn-light btn-sm">+</span></a
                    >
                    <img :src="getImageFormat('620x430')" alt="" />
                  </div>

                  <div class="item">
                    <a
                      class="hover-img"
                      :href="getImageFormat('620x430')"
                      data-lightbox="gallery-timeline"
                      title="Nos premier textos"
                      ><span class="btn btn-light btn-sm">+</span></a
                    >
                    <img :src="getImageFormat('620x430')" alt="" />
                  </div>
                </div>
              </div>

              <div
                class="description-wrapper"
                data-animation-direction="from-bottom"
                data-animation-delay="250"
              >
                <div class="description">
                  <div class="neela-style">
                    <h4>Nos premiers textos</h4>
                    <p>Tout a commencé avec un "Hi"...</p>
                    <br />
                    <p>{{ textDialog }} - Michel</p>
                    <br />
                    <p>{{ textDialog }} - Mélaine</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- FIRST MEET -->
            <div
              class="year"
              data-animation-direction="from-top"
              data-animation-delay="250"
            >
              <span class="neela-style">YYYY</span>
            </div>

            <div class="template-1">
              <div
                class="date"
                data-parallax="3"
                data-animation-direction="fade"
                data-animation-delay="350"
              >
                <span class="neela-style">DD MM</span>
              </div>

              <div
                class="image-1"
                data-parallax="-4"
                data-animation-direction="from-left"
                data-animation-delay="250"
              >
                <img :src="getImageFormat('600x600')" alt="" />
              </div>

              <div
                class="image-2"
                data-parallax="6"
                data-animation-direction="from-right"
                data-animation-delay="250"
              >
                <img :src="getImageFormat('600x820')" alt="" />
              </div>

              <div
                class="description-wrapper"
                data-parallax="-6"
                data-animation-direction="from-bottom"
                data-animation-delay="250"
              >
                <div
                  class="description"
                  data-parallax="-6"
                  data-animation-direction="from-bottom"
                  data-animation-delay="250"
                >
                  <div class="neela-style">
                    <h4>Notre première rencontre</h4>
                    <p>{{ textDialog }} - Michel</p>
                    <br />
                    <p>{{ textDialog }} - Mélaine</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- FIRST YEARS -->
            <div
              class="year"
              data-animation-direction="from-top"
              data-animation-delay="250"
            >
              <span class="neela-style">YYYY-YYYY</span>
            </div>

            <div class="gallery-container">
              <div
                class="timeline-gallery-wrapper"
                data-animation-direction="from-left"
                data-animation-delay="250"
              >
                <div class="timeline-gallery owl-carousel">
                  <div class="item" v-for="index in 10" :key="index">
                    <a
                      class="hover-img"
                      :href="getImageFormat('620x430')"
                      data-lightbox="gallery-timeline"
                      title="Nos premières années"
                      ><span class="btn btn-light btn-sm">+</span></a
                    >
                    <img :src="getImageFormat('620x430')" alt="" />
                  </div>
                </div>
              </div>

              <div
                class="description-wrapper"
                data-animation-direction="from-bottom"
                data-animation-delay="250"
              >
                <div class="description">
                  <div class="neela-style">
                    <h4>Nos premières années</h4>
                    <p>
                      {{ textDialog }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- FIRST CONFINEMENT -->
            <div
              class="year"
              data-animation-direction="from-top"
              data-animation-delay="250"
            >
              <span class="neela-style">YYYY</span>
            </div>

            <div class="template-2">
              <div
                class="date"
                data-parallax="3"
                data-animation-direction="fade"
                data-animation-delay="250"
              >
                <span class="neela-style">MM</span>
              </div>

              <div
                class="videoEmbedSmall"
                data-parallax="6"
                data-animation-direction="from-top"
                data-animation-delay="250"
              >
                <iframe
                  src="https://player.vimeo.com/video/136240001"
                  width="590"
                  height="330"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

              <div
                class="image-1"
                data-parallax="-2"
                data-animation-direction="from-left"
                data-animation-delay="250"
              >
                <img :src="getImageFormat('600x800')" alt="" />
              </div>

              <div
                class="image-2"
                data-parallax="4"
                data-animation-direction="from-right"
                data-animation-delay="250"
              >
                <img :src="getImageFormat('600x800')" alt="" />
              </div>

              <div
                class="description-wrapper"
                data-parallax="-5"
                data-animation-direction="from-bottom"
                data-animation-delay="250"
              >
                <div
                  class="description"
                  data-parallax="-6"
                  data-animation-direction="from-bottom"
                  data-animation-delay="250"
                >
                  <div class="neela-style">
                    <h4>Notre premier confinement!</h4>
                    <p>{{ textDialog }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- ENGAGEMENT -->
            <div
              class="year"
              data-animation-direction="from-top"
              data-animation-delay="250"
            >
              <span class="neela-style">YYYY</span>
            </div>

            <div class="template-2">
              <div
                class="date"
                data-parallax="3"
                data-animation-direction="fade"
                data-animation-delay="250"
              >
                <span class="neela-style">MM</span>
              </div>

              <div
                class="videoEmbedSmall"
                data-parallax="6"
                data-animation-direction="from-top"
                data-animation-delay="250"
              >
                <iframe
                  src="https://player.vimeo.com/video/136240001"
                  width="590"
                  height="330"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

              <div
                class="image-1"
                data-parallax="-2"
                data-animation-direction="from-left"
                data-animation-delay="250"
              >
                <img :src="getImageFormat('600x800')" alt="" />
              </div>

              <div
                class="image-2"
                data-parallax="4"
                data-animation-direction="from-right"
                data-animation-delay="250"
              >
                <img :src="getImageFormat('600x800')" alt="" />
              </div>

              <div
                class="description-wrapper"
                data-parallax="-5"
                data-animation-direction="from-bottom"
                data-animation-delay="250"
              >
                <div
                  class="description"
                  data-parallax="-6"
                  data-animation-direction="from-bottom"
                  data-animation-delay="250"
                >
                  <div class="neela-style">
                    <h4>Nos fiançailles</h4>
                    <p>{{ textDialog }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- PROJECTS -->
            <div
              class="year"
              data-animation-direction="from-top"
              data-animation-delay="250"
            >
              <span class="neela-style">YYYY</span>
            </div>

            <div class="gallery-container">
              <div
                class="timeline-gallery-wrapper"
                data-animation-direction="from-left"
                data-animation-delay="250"
              >
                <div class="timeline-gallery owl-carousel">
                  <div class="item" v-for="index in 10" :key="index">
                    <a
                      class="hover-img"
                      :href="getImageFormat('620x430')"
                      data-lightbox="gallery-timeline"
                      title="Nos projets"
                      ><span class="btn btn-light btn-sm">+</span></a
                    >
                    <img :src="getImageFormat('620x430')" alt="" />
                  </div>
                </div>
              </div>

              <div
                class="description-wrapper"
                data-animation-direction="from-bottom"
                data-animation-delay="250"
              >
                <div class="description">
                  <div class="neela-style">
                    <h4>Nos projets</h4>
                    <p>{{ textDialog }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- WEDDING -->
            <div
              class="year"
              data-animation-direction="from-top"
              data-animation-delay="250"
            >
              <span class="neela-style">YYYY</span>
            </div>

            <div class="template-2">
              <div
                class="date"
                data-parallax="3"
                data-animation-direction="fade"
                data-animation-delay="250"
              >
                <span class="neela-style">MM</span>
              </div>

              <div
                class="videoEmbedSmall"
                data-parallax="6"
                data-animation-direction="from-top"
                data-animation-delay="250"
              >
                <iframe
                  src="https://player.vimeo.com/video/136240001"
                  width="590"
                  height="330"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

              <div
                class="image-1"
                data-parallax="-2"
                data-animation-direction="from-left"
                data-animation-delay="250"
              >
                <img :src="getImageFormat('600x800')" alt="" />
              </div>

              <div
                class="image-2"
                data-parallax="4"
                data-animation-direction="from-right"
                data-animation-delay="250"
              >
                <img :src="getImageFormat('600x800')" alt="" />
              </div>

              <div
                class="description-wrapper"
                data-parallax="-5"
                data-animation-direction="from-bottom"
                data-animation-delay="250"
              >
                <div
                  class="description"
                  data-parallax="-6"
                  data-animation-direction="from-bottom"
                  data-animation-delay="250"
                >
                  <div class="neela-style">
                    <h4>Notre union civile</h4>
                    <p>{{ textDialog }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="timeline_footer">
            <i
              class="icon-diamond-ring"
              data-animation-direction="from-top"
              data-animation-delay="250"
            ></i>
            <div
              class="punchline"
              data-animation-direction="from-bottom"
              data-animation-delay="250"
            >
              <small>Mais le meilleur reste</small>à venir...
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- END TIMELINE SECTION -->
</template>

<style scoped>
.wedding-video {
  background-color: black !important;
}
</style>
../../../utils/helpers