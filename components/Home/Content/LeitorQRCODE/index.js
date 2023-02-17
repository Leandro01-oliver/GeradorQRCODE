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
                    width:'200px',
                    height:'200px'
                }}
                />
        </>
    )
}

export default LeitorQRODE