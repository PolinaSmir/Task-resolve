import React from "react";
import List from "./List/List";
import FlexContainer from "./FlexContainer/FlexContainer";
import UserList from "./UserList/UserList";
import Tree from "./Tree/Tree";
import { UserContext } from "./contexts/userContext";
// class App extends React.Component { /// was on video (065) React.Formy
//   render() {
//     return <UserList />
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: "john",
        lastName: "Doe",
        email: "john@gmail.com",
        avatar: "",
      },
    };
  }

  logOut = () => {
    this.setState({
      user: {},
    });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          logOut: this.logOut,
        }}
      >
        App
        <Tree />
      </UserContext.Provider>
    );
  }
}

export default App;
