import { Box, Button, Flex, Input, InputGroup, InputRightElement, Textarea } from "@chakra-ui/react"
import { useContext } from "react";
import { BiSearchAlt } from 'react-icons/bi'
import { GlobalProvider } from "../../../../context/GlobalContext";

const SearchQRCODE = () =>{

    const {
        onChangerSearch,
        handlerSubmite
    } =  useContext(GlobalProvider);

    return(
        <>
      <Box 
      w={'100%'}
      maxW={'780px'}
      mb={'5rem'}
      >
         <Textarea
           h={'300px'}
          resize={'none'}
          onChange={onChangerSearch}
         />
        </Box>
        </>
    )
}

export default SearchQRCODE