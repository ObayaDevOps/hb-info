// Tiny toast store (no dependencies). Same call-site API as before:
// toaster.create({ title, description, type }) — type: success | error | warning | info
let nextId = 1
let toasts = []
const listeners = new Set()

const notify = () => {
  for (const l of listeners) l(toasts)
}

export const toaster = {
  create({ title, description, type = 'info', duration = 5000 }) {
    const id = nextId++
    toasts = [...toasts, { id, title, description, type }]
    notify()
    if (duration > 0) {
      setTimeout(() => toaster.dismiss(id), duration)
    }
    return id
  },
  dismiss(id) {
    toasts = toasts.filter((t) => t.id !== id)
    notify()
  },
  subscribe(listener) {
    listeners.add(listener)
    listener(toasts)
    return () => listeners.delete(listener)
  },
}
