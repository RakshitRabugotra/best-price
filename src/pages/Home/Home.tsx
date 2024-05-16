import Card from '@/components/Carousel/Card'
import Carousel from '@/components/Carousel/Carousel'
import Heading from '@/components/Heading'

// Custom Hooks
import { useTitle } from '@/utils/hooks'

export default function App() {
  // Set the title of the page
  useTitle('Home')

  // Return the rendering part
  return (
    <>
      <Heading>Hello, World! - Home page</Heading>
      <Carousel>
        <Card heading='Apple iPad Air'></Card>
      </Carousel>
    </>
  )
}
