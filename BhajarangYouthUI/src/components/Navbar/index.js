import { useState } from "react";
import styled from "styled-components";
import Cookie from "js-cookie";
import { useNavigate } from "react-router";

const ProfileDropdown = ({ userName, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <ProfileButton onClick={toggleDropdown}>
        <ProfileImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="Profile"
        />
        <ProfileName>{userName}</ProfileName>
      </ProfileButton>
      <DropdownMenu isOpen={isOpen}>
        <DropdownItem>View Profile</DropdownItem>
        <DropdownItem onClick={onLogout}>Logout</DropdownItem>
      </DropdownMenu>
    </DropdownContainer>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookie.remove("jwt_token");
    navigate("/login");
  };

  return (
    <NavContainer>
      <Logo>BYA</Logo>
      <ProfileOptions>
        <ProfileDropdown userName="Keerthan" onLogout={handleLogout} />
      </ProfileOptions>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 10px 20px;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`;

const ProfileOptions = styled.div`
  position: relative;
`;

const ProfileButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  border: 2px solid white;
  transition: all 0.3s ease;

  ${ProfileButton}:hover & {
    border-color: #ff6347;
  }
`;

const ProfileName = styled.span`
  font-weight: bold;
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownMenu = styled.ul`
  list-style-type: none;
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  background-color: #fff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 8px 0;
  z-index: 10;
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
  max-height: ${(props) => (props.isOpen ? "300px" : "0")};
  overflow-y: auto;
`;

const DropdownItem = styled.li`
  padding: 10px 20px;
  color: black;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;
