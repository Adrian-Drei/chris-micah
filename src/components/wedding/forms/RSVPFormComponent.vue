<script lang="ts">
import { computed, ref, watch } from "vue";
import type { Ref } from "vue";

import useVuelidate from "@vuelidate/core";
import { helpers, required, email, requiredIf } from "@vuelidate/validators";

import RSVPSupabaseDataServices, {
  GUEST_TYPES,
  type RSVP,
  type RSVPWeddingGuest,
  type RSVPWeddingGuests,
} from "@/services/supabase/RSVPDataServices";

import {
  WEDDING_EVENTS,
  weddingEventsIconsMapping,
} from "./helpers";

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
    const weddingIcon = weddingEventsIconsMapping;

    // Form refs
    const state: Ref<RSVPStateForm> = ref({
      RSVPName: "",
      RSVPEmail: "",
      RSVPIsComing: "yes",
      RSVPWeddingChoices: [WEDDING_EVENTS.CELEBRATION],
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
              false
            ),
            $each: helpers.forEach({
              name: { required },
              firstName: { required },
              guestType: { required },
            }),
          },
          [WEDDING_EVENTS.CHURCH_CEREMONY]: {
            [REQUIRED_IF_GUESTS_LIST_AVAILABLE]: requiredIf(
              false
            ),
            $each: helpers.forEach({
              name: { required },
              firstName: { required },
              guestType: { required },
            }),
          },
          [WEDDING_EVENTS.CELEBRATION]: {
            [REQUIRED_IF_GUESTS_LIST_AVAILABLE]: requiredIf(
              false
            ),
            $each: helpers.forEach({
              name: { required },
              firstName: { required },
              guestType: { required },
            }),
          },
          [WEDDING_EVENTS.BRUNCH]: {
            [REQUIRED_IF_GUESTS_LIST_AVAILABLE]: requiredIf(
              false
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
        } else if (!state.value.RSVPWeddingChoices.length) {
          state.value.RSVPWeddingChoices = [WEDDING_EVENTS.CELEBRATION];
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

    const loading = ref(false);
    const alertUser: Ref<AlertUser | null> = ref(null);
    const showSuccessModal = ref(false);
    const successWasAttending = ref(true);

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
      if (v$.value.$invalid) return;

      // Generate wedding guests
      const weddingGuests: RSVPWeddingGuests = generateWeddingGuests();

      const rsvp: RSVP = {
        id: window.crypto.randomUUID(),
        name: state.value.RSVPName,
        familyList: null,
        email: state.value.RSVPEmail,
        isComing: state.value.RSVPIsComing,
        weddingChoices: weddingChoicesSorted.value,
        weddingGuests: weddingGuests,
        weddingGuestsState: copyState.value,
        mealPreferences: state.value.RSVPMealPreferences,
        message: state.value.RSVPMessage,
      };

      loading.value = true;
      RSVPSupabaseDataServices.createOrUpdate(rsvp)
        .then(() => {
          loading.value = false;

          alertUser.value = null;
          successWasAttending.value = state.value.RSVPIsComing === "yes";
          state.value = {
            RSVPName: "",
            RSVPEmail: "",
            RSVPIsComing: "yes",
            RSVPWeddingChoices: [WEDDING_EVENTS.CELEBRATION],
            RSVPWeddingGuests: {
              [WEDDING_EVENTS.KHMER_CEREMONY]: [],
              [WEDDING_EVENTS.CHURCH_CEREMONY]: [],
              [WEDDING_EVENTS.CELEBRATION]: [],
              [WEDDING_EVENTS.BRUNCH]: [],
            },
            RSVPMealPreferences: [],
            RSVPMessage: "",
          };
          v$.value.$reset();
          showSuccessModal.value = true;
        })
        .catch(() => {
          loading.value = false;

          alertUser.value = {
            type: "alert-danger",
            icon: "fa-circle-exclamation",
            message: "There was an error submitting your RSVP...",
          };
          closeAutoAlertUser();
        });
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

    return {
      v$,
      state,
      copyState,
      weddingIcon,
      weddingChoicesSorted,
      loading,
      alertUser,
      showSuccessModal,
      successWasAttending,
      sendRSVP,
      addNewGuest,
      removeGuest,
      isDisabledByCopyState,
    };
  },
  data: () => ({
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
      <h3 class="section-title">Will you join us?</h3>

      <form id="form-rsvp" ref="form-rsvp" class="mx-2">
        <!-- RSVPName field -->
        <div v-show="v$.RSVPName.$error" class="invalid-field">
          Please complete this field.
        </div>
        <div class="form-floating">
          <input
            type="text"
            name="Name"
            id="name"
            placeholder="Name"
            class="form-control required fromName"
            v-model="state.RSVPName"
          />
          <label for="name">Name*</label>
        </div>

        <!-- RSVPEmail field -->
        <div v-show="v$.RSVPEmail.$error" class="invalid-field">
          Please enter a valid email address.
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
          <label for="email">Email (optional)</label>
        </div>

        <!-- RSVPIsComing field -->
        <div v-show="v$.RSVPIsComing.$error" class="invalid-field">
          Please select an option.
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
            <label for="attend_wedding_yes">Yes, I'll be there!</label>
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
            <label for="attend_wedding_no">Unfortunately, I can't make it...</label>
          </div>
        </div>

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

        <div class="center">
          <!-- Button send form -->
          <button
            type="button"
            class="btn btn-primary"
            :disabled="loading || v$.$invalid"
            @click="sendRSVP"
          >
            <span
              v-if="loading"
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span v-if="!loading">Submit</span>
            <span v-else class="ms-2">Submitting...</span>
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

  <Transition name="rsvp-modal-fade">
    <div
      v-if="showSuccessModal"
      class="rsvp-success-backdrop"
      role="presentation"
      @click.self="showSuccessModal = false"
    >
      <div
        class="rsvp-success-modal neela-style"
        role="dialog"
        aria-modal="true"
        aria-labelledby="rsvp-success-title"
      >
        <span class="rsvp-success-line horizontal"></span>
        <span class="rsvp-success-line vertical"></span>

        <button
          type="button"
          class="rsvp-success-close"
          aria-label="Close confirmation"
          @click="showSuccessModal = false"
        >
          &times;
        </button>

        <div class="rsvp-success-icon">
          <i class="icon-diamond-ring"></i>
        </div>
        <p class="rsvp-success-kicker">Chris & Micah</p>
        <h2 id="rsvp-success-title">Thank You!</h2>
        <div class="rsvp-success-ornament">❦</div>
        <p v-if="successWasAttending">
          Your RSVP has been received. We cannot wait to celebrate our special
          day with you.
        </p>
        <p v-else>
          Your RSVP has been received. You will be dearly missed on our special
          day.
        </p>
        <button
          type="button"
          class="btn btn-primary rsvp-success-button"
          @click="showSuccessModal = false"
        >
          Close
        </button>
      </div>
    </div>
  </Transition>

  <!-- MODAL GUESTS -->
  <div
    v-if="false"
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
            Guest list (including yourself)
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
                        >Copy the guest list entered for
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
                      Please enter a last name.
                    </div>
                    <div
                      v-show="
                        v$.RSVPWeddingGuests[weddingEvent].$each.$response
                          .$errors[guestIndex].firstName.length
                      "
                      class="invalid-field"
                    >
                      Please enter a first name.
                    </div>
                    <div
                      v-show="
                        v$.RSVPWeddingGuests[weddingEvent].$each.$response
                          .$errors[guestIndex].guestType.length
                      "
                      class="invalid-field"
                    >
                      Please select an age group.
                    </div>

                    <!-- RSVPGuest Name field -->
                    <div class="col-md-4 form-floating">
                      <input
                        type="text"
                        name="Name"
                        id="name"
                        placeholder="Last name"
                        class="form-control required"
                        v-model="guest.name"
                        :disabled="isDisabledByCopyState(weddingEvent)"
                      />
                      <label class="ms-2" for="name">Last name*</label>
                    </div>

                    <!-- RSVPGuest FirstName field -->
                    <div class="col-md-4 form-floating">
                      <input
                        type="text"
                        name="FirstName"
                        id="name"
                        placeholder="First name"
                        class="form-control required"
                        v-model="guest.firstName"
                        :disabled="isDisabledByCopyState(weddingEvent)"
                      />
                      <label class="ms-2" for="name">First name*</label>
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

                      <label class="ms-2" for="age_guest">Age group</label>
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
                      <span class="ms-2">Add a guest</span>
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
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END MODAL GUESTS -->
</template>

<style scoped>
.rsvp-success-backdrop {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(54, 42, 47, 0.58);
  backdrop-filter: blur(5px);
}

.rsvp-success-modal {
  position: relative;
  width: min(520px, 100%);
  padding: 58px 54px 52px;
  overflow: hidden;
  color: #665f50;
  text-align: center;
  background: #fbfaf3;
  border: 1px solid #c9c09f;
  box-shadow: 0 24px 70px rgba(72, 48, 57, 0.28);
}

.rsvp-success-modal::before {
  position: absolute;
  inset: 10px;
  pointer-events: none;
  content: "";
  border: 1px solid rgba(175, 164, 123, 0.55);
}

.rsvp-success-line {
  position: absolute;
  display: block;
  pointer-events: none;
  background: linear-gradient(90deg, transparent, #afa47b, transparent);
}

.rsvp-success-line.horizontal {
  right: 15%;
  bottom: 30px;
  left: 15%;
  height: 1px;
}

.rsvp-success-close {
  position: absolute;
  top: 17px;
  right: 22px;
  z-index: 2;
  padding: 0;
  color: #817655;
  font-size: 30px;
  font-weight: 300;
  line-height: 1;
  background: transparent;
  border: 0;
}

.rsvp-success-icon {
  margin-bottom: 12px;
  color: #a39870;
  font-size: 46px;
}

.rsvp-success-kicker {
  margin-bottom: 8px;
  color: #817655;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
}

.rsvp-success-modal h2 {
  margin-bottom: 6px;
  color: #756a4b;
  font-family: "Playfair Display", serif;
  font-size: clamp(2.4rem, 7vw, 3.6rem);
  font-weight: 400;
}

.rsvp-success-ornament {
  margin: 4px 0 20px;
  color: #a39870;
  font-size: 24px;
}

.rsvp-success-modal p:not(.rsvp-success-kicker) {
  max-width: 370px;
  margin: 0 auto 28px;
  font-size: 1rem;
  line-height: 1.8;
}

.rsvp-success-button {
  position: relative;
  z-index: 2;
  min-width: 180px;
}

.rsvp-modal-fade-enter-active,
.rsvp-modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.rsvp-modal-fade-enter-active .rsvp-success-modal,
.rsvp-modal-fade-leave-active .rsvp-success-modal {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.rsvp-modal-fade-enter-from,
.rsvp-modal-fade-leave-to,
.rsvp-modal-fade-enter-from .rsvp-success-modal,
.rsvp-modal-fade-leave-to .rsvp-success-modal {
  opacity: 0;
}

.rsvp-modal-fade-enter-from .rsvp-success-modal,
.rsvp-modal-fade-leave-to .rsvp-success-modal {
  transform: translateY(16px) scale(0.97);
}

@media (max-width: 575px) {
  .rsvp-success-modal {
    padding: 48px 28px 42px;
  }
}
</style>
