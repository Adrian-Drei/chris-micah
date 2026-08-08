<script setup lang="ts">
import bdoQr from "../../../assets/images/wedding_mm/bdo-qr.png";
import gcashQr from "../../../assets/images/wedding_mm/gcash-qr.png";

const paymentOptions = [
  {
    name: "GCash",
    eyebrow: "Mobile wallet",
    qr: gcashQr,
  },
  {
    name: "BDO",
    eyebrow: "Bank transfer",
    qr: bdoQr,
  },
];
</script>

<template>
  <section id="giftregistry" class="future-section">
    <div class="future-section__ornament future-section__ornament--left"></div>
    <div class="future-section__ornament future-section__ornament--right"></div>

    <div class="future-section__inner">
      <header class="future-section__heading">
        <span class="future-section__eyebrow">A note from us</span>
        <h2>Our Future Together</h2>
        <div class="future-section__divider" aria-hidden="true">
          <span></span><i>◇</i><span></span>
        </div>
        <p>
          Your love, prayers, and presence are the greatest gifts we could ask
          for. If you wish to bless us further, a contribution toward the life
          we are building together would be deeply appreciated.
        </p>
      </header>

      <div class="payment-grid">
        <article
          v-for="(option, index) in paymentOptions"
          :key="option.name"
          class="payment-card"
        >
          <span class="payment-card__number" aria-hidden="true">
            {{ String(index + 1).padStart(2, "0") }}
          </span>
          <div class="payment-card__title">
            <span>{{ option.eyebrow }}</span>
            <h3>{{ option.name }}</h3>
          </div>

          <div class="payment-card__qr-wrap">
            <img
              :src="option.qr"
              :alt="`${option.name} payment QR code`"
              class="payment-card__qr"
              loading="lazy"
            />
          </div>
        </article>
      </div>

      <p class="future-section__closing">
        With grateful hearts, <span>Chris &amp; Micah</span>
      </p>
    </div>
  </section>
</template>

<style scoped>
.future-section {
  --future-ink: #4f493b;
  --future-paper: #f8f5e9;
  --future-accent: #ede8d0;
  position: relative;
  overflow: hidden;
  padding: clamp(5rem, 9vw, 8.5rem) 1.25rem;
  color: var(--future-ink);
  background: radial-gradient(
      circle at 50% 0%,
      rgb(255 255 255 / 72%),
      transparent 36rem
    ),
    var(--future-paper);
}

/* Override the legacy #giftregistry cloud artwork from the theme stylesheet. */
#giftregistry.future-section {
  background-color: #fbfaf3;
  background-image: url("/src/assets/images/neela-pattern.png");
  background-repeat: repeat;
  background-position: top left;
  background-size: auto;
}

.future-section__inner {
  position: relative;
  z-index: 1;
  width: min(100%, 980px);
  margin: 0 auto;
}

.future-section__heading {
  width: min(100%, 700px);
  margin: 0 auto clamp(2.5rem, 6vw, 4.5rem);
  text-align: center;
}

.future-section__eyebrow,
.payment-card__title span {
  display: block;
  margin-bottom: 0.65rem;
  font-family: var(--font-family-sans-serif, sans-serif);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.24em;
  line-height: 1.4;
  text-transform: uppercase;
}

.future-section h2 {
  margin: 0;
  color: var(--future-ink);
  font-size: clamp(2.35rem, 6vw, 4.25rem);
  font-weight: 400;
  line-height: 1.05;
}

.future-section__divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  margin: 1.4rem auto;
}

.future-section__divider span {
  width: 3.2rem;
  height: 1px;
  background: var(--future-ink);
  opacity: 0.45;
}

.future-section__divider i {
  font-size: 1rem;
  font-style: normal;
}

.future-section__heading p {
  margin: 0;
  font-size: clamp(0.98rem, 1.5vw, 1.08rem);
  line-height: 1.85;
}

.payment-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1.25rem, 3vw, 2rem);
}

.payment-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(1.35rem, 4vw, 2.5rem);
  border: 1px solid rgb(79 73 59 / 45%);
  background: rgb(255 255 255 / 58%);
  text-align: center;
  box-shadow: 0 18px 55px rgb(79 73 59 / 8%);
}

.payment-card::before {
  position: absolute;
  inset: 0.5rem;
  border: 1px solid rgb(79 73 59 / 18%);
  content: "";
  pointer-events: none;
}

.payment-card__number {
  position: absolute;
  top: 1.25rem;
  right: 1.35rem;
  font-family: var(--font-family-sans-serif, sans-serif);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  opacity: 0.62;
}

.payment-card__title {
  position: relative;
  z-index: 1;
  margin-bottom: 1.45rem;
}

.payment-card__title h3 {
  margin: 0;
  color: var(--future-ink);
  font-size: clamp(1.8rem, 4vw, 2.45rem);
  font-weight: 400;
  line-height: 1;
}

.payment-card__qr-wrap {
  position: relative;
  z-index: 1;
  display: grid;
  width: min(100%, 290px);
  aspect-ratio: 1;
  place-items: center;
  padding: clamp(0.75rem, 2vw, 1.15rem);
  border: 1px solid rgb(79 73 59 / 24%);
  background: #fff;
}

.payment-card__qr {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.payment-card > p {
  position: relative;
  z-index: 1;
  margin: 1.25rem 0 0;
  font-size: 0.88rem;
  line-height: 1.55;
}

.future-section__closing {
  margin: clamp(2.25rem, 5vw, 3.5rem) 0 0;
  text-align: center;
  font-size: 0.95rem;
  font-style: italic;
}

.future-section__closing span {
  display: inline-block;
  margin-left: 0.25rem;
  font-family: var(--font-family-serif, serif);
  font-size: 1.35rem;
}

.future-section__ornament {
  display: none;
}

.future-section__ornament--left {
  bottom: -11rem;
  left: -8rem;
}

.future-section__ornament--right {
  top: -12rem;
  right: -9rem;
}

@media (max-width: 767px) {
  .future-section {
    padding: 4.5rem 1rem;
  }

  .payment-grid {
    grid-template-columns: 1fr;
  }

  .payment-card {
    width: min(100%, 400px);
    margin-inline: auto;
  }

  .payment-card__qr-wrap {
    width: min(100%, 260px);
  }
}

@media (max-width: 380px) {
  .future-section h2 {
    font-size: 2.15rem;
  }

  .payment-card {
    padding: 1.25rem;
  }
}
</style>
