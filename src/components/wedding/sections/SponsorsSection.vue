<script setup lang="ts">
import BridesMaidsAndGroomsMenSection from "./BridesMaidsAndGroomsMenSection.vue";

const primarySponsorsGentlemen = [
  "Engr. Ariel Pineda",
  "Mr. Romeo Briones",
  "Ptr. Amador Gapilango Jr.",
  "Mr. Luis Lacson",
  "Mr. Gerardo Olivera",
  "Mr. Cyrus Cajayon",
  "Mr. Luis Claro",
  "Mr. Rodieson Arvesu",
  "Mr. Neil Joyce Baligod",
  "Mr. Biodor Bonifacio",
];

const primarySponsorsLadies = [
  "Mrs. Taj Mahal Pineda",
  "Dr. Rose May Briones",
  "Mrs. Guenevere Gapilango",
  "Mrs. Emma Lacson",
  "Mrs. Elizabeth Olivera",
  "Mrs. Jaydee Cajayon",
  "Mrs. Veronica Claro",
  "Mrs. Kclyn Arvesu",
  "Dr. Mariciel Baligod",
  "Mrs. Verna Bonifacio",
];
</script>

<template>
  <section id="wedding-party" class="pattern">
    <div class="container">
      <!-- Primary Sponsors -->
      <div class="party-section invitation-panel primary-panel">
        <div class="text-center">
          <h3 class="party-title">Primary Sponsors</h3>

          <p class="party-subtitle">Principal witnesses to our marriage vows</p>
        </div>

        <div class="row sponsor-row">
          <div class="col-md-6">
            <ul class="sponsor-list sponsor-list-left">
              <li
                v-for="(sponsor, index) in primarySponsorsGentlemen"
                :key="index"
              >
                {{ sponsor }}
              </li>
            </ul>
          </div>

          <div class="col-md-6">
            <ul class="sponsor-list sponsor-list-right">
              <li
                v-for="(sponsor, index) in primarySponsorsLadies"
                :key="index"
              >
                {{ sponsor }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="divider-floral">
        <span>❦</span>
      </div>

      <!-- Best Man / Maid of Honor -->
      <div class="party-section honor-section">
        <div class="row justify-content-center">
          <div class="col-md-5 text-center honor-role honor-card">
            <div class="small-title">Best Man</div>

            <div class="person-name">Aaron Joseph Adolfo</div>
          </div>

          <div class="col-md-5 text-center honor-role honor-card">
            <div class="small-title">Maid of Honor</div>

            <div class="person-name">Nikki Mae Dolojol</div>
          </div>
        </div>
      </div>

      <div class="divider-floral">
        <span>❦</span>
      </div>
      <!-- Bridesmaids / Groomsmen -->
      <BridesMaidsAndGroomsMenSection />

      <div class="divider-floral"><span>❦</span></div>

      <!-- Secondary Sponsors -->
      <div class="party-section secondary-section">
        <div class="text-center">
          <h3 class="party-title">Secondary Sponsors</h3>
          <p class="party-subtitle">Symbols of unity, love, and commitment.</p>
        </div>

        <div class="row justify-content-center g-5">
          <div class="col-md-5">
            <div class="secondary-card">
              <div class="role-icon"><i class="fas fa-ribbon"></i></div>
              <div class="small-title">Veil Sponsors</div>
              <div class="role-description">
                To clothe us as one in love and unity.
              </div>
              <div class="person-name small">Aaron Joseph Adolfo</div>
              <div class="person-name small">Nikki Mae Dolojol</div>
            </div>
          </div>

          <div class="col-md-5">
            <div class="secondary-card">
              <div class="role-icon"><i class="fas fa-link"></i></div>
              <div class="small-title">Cord Sponsors</div>
              <div class="role-description">
                To bind us together in lifelong commitment.
              </div>
              <div class="person-name small">Ptr. Fernando Badua III</div>
              <div class="person-name small">Nicole Madriaga</div>
            </div>
          </div>
        </div>
      </div>

      <div class="divider-floral"><span>❦</span></div>

      <!-- Wedding Roles -->
      <div class="party-section roles-section">
        <div class="text-center">
          <h3 class="party-title">Wedding Roles</h3>

          <p class="party-subtitle">
            Those entrusted with carrying the symbols of our love, faith, and
            blessings.
          </p>
        </div>

        <div class="row g-5">
          <div class="col-sm-6 col-lg-3">
            <div class="role-card">
              <div class="role-icon">
                <i class="fas fa-ring"></i>
              </div>

              <div class="small-title">Ring Bearer</div>

              <div class="role-description">
                To carry the symbol of our everlasting love.
              </div>

              <div class="person-name small">Stephanie Joy Pendon</div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <div class="role-card">
              <div class="role-icon">
                <i class="fas fa-coins"></i>
              </div>

              <div class="small-title">Coin Bearer</div>

              <div class="role-description">
                To carry the symbol of our blessings and prosperity.
              </div>

              <div class="person-name small">Hans Gabriel Briones</div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <div class="role-card">
              <div class="role-icon">
                <i class="fas fa-book-bible"></i>
              </div>

              <div class="small-title">Bible Bearer</div>

              <div class="role-description">
                To carry the symbol of our faith and devotion.
              </div>

              <div class="person-name small">Mechizedek Caña</div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <div class="role-card">
              <div class="role-icon">
                <i class="fas fa-seedling"></i>
              </div>

              <div class="small-title">Flower Girl</div>

              <div class="role-description">
                To shower our path with joy, beauty, and blessings.
              </div>

              <div class="person-name small">Chanel Garcia</div>
            </div>
          </div>
        </div>
      </div>

      <div class="divider-floral">
        <span>❦</span>
      </div>

      <!-- Bride Highlight -->
      <div class="party-section bride-section invitation-panel">
        <i class="icon-diamond-ring bride-icon" aria-hidden="true"></i>
        <div class="small-title bride-title">Here Comes the Bride</div>

        <div class="person-name small">Chescah Reinne Badua</div>
      </div>

      <div class="divider-floral">
        <span>❦</span>
      </div>
    </div>
  </section>
</template>
<style scoped>
/* ---------------------------------------
   SECTION
---------------------------------------- */

#wedding-party {
  position: relative;
  overflow: hidden;
}

