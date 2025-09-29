import { Accordion, Box, Text } from '@chakra-ui/react'

export default function FaqAccordion({ items = [], defaultOpenValues }) {
  return (
    <Accordion.Root multiple defaultValue={defaultOpenValues} variant="outline">
      {items.map((item, index) => (
        <Accordion.Item key={index} value={String(index)}>
          <Accordion.ItemTrigger>
            <Box as="span" flex="1" fontWeight="600">{item.q}</Box>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>
              <Text>{item.a}</Text>
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
