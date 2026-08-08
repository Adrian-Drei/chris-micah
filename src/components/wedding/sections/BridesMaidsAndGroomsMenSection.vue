<script setup lang="ts">
const WEDDING_PARTY_PAIRS = [
  { groomsman: "Fernando Badua III", bridesmaid: "Nicole Madriaga" },
  { groomsman: "Francis Joco Tolentino", bridesmaid: "Bea Cabudol" },
  { groomsman: "Laurence Ferrer", bridesmaid: "Malyn Timbol" },
  { groomsman: "John Victor Rodriguez", bridesmaid: "Vanessa Rivera" },
  { groomsman: "Gerald Jusi", bridesmaid: "Edylin Capoquian" },
  { groomsman: "Hamlet Badua", bridesmaid: "Apple Esguerra" },
  { groomsman: "Aaron Justin Pineda", bridesmaid: "Nichole Aquino" },
  { groomsman: "Mark Joseph Matibag", bridesmaid: "Alexandra Abletes" },
  { groomsman: "John Rupert Severino", bridesmaid: "Samantha Garrovillo" },
];
</script>

<template>
  <section id="bmiadsgmen" class="parallax-background bg-color-overlay">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h2 class="section-title">Bridesmaids & Groomsmen</h2>
        </div>
      </div>

      <div
        class="party-pairings neela-style"
        data-animation-direction="from-bottom"
        data-animation-delay="300"
      >
        <div class="pairing-headings" aria-hidden="true">
          <span>Groomsmen</span>
          <i class="icon-two-hearts"></i>
          <span>Bridesmaids</span>
        </div>

        <div
          v-for="pair in WEDDING_PARTY_PAIRS"
          :key="pair.groomsman"
          class="party-pair"
        >
          <span class="party-name groomsman">{{ pair.groomsman }}</span>
          <span class="pair-ornament" aria-hidden="true">❦</span>
          <span class="party-name bridesmaid">{{ pair.bridesmaid }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.party-pairings {
  width: min(920px, 100%);
  margin: 40px auto 0;
  padding: 48px 64px;
  color: #4f493b;
  background: rgba(251, 250, 243, 0.88);
  border: 1px solid rgba(79, 73, 59, 0.34);
  box-shadow: 0 20px 60px rgba(79, 73, 59, 0.12);
}

.pairing-headings,
.party-pair {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 54px minmax(0, 1fr);
  align-items: center;
}

.pairing-headings {
  padding-bottom: 22px;
  color: #756a4b;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-align: center;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(79, 73, 59, 0.22);
}

.pairing-headings i {
  color: #9a8e68;
  font-size: 25px;
}

.party-pair {
  min-height: 64px;
  border-bottom: 1px solid rgba(79, 73, 59, 0.14);
}

.party-pair:last-child {
  border-bottom: 0;
}

.party-name {
  font-family: "Playfair Display", serif;
  font-size: 1.08rem;
  letter-spacing: 0.02em;
}

.groomsman {
  text-align: right;
}

.bridesmaid {
  text-align: left;
}

.pair-ornament {
  color: #a39870;
  text-align: center;
}

@media (max-width: 575px) {
  .party-pairings {
    margin-top: 24px;
    padding: 30px 18px;
  }

  .pairing-headings,
  .party-pair {
    grid-template-columns: minmax(0, 1fr) 28px minmax(0, 1fr);
  }

  .pairing-headings {
    font-size: 0.58rem;
    letter-spacing: 0.1em;
  }

  .pairing-headings i {
    font-size: 19px;
  }

  .party-pair {
    min-height: 58px;
  }

  .party-name {
    font-size: 0.86rem;
    line-height: 1.3;
  }
}
</style>
