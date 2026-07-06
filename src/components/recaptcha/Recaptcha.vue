<script lang="ts">
import { computed, defineComponent } from "vue";
import { VueRecaptcha } from "vue-recaptcha";

export const EMIT_RECAPTCHA_SUCCESS = "recaptcha-success";
export const EMIT_RECAPTCHA_FAILURE = "recaptcha-failure";

export default defineComponent({
  name: "ReCaptcha",
  components: {
    VueRecaptcha,
  },
  setup(props, { emit }) {
    const siteKey = computed(() => {
      return import.meta.env.VITE_RECAPTCHA_SECRET_KEY || "env-not-set";
    });

    const handleError = () => {
      emit(EMIT_RECAPTCHA_FAILURE);
    };

    const handleSuccess = (response: string) => {
      emit(EMIT_RECAPTCHA_SUCCESS);
    };

    return {
      handleSuccess,
      handleError,
      siteKey,
    };
  },
});
</script>

<template>
  <VueRecaptcha
    :sitekey="siteKey"
    :load-recaptcha-script="true"
    @verify="handleSuccess"
    @error="handleError"
  ></VueRecaptcha>
</template>
