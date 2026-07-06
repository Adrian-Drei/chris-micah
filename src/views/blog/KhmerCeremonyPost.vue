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
          <h1 class="page-title">Cérémonie Cambodgienne</h1>
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

            <div class="date">Le DD MM, YYYY</div>

            <div class="info-blog center">
              <h2 class="post-title">
                Déroulement de la cérémonie Cambodgienne (« Khmaer »)
              </h2>

              <h3>Maître de cérémonie: JOHN DOE</h3>

              <p class="extra-padding">
                Le mariage traditionnel khmaer durait 7 jours. Il a été
                raccourci à 3 jours puis actuellement ne dure qu'une journée. Un
                air de musique traditionnel accompagne chaque rite. Une série de
                trois airs de gongs retentit pour annoncer l'entrée ou la sortie
                des mariés.
              </p>

              <h4><i>Le mariage</i></h4>

              <blockquote>
                &ldquo; 9h00 Le cūl ron « entrer dans l'abri » &rdquo;
              </blockquote>

              <p class="extra-padding">
                Dès 8h45, une réunion a lieu pour préparer le cortège.
              </p>

              <p class="extra-padding">
                Le marié, en tête du <u>cortège</u> conduit par le ācāry (maître
                de cérémonie), accompagnant de ses parents, des mahā, de la
                famille et des amis qui chacun porte un plateau de présents, se
                rend chez la mariée avec une <u>fleur d'aréquier</u>.
              </p>

              <blockquote>&ldquo; Les fiançailles &rdquo;</blockquote>

              <p class="extra-padding">
                Les <i>mahā</i> présentent des cadeaux et des objets à « sceller
                les cœurs » aux <i>me pā</i>. Puis les <i>mahā</i> invitent les
                <i>me pā</i> à rassembler la famille pour goûter aux chiques de
                bétel, afin de sceller l'alliance des deux familles (<i
                  >ŝī slā kamnat'</i
                >).
              </p>

              <blockquote>
                &ldquo; Les oblations aux mânes (hommage aux ancêtres) &rdquo;
              </blockquote>

              <p class="extra-padding">
                On étend une natte, y place un oreiller sur un bout dans le sens
                du souffle de la vie. Les mahā place les deux thaṅ̍ raṅ des deux
                côtés de l'oreiller et allument les bougies et l'encens. Qu'elle
                que soit l'importance du mariage, les cambodgiens portent
                toujours cette nouvelle à la connaissance de tous les mânes,
                grands-parents, parents et autres membres des deux familles déjà
                rendus dans l'autre monde. Tous, <i>me pā</i>, <i>mahā</i> et
                <i>anak phlūv</i>
                s'unissent dans cette déclaration de vérité: …
              </p>

              <blockquote>
                &ldquo; 10h30 La « coupe des cheveux » (<i>bidhī kāt̍ sak̍</i>)
                &rdquo;
              </blockquote>

              <p class="extra-padding">
                Le <i>ācāry</i> donne trois petits coups de ciseaux symboliques
                pour « maîtriser » (<i>ramṅāp̍</i>) les cheveux avant de céder la
                place aux parents et aux proches.
              </p>

              <blockquote>
                &ldquo; 12h00 Pause déjeuner avec croisière sur la Seine &rdquo;
              </blockquote>

              <blockquote>
                &ldquo; 13h30 La récitation des mantra (<i>sūtr mant</i>)
                &rdquo;
              </blockquote>

              <p class="extra-padding">
                Une petite table sert d'autel portant la statue de Buddha et les
                accessoires d'hommage. Les mariés saluent trois fois les bonzes
                et se tiennent prosternés, les bras reposant sur le coussin,
                pour écouter le <i>paritt</i>.
              </p>

              <blockquote>&ldquo; 14h00 La salutation &rdquo;</blockquote>

              <p class="extra-padding">
                Un cortège accompagné de musique se met en marche vers la grande
                maison en y amenant le marié:
              </p>

              <div class="info-blog">
                <ul>
                  <li>
                    En tête, le <i>ācāry</i> portant le sabre sur son épaule;
                  </li>
                  <li>
                    La <i>anak phlūv</i> et le premier mahā portant chacun 1
                    <i>thaṅ̍ raṅ</i>;
                  </li>
                  <li>Une personne portant la coupe de <i>babil</i>;</li>
                  <li>
                    Une personne portant la coupe du « riz de la victoire »;
                  </li>
                  <li>
                    Une personne portant la coupe du « bétel et de l'arec »;
                  </li>
                  <li>
                    Deux personnes portant les 2 coupes (dīep) contenant le
                    <i>pāy srī</i>;
                  </li>
                  <li>
                    Trois personnes portant les 3 coupes de fleurs d'aréquier;
                  </li>
                  <li>Enfin le marié lui-même…</li>
                </ul>
              </div>

              <p class="extra-padding">
                Le marié rend grâce au père de la mariée en lui présentant la «
                coupe aînée » de fleur d'aréquier puis il se prosterne trois
                fois.
              </p>

              <p class="extra-padding">
                Les mêmes actes d'offrande se répètent pour la « coupe du milieu
                », destinée à la mère, et pour la « coupe cadette » destinée à
                un frère ou à une sœur.
              </p>

              <blockquote>
                &ldquo; 14h15 L'union (<i>bidhī phtịm</i>) &rdquo;
              </blockquote>

              <p class="extra-padding">
                La <i>anak phlūv</i>conduit la mariée par la main vers l'endroit
                de la cérémonie. Le <i>ācāry</i> prend les mains jointes des
                mariés pour les unir. Ils sont désormais mariés selon la
                tradition.
              </p>

              <blockquote>
                &ldquo; 14h30 La circumambulation des <i>babil</i> (<i
                  >bidhī paṅvil babil</i
                >, cérémonie des bougies) &rdquo;
              </blockquote>

              <p class="extra-padding">
                Rite très important dans un mariage traditionnel cambodgien,
                exécuté par 12 personnes: le
                <i>ācāry, le mahā, la anak phlūv</i>, 5 hommes et 4 femmes, tous
                encore mariés de première noce et de vie conjugale heureuse. Ils
                forment un cercle de protection autour des mariés.
              </p>

              <p class="extra-padding">
                D'abord le <i>acāry</i> colle les bougies (en U) au bout des
                <i>babil</i>, les allume et entonne la prière
                <i>jayanto</i> répétée par les autres exécutants.
              </p>

              <p class="extra-padding">
                Les <i>babil</i> doivent faire 19 tours, correspondant aux 19
                souffles de vie (<i>bralịṅ</i>) dans le sens des aiguilles d'une
                montre.
              </p>

              <p class="extra-padding">
                Les plaques de <i>babil</i> sont en forme de feuilles de Banian,
                faites en métal ciselé à l'image de la déesse
                <i>Umā-Bhagavatī</i>, épouse du Dieu <i>Īsūr</i>, qu’on
                considère comme mère de tous les hommes.
              </p>

              <blockquote>
                &ldquo; 15h00 l'ouverture des coupes de <i>pāy srī</i> &rdquo;
              </blockquote>

              <p class="extra-padding">
                Ces coupes sont enveloppées d'étoffe ou de tulle, l'une contient
                soit du poulet bouilli soit un gros morceau de porc bouilli,
                l'autre contient quant à elle des gâteaux.
              </p>

              <p class="extra-padding">
                Un des musiciens vient chanter trois couplets du chant d'«
                ouverture de <i>pāy srī</i> »…
              </p>

              <blockquote>
                &ldquo; La ligature des poignets (<i>bidhī caṅ ṭai</i>,
                cérémonies des souhaits) &rdquo;
              </blockquote>

              <p class="extra-padding">
                <i>Le ācāry</i> doit commencer la ligature des poignets le
                premier, puis les parents et les autres membres de la famille,
                tout en leur souhaitant ses vœux de bonheur et de prospérité.
              </p>

              <blockquote>
                &ldquo; La cérémonie des fleurs d&#39;aréquier (<i
                  >bidhī pāc phkā slā</i
                >) &rdquo;
              </blockquote>

              <p class="extra-padding">
                On défait les fleurs d'aréquier qu'on les jette, à la fin du
                rite, à la volée sur les mariés en leur adressant les vœux de
                bonheur.
              </p>

              <blockquote>&ldquo; Fin prévu 16h30 &rdquo;</blockquote>

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
              <a href="#">Mariage</a>
              <span>/</span>
              <a href="#">Khmer</a>
              <span>/</span> <a href="#">Cérémonie Cambodgienne</a>
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
