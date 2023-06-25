import { ReactNode } from 'react'

type AlertDialogBodyProps = {
    children: ReactNode
}

export default function AlertDialogBody({ children }: AlertDialogBodyProps) {
    return <div id="alertdialog-body">{children}</div>
}
