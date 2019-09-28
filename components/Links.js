import React from "react";
import { View } from 'react-native';
import store from "../stores/index.js";
import { observer } from "mobx-react";
import Mainpage from "../containers/Mainpage";
import Picture from "../containers/Picture";

const Links = observer(
  class Links extends React.Component {

    render() {
      const page = store.pageNav;
      let link;

      switch (page.page) {
        case "home":
          link = <Mainpage />
          break;
        case "pic":
          link = <Picture />
          break;
        default:
          break;
      }

      return (
        <View style={{flex:1}}>{link}</View>
      )
    }
  }
)

export default Links;