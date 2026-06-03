import { Navbar } from "../components/Layout/Navbar";
import { Footer } from "../components/Layout/Footer";
import Checkout from "./Checkout";
import ProductGridPage from "./ProductGridPage";
import ProductDetailPage from "./ProductDetails";
function Home() {
    return (
        <>
            <Navbar />
                <ProductDetailPage/>
            <Footer />

        </>
    );
}

export default Home;