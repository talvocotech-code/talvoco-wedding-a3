'use strict'
// Occasion labels used by the shared invitation components (wedding only in this template).
const t = { wedding: { id: 'wedding', label: 'Wedding' } }
export const OCCASION_CONFIGS = t
export const getOccasionConfig = function (e) {
  return e && e in t ? t[e] : t.wedding
}