.section-intro {
  max-width: 760px;
  margin: 20px auto 0;
  line-height: 1.9;
  font-size: 1.05rem;
  color: rgba(63, 63, 63, 0.72);
  font-style: italic;
}

/* ---------------------------------------
   SPACING
---------------------------------------- */

.party-section {
  margin: 20px 0;
}

/* Keep the paired attendants inside the same invitation flow. */
:deep(#bmiadsgmen) {
  margin: 68px 0;
  padding: 0;
  color: #4f493b;
  background: transparent !important;
}

:deep(#bmiadsgmen::before) {
  display: none;
}

:deep(#bmiadsgmen > .container) {
  width: 100%;
  max-width: none;
  padding: 0;
}

:deep(#bmiadsgmen .section-title) {
  color: #4f493b;
}

/* ---------------------------------------
   HEADINGS
---------------------------------------- */

.party-title {
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 7px;
  font-size: 0.95rem;
  font-weight: 700;
}

.party-subtitle {
  max-width: 650px;
  margin: 0 auto 55px;
  font-family: "Cormorant Garamond", serif;
  font-size: 1.3rem;
  font-style: italic;
  color: rgba(63, 63, 63, 0.72);
}

.small-title {
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 0.8rem;
  font-weight: 700;
  color: rgba(63, 63, 63, 0.72);
}

/* ---------------------------------------
   DIVIDER
---------------------------------------- */

.divider-floral {
  position: relative;
  width: 220px;
  margin: 0px auto;
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
  display: inline-block;
  padding: 0 24px;
  color: rgba(63, 63, 63, 0.72);
  font-size: 1.4rem;
}

/* ---------------------------------------
   SPONSORS
---------------------------------------- */

.sponsor-row {
  max-width: 1000px;
  margin: auto;
}

.sponsor-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sponsor-list li {
  padding: 9px 0;
  font-size: 1.05rem;
  letter-spacing: 0.4px;
}

.sponsor-list-left {
  text-align: right;
  padding-right: 45px;
}

.sponsor-list-right {
  text-align: left;
  padding-left: 45px;
}

/* ---------------------------------------
   BEST MAN / MAID OF HONOR
---------------------------------------- */

.honor-role {
  padding: 30px 20px;
}

.person-name {
  font-family: "Cormorant Garamond", serif;
  font-size: 2.15rem;
  font-weight: 500;
  line-height: 1.35;
}

.person-name.small {
  font-size: 1.6rem;
}

