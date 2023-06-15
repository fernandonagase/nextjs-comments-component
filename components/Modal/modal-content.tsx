import { ReactNode } from 'react'

type ModalContentProps = {
    children: ReactNode
}

export default function ModalContent({ children }: ModalContentProps) {
    return (
        <div
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="alertdialog-header"
            aria-describedby="alertdialog-body"
        >
            {children}
        </div>
    )
}
