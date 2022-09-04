import { ToastId, useToast, UseToastOptions } from '@chakra-ui/react'
import Cookies from 'js-cookie'
import { createContext, useEffect, useRef, useState } from 'react'
import { CookieConsentPopup } from '../../../components/commons/CookieConsentPopup'
import { HasChildren } from '../../../util/types'
import { CookieKeys } from '../CookieKeys'

export type CookieConsentContextType = {
  isAccepted: boolean
}

export const CookieConsentContext = createContext<CookieConsentContextType>({
  isAccepted: false
})

export const CookieConsentProvider = ({ children }: HasChildren) => {
  const toast = useToast()
  const toastIdRef = useRef<ToastId>()
  const [isAccepted, setIsAccepted] = useState<boolean>(Cookies.get(CookieKeys.REMARK_COOKIE_CONSENTED) === 'true')

  const toastOptions: UseToastOptions = {
    containerStyle: {
      width: '100%',
      maxWidth: '100%'
    },
    render: () => <CookieConsentPopup onClick={() => setIsAccepted(true)} />,
    duration: null,
    isClosable: true
  }

  useEffect(() => {
    Cookies.set(CookieKeys.REMARK_COOKIE_CONSENTED, isAccepted ? 'true' : 'false')
    if (isAccepted && toastIdRef.current) {
      toast.close(toastIdRef.current)
    }
  }, [isAccepted])

  useEffect(() => {
    if (!isAccepted) {
      toastIdRef.current = toast(toastOptions)
    }
  }, [])

  return <CookieConsentContext.Provider value={{ isAccepted }}>{children}</CookieConsentContext.Provider>
}