/* ---------------------------------------
   ROLES
---------------------------------------- */

.role-card {
  text-align: center;
  padding: 25px 20px;
  transition: 0.35s ease;
}

.role-card:hover {
  transform: translateY(-6px);
}

.role-icon {
  width: 74px;
  height: 74px;
  margin: 0 auto 28px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.role-icon i {
  font-size: 24px;
  color: rgba(63, 63, 63, 0.72);
}

.role-description {
  margin: 18px auto 24px;
  max-width: 220px;
  font-size: 0.92rem;
  line-height: 1.8;
  color: rgba(63, 63, 63, 0.72);
  font-style: italic;
}

/* ---------------------------------------
   BRIDE
---------------------------------------- */

.bride-section {
  text-align: center;
  padding: 40px 0;
}

.bride-title {
  margin-bottom: 18px;
}

.hero-name {
  font-family: "Cormorant Garamond", serif;
  font-size: 4rem;
  line-height: 1.2;
  font-weight: 500;
}

/* ---------------------------------------
   SECONDARY SPONSORS
---------------------------------------- */

.secondary-card {
  text-align: center;
  padding: 20px;
}

.secondary-card .role-description {
  margin-bottom: 26px;
}

/* ---------------------------------------
   RESPONSIVE
---------------------------------------- */

@media (max-width: 991px) {
  .sponsor-list-left,
  .sponsor-list-right {
    text-align: center;
    padding: 0;
  }

  .hero-name {
    font-size: 3rem;
  }

  .person-name {
    font-size: 1.8rem;
  }

  .party-section {
    margin: 50px 0;
  }

  .divider-floral {
    margin: 70px auto;
  }
}

@media (max-width: 767px) {
  .section-intro {
    font-size: 1rem;
  }

  .party-title {
    letter-spacing: 4px;
  }

  .small-title {
    letter-spacing: 3px;
  }

  .hero-name {
    font-size: 2.35rem;
  }

  .person-name {
    font-size: 1.55rem;
  }

  .person-name.small {
    font-size: 1.3rem;
  }

  .role-card,
  .secondary-card,
  .honor-role {
    margin-bottom: 40px;
  }

  .divider-floral {
    width: 160px;
  }
}

/* Refined invitation design */
#wedding-party {
  padding: 110px 0;
  color: #4f493b;
  background-color: #fbfaf3;
  background-image: url("/src/assets/images/neela-pattern.png");
  background-repeat: repeat;
  background-position: top left;
  background-size: auto;
}

#wedding-party::before,
#wedding-party::after {
  display: none;
}

#wedding-party::before {
  top: 40px;
  left: -180px;
  transform: rotate(28deg);
}

#wedding-party::after {
  right: -190px;
  bottom: 20px;
  transform: rotate(205deg);
}

#wedding-party > .container {
  position: relative;
  z-index: 1;
}

.party-eyebrow {
  margin: 0 0 12px;
  color: #817655;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
}

.title-ornament {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin: 18px auto 20px;
  color: #9a8e68;
}

.title-ornament::before,
.title-ornament::after {
  width: 72px;
  height: 1px;
  content: "";
  background: rgba(79, 73, 59, 0.38);
}

.section-intro {
  max-width: 690px;
  margin-top: 0;
  color: #706958;
  font-family: "Playfair Display", serif;
  font-size: 1.08rem;
  font-style: normal;
  line-height: 1.8;
}

.party-section {
  margin: 68px 0;
}

.invitation-panel {
  position: relative;
  padding: 62px 70px;
  background: rgba(251, 250, 243, 0.94);
  border: 1px solid rgba(79, 73, 59, 0.34);
  box-shadow: 0 24px 70px rgba(79, 73, 59, 0.1);
}

.invitation-panel::before {
  position: absolute;
  inset: 9px;
  pointer-events: none;
  content: "";
  border: 1px solid rgba(79, 73, 59, 0.18);
}

.party-title {
  margin-bottom: 10px;
  color: #4f493b;
  font-family: "Playfair Display", serif;
  font-size: 1.55rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: none;
}

.party-subtitle {
  margin-bottom: 42px;
  color: #817b6d;
  font-family: "Poppins", sans-serif;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
}

.sponsor-row {
  position: relative;
}

.sponsor-row::after {
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 50%;
  width: 1px;
  content: "";
  background: rgba(79, 73, 59, 0.18);
}

