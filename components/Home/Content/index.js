import { Flex } from "@chakra-ui/react";
import LeitorQRODE from "./LeitorQRCODE";
import TextQRCODE from "./TextQRCODE";

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
                <TextQRCODE/>
            </Flex>
        </>
    )

}


export default Content;