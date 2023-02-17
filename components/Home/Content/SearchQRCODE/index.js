import { Box, Button, Flex, Input, InputGroup, InputRightElement, Textarea } from "@chakra-ui/react"
import { useContext } from "react";
import { BiSearchAlt } from 'react-icons/bi'
import { GlobalProvider } from "../../../../context/GlobalContext";

const SearchQRCODE = () =>{

    const {
        onChangerSearch,
        search
    } =  useContext(GlobalProvider);

    return(
        <>
      <Box 
      w={'100%'}
      maxW={'780px'}
      mt={'2.5rem'}
      >
        <Box
        mb={'.5rem'}
        >
          Tamanho de caracter digitado <strong>{search.length}</strong>
        </Box>
         <Textarea
          h={'250px'}
          resize={'none'}
          maxLength={'20000'}
          onChange={onChangerSearch}
         />
        </Box>
        </>
    )
}

export default SearchQRCODE