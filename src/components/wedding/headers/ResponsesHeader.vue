<script setup lang="ts"></script>

<template>
  <header id="header">
    <div class="nav-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 responses-nav">
            <a href="/" class="nav-logo">
              <img
                src="/src/assets/images/wedding_mm/logo_mm.png"
                alt="Chris and Micah"
              />
            </a>
            <a href="/" class="back-home">Back to Wedding</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.responses-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.back-home {
  color: #6d6065;
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

@media (max-width: 400px) {
  .responses-nav {
    padding-right: 12px;
    padding-left: 12px;
  }

  .back-home {
    max-width: 92px;
    line-height: 1.45;
    text-align: right;
  }
}
</style>
