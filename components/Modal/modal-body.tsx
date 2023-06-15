import { ReactNode } from 'react'

type ModalBodyProps = {
    children: ReactNode
}

export default function ModalBody({ children }: ModalBodyProps) {
    return <div id="alertdialog-body">{children}</div>
}
