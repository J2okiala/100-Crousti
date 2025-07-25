import type { ReactNode } from "react";

interface Props{
    children:ReactNode;

}

export default function Alert({children}: Props){
    return(
        <div>
            {children}
        </div>
    )
}