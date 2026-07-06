import type { WEDDING_EVENTS } from "@/components/wedding/forms/helpers";
import { getDatabase, ref, child, get, set } from "firebase/database";

import { app } from "@/plugins/firebase";

export enum GUEST_TYPES {
  ADULT = "Adulte",
  CHILD = "Enfant (moins de 12 ans)",
}

export type RSVPWeddingGuest = {
  name: string;
  firstName: string;
  guestType: GUEST_TYPES;
};

export type RSVPWeddingGuests = {
  [WEDDING_EVENTS.KHMER_CEREMONY]: RSVPWeddingGuest[];
  [WEDDING_EVENTS.CHURCH_CEREMONY]: RSVPWeddingGuest[];
  [WEDDING_EVENTS.CELEBRATION]: RSVPWeddingGuest[];
  [WEDDING_EVENTS.BRUNCH]: RSVPWeddingGuest[];
};

export type RSVPWeddingGuestsState = {
  [WEDDING_EVENTS.KHMER_CEREMONY]: boolean;
  [WEDDING_EVENTS.CHURCH_CEREMONY]: boolean;
  [WEDDING_EVENTS.CELEBRATION]: boolean;
  [WEDDING_EVENTS.BRUNCH]: boolean;
};

export type RSVP = {
  id: string;
  name: string;
  familyList: string[] | null;
  email?: string;
  isComing: string;
  weddingChoices: WEDDING_EVENTS[];
  weddingGuests: RSVPWeddingGuests;
  weddingGuestsState: RSVPWeddingGuestsState;
  mealPreferences: string[];
  message?: string;
};

class RSVPRealtimeDataServices {
  async getById(id: string): Promise<RSVP> {
    const dbRef = ref(getDatabase(app));
    return get(child(dbRef, `rsvp/${id}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        }
        return null;
      })
      .catch((error) => {
        throw new Error(`Error on get RSVP data for ${id}: ${error}`);
      });
  }

  async createOrUpdate(rsvp: RSVP): Promise<void> {
    try {
      const db = getDatabase(app);
      await set(ref(db, "rsvp/" + rsvp.id), rsvp);
    } catch (error) {
      throw new Error(`Error on create or update RSVP data: ${error}`);
    }
  }
}

export default new RSVPRealtimeDataServices();
