
export function emitEvent (el, evtType, evtData) {
  let evt

  if (typeof CustomEvent === 'function') {
    evt = new CustomEvent(evtType, {detail: evtData})
  } else {
    evt = document.createEvent('CustomEvent')
    evt.initCustomEvent(evtType, false, false, evtData)
  }

  el.dispatchEvent(evt)
}
