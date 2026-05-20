"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { ContactDialog } from "@/components/ui/contact-dialog"

interface PrefillData {
  interest?: string
  message?: string
}

interface ContactContextType {
  open: (prefill?: PrefillData) => void
}

const ContactContext = createContext<ContactContextType>({ open: () => {} })

export function useContact() {
  return useContext(ContactContext)
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [prefill, setPrefill] = useState<PrefillData | undefined>()

  const open = (p?: PrefillData) => {
    setPrefill(p)
    setIsOpen(true)
  }

  return (
    <ContactContext.Provider value={{ open }}>
      {children}
      <ContactDialog
        open={isOpen}
        prefill={prefill}
        onClose={() => { setIsOpen(false); setPrefill(undefined) }}
      />
    </ContactContext.Provider>
  )
}
