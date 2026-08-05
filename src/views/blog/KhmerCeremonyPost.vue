<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import ScrollToTop from "@/components/wedding/ScrollToTop.vue";
import { getImageFormat, isInnerHeightReached } from "@/utils/helpers";

const displayScrollToTop = ref(false);

const onScroll = () => {
  displayScrollToTop.value = isInnerHeightReached();
};

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.document.body.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <!-- BEGIN PAGE HEADER -->
  <div class="page-header section-divider-bottom-1">
    <div class="container">
      <div class="row">
        <div class="col center">
          <h1 class="page-title">Cambodian Ceremony</h1>
        </div>
      </div>
    </div>
  </div>
  <!-- END PAGE HEADER -->

  <!-- BEGIN PAGE CONTENT -->
  <div class="page-content">
    <div class="container">
      <div class="row gx-6">
        <!-- BEGIN MAIN CONTENT -->
        <main class="main blog-main col-lg-8">
          <article class="post-content">
            <div class="image">
              <img :src="getImageFormat('800x500')" alt="Blog Post Image" />
            </div>

            <div class="date">MM DD, YYYY</div>

            <div class="info-blog center">
              <h2 class="post-title">
                Schedule of the Cambodian (Khmer) Ceremony
              </h2>

              <h3>Master of Ceremonies: JOHN DOE</h3>

              <p class="extra-padding">
                A traditional Khmer wedding once lasted seven days. It was
                shortened to three days and now lasts just one. Traditional
                music accompanies each rite, and three gong melodies announce
                the entrance or departure of the couple.
              </p>

              <h4><i>The Wedding</i></h4>

              <blockquote>
                &ldquo; 9:00 a.m. Cūl ron, "entering the shelter" &rdquo;
              </blockquote>

              <p class="extra-padding">
                At 8:45 a.m., everyone gathers to prepare the procession.
              </p>

              <p class="extra-padding">
                The groom leads the <u>procession</u>, guided by the ācāry
                (master of ceremonies). Accompanied by his parents, the mahā,
                family, and friends—each carrying a tray of gifts—he makes his
                way to the bride's home with an <u>areca flower</u>.
              </p>

              <blockquote>&ldquo; The Engagement &rdquo;</blockquote>

              <p class="extra-padding">
                The <i>mahā</i> present the <i>me pā</i> with gifts and objects
                meant to "seal the hearts." The <i>mahā</i> then invite the
                <i>me pā</i> to gather the family and taste betel quids, sealing
                the union of the two families (<i
                  >ŝī slā kamnat'</i
                >).
              </p>

              <blockquote>
                &ldquo; Offerings to the Spirits (Honoring the Ancestors) &rdquo;
              </blockquote>

              <p class="extra-padding">
                A mat is spread out and a pillow placed at one end, aligned
                with the breath of life. The mahā place two thaṅ̍ raṅ on
                either side of the pillow and light candles and incense. No
                matter the size of the wedding, Cambodians share the news with
                the spirits of grandparents, parents, and other members of both
                families who have passed on. The <i>me pā</i>, <i>mahā</i>, and
                <i>anak phlūv</i> join in this declaration of truth…
              </p>

              <blockquote>
                &ldquo; 10:30 a.m. The Hair-Cutting Ceremony (<i>bidhī kāt̍ sak̍</i>)
                &rdquo;
              </blockquote>

              <p class="extra-padding">
                The <i>ācāry</i> makes three small symbolic snips to "tame"
                (<i>ramṅāp̍</i>) the hair before giving way to the parents and
                close relatives.
              </p>

              <blockquote>
                &ldquo; 12:00 p.m. Lunch Break and Seine River Cruise &rdquo;
              </blockquote>

              <blockquote>
                &ldquo; 1:30 p.m. Recitation of Mantras (<i>sūtr mant</i>)
                &rdquo;
              </blockquote>

              <p class="extra-padding">
                A small table serves as an altar, holding a statue of Buddha
                and ceremonial offerings. The couple bow three times to the
                monks, then remain prostrate with their arms resting on a
                cushion as they listen to the <i>paritt</i>.
              </p>

              <blockquote>&ldquo; 2:00 p.m. The Salutation &rdquo;</blockquote>

              <p class="extra-padding">
                Accompanied by music, a procession brings the groom toward the
                main house:
              </p>

              <div class="info-blog">
                <ul>
                  <li>
                    At the front, the <i>ācāry</i> carries a saber on his shoulder;
                  </li>
                  <li>
                    The <i>anak phlūv</i> and first mahā each carry one
                    <i>thaṅ̍ raṅ</i>;
                  </li>
                  <li>One person carries the <i>babil</i> cup;</li>
                  <li>
                    One person carries the "victory rice" cup;
                  </li>
                  <li>
                    One person carries the "betel and areca" cup;
                  </li>
                  <li>
                    Two people carry the two cups (<i>dīep</i>) containing
                    <i>pāy srī</i>;
                  </li>
                  <li>
                    Three people carry the three cups of areca flowers;
                  </li>
                  <li>Finally, the groom himself…</li>
                </ul>
              </div>

              <p class="extra-padding">
                The groom honors the bride's father by presenting him with the
                "eldest cup" of areca flowers, then bows three times.
              </p>

              <p class="extra-padding">
                The offerings are repeated with the "middle cup" for the
                mother and the "younger cup" for a brother or sister.
              </p>

              <blockquote>
                &ldquo; 2:15 p.m. The Union (<i>bidhī phtịm</i>) &rdquo;
              </blockquote>

              <p class="extra-padding">
                The <i>anak phlūv</i> leads the bride by the hand to the ceremony.
                The <i>ācāry</i> takes the couple's joined hands and unites them.
                They are now married according to tradition.
              </p>

              <blockquote>
                &ldquo; 2:30 p.m. Circumambulation of the <i>babil</i> (<i
                  >bidhī paṅvil babil</i
                >, Candle Ceremony) &rdquo;
              </blockquote>

              <p class="extra-padding">
                This important traditional Cambodian wedding rite is performed
                by 12 people: the <i>ācāry, mahā, and anak phlūv</i>, five men,
                and four women, all still in their first, happy marriages. They
                form a protective circle around the couple.
              </p>

              <p class="extra-padding">
                First, the <i>acāry</i> attaches U-shaped candles to the ends of
                the <i>babil</i>, lights them, and begins the <i>jayanto</i>
                prayer, which the other participants repeat.
              </p>

              <p class="extra-padding">
                The <i>babil</i> make 19 clockwise rounds, corresponding to the
                19 breaths of life (<i>bralịṅ</i>).
              </p>

              <p class="extra-padding">
                The <i>babil</i> plates are shaped like banyan leaves and made
                from engraved metal bearing the image of the goddess
                <i>Umā-Bhagavatī</i>, wife of the god <i>Īsūr</i>, who is
                regarded as the mother of humankind.
              </p>

              <blockquote>
                &ldquo; 3:00 p.m. Opening the <i>pāy srī</i> Cups &rdquo;
              </blockquote>

              <p class="extra-padding">
                These cups are wrapped in fabric or tulle. One contains boiled
                chicken or a large piece of boiled pork; the other contains cakes.
              </p>

              <p class="extra-padding">
                One musician sings three verses of the "Opening of the
                <i>pāy srī</i>" song…
              </p>

              <blockquote>
                &ldquo; Tying the Wrists (<i>bidhī caṅ ṭai</i>, Ceremony of Wishes) &rdquo;
              </blockquote>

              <p class="extra-padding">
                The <i>ācāry</i> ties the couple's wrists first, followed by
                their parents and other family members, who wish them happiness
                and prosperity.
              </p>

              <blockquote>
                &ldquo; The Areca Flower Ceremony (<i
                  >bidhī pāc phkā slā</i
                >) &rdquo;
              </blockquote>

              <p class="extra-padding">
                At the end of the rite, the areca flowers are loosened and
                tossed over the couple as wishes of happiness are offered.
              </p>

              <blockquote>&ldquo; Scheduled End: 4:30 p.m. &rdquo;</blockquote>

              <div class="row">
                <p class="col-sm-6">
                  <img :src="getImageFormat('600x600')" />
                </p>
                <p class="col-sm-6">
                  <img :src="getImageFormat('600x600')" />
                </p>
              </div>

              <p>
                <img :src="getImageFormat('800X500')" class="fullwidth" />
              </p>
            </div>

            <div class="bottom-info">
              <ul class="blog-meta">
                <li>
                  Images from
                  <a
                    href="https://www.pinterest.fr/search/pins/?q=wedding%20khmer&rs=rs&eq=&etslf=3610"
                    target="_blank"
                    >Pinterest</a
                  >
                </li>
              </ul>

              <div class="blog-share">
                <a
                  target="_blank"
                  href="https://www.pinterest.fr/search/pins/?q=wedding%20khmer&rs=rs&eq=&etslf=3610"
                  ><i class="fab fa-pinterest-p"></i
                ></a>
              </div>
            </div>
          </article>
        </main>
        <!-- END MAIN CONTENT -->

        <!-- BEGIN SIDEBAR -->
        <aside class="sidebar col-lg-4">
          <!-- BEGIN ABOUT WIDGET -->
          <div class="widget widget-about">
            <div class="image-container">
              <div class="image">
                <img :src="getImageFormat('600x600')" />
              </div>
            </div>

            <h3 class="section-title">Melaine & Michel</h3>
          </div>
          <!-- END ABOUT WIDGET -->

          <!-- BEGIN TAGS WIDGET-->
          <div class="widget widget-tags">
            <h2 class="widget-title">Tags</h2>

            <div class="tags">
              <a href="#">Wedding</a>
              <span>/</span>
              <a href="#">Khmer</a>
              <span>/</span> <a href="#">Cambodian Ceremony</a>
            </div>
          </div>
          <!-- END TAGS WIDGET-->
        </aside>
        <!-- END SIDEBAR -->
      </div>
    </div>
  </div>
  <!-- END PAGE CONTENT -->

  <ScrollToTop v-if="displayScrollToTop" />
</template>

<style scoped></style>
