import type { WEDDING_EVENTS } from "@/components/wedding/forms/helpers";
import { supabase } from "@/plugins/supabase";

export enum GUEST_TYPES {
  ADULT = "Adult",
  CHILD = "Child (under 12)",
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

type RSVPRow = {
  id: string;
  name: string;
  family_list: string[] | null;
  email: string | null;
  is_coming: string;
  wedding_choices: WEDDING_EVENTS[];
  wedding_guests: RSVPWeddingGuests;
  wedding_guests_state: RSVPWeddingGuestsState;
  meal_preferences: string[];
  message: string | null;
};

const toRow = (rsvp: RSVP): RSVPRow => ({
  id: rsvp.id,
  name: rsvp.name,
  family_list: rsvp.familyList,
  email: rsvp.email || null,
  is_coming: rsvp.isComing,
  wedding_choices: rsvp.weddingChoices,
  wedding_guests: rsvp.weddingGuests,
  wedding_guests_state: rsvp.weddingGuestsState,
  meal_preferences: rsvp.mealPreferences,
  message: rsvp.message || null,
});

const fromRow = (row: RSVPRow): RSVP => ({
  id: row.id,
  name: row.name,
  familyList: row.family_list,
  email: row.email ?? undefined,
  isComing: row.is_coming,
  weddingChoices: row.wedding_choices,
  weddingGuests: row.wedding_guests,
  weddingGuestsState: row.wedding_guests_state,
  mealPreferences: row.meal_preferences,
  message: row.message ?? undefined,
});

class RSVPSupabaseDataServices {
  async getById(id: string): Promise<RSVP | null> {
    if (!supabase) return null;

    const { data, error } = await supabase.rpc("get_rsvp", { p_id: id });

    if (error) {
      throw new Error(`Error getting RSVP data for ${id}: ${error.message}`);
    }

    const row = (data as RSVPRow[] | null)?.[0];
    return row ? fromRow(row) : null;
  }

  async createOrUpdate(rsvp: RSVP): Promise<void> {
    if (!supabase) {
      throw new Error(
        "Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY."
      );
    }

    const { error } = await supabase.rpc("upsert_rsvp", {
      p_rsvp: toRow(rsvp),
    });

    if (error) {
      throw new Error(`Error saving RSVP data: ${error.message}`);
    }
  }
}

export default new RSVPSupabaseDataServices();
