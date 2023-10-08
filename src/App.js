import "./App.css";

import Item from "./component/Item";
import ItemData from "./component/ItemData";
import Card from "./component/Card";
import NewProduct from "./component/NewProduct";
// import ProductForm from "./component/ProductForm";

function App() {
  const itemTwoName = "wheel";
  const itemTwoDay = "20";
  const itemTwoMonth = "may";
  const itemTwoYear = "2015";

  const itemThree = [
    {
      itemName: "1-surfExcel",
      itemDay: 125,
      itemMonth: "1-august",
      itemYear: 12002,
    },
    {
      itemName: "2-surfExcel",
      itemDay: 225,
      itemMonth: "2-august",
      itemYear: 22002,
    },
    {
      itemName: "3-surfExcel",
      itemDay: 325,
      itemMonth: "3-august",
      itemYear: 32002,
    },
  ];

  // props drilling : we communicate parent to child means passing the data from parent to child using simply props but
  // state lifting : how to cummunicate child to parent means child component no data parent access kai rite karse ?
  // we create function in parent and function parameter is obj then we pass this function to child using props and then child componet call function by passing obj parameter and then funtion can esaily access the obj of child componenet

  function printProductData(data) {
    console.log("i am inside App.js")
    console.log(data);
  }

  // we pass this function to child componet ( e.g. <NewProduct />)  using props

  return (
    <div>
      {/* we pass the printPruductData function to NewPoduct component using props */}
      <NewProduct printProduct={printProductData} />

      {/* koi pan cutome component element banaviae and aena andar bijo data nakhiae to ae by default unvisible hoy have aene visible karava mate componnet ma props.children mehod lakhvi pade  */}
      {/* jo card component ma props.children na lakhiae to card componet(card html element) ma nakhelo content dekhase nai */}
      <Card>
        {/* first method to put value hard value directly */}
        <Item name="nirma" className="firstitem">
          hello jee main hu aapki first item
        </Item>
        <ItemData day="10" month="january" year="2010"></ItemData>

        {/* second method to put value by constructing variable*/}
        <Item name={itemTwoName}></Item>
        <ItemData
          day={itemTwoDay}
          month={itemTwoMonth}
          year={itemTwoYear}
        ></ItemData>

        {/* thirs method to put value by api */}
        <Item name={itemThree[2].itemName}></Item>
        <ItemData
          day={itemThree[0].itemDay}
          month={itemThree[1].itemMonth}
          year={itemThree[2].itemYear}
        ></ItemData>

        <div className="App">
          hello jee
          <p>this is app paragraph</p>
        </div>

        <Item></Item>
        <ItemData></ItemData>
      </Card>
    </div>
  );
}

export default App;
