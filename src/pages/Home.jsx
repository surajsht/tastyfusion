import Navbar from "../component/navbar/Navbar";
import Form from "../component/form/Form";
import Recipe from "../component/recipe/Recipe";
import Context from "../context/Context";

const Home = () => {
  return (
    <Context>
      <Navbar />
      <Form />
      <Recipe />
    </Context>
  );
};

export default Home;
