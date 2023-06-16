import React from 'react'
import { ReactNode } from 'react'

import FocusLock from 'react-focus-lock'

type ModalContentProps = {
    children: ReactNode
    onClose: () => void
}

export default function ModalContent({ children, onClose }: ModalContentProps) {
    function handleEsc(event: React.KeyboardEvent) {
        const pressedEsc = event.key === 'Escape'
        if (pressedEsc) onClose()
    }

    return (
        <FocusLock returnFocus>
            <div
                role="alertdialog"
                aria-modal="true"
                aria-labelledby="alertdialog-header"
                aria-describedby="alertdialog-body"
                onKeyDown={handleEsc}
                tabIndex={-1}
            >
                {children}
            </div>
        </FocusLock>
    )
}
