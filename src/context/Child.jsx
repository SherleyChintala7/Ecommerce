import { useContext } from "react"
import { SubChild } from "./SubChild"

export const Child = () => {

    return (
        <>
                <center>
                    This is Child Component
                    <SubChild/>
                </center>
        </>
    )
}