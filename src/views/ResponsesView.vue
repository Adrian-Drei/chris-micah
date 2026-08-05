<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import RSVPDataServices, {
  type RSVPResponse,
} from "@/services/supabase/RSVPDataServices";

const email = ref("");
const password = ref("");
const responses = ref<RSVPResponse[]>([]);
const authenticated = ref(false);
const loading = ref(true);
const submitting = ref(false);
const errorMessage = ref("");

const attending = computed(() =>
  responses.value.filter((response) => response.isComing === "yes")
);
const declining = computed(() =>
  responses.value.filter((response) => response.isComing === "no")
);

const formatDate = (value: string) => {
  if (!value) return "—";
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
};

const loadResponses = async () => {
  loading.value = true;
  errorMessage.value = "";
  try {
    responses.value = await RSVPDataServices.getResponses();
    authenticated.value = true;
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : "Unable to load responses.";
  } finally {
    loading.value = false;
  }
};

const login = async () => {
  submitting.value = true;
  errorMessage.value = "";
  try {
    await RSVPDataServices.signIn(email.value, password.value);
    password.value = "";
    await loadResponses();
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : "Unable to sign in.";
  } finally {
    submitting.value = false;
  }
};

const logout = async () => {
  await RSVPDataServices.signOut();
  authenticated.value = false;
  responses.value = [];
};

onMounted(async () => {
  if (await RSVPDataServices.hasSession()) {
    await loadResponses();
  } else {
    loading.value = false;
  }
});
</script>

