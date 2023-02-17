import { Box } from "@chakra-ui/react"
import { useContext } from "react";
import QRCode from "react-qr-code"
import { GlobalProvider } from "../../../../context/GlobalContext";

const LeitorQRODE = () =>{

    const {
        search
    } =  useContext(GlobalProvider);

    return(
        <>
            <QRCode 
                value={search}
                style={{
                    width:'325px',
                    height:'325px'
                }}
                />
        </>
    )
}

export default LeitorQRODE