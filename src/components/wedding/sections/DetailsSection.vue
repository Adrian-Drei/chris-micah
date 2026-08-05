<script setup lang="ts">
const dressColors = [
  "#F7D2BA",
  "#DEC2AE",
  "#B99B7B",
  "#F4A8AA",
  "#F6C8CD",
  "#AFC8F2",
];
</script>

<template>
  <section id="wedding-details" class="pattern">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2 text-center">
          <span class="script-title"> The Details </span>

          <p class="section-intro">
            A few thoughtful reminders to help you prepare for our special day.
          </p>
        </div>
      </div>

      <!-- Attire -->
      <div class="detail-card">
        <h3 class="detail-title">Attire Guide</h3>

        <p class="detail-text">
          We would love to celebrate with you in elegant semi-formal attire.
          Kindly avoid t-shirts, sleeveless shirts, shorts, slippers, and please
          refrain from wearing white, as it is reserved for the bride.
        </p>

        <div class="color-palette">
          <span
            v-for="(color, index) in dressColors"
            :key="index"
            class="color-circle"
            :style="{ background: color }"
          />
        </div>
      </div>

      <div class="divider-floral">
        <span>❦</span>
      </div>

      <!-- Gifts -->
      <div class="detail-card">
        <h3 class="detail-title">Gift Guide</h3>

        <p class="detail-text">
          Your love, prayers, and presence are the greatest gifts we could ask
          for. Should you wish to bless us further, a monetary gift towards our
          future together would be sincerely appreciated.
        </p>
      </div>

      <div class="divider-floral">
        <span>❦</span>
      </div>

      <!-- Privacy -->
      <div class="detail-card">
        <h3 class="detail-title">Privacy Note</h3>

        <p class="detail-text">
          We are celebrating our wedding in an intimate gathering with our
          closest family and friends. We kindly ask that this invitation remain
          personal and not be shared with others.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.script-title {
  display: block;
  font-family: "Playfair Display", serif;
  font-size: 4rem;
  color: #444444;
  margin-bottom: 10px;
}

.section-intro {
  max-width: 650px;
  margin: 20px auto 0;
  font-style: italic;
  opacity: 0.8;
}

.detail-card {
  max-width: 760px;
  margin: 40px auto;
  text-align: center;
}

.detail-title {
  text-transform: uppercase;
  letter-spacing: 6px;
  font-size: 1rem;
  margin-bottom: 25px;
}

.detail-text {
  font-size: 1.08rem;
  line-height: 2;
  color: #444444;
}

.color-palette {
  display: flex;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
  margin-top: 35px;
}

.color-circle {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.quote-card {
  max-width: 820px;
  margin: 100px auto 0;
  text-align: center;
}

.quote-card blockquote {
  font-family: "Cormorant Garamond", serif;
  font-size: 2rem;
  line-height: 1.7;
  font-style: italic;
  border: none;
  margin: 0;
  color: #444444;
}

.quote-card span {
  display: block;
  margin-top: 25px;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 0.9rem;
  opacity: 0.75;
}

.divider-floral {
  position: relative;
  width: 220px;
  margin: 20px auto;
  text-align: center;
}

.divider-floral::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
}

.divider-floral span {
  position: relative;
  padding: 0 24px;
  color: rgba(31, 31, 31, 0.55);
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .script-title {
    font-size: 3rem;
  }

  .detail-card {
    margin: 70px auto;
  }

  .quote-card blockquote {
    font-size: 1.45rem;
  }

  .color-circle {
    width: 48px;
    height: 48px;
  }
}
</style>