<template>
  <main class="responses-page pattern">
    <div v-if="loading" class="responses-loading">
      <i class="icon-diamond-ring"></i>
      <p>Gathering responses…</p>
    </div>

    <section v-else-if="!authenticated" class="login-card neela-style">
      <span class="double-border"></span>
      <i class="icon-diamond-ring login-icon"></i>
      <p class="eyebrow">Chris & Micah</p>
      <h1>Guest Responses</h1>
      <div class="ornament">❦</div>
      <p class="login-copy">Sign in to view the private RSVP list.</p>

      <form @submit.prevent="login">
        <div class="form-floating">
          <input
            id="admin-email"
            v-model="email"
            type="email"
            class="form-control"
            placeholder="Email"
            required
          />
          <label for="admin-email">Email</label>
        </div>
        <div class="form-floating">
          <input
            id="admin-password"
            v-model="password"
            type="password"
            class="form-control"
            placeholder="Password"
            required
          />
          <label for="admin-password">Password</label>
        </div>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <button class="btn btn-primary login-button" :disabled="submitting">
          {{ submitting ? "Signing in…" : "View Responses" }}
        </button>
      </form>
    </section>

    <section v-else class="dashboard container">
      <div class="dashboard-heading">
        <div>
          <p class="eyebrow">Chris & Micah</p>
          <h1>RSVP Responses</h1>
        </div>
        <div class="dashboard-actions">
          <button class="btn btn-light" @click="loadResponses">Refresh</button>
          <button class="btn btn-primary" @click="logout">Sign Out</button>
        </div>
      </div>

      <p v-if="errorMessage" class="error-message dashboard-error">
        {{ errorMessage }}
      </p>

      <div class="summary-grid">
        <article class="summary-card">
          <span>Total Responses</span><strong>{{ responses.length }}</strong>
        </article>
        <article class="summary-card attending">
          <span>Joyfully Accept</span><strong>{{ attending.length }}</strong>
        </article>
        <article class="summary-card declining">
          <span>Cannot Attend</span><strong>{{ declining.length }}</strong>
        </article>
      </div>

      <div class="responses-table-card">
        <div v-if="!responses.length" class="empty-state">
          <i class="icon-diamond-ring"></i>
          <h2>No responses yet</h2>
          <p>Submitted RSVPs will appear here.</p>
        </div>
        <div v-else class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Attendance</th>
                <th>Email</th>
                <th>Message</th>
                <th>Submitted</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="response in responses" :key="response.id">
                <td class="guest-name">{{ response.name }}</td>
                <td>
                  <span
                    class="status-pill"
                    :class="response.isComing === 'yes' ? 'yes' : 'no'"
                  >
                    {{ response.isComing === "yes" ? "Attending" : "Declined" }}
                  </span>
                </td>
                <td>{{ response.email || "—" }}</td>
                <td class="message-cell">{{ response.message || "—" }}</td>
                <td>{{ formatDate(response.createdAt) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.responses-page {
  min-height: calc(100vh - 120px);
  padding: 90px 20px;
  color: #665a5f;
  background-color: #fffafa;
}

.responses-loading {
  padding-top: 12vh;
  color: #c77896;
  text-align: center;
  font-size: 1rem;
  letter-spacing: 0.08em;
}

.responses-loading i { display: block; margin-bottom: 18px; font-size: 46px; }

.login-card {
  position: relative;
  width: min(520px, 100%);
  margin: 0 auto;
  padding: 64px 58px 58px;
  text-align: center;
  background: rgba(255, 252, 251, 0.96);
  border: 1px solid #d990aa;
  box-shadow: 0 24px 70px rgba(91, 62, 72, 0.14);
}

.double-border { position: absolute; inset: 10px; pointer-events: none; border: 1px solid rgba(217,144,170,.5); }
.login-icon { display: block; margin-bottom: 15px; color: #d990aa; font-size: 48px; }
.eyebrow { margin: 0 0 8px; color: #b9778f; font-size: .75rem; font-weight: 600; letter-spacing: .27em; text-transform: uppercase; }
.login-card h1, .dashboard h1 { margin: 0; color: #c77896; font-family: "Playfair Display", serif; font-size: clamp(2.4rem, 6vw, 3.7rem); font-weight: 400; }
.ornament { margin: 8px 0 18px; color: #d990aa; font-size: 23px; }
.login-copy { margin-bottom: 28px; }
.login-card form { position: relative; z-index: 1; }
.login-button { width: 100%; margin-top: 8px; }
.error-message { margin: 12px 0; color: #a54252; font-size: .9rem; }

.dashboard { max-width: 1240px; }
.dashboard-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; margin-bottom: 42px; }
.dashboard-actions { display: flex; gap: 10px; }
.dashboard-error { padding: 14px 18px; background: #fff0f2; border-left: 3px solid #c77896; }
.summary-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 28px; }
.summary-card { padding: 25px 28px; background: #fff; border: 1px solid #ead4dc; box-shadow: 0 10px 35px rgba(91,62,72,.07); }
.summary-card span { display: block; color: #8a7d82; font-size: .72rem; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; }
.summary-card strong { display: block; margin-top: 8px; color: #c77896; font-family: "Playfair Display", serif; font-size: 2.8rem; font-weight: 400; }
.summary-card.attending { border-top: 3px solid #bc8d9f; }
.summary-card.declining { border-top: 3px solid #b7aaa9; }

.responses-table-card { overflow: hidden; background: #fff; border: 1px solid #ead4dc; box-shadow: 0 14px 45px rgba(91,62,72,.08); }
.table-responsive { overflow-x: auto; }
table { width: 100%; border-collapse: collapse; }
th { padding: 17px 20px; color: #8c737d; font-size: .69rem; letter-spacing: .14em; text-align: left; text-transform: uppercase; background: #fff6f7; border-bottom: 1px solid #ead4dc; }
td { padding: 18px 20px; vertical-align: top; border-bottom: 1px solid #f1e5e9; }
tbody tr:last-child td { border-bottom: 0; }
.guest-name { color: #815d6b; font-family: "Playfair Display", serif; font-size: 1.08rem; }
.message-cell { min-width: 220px; white-space: pre-wrap; }
.status-pill { display: inline-block; padding: 6px 11px; font-size: .68rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; border-radius: 30px; }
.status-pill.yes { color: #805567; background: #f5dfe7; }
.status-pill.no { color: #6f6563; background: #eee9e7; }
.empty-state { padding: 80px 20px; text-align: center; }
.empty-state i { color: #d990aa; font-size: 45px; }
.empty-state h2 { margin: 18px 0 5px; color: #c77896; font-family: "Playfair Display", serif; }

@media (max-width: 767px) {
  .responses-page { padding: 55px 14px; }
  .login-card { padding: 52px 28px 45px; }
  .dashboard-heading { align-items: flex-start; flex-direction: column; }
  .summary-grid { grid-template-columns: 1fr; }
  .dashboard-actions { width: 100%; }
  .dashboard-actions .btn { flex: 1; }
}
</style>
