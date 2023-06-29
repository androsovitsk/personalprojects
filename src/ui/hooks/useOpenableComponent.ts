import { useCallback, useState } from 'react'

/**
 * Hook that is useful for managing openable components (like dialogs).
 * Returns an open state with the open and close handler functions.
 * */
const useOpenableComponent = (initialOpenState = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialOpenState)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return { isOpen, open, close }
}

export default useOpenableComponent
