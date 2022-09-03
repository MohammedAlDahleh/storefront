import Header from './components/header/header';
import Products from './components/products/products';
import Footer from './components/footer/footer';
import Categories from './components/categories/categories';

export default function App(props) {
  return (
    <>
      <Header />
      <Categories />
      <Products />
      <Footer />
    </>
  );
}
