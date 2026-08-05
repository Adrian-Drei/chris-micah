<script setup lang="ts">
import { getImageFormat } from "@/utils/helpers";

enum Type {
  BRIDESMAID = "Bridesmaid",
  GROOMSMAN = "Groomsman",
}

const PLACEHOLDER = "https://placehold.co/600x600?text=Photo+Coming+Soon";

const GROOMSMEN = [
  {
    name: "Fernando Badua III",
    image: "",
    type: Type.GROOMSMAN,
  },
  {
    name: "Francis Joco Tolentino",
    image: "",
    type: Type.GROOMSMAN,
  },
  {
    name: "Laurence Ferrer",
    image: "",
    type: Type.GROOMSMAN,
  },
  {
    name: "John Victor Rodriguez",
    image: "",
    type: Type.GROOMSMAN,
  },
  {
    name: "Gerald Jusi",
    image: "",
    type: Type.GROOMSMAN,
  },
  {
    name: "Hamlet Badua",
    image: "",
    type: Type.GROOMSMAN,
  },
  {
    name: "Aaron Justin Pineda",
    image: "",
    type: Type.GROOMSMAN,
  },
];

const BRIDESMAIDS = [
  {
    name: "Nicole Madriaga",
    image: "",
    type: Type.BRIDESMAID,
  },
  {
    name: "Bea Cabudol",
    image: "",
    type: Type.BRIDESMAID,
  },
  {
    name: "Malyn Timbol",
    image: "",
    type: Type.BRIDESMAID,
  },
  {
    name: "Samantha Garrovillo",
    image: "",
    type: Type.BRIDESMAID,
  },
  {
    name: "Edylin Capoquian",
    image: "",
    type: Type.BRIDESMAID,
  },
  {
    name: "Apple Esguerra",
    image: "",
    type: Type.BRIDESMAID,
  },
  {
    name: "Nichole Aquino",
    image: "",
    type: Type.BRIDESMAID,
  },
];
</script>

<template>
  <!-- BEGIN BRIDESMAIDS & GROOMSMEN SECTION -->
  <section id="bmiadsgmen" class="parallax-background bg-color-overlay">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h2 class="section-title">Bridesmaids & Groomsmen</h2>
        </div>
      </div>

      <!-- BRIDESMAIDS -->
      <div class="row center">
        <div
          v-for="(value, index) in BRIDESMAIDS"
          :key="index"
          class="element bmaid-gmen col-sm-6 col-md-3 col-lg-3"
          data-animation-direction="from-bottom"
          data-animation-delay="300"
        >
          <div class="image">
            <img
              :src="value.image ? getImageFormat(value.image) : PLACEHOLDER"
              :alt="value.name"
            />
            <div class="hover-info neela-style">
              <div class="content center">
                <h5>
                  {{ value.name }}
                  <small>{{ value.type }}</small>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- GROOMSMEN -->
      <div class="row center">
        <div
          v-for="(value, index) in GROOMSMEN"
          :key="index"
          class="element bmaid-gmen col-sm-6 col-md-3 col-lg-3"
          data-animation-direction="from-bottom"
          data-animation-delay="300"
        >
          <div class="image">
            <img
              :src="value.image ? getImageFormat(value.image) : PLACEHOLDER"
              :alt="value.name"
            />
            <div class="hover-info neela-style">
              <div class="content center">
                <h5>
                  {{ value.name }}
                  <small>{{ value.type }}</small>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- LIST VERSION -->
    <div class="row mt-5 justify-content-center">
      <div class="col-lg-5 col-md-6 mb-5">
        <div class="party-card">
          <h3 class="party-title">Groomsmen</h3>
          <div class="divider"></div>

          <ul class="party-list">
            <li v-for="(value, index) in GROOMSMEN" :key="index">
              {{ value.name }}
            </li>
          </ul>
        </div>
      </div>

      <div class="col-lg-5 col-md-6 mb-5">
        <div class="party-card">
          <h3 class="party-title">Bridesmaids</h3>
          <div class="divider"></div>

          <ul class="party-list">
            <li v-for="(value, index) in BRIDESMAIDS" :key="index">
              {{ value.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- END BRIDESMAIDS & GROOMSMEN SECTION -->
</template>

<style scoped>
.party-card {
  text-align: center;
  padding: 40px 30px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.party-title {
  font-family: "Cormorant Garamond", serif;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-bottom: 12px;
  color: #756a4b;
}

.divider {
  width: 70px;
  height: 2px;
  background: #ede8d0;
  margin: 0 auto 30px;
}

.party-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.party-list li {
  font-size: 1.1rem;
  letter-spacing: 1px;
  padding: 10px 0;
  position: relative;
}

.party-list li:not(:last-child)::after {
  content: "";
  display: block;
  width: 35px;
  height: 1px;
  background: rgba(255, 255, 255, 0.15);
  margin: 10px auto 0;
}
</style>
