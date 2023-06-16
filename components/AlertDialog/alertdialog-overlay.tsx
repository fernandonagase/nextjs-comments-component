import { ReactNode } from 'react'

type AlertDialogOverlayProps = {
    children: ReactNode
}

export default function AlertDialogOverlay({
    children,
}: AlertDialogOverlayProps) {
    return <div>{children}</div>
}
