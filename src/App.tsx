import styles from "./App.module.scss";
import Dock from "./components";
import DockItem from "./components/Item";
import {
  EmailIcon,
  CalendarIcon,
  SearchIcon,
  ChatIcon,
  BellIcon,
  SettingsIcon,
} from "@chakra-ui/icons";

function App() {
  return (
    <div className={styles.root}>
      <Dock>
        <DockItem icon={<EmailIcon boxSize={20} />} />
        <DockItem icon={<CalendarIcon boxSize={20} />} />
        <DockItem icon={<SearchIcon boxSize={20} />} />
        <DockItem icon={<ChatIcon boxSize={20} />} />
        <DockItem icon={<BellIcon boxSize={20} />} />
        <DockItem icon={<SettingsIcon boxSize={20} />} />
      </Dock>
    </div>
  );
}

export default App;
