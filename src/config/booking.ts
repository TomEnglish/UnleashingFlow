/**
 * Single source of truth for the Discovery booking calendar.
 *
 * SCHEDULE_ID is the ID of a Google Calendar appointment schedule. To find it,
 * open the schedule for editing in Google Calendar — the browser URL reads
 * .../calendar/u/0/appointments/schedules/<ID> — and copy the <ID> segment.
 * Both public URLs below are derived from it, so this is the only value to
 * change when pointing the site at a different calendar.
 *
 * Verify a new ID before shipping it: the booking URL should return 200 and
 * show the expected schedule name.
 *   curl -sI "https://calendar.google.com/calendar/appointments/schedules/<ID>"
 */
export const SCHEDULE_ID =
  'AcZssZ1xFM0deUwdquDCC59CACNbBVvCg152S6McnJo1dZtUFDVBlJf6Bp6671A0NGQb95GdjbKKQ0-H';

/** Public booking page — every button and text link on the site. */
export const BOOKING_URL =
  `https://calendar.google.com/calendar/appointments/schedules/${SCHEDULE_ID}`;

/** Same page in embeddable form — used only by BookingEmbed's iframe. */
export const BOOKING_EMBED_URL = `${BOOKING_URL}?gv=true`;
