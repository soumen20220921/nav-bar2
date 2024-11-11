
import Navbar from "./components/Navbar"
import TwitterSentiment from "./components/TwitterSentiment"
import ProductState from "./context/ProductState"

const App = () => {
  return (
    <>
      <ProductState>
        <Navbar />
        <TwitterSentiment />
      </ProductState>
    </>
  )
}

export default App