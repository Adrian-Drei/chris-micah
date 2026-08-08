<script setup lang="ts">
import guestAttireGuide from "@/assets/images/wedding_mm/guest-attire-guide.png";
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
      <div class="detail-card attire-card">
        <h3 class="detail-title">Attire Guide</h3>

        <p class="detail-text">
          We would love to celebrate with you in elegant semi-formal attire.
          Kindly avoid t-shirts, sleeveless shirts, shorts, slippers, and please
          refrain from wearing white, as it is reserved for the bride.
        </p>

        <figure class="attire-guide">
          <div class="attire-guide__frame">
            <img
              :src="guestAttireGuide"
              alt="Semi-formal wedding guest attire and color guide for female and male guests"
              loading="lazy"
            />
          </div>
          <figcaption>
            Suggested styles and colors for our wedding guests
          </figcaption>
        </figure>
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

.attire-card {
  max-width: 1040px;
}

.attire-card .detail-text {
  max-width: 760px;
  margin-inline: auto;
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

.attire-guide {
  width: min(100%, 980px);
  margin: 38px auto 0;
}

.attire-guide__frame {
  position: relative;
  padding: 10px;
  border: 1px solid rgba(79, 73, 59, 0.55);
  background: rgba(255, 255, 255, 0.62);
  box-shadow: 0 22px 60px rgba(79, 73, 59, 0.14);
}

.attire-guide__frame::after {
  position: absolute;
  inset: 18px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  content: "";
  pointer-events: none;
}

.attire-guide img {
  display: block;
  width: 100%;
  height: auto;
}

.attire-guide figcaption {
  margin-top: 16px;
  color: #4f493b;
  font-family: "Playfair Display", serif;
  font-size: 0.88rem;
  font-style: italic;
  letter-spacing: 0.04em;
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

  .attire-guide {
    margin-top: 28px;
  }

  .attire-guide__frame {
    padding: 5px;
  }

  .attire-guide__frame::after {
    inset: 10px;
  }
}
</style>
