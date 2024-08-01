import React from "react";

type Props = {
    children: React.ReactNode
}

export const ContenedorCards = (props: Props): JSX.Element=>{
    return(
        <>
            {props.children}
        </>
    );
}