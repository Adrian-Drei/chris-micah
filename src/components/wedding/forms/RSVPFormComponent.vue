<script lang="ts">
import { onBeforeMount, computed, ref, watch } from "vue";
import type { Ref } from "vue";

import { useRouter } from "vue-router";

import Recaptcha, {
  EMIT_RECAPTCHA_FAILURE,
  EMIT_RECAPTCHA_SUCCESS,
} from "@/components/recaptcha/Recaptcha.vue";

import useVuelidate from "@vuelidate/core";
import { helpers, required, email, requiredIf } from "@vuelidate/validators";

import RSVPFirestoreDataServices, {
  GUEST_TYPES,
  type RSVP,
  type RSVPWeddingGuest,
  type RSVPWeddingGuests,
} from "@/services/firestore/RSVPDataServices";

import {
  WEDDING_EVENTS,
  WEDDING_SCOPES,
  weddingChoicesEventsMapping,
  weddingEventsIconsMapping,
  scopesFamiliesMapping,
  mealPreferences,
  getQueryParam,
  KEY_QUERY_PARAM,
} from "./helpers";
import { ROUTE_NAMES } from "@/router";

const MAX_GUESTS_BY_EVENT = 8;
const REQUIRED_IF_WEDDING_CHOICES = "requiredIfWeddingChoices";
const REQUIRED_IF_GUESTS_LIST_AVAILABLE = "requiredIfGuestListAvailable";

declare type RSVPStateForm = {
  RSVPName: string;
  RSVPEmail: string;
  RSVPIsComing: string;
  RSVPWeddingChoices: WEDDING_EVENTS[];
  RSVPWeddingGuests: {
    [WEDDING_EVENTS.KHMER_CEREMONY]: RSVPWeddingGuest[];
    [WEDDING_EVENTS.CHURCH_CEREMONY]: RSVPWeddingGuest[];
    [WEDDING_EVENTS.CELEBRATION]: RSVPWeddingGuest[];
    [WEDDING_EVENTS.BRUNCH]: RSVPWeddingGuest[];
  };
  RSVPMealPreferences: string[];
  RSVPMessage: string;
};

declare type AlertUser = {
  type: string;
  icon: string;
  message: string;
};

export default {
  setup() {
    // Use vue router
    const router = useRouter();

    // Wedding scopes, families and events
    const weddingKey = computed(() => {
      const key = getQueryParam(KEY_QUERY_PARAM);
      return key ?? null;
    });
    const weddingScope = computed(() => {
      const scope = Object.values(WEDDING_SCOPES).find(
        (scope: WEDDING_SCOPES) => {
          const familyRecord = scopesFamiliesMapping[scope];
          return Object.keys(familyRecord).find(
            (familyKey: string) => familyKey === weddingKey.value
          );
        }
      );
      return (scope as WEDDING_SCOPES) ?? null;
    });
    const weddingEvents = computed(() => {
      return weddingScope.value &&
        weddingChoicesEventsMapping[weddingScope.value]
        ? weddingChoicesEventsMapping[weddingScope.value]
        : [];
    });
    const familyListByScope = computed(() => {
      if (weddingScope.value === null) return null;

      const familyRecord = scopesFamiliesMapping[weddingScope.value];
      return weddingKey.value ? familyRecord[weddingKey.value] : null;
    });
    const weddingIcon = weddingEventsIconsMapping;

    // Form refs
    const state: Ref<RSVPStateForm> = ref({
      RSVPName: "",
      RSVPEmail: "",
      RSVPIsComing: "yes",
      RSVPWeddingChoices: [],
      RSVPWeddingGuests: {
        [WEDDING_EVENTS.KHMER_CEREMONY]: [],
        [WEDDING_EVENTS.CHURCH_CEREMONY]: [],
        [WEDDING_EVENTS.CELEBRATION]: [],
        [WEDDING_EVENTS.BRUNCH]: [],
      },
      RSVPMealPreferences: [],
      RSVPMessage: "",
    });
    const copyState = ref({
      [WEDDING_EVENTS.KHMER_CEREMONY]: true,
      [WEDDING_EVENTS.CHURCH_CEREMONY]: true,
      [WEDDING_EVENTS.CELEBRATION]: true,
      [WEDDING_EVENTS.BRUNCH]: true,
    });

    const isGuestsListAvailable = (weddingEvent: WEDDING_EVENTS) => {
      return weddingChoicesSorted.value.includes(weddingEvent);
    };

    const isGuestsListAvailableError = computed(() => {
      return (
        v$.value.RSVPWeddingGuests.$invalid &&
        v$.value.RSVPWeddingGuests.$silentErrors.find(
          (error) => error.$validator === REQUIRED_IF_GUESTS_LIST_AVAILABLE
        )
      );
    });

    const weddingChoicesSorted = computed(() => {
      const weddingEventsOrder = Object.values(WEDDING_EVENTS);
      const weddingChoicesSorted = [...state.value.RSVPWeddingChoices].sort(
        (a, b) => weddingEventsOrder.indexOf(a) - weddingEventsOrder.indexOf(b)
      );

      return weddingChoicesSorted;
    });

    const rules = computed(() => {
      return {
        RSVPName: { required, $autoDirty: true },
        RSVPEmail: { email, $autoDirty: true },
        RSVPIsComing: { required, $autoDirty: true },
        RSVPWeddingChoices: {
          [REQUIRED_IF_WEDDING_CHOICES]: requiredIf(
            state.value.RSVPIsComing === "yes"
          ),
          $autoDirty: true,
        },
        RSVPWeddingGuests: {
          [WEDDING_EVENTS.KHMER_CEREMONY]: {
            [REQUIRED_IF_GUESTS_LIST_AVAILABLE]: requiredIf(
              isGuestsListAvailable(WEDDING_EVENTS.KHMER_CEREMONY)
            ),
            $each: helpers.forEach({
              name: { required },
              firstName: { required },
              guestType: { required },
            }),
          },
          [WEDDING_EVENTS.CHURCH_CEREMONY]: {
            [REQUIRED_IF_GUESTS_LIST_AVAILABLE]: requiredIf(
              isGuestsListAvailable(WEDDING_EVENTS.CHURCH_CEREMONY)
            ),
            $each: helpers.forEach({
              name: { required },
              firstName: { required },
              guestType: { required },
            }),
          },
          [WEDDING_EVENTS.CELEBRATION]: {
            [REQUIRED_IF_GUESTS_LIST_AVAILABLE]: requiredIf(
              isGuestsListAvailable(WEDDING_EVENTS.CELEBRATION)
            ),
            $each: helpers.forEach({
              name: { required },
              firstName: { required },
              guestType: { required },
            }),
          },
          [WEDDING_EVENTS.BRUNCH]: {
            [REQUIRED_IF_GUESTS_LIST_AVAILABLE]: requiredIf(
              isGuestsListAvailable(WEDDING_EVENTS.BRUNCH)
            ),
            $each: helpers.forEach({
              name: { required },
              firstName: { required },
              guestType: { required },
            }),
          },
        },
      };
    });
    const v$ = useVuelidate(rules, state);

    watch(
      () => state.value.RSVPIsComing,
      () => {
        // If wedding inputs hidden: reset them
        if (state.value.RSVPIsComing === "no") {
          state.value.RSVPWeddingChoices = [];
          state.value.RSVPWeddingGuests = {
            [WEDDING_EVENTS.KHMER_CEREMONY]: [],
            [WEDDING_EVENTS.CHURCH_CEREMONY]: [],
            [WEDDING_EVENTS.CELEBRATION]: [],
            [WEDDING_EVENTS.BRUNCH]: [],
          };
          state.value.RSVPMealPreferences = [];
        }
      }
    );

    watch(
      () => [
        copyState.value,
        state.value.RSVPWeddingGuests[weddingChoicesSorted.value[0]],
      ],
      () => {
        if (!weddingChoicesSorted.value.length) return;

        const firstWeddingChoice = weddingChoicesSorted.value[0];
        const firstGuestsList = [
          ...state.value.RSVPWeddingGuests[firstWeddingChoice],
        ];

        Object.keys(copyState.value).forEach((event) => {
          const weddingEvent = event as WEDDING_EVENTS;

          // If it's not the first wedding event
          if (weddingEvent !== firstWeddingChoice) {
            const copyGuests = copyState.value[weddingEvent];
            if (copyGuests) {
              // If checkbox is checked: copy guests from first weddingEvent guests list
              state.value.RSVPWeddingGuests[weddingEvent] = firstGuestsList;
            }
          }
        });
      },
      { deep: true }
    );

    onBeforeMount(() => {
      // If weddingKey related to any  wedding scope
      if (weddingScope.value === null) {
        router.push({ name: ROUTE_NAMES.DENIED });
      }

      loadRSVP();
    });

    const loading = ref(false);
    const alertUser: Ref<AlertUser | null> = ref(null);

    const closeAutoAlertUser = () => {
      setTimeout(() => {
        alertUser.value = null;
      }, 5000);
    };

    const generateWeddingGuests = () => {
      const weddingGuests: RSVPWeddingGuests = {
        [WEDDING_EVENTS.KHMER_CEREMONY]: [],
        [WEDDING_EVENTS.CHURCH_CEREMONY]: [],
        [WEDDING_EVENTS.CELEBRATION]: [],
        [WEDDING_EVENTS.BRUNCH]: [],
      };

      Object.keys(state.value.RSVPWeddingGuests).forEach((event) => {
        const weddingEvent = event as WEDDING_EVENTS;
        if (weddingChoicesSorted.value.includes(weddingEvent)) {
          weddingGuests[weddingEvent] =
            state.value.RSVPWeddingGuests[weddingEvent];
        } else {
          weddingGuests[weddingEvent] = [];
        }
      });
      return weddingGuests;
    };

    const sendRSVP = () => {
      if (!recaptcha.value || v$.value.$invalid) return;

      // Generate wedding guests
      const weddingGuests: RSVPWeddingGuests = generateWeddingGuests();

      const rsvp: RSVP = {
        id: weddingKey.value!,
        name: state.value.RSVPName,
        familyList: familyListByScope.value,
        email: state.value.RSVPEmail,
        isComing: state.value.RSVPIsComing,
        weddingChoices: weddingChoicesSorted.value,
        weddingGuests: weddingGuests,
        weddingGuestsState: copyState.value,
        mealPreferences: state.value.RSVPMealPreferences,
        message: state.value.RSVPMessage,
      };

      loading.value = true;
      RSVPFirestoreDataServices.createOrUpdate(rsvp)
        .then(() => {
          loading.value = false;

          alertUser.value = {
            type: "alert-success",
            icon: "fa-circle-check",
            message: "Envoi de votre réponse avec succès!",
          };
          closeAutoAlertUser();
        })
        .catch(() => {
          loading.value = false;

          alertUser.value = {
            type: "alert-danger",
            icon: "fa-circle-exclamation",
            message: "Erreur lors de l'envoi de votre réponse...",
          };
          closeAutoAlertUser();
        });
    };

    const loadRSVP = async () => {
      if (weddingKey.value) {
        const rsvp = await RSVPFirestoreDataServices.getById(weddingKey.value!);

        if (rsvp) {
          copyState.value = {
            [WEDDING_EVENTS.KHMER_CEREMONY]:
              rsvp.weddingGuestsState[WEDDING_EVENTS.KHMER_CEREMONY] ?? true,
            [WEDDING_EVENTS.CHURCH_CEREMONY]:
              rsvp.weddingGuestsState[WEDDING_EVENTS.CHURCH_CEREMONY] ?? true,
            [WEDDING_EVENTS.CELEBRATION]:
              rsvp.weddingGuestsState[WEDDING_EVENTS.CELEBRATION] ?? true,
            [WEDDING_EVENTS.BRUNCH]:
              rsvp.weddingGuestsState[WEDDING_EVENTS.BRUNCH] ?? true,
          };

          state.value = {
            RSVPName: rsvp.name,
            RSVPEmail: rsvp.email ?? "",
            RSVPIsComing: rsvp.isComing,
            RSVPWeddingChoices: rsvp.weddingChoices,
            RSVPWeddingGuests: {
              [WEDDING_EVENTS.KHMER_CEREMONY]:
                rsvp.weddingGuests[WEDDING_EVENTS.KHMER_CEREMONY] ?? [],
              [WEDDING_EVENTS.CHURCH_CEREMONY]:
                rsvp.weddingGuests[WEDDING_EVENTS.CHURCH_CEREMONY] ?? [],
              [WEDDING_EVENTS.CELEBRATION]:
                rsvp.weddingGuests[WEDDING_EVENTS.CELEBRATION] ?? [],
              [WEDDING_EVENTS.BRUNCH]:
                rsvp.weddingGuests[WEDDING_EVENTS.BRUNCH] ?? [],
            },
            RSVPMealPreferences:
              rsvp.mealPreferences && rsvp.mealPreferences.length
                ? rsvp.mealPreferences
                : [],
            RSVPMessage: rsvp.message ?? "",
          };
        }
      }
    };

    const addNewGuest = (weddingEvent: WEDDING_EVENTS) => {
      state.value.RSVPWeddingGuests[weddingEvent].push({
        name: "",
        firstName: "",
        guestType: GUEST_TYPES.ADULT,
      });
    };

    const removeGuest = (weddingEvent: WEDDING_EVENTS, index: number) => {
      state.value.RSVPWeddingGuests[weddingEvent].splice(index, 1);
    };

    const isDisabledByCopyState = (weddingEvent: WEDDING_EVENTS) => {
      return (
        weddingEvent !== weddingChoicesSorted.value[0] &&
        copyState.value[weddingEvent]
      );
    };

    // Google Recaptcha V2
    const recaptcha = ref(false);
    const onRecaptchaSuccess = () => {
      recaptcha.value = true;
    };

    const onRecaptchaFailure = () => {
      recaptcha.value = false;
    };

    return {
      v$,
      state,
      copyState,
      weddingEvents,
      weddingIcon,
      weddingChoicesSorted,
      loading,
      alertUser,
      sendRSVP,
      addNewGuest,
      removeGuest,
      isDisabledByCopyState,
      isGuestsListAvailableError,
      recaptcha,
      onRecaptchaSuccess,
      onRecaptchaFailure,
    };
  },
  components: {
    Recaptcha,
  },
  data: () => ({
    mealPreferences,
    EMIT_RECAPTCHA_SUCCESS,
    EMIT_RECAPTCHA_FAILURE,
    WEDDING_EVENTS,
    GUEST_TYPES,
    MAX_GUESTS_BY_EVENT,
  }),
  validations() {
    return {
      RSVPName: { required },
    };
  },
};
</script>

