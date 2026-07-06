import type { WEDDING_EVENTS } from "@/components/wedding/forms/helpers";
import { doc, getDoc, setDoc } from "firebase/firestore";

import { db } from "@/plugins/firebase";

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

class RSVPFirestoreDataServices {
  async getById(id: string): Promise<RSVP | null> {
    try {
      const docRef = doc(db, "rsvp", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data() as RSVP;
      }
    } catch (error) {
      throw new Error(`Error on get RSVP data for ${id}: ${error}`);
    }
    return null;
  }

  async createOrUpdate(rsvp: RSVP): Promise<void> {
    try {
      await setDoc(doc(db, "rsvp", rsvp.id), rsvp);
    } catch (error) {
      throw new Error(`Error on create or update RSVP data: ${error}`);
    }
  }
}

export default new RSVPFirestoreDataServices();
