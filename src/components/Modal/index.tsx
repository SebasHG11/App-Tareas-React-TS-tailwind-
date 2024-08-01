import React from "react"
import { createPortal } from "react-dom"

type Props = {
    children: React.ReactNode
}

export const Modal = ({ children }: Props): JSX.Element => {
    const portal = window.document.getElementById("portal-root");

    if (portal) {
        return createPortal(
            <div className="grid place-items-center bg-opacity-50 bg-slate-800 fixed top-0 bottom-0 left-0 right-0 z-50 text-white w-full">
                {children}
            </div>,
            portal
        )
    } else {
        return (
            <></>
        )
    }

}