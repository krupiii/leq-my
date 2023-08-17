import { Box, Heading, Text, VStack } from '@chakra-ui/react';

import React from 'react'
// import Navbar from './Navbar'
import Navbar1 from './Navbar1';

const Contact = () => {
    return (
        <div>
            <Navbar1 />
            <Box p={ 4 }>
                <Heading size="lg" mb={ 4 }>Contact Us</Heading>
                <VStack spacing={ 2 } align="left">
                    <Text>
                        If you have any questions or inquiries, please feel free to get in touch with us using the contact details below:
                    </Text>
                    <Text>
                        Email: contact@example.com
                    </Text>
                    <Text>
                        Phone: +1 (555) 123-4567
                    </Text>
                    <Text>
                        Address: 123 Main Street, City, Country
                    </Text>
                </VStack>
                {/* Add a contact form or any additional content here */ }
            </Box>
        </div>
    )
}

export default Contact