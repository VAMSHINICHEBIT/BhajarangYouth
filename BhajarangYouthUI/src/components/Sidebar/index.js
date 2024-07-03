import { HiFire, HiHome } from "react-icons/hi";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const menuItems = {
  dashboard: "Dashboard",
  schedule: "Schedule Events",
};

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;
  const darkMode = false;

  let selectedMenuItem = "";
  if (pathname === "/") {
    selectedMenuItem = menuItems.dashboard;
  } else if (pathname === "/schedule-event") {
    selectedMenuItem = menuItems.schedule;
  }

  const renderIcon = (option) => {
    const isSelected = selectedMenuItem === option;
    switch (option) {
      case menuItems.dashboard:
        return (
          <Icon isSelected={isSelected} darkMode={darkMode}>
            <HiHome />
          </Icon>
        );
      case menuItems.schedule:
        return (
          <Icon isSelected={isSelected} darkMode={darkMode}>
            <HiFire />
          </Icon>
        );
      default:
        return null;
    }
  };

  const renderMenuItem = (option) => {
    const isSelected = selectedMenuItem === option;
    return (
      <MenuItemBtn isSelected={isSelected} darkMode={darkMode}>
        {renderIcon(option)}
        <MenuOptionContent>{option}</MenuOptionContent>
      </MenuItemBtn>
    );
  };

  return (
    <MenuAndContactContainer darkMode={darkMode}>
      <MenuListContainer>
        <LinkEl to="/">
          <MenuItem>{renderMenuItem(menuItems.dashboard)}</MenuItem>
        </LinkEl>
        <LinkEl to="/schedule-event">
          <MenuItem>{renderMenuItem(menuItems.schedule)}</MenuItem>
        </LinkEl>
      </MenuListContainer>
      <ContactContainer>
        <ContactHeading darkMode={darkMode}>CONTACT US</ContactHeading>
        <ContactMediaContainer>
          <ContactImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <ContactImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <ContactImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </ContactMediaContainer>
        <GreetingsContent darkMode={darkMode}>
          Enjoy! Now to see your channels and recommendations!
        </GreetingsContent>
      </ContactContainer>
    </MenuAndContactContainer>
  );
};

export default Sidebar;

export const MenuAndContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 17%;
  min-width: 220px;
  background-color: ${(props) => (props.darkMode ? "#212121" : "white")};
`;

export const MenuListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style-type: none;
`;

export const MenuItem = styled.li`
  width: 100%;
`;
export const LinkEl = styled(Link)`
  text-decoration: none;
`;

export const MenuItemBtn = styled.button`
  width: 100%;
  padding: 8px 35px 8px 20px;
  font-size: 15px;
  display: flex;
  align-items: center;
  outline: none;
  cursor: pointer;
  border-width: 0;
  color: ${(props) =>
    props.isSelected ? "#ff6347" : props.darkMode ? "#f4f4f4" : "#212121"};
  background-color: ${(props) =>
    props.isSelected
      ? props.darkMode
        ? "#383838"
        : "#f1f5f9"
      : "transparent"};
`;

export const Icon = styled.div`
  font-size: 18px;
  color: ${(props) =>
    props.isSelected ? "#ff6347" : props.darkMode ? "#f4f4f4" : "#212121"};
`;

export const MenuOptionContent = styled.p`
  margin-left: 24px;
`;

export const ContactContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const ContactHeading = styled.p`
  font-weight: 500;
  color: ${(props) => (props.darkMode ? "#f4f4f4" : "#00306e")};
`;

export const ContactMediaContainer = styled.div`
  display: flex;
`;

export const ContactImg = styled.img`
  width: 32px;
  margin-right: 16px;
`;

export const GreetingsContent = styled.p`
  color: ${(props) => (props.darkMode ? "#f4f4f4" : "#212121")};
  font-size: 14px;
`;
