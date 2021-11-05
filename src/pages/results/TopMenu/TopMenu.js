import {
  MenuWrapper,
  Menu,
  MenuOption,
  MenuToolsButton,
} from "./TopMenuStyles";
import {
  Search,
  CropOriginal,
  RoomOutlined,
  OndemandVideo,
  ArticleOutlined,
  MoreVert,
} from "@mui/icons-material";

function TopMenu() {
  return (
    <MenuWrapper>
      <Menu>
        <MenuOption active>
          <Search />
          All
        </MenuOption>
        <MenuOption>
          <CropOriginal />
          Images
        </MenuOption>
        <MenuOption>
          <RoomOutlined />
          Maps
        </MenuOption>
        <MenuOption>
          <OndemandVideo />
          Video
        </MenuOption>
        <MenuOption>
          <ArticleOutlined />
          News
        </MenuOption>
        <MenuOption>
          <MoreVert />
          More
        </MenuOption>
        <MenuToolsButton>Tools</MenuToolsButton>
      </Menu>
      <span>SafeSearch on</span>
    </MenuWrapper>
  );
}

export default TopMenu;
