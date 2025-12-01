import { createContext, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

type ToastMessage = {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
  variant?: 'default' | 'success' | 'destructive'
  duration?: number
}

type CreateToastPayload = Omit<ToastMessage, 'id'>

interface ToastContextValue {
  toasts: ToastMessage[]
  toast: (toast: CreateToastPayload) => void
  dismiss: (id?: string) => void
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined)

export const ToastProviderContext = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  const toast = (toast: CreateToastPayload) => {
    const id = typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : Math.random().toString(36).slice(2)
    const duration = toast.duration ?? 5000
    setToasts((current) => [...current, { ...toast, id, duration }])
    if (typeof window !== 'undefined') {
      window.setTimeout(() => dismiss(id), duration)
    }
  }

  const dismiss = (id?: string) => {
    if (!id) {
      setToasts([])
      return
    }
    setToasts((current) => current.filter((toast) => toast.id !== id))
  }

  const value = useMemo(() => ({ toasts, toast, dismiss }), [toasts])

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastProviderContext')
  }
  return context
}

