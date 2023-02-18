import QRCode from "react-qr-code"
import { Flex } from "@chakra-ui/react"
import { useContext } from "react";
import { GlobalProvider } from "../../../../context/GlobalContext";
import DownloadQRCODE from "../DownloadQRCODE";

const LeitorQRODE = () => {

    const {
        textQr
    } = useContext(GlobalProvider);

    return (
        <>
            <Flex
                mt={'1rem'}
                bg={'#fff'}
                w={'305px'}
                h={'305px'}
                justifyContent={'center'}
                alignItems={'center'}
                position={'relative'}
            >
                <DownloadQRCODE/>
                <QRCode
                    value={textQr}
                    style={{
                        width: '290px',
                        height: '290px'
                    }}
                />
            </Flex>
        </>
    )
}

export default LeitorQRODE