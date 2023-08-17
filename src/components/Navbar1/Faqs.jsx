import React from 'react'
// import Navbar from './Navbar'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Heading, Text } from '@chakra-ui/react';
import Navbar1 from './Navbar1';

const Faqs = () => {
    const faqsData = [
        {
            question: 'What is Chakra UI?',
            answer: 'Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.'
        },
        {
            question: 'How do I install Chakra UI?',
            answer: 'You can install Chakra UI using npm or yarn. Use the following command: npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion'
        },
        {
            question: 'Can I customize the styles of Chakra UI components?',
            answer: 'Yes, you can easily customize the styles of Chakra UI components using the ChakraProvider and the theme object.'
        },
        // Add more FAQs here
    ];
    return (
        <div>
            <Navbar1 />
            <Box p={ 4 }>
                <Heading size="lg" mb={ 4 }>Frequently Asked Questions</Heading>
                <Accordion allowToggle>
                    { faqsData.map((faq, index) => (
                        <AccordionItem key={ index }>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        { faq.question }
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={ 4 }>
                                <Text>{ faq.answer }</Text>
                            </AccordionPanel>
                        </AccordionItem>
                    )) }
                </Accordion>
            </Box>
        </div>
    )
}

export default Faqs