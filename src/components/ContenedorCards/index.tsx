import React from "react";

type Props = {
    children: React.ReactNode
}

export const ContenedorCards = (props: Props): JSX.Element=>{
    return(
        <div className="w-full grid place-items-center">
            {props.children}
        </div>
    );
}