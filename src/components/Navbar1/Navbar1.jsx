// eslint-disable-next-line no-unused-vars
import { Link } from '@chakra-ui/layout'
// eslint-disable-next-line no-unused-vars
import { Box, Center, Flex, Image, Spacer, Square, Text } from '@chakra-ui/react'
import Logo from '../Navbar1/Img2/58bace42e0e777c45691cecfc1f4167e.jpg'
import React from 'react'

const Navbar1 = () => {
    return (
        <>
            <div>
                <Box fontSize={ 17 } bg='black' w='100%' p={ 4 } color='white'>
                    <Flex>
                        <Image
                            boxSize='80px'
                            objectFit='cover'
                            src={ Logo }
                            alt='Dan Abramov'
                            borderradius='10px'
                            mx={ 15 }

                        />
                        <Spacer />

                        <Flex color='white'>
                            <Center px={ 4 } py={ 1 } mx={ 4 }>
                                <Link to={ '/' }>
                                    Home
                                </Link>
                            </Center>

                            <Center px={ 4 } py={ 1 } mx={ 4 }>
                                <Link to={ '/faqs' }>
                                    <Text>
                                        FAQs
                                    </Text>
                                </Link>
                            </Center>

                            <Center px={ 4 } py={ 1 } mx={ 4 }>
                                <Link to={ '/about' }>
                                    <Text>
                                        About
                                    </Text>
                                </Link>
                            </Center>

                            <Center px={ 4 } py={ 1 } mx={ 4 }>
                                <Link to='/contect' >
                                    <Text>
                                        Contect
                                    </Text>
                                </Link>
                            </Center>
                        </Flex>
                    </Flex>
                </Box>
            </div>

        </>
    )
}

export default Navbar1