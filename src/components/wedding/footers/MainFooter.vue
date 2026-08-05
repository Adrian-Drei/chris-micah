<script setup lang="ts"></script>

<template>
  <!-- BEGIN FOOTER -->
  <footer id="footer-onepage" class="bg-color">
    <div class="footer-widget-area">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="footer-info left">
              Save the Date <br />
              10 13 2026<br />
              Silang, Cavite
            </div>
          </div>

          <div class="col-md-4">
            <div class="footer-logo">
              Chris<br />
              <small>&</small><br />
              Micah
            </div>
          </div>

          <div class="col-md-4">
            <div class="footer-info right">Contact No: 09636325881</div>
          </div>
        </div>
        <p class="footer-hashtag">#MICAHyakapnasiCHRIS</p>
      </div>
    </div>
  </footer>
  <!-- END FOOTER -->
</template>

<style scoped>
.footer-hashtag {
  margin: 8px 0 4px;
  color: #4f493b;
  font-family: "Playfair Display", serif;
  font-size: 0.9rem;
  font-style: italic;
  letter-spacing: 0.06em;
  text-align: center;
}

@media (max-width: 575px) {
  #footer-onepage .footer-widget-area {
    padding-top: 36px;
  }

  #footer-onepage .footer-info.left {
    margin-bottom: 14px;
  }

  .footer-hashtag {
    margin-top: 16px;
    overflow-wrap: anywhere;
  }
}
</style>
