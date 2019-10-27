import React from "react";
import { View } from "react-native";
import store from "../stores/index.js";
import { observer } from "mobx-react";
import Mainpage from "../containers/Mainpage";
import Picture from "../containers/Picture";
import PersonalDetails from "../containers/PersonalDetails";
import SetupAuthy from "../containers/SetupAuthy";
import Tutorial from "../containers/Tutorial";

const Links = observer(
  class Links extends React.Component {
    render() {
      const page = store.pageNav;
      let link;

      switch (page.page) {
        case "home":
          link = <Mainpage />;
          break;
        case "pic":
          link = <Picture />;
          break;
        case "personal":
          link = <PersonalDetails />;
          break;
        case "setupAuthy":
          link = <SetupAuthy />;
          break;
        case "tutorial":
          link = <Tutorial />;
          break;
        default:
          break;
      }

      return <View style={{ flex: 1 }}>{link}</View>;
    }
  }
);

export default Links;
