import { Flex, Img } from "@chakra-ui/react"
import { useContext } from "react";
import { GlobalProvider } from "../../../../context/GlobalContext";
import DownloadQRCODE from "../DownloadQRCODE";

const LeitorQRODE = () => {

    const {
        textQr
    } = useContext(GlobalProvider);

    const qrCodeUrl = `https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${encodeURIComponent(textQr)}`;

    return (
        <>
            <Flex
                mt={'2rem'}
                justifyContent={'center'}
                alignItems={'center'}
                position={'relative'}
            >
                <DownloadQRCODE
                qrCodeUrl={qrCodeUrl}
                />  
            </Flex>
                <Img
                    src={qrCodeUrl}
                    w={'350px'}
                    h={'350px'}
                />
        </>
    )
}

export default LeitorQRODE