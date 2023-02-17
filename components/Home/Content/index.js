import { Flex } from "@chakra-ui/react";
import LeitorQRODE from "./LeitorQRCODE";
import SearchQrCode from "./SearchQRCODE";

const Content = () => {

    return (
        <>
            <Flex
                w={'100%'}
                p={'1rem'}
                alignItems={'center'}
                justifyContent={'center'}
                flexDirection={'column'}
            >
                <LeitorQRODE />
                <SearchQrCode/>
            </Flex>
        </>
    )

}


export default Content;