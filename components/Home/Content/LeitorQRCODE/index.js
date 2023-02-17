import { Box, Flex } from "@chakra-ui/react"
import { useContext } from "react";
import QRCode from "react-qr-code"
import { GlobalProvider } from "../../../../context/GlobalContext";

const LeitorQRODE = () => {

    const {
        search
    } = useContext(GlobalProvider);

    return (
        <>
            <Flex
                bg={'#fff'}
                w={'320px'}
                h={'320px'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <QRCode
                    value={search}
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