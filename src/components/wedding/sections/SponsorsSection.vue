<script setup lang="ts">
const primarySponsorsGentlemen = [
  "Mr. Ariel Pineda",
  "Mr. Romeo Briones",
  "Ptr. Jun Gapilango",
  "Mr. Boy Lacson",
  "Mr. Gerardo Olivera",
  "Mr. Cyrus Cajayon",
  "Mr. Luis Claro",
  "Mr. Rodieson Arvesu",
  "Mr. Neil Joyce Baligod",
  "Mr. Biodor Bonifacio",
];

const primarySponsorsLadies = [
  "Mrs. Taj Pineda",
  "Dr. Rose May Badua",
  "Mrs. Gene Gapilango",
  "Mrs. Emma Lacson",
  "Mrs. Liza Olivera",
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
      <!-- Heading -->
      <div class="row">
        <div class="col-lg-8 offset-lg-2 text-center">
          <h2 class="section-title">Wedding Party</h2>

          <p class="section-intro">
            Together with our beloved family and cherished friends, we are
            honored to introduce those who will stand beside us as we celebrate
            one of the most meaningful moments of our lives.
          </p>
        </div>
      </div>

      <!-- Primary Sponsors -->
      <div class="party-section">
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
      <div class="party-section">
        <div class="row justify-content-center">
          <div class="col-md-5 text-center honor-role">
            <div class="small-title">Best Man</div>

            <div class="person-name">Aaron Joseph Adolfo</div>
          </div>

          <div class="col-md-5 text-center honor-role">
            <div class="small-title">Maid of Honor</div>

            <div class="person-name">Nikki Mae Glodo</div>
          </div>
        </div>
      </div>

      <div class="divider-floral">
        <span>❦</span>
      </div>
      <!-- Wedding Roles -->
      <div class="party-section">
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

              <div class="person-name small">Hans Briones</div>
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
      <div class="party-section bride-section">
        <div class="small-title bride-title">Here Comes the Bride</div>

        <div class="person-name small">Chescah Reinne Badua</div>
      </div>

      <div class="divider-floral">
        <span>❦</span>
      </div>

      <!-- Secondary Sponsors -->
      <div class="party-section">
        <div class="text-center">
          <h3 class="party-title">Secondary Sponsors</h3>

          <p class="party-subtitle">Symbols of unity, love, and commitment.</p>
        </div>

        <div class="row justify-content-center g-5">
          <div class="col-md-5">
            <div class="secondary-card">
              <div class="role-icon">
                <i class="fas fa-ribbon"></i>
              </div>

              <div class="small-title">Veil Sponsors</div>

              <div class="role-description">
                To clothe us as one in love and unity.
              </div>

              <div class="person-name small">Aaron Joseph Adolfo</div>

              <div class="person-name small">Nikki Mae Glodo</div>
            </div>
          </div>

          <div class="col-md-5">
            <div class="secondary-card">
              <div class="role-icon">
                <i class="fas fa-link"></i>
              </div>

              <div class="small-title">Cord Sponsors</div>

              <div class="role-description">
                To bind us together in lifelong commitment.
              </div>

              <div class="person-name small">Fernando Badua III</div>

              <div class="person-name small">Nicole Madriaga</div>
            </div>
          </div>
        </div>
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
</style>
