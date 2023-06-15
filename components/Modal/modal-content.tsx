import { KeyboardEvent, ReactNode } from 'react'

type ModalContentProps = {
    children: ReactNode
    onClose: () => void
}

export default function ModalContent({ children, onClose }: ModalContentProps) {
    function handleEsc(event: KeyboardEvent) {
        const pressedEsc = event.key === 'Escape'
        if (pressedEsc) onClose()
    }

    return (
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
    )
}