.sponsor-list li {
  padding: 8px 0;
  color: #4f493b;
  font-family: "Playfair Display", serif;
  font-size: 1rem;
  letter-spacing: 0.02em;
}

.divider-floral {
  width: 190px;
  margin: 36px auto;
}

.divider-floral::before {
  border-color: rgba(79, 73, 59, 0.22);
}

.divider-floral span {
  padding: 0 18px;
  color: #9a8e68;
  background: #fbfaf3;
}

.honor-section .row {
  gap: 24px;
}

.honor-card,
.role-card,
.secondary-card {
  position: relative;
  color: #4f493b;
  background: rgba(251, 250, 243, 0.88);
  border: 1px solid rgba(79, 73, 59, 0.26);
  box-shadow: 0 14px 42px rgba(79, 73, 59, 0.08);
}

.honor-card {
  padding: 42px 28px;
}

.honor-card::before,
.role-card::before,
.secondary-card::before {
  position: absolute;
  inset: 7px;
  pointer-events: none;
  content: "";
  border: 1px solid rgba(79, 73, 59, 0.12);
}

.small-title {
  position: relative;
  margin-bottom: 12px;
  color: #817655;
  font-size: 0.68rem;
  letter-spacing: 0.22em;
}

.person-name,
.person-name.small {
  position: relative;
  color: #4f493b;
  font-family: "Playfair Display", serif;
  font-size: 1.55rem;
  font-weight: 400;
}

.roles-section .row,
.secondary-section .row {
  align-items: stretch;
}

.roles-section [class*="col-"],
.secondary-section [class*="col-"] {
  display: flex;
}

.role-card,
.secondary-card {
  width: 100%;
  padding: 38px 22px 34px;
  text-align: center;
  transition: border-color 0.25s ease, transform 0.25s ease,
    box-shadow 0.25s ease;
}

.role-card:hover,
.secondary-card:hover {
  border-color: rgba(79, 73, 59, 0.52);
  box-shadow: 0 20px 50px rgba(79, 73, 59, 0.13);
  transform: translateY(-4px);
}

.role-icon {
  position: relative;
  width: 62px;
  height: 62px;
  margin-bottom: 22px;
  color: #817655;
  background: #ede8d0;
  border-color: rgba(79, 73, 59, 0.3);
}

.role-icon i {
  color: #756a4b;
  font-size: 20px;
}

.role-description {
  position: relative;
  min-height: 52px;
  margin: 14px auto 20px;
  color: #756e5d;
  font-size: 0.82rem;
  line-height: 1.65;
}

.bride-section {
  max-width: 720px;
  margin-right: auto;
  margin-left: auto;
  padding: 54px 30px;
}

.bride-icon {
  position: relative;
  display: block;
  margin-bottom: 18px;
  color: #9a8e68;
  font-size: 38px;
}

.bride-section .person-name.small {
  font-size: 2rem;
}

.secondary-card .person-name.small + .person-name.small {
  margin-top: 5px;
}

@media (max-width: 991px) {
  #wedding-party {
    padding: 85px 0;
  }

  .invitation-panel {
    padding: 52px 42px;
  }

  .sponsor-row::after {
    display: none;
  }

  .party-section {
    margin: 54px 0;
  }

  .divider-floral {
    margin: 34px auto;
  }
}

@media (max-width: 767px) {
  #wedding-party {
    padding: 70px 0;
  }

  #wedding-party::before,
  #wedding-party::after {
    width: 300px;
    height: 300px;
  }

  .section-intro {
    padding: 0 8px;
    font-size: 0.96rem;
  }

  .invitation-panel {
    padding: 44px 22px;
  }

  .primary-panel .col-md-6 + .col-md-6 {
    margin-top: 26px;
    padding-top: 26px;
    border-top: 1px solid rgba(79, 73, 59, 0.18);
  }

  .honor-section .row {
    gap: 16px;
    margin-right: 0;
    margin-left: 0;
  }

  .honor-card,
  .role-card,
  .secondary-card {
    margin-bottom: 0;
  }

  .roles-section [class*="col-"],
  .secondary-section [class*="col-"] {
    margin-bottom: 16px;
  }

  .person-name,
  .person-name.small {
    font-size: 1.28rem;
  }

  .bride-section .person-name.small {
    font-size: 1.65rem;
  }

  .party-subtitle {
    margin-bottom: 30px;
  }
}
</style>
