import { ReactNode } from 'react'

type AlertDialogHeaderProps = {
    children: ReactNode
}

export default function AlertDialogHeader({
    children,
}: AlertDialogHeaderProps) {
    return <header id="alertdialog-header">{children}</header>
}
