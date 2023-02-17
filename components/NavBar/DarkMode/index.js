import { Flex, useColorMode } from '@chakra-ui/react';
import { useContext } from 'react';
import { MdOutlineDarkMode } from 'react-icons/md'
import { WiSolarEclipse } from 'react-icons/wi';
import { GlobalProvider } from '../../../context/GlobalContext';

const DarkMode = () => {

    const { toggleColorMode } = useColorMode();

    const {
        handlerDarkMode,
        darkMode
    } =  useContext(GlobalProvider);

    return(
        <>
        <Flex
          w={'30px'}
          h={'30px'}
          boxShadow={'0 0 10px 0 rgba(0,0,0,.25)'}
          justifyContent={'center'}
          alignItems={'center'}
          borderRadius={'50%'}
          ml={'1rem'}
          cursor={'pointer'}
          onClick={
            ()=>{
              toggleColorMode();
              handlerDarkMode();
            }
          }
          >
            {
            darkMode ?
            <MdOutlineDarkMode/>
            :
            <WiSolarEclipse/>
          }
          </Flex>
        </>
    )
}

export default DarkMode