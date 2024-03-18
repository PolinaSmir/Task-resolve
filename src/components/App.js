import React from "react";
import List from "./List/List";
import FlexContainer from "./FlexContainer/FlexContainer";

// class App extends React.Component { /// was on video (065) React.Formy
//   render() {
//     return <UserList />
//   }
// }

function App() {
  return (
    <FlexContainer flexDirection="row" justifyContent="center" alignItems="stretch">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </FlexContainer>
  );
}

export default App;