<template>
  <!-- BEGIN RSVP FORM -->
  <div class="col-xl-6 col-lg-7">
    <div
      class="form-wrapper no-shadow overflow neela-style"
      data-animation-direction="from-right"
      data-animation-delay="250"
    >
      <h3 class="section-title">Serez-vous des nôtres?</h3>

      <form id="form-rsvp" ref="form-rsvp" class="mx-2">
        <!-- RSVPName field -->
        <div v-show="v$.RSVPName.$error" class="invalid-field">
          Veuillez renseigner le champ.
        </div>
        <div class="form-floating">
          <input
            type="text"
            name="Name"
            id="name"
            placeholder="Nom de la famille ou du groupe"
            class="form-control required fromName"
            v-model="state.RSVPName"
          />
          <label for="name">Nom de la famille*</label>
        </div>

        <!-- RSVPEmail field -->
        <div v-show="v$.RSVPEmail.$error" class="invalid-field">
          Veuillez rentrez un e-mail valide.
        </div>
        <div class="form-floating">
          <input
            type="email"
            name="E-mail"
            id="email"
            placeholder="E-mail*"
            class="form-control required fromEmail"
            v-model="state.RSVPEmail"
          />
          <label for="email">E-mail (optionnel)</label>
        </div>

        <!-- RSVPIsComing field -->
        <div v-show="v$.RSVPIsComing.$error" class="invalid-field">
          Veuillez rentrez un choix.
        </div>
        <div class="form-check-wrapper">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input required"
              type="radio"
              name="Attend wedding"
              id="attend_wedding_yes"
              value="yes"
              v-model="state.RSVPIsComing"
            />
            <label for="attend_wedding_yes">Oui, je serais là!</label>
          </div>

          <div class="form-check form-check-inline">
            <input
              class="form-check-input required"
              type="radio"
              name="Attend wedding"
              id="attend_wedding_no"
              value="no"
              v-model="state.RSVPIsComing"
            />
            <label for="attend_wedding_no">Malheureusement non...</label>
          </div>
        </div>

        <!-- RSVPWeddingChoices field -->
        <div v-if="state.RSVPIsComing === 'yes'">
          <label> Veuillez sélectionner le ou les évènement(s): </label>
          <div v-show="v$.RSVPWeddingChoices.$error" class="invalid-field">
            Veuillez rentrez votre choix.
          </div>
          <div
            class="form-check-wrapper d-flex justify-content-center"
            v-for="(weddingEvent, key) in weddingEvents"
            :key="key"
          >
            <input
              type="checkbox"
              class="btn-check"
              :id="'wedding-choice-' + key"
              autocomplete="off"
              :value="weddingEvent"
              v-model="state.RSVPWeddingChoices"
            />
            <label
              class="btn btn-outline-secondary btn-check-label d-flex justify-content-center"
              :for="'wedding-choice-' + key"
            >
              <i :class="weddingIcon[weddingEvent]" class="me-1"></i>
              {{ weddingEvent }}
            </label>
          </div>
        </div>

        <!-- RSVP Guest modal button -->
        <div v-show="isGuestsListAvailableError" class="invalid-field">
          Veuillez renseigner votre liste d'invités.
        </div>
        <div
          v-if="state.RSVPWeddingChoices.length"
          class="form-floating d-flex justify-content-center"
        >
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#guestsModal"
          >
            Liste des invités (y compris vous)
          </button>
        </div>

        <!-- RSVPMealPreferences field -->
        <fieldset
          class="form-check-wrapper required"
          name="Meal Preferences"
          id="meal_pref"
          v-if="state.RSVPIsComing === 'yes'"
        >
          <label>Préférences alimentaires :</label>

          <div
            class="form-check"
            v-for="(meal, index) in mealPreferences"
            :key="index"
          >
            <input
              class="form-check-input"
              type="checkbox"
              :value="meal"
              :id="'meal_' + index"
              v-model="state.RSVPMealPreferences"
            />
            {{ meal }}
          </div>
        </fieldset>

        <!-- RSVPMessage field -->
        <div class="form-floating">
          <textarea
            id="message"
            name="Message"
            placeholder="Message"
            class="form-control"
            rows="4"
            v-model="state.RSVPMessage"
          ></textarea>
          <label for="message">Message</label>
        </div>

        <div class="form-check-wrapper d-flex justify-content-center">
          <Recaptcha
            @[EMIT_RECAPTCHA_SUCCESS]="onRecaptchaSuccess"
            @[EMIT_RECAPTCHA_FAILURE]="onRecaptchaFailure"
          />
        </div>

        <div class="center">
          <!-- Button send form -->
          <button
            type="button"
            class="btn btn-primary"
            :disabled="!recaptcha || v$.$invalid"
            @click="sendRSVP"
          >
            <span
              v-if="loading"
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span v-if="!loading">Envoyer</span>
            <span v-else class="ms-2">Envoi en cours...</span>
          </button>

          <br />
          <br />

          <!-- Alert message form -->
          <div v-if="alertUser">
            <div
              :class="'alert alert-dismissible ' + alertUser.type"
              role="alert"
            >
              <i :class="'me-2 fa-solid ' + alertUser.icon"></i>
              {{ alertUser.message }}
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                @click="alertUser = null"
              ></button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  <!-- END RSVP FORM -->

  <!-- MODAL GUESTS -->
  <div
    class="modal fade rsvp-modal mt-4"
    data-bs-backdrop="static"
    id="guestsModal"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalToggleLabel">
            Liste des invités (y compris vous)
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="accordion" id="accordionGuestsByEvent">
            <div
              class="accordion-item"
              v-for="(weddingEvent, key) in weddingChoicesSorted"
              :key="key"
            >
              <div class="accordion-header" :id="'heading' + key">
                <button
                  :class="key !== 0 ? 'collapsed' : ''"
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="'#collapse' + key"
                  aria-expanded="true"
                  :aria-controls="'collapse' + key"
                >
                  <i :class="weddingIcon[weddingEvent]" class="me-2"></i>
                  {{ weddingEvent }}
                </button>

                <!-- Copy Guests checkbox -->
                <div class="container-guests">
                  <div v-if="key > 0" class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :id="'copyGuestsFor' + key"
                      v-model="copyState[weddingEvent]"
                    />
                    <div class="tooltip-custom">
                      <i class="fa-solid fa-circle-question"> </i>
                      <span class="tooltip-custom-text"
                        >Dupliquer la liste des invités renseignée pour
                        l'évènement
                        <b>{{ weddingChoicesSorted[0] }}</b>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                :id="'collapse' + key"
                :class="key === 0 ? 'show' : ''"
                class="accordion-collapse collapse"
                :aria-labelledby="'heading' + key"
                data-bs-parent="#accordionGuestsByEvent"
              >
                <div class="accordion-body">
                  <div
                    class="row"
                    v-for="(guest, guestIndex) in state.RSVPWeddingGuests[
                      weddingEvent
                    ]"
                    :key="guestIndex"
                  >
                    <!-- RSVPGuest errors -->
                    <div
                      v-show="
                        v$.RSVPWeddingGuests[weddingEvent].$each.$response
                          .$errors[guestIndex].name.length
                      "
                      class="invalid-field"
                    >
                      Veuillez rentrez un nom.
                    </div>
                    <div
                      v-show="
                        v$.RSVPWeddingGuests[weddingEvent].$each.$response
                          .$errors[guestIndex].firstName.length
                      "
                      class="invalid-field"
                    >
                      Veuillez rentrez un prénom.
                    </div>
                    <div
                      v-show="
                        v$.RSVPWeddingGuests[weddingEvent].$each.$response
                          .$errors[guestIndex].guestType.length
                      "
                      class="invalid-field"
                    >
                      Veuillez rentrez une tranche d'âge.
                    </div>

                    <!-- RSVPGuest Name field -->
                    <div class="col-md-4 form-floating">
                      <input
                        type="text"
                        name="Name"
                        id="name"
                        placeholder="Nom"
                        class="form-control required"
                        v-model="guest.name"
                        :disabled="isDisabledByCopyState(weddingEvent)"
                      />
                      <label class="ms-2" for="name">Nom*</label>
                    </div>

                    <!-- RSVPGuest FirstName field -->
                    <div class="col-md-4 form-floating">
                      <input
                        type="text"
                        name="FirstName"
                        id="name"
                        placeholder="Prénom"
                        class="form-control required"
                        v-model="guest.firstName"
                        :disabled="isDisabledByCopyState(weddingEvent)"
                      />
                      <label class="ms-2" for="name">Prénom*</label>
                    </div>

                    <!-- RSVPGuest Age field -->
                    <div class="col-md-3 form-floating">
                      <select
                        class="form-select"
                        aria-label="Age"
                        name="Age"
                        id="age_guest"
                        v-model="guest.guestType"
                        :disabled="isDisabledByCopyState(weddingEvent)"
                      >
                        <option
                          v-for="(guestType, typeKey) in GUEST_TYPES"
                          :key="typeKey"
                          :value="guestType"
                        >
                          {{ guestType }}
                        </option>
                      </select>

                      <label class="ms-2" for="age_guest">Tranche d'âge</label>
                    </div>

                    <!-- RSVPGuest remove button -->
                    <div class="col-md-1 text-center">
                      <button
                        :disabled="isDisabledByCopyState(weddingEvent)"
                        @click="removeGuest(weddingEvent, guestIndex)"
                        class="btn button-action-remove-row"
                      >
                        <i class="fa-solid fa-circle-minus mx-0"></i>
                      </button>
                    </div>
                  </div>

                  <div class="row justify-content-center">
                    <!-- RSVPGuest add button -->
                    <button
                      v-if="
                        state.RSVPWeddingGuests[weddingEvent].length <
                        MAX_GUESTS_BY_EVENT
                      "
                      class="btn button-action-add-row"
                      :disabled="isDisabledByCopyState(weddingEvent)"
                      @click="addNewGuest(weddingEvent)"
                    >
                      <span class="ms-2">Ajouter un invité</span>
                      <i class="fa-solid fa-circle-plus ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <div class="center">
            <button
              type="button"
              data-bs-dismiss="modal"
              :disabled="v$.RSVPWeddingGuests.$invalid"
              class="btn btn-primary"
              style="width: 200px"
            >
              Valider
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END MODAL GUESTS -->
</template>

<style scoped></style>
