import styles from "./App.module.scss";

import {
  EmailIcon,
  CalendarIcon,
  SearchIcon,
  ChatIcon,
  BellIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import Dock from "./components";

function App() {
  return (
    <div className={styles.root}>
      <Dock>
        <Dock.Item icon={<EmailIcon boxSize={20} />} />
        <Dock.Item icon={<CalendarIcon boxSize={20} />} />
        <Dock.Item icon={<SearchIcon boxSize={20} />} />
        <Dock.Item icon={<ChatIcon boxSize={20} />} />
        <Dock.Item icon={<BellIcon boxSize={20} />} />
        <Dock.Item icon={<SettingsIcon boxSize={20} />} />
      </Dock>
    </div>
  );
}

export default App;
