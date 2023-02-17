
import { Flex } from "@chakra-ui/react"
import DarkMode from "./DarkMode"
import Logo from "./Logo"

const NavBar = () => {
    return(
        <>
          <Flex
          w={'100%'}
          h={'50px'}
          p={'1rem'}
          boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
          alignItems={'center'}
          justifyContent={'space-between'}
          >
          <Logo/>
          <DarkMode/>
          </Flex>
        </>
    )
}

export default NavBar