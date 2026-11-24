'use strict'
export const parseEventDate = function (e) {
  let t = e.trim()
  if (!t.includes('T') || /Z$|[+-]\d{2}:\d{2}$/.test(t)) return new Date(t)
  let a = /T\d{2}:\d{2}$/.test(t) ? `${t}:00` : t
  // no offset given: read the time as Europe/London wall-clock time
  let u = new Date(`${a}Z`),
    p = Object.fromEntries(
      new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/London', hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })
        .formatToParts(u)
        .map((x) => [x.type, x.value]),
    )
  return new Date(u.getTime() - (Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute, +p.second) - u.getTime()))
}
