import React from "react"
import { createPortal } from "react-dom"

type Props = {
    children: React.ReactNode
}

export const Modal = ({ children }: Props): JSX.Element => {
    const portal = window.document.getElementById("portal-root");

    if (portal) {
        return createPortal(
            children,
            portal
        )
    } else {
        return (
            <></>
        )
    }

}