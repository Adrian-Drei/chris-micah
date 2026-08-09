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

        <div class="attire-palette" aria-labelledby="attire-palette-title">
          <p id="attire-palette-title" class="attire-palette__label">
            Celebration Palette
          </p>
          <div class="attire-palette__swatches">
            <span style="--swatch: #ffceb5" aria-label="Peach"></span>
            <span style="--swatch: #dfc2b0" aria-label="Warm beige"></span>
            <span style="--swatch: #b89675" aria-label="Taupe"></span>
            <span style="--swatch: #f5a8b0" aria-label="Blush pink"></span>
            <span style="--swatch: #f8c7ca" aria-label="Soft pink"></span>
            <span style="--swatch: #b8d5f6" aria-label="Powder blue"></span>
          </div>
          <p class="attire-palette__note">
            Pastel shades inspired by our wedding colors
          </p>
        </div>

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

.attire-palette {
  width: fit-content;
  margin: 2.2rem auto 0;
  padding: 1.35rem 2.2rem 1.15rem;
  border-top: 1px solid rgba(79, 73, 59, 0.2);
  border-bottom: 1px solid rgba(79, 73, 59, 0.2);
}

.attire-palette__label {
  margin: 0 0 1rem;
  color: #4f493b;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
}

.attire-palette__swatches {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(0.55rem, 1.4vw, 0.95rem);
}

.attire-palette__swatches span {
  display: block;
  width: clamp(2.6rem, 5vw, 3.65rem);
  aspect-ratio: 1;
  border: 1px solid rgba(79, 73, 59, 0.08);
  border-radius: 50%;
  background: var(--swatch);
  box-shadow: inset 0 0 0 4px rgba(255, 255, 255, 0.16),
    0 7px 16px rgba(79, 73, 59, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.attire-palette__swatches span:hover {
  box-shadow: inset 0 0 0 4px rgba(255, 255, 255, 0.2),
    0 10px 20px rgba(79, 73, 59, 0.16);
  transform: translateY(-3px);
}

.attire-palette__note {
  margin: 0.9rem 0 0;
  color: #68604f;
  font-family: "Playfair Display", serif;
  font-size: 0.8rem;
  font-style: italic;
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

  .attire-palette {
    width: min(100%, 410px);
    padding-right: 0.75rem;
    padding-left: 0.75rem;
  }

  .attire-palette__swatches {
    gap: 0.45rem;
  }

  .attire-palette__swatches span {
    width: clamp(2.35rem, 11vw, 3rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .attire-palette__swatches span {
    transition: none;
  }
}
</style>
