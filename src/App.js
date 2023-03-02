import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemsList from "./components/ItemsList";

//class-constructos para no usar usaState
// with super pasamos props a padre

/*class App extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      items: [{
        id:
        title:
        img:
        category:
        price:
      }, 
      ]
    }
  }
  render () {*/

const App = () => {

  

return (
    <div className="wrapper">
      <Header />
      <ItemsList />
      <Footer />
      

    </div>
  );
}

export default App;
