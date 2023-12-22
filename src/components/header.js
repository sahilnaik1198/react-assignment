import React, { useState } from 'react';
import styled from 'styled-components';
import {
  FaSearch,
  FaCog,
  FaQuestionCircle,
  FaUser,
  FaAngleDown,
  FaBuilding,
  FaMoneyBillWave,
  FaChartBar,
} from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
//   padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; 
  height: 40px
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px
`;

const Logo = styled.img`
  height: 30px;
  margin-right: 10px;
`;

const Title = styled.h3`
  margin: 0;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  margin: 0 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Dropdown = styled.div`
  position: relative;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #333;
  min-width: 160px;
  z-index: 1;

  ${Dropdown}:hover & {
    display: block;
  }
`;

const DropdownLink = styled(NavLink)`
  padding: 10px;
  white-space: nowrap;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px
`;

const SearchIcon = styled.span`
  margin: 0 10px;
  cursor: pointer;
`;

const SelectIcon = styled(FaAngleDown)`
  margin-left: 5px;
  vertical-align: middle;
`;

const Icon = styled.span`
  margin: 0 5px;
  vertical-align: middle;
`;

const SearchInput = styled.input`
  padding: 5px;
  margin-right: 10px;
  display: ${(props) => (props.visible ? 'inline-block' : 'none')};
`;

const Header = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <HeaderContainer>
      <LeftSection>
        <Logo src="logo.png" alt="Title Logo" />
        <Title>Grave Sites Management</Title>
      </LeftSection>
      <Navigation>
        <Dropdown>
          <NavLink onClick={toggleDropdown}>
            <Icon>
              <FaBuilding />
            </Icon>
            Maintain <SelectIcon />
          </NavLink>
          <DropdownContent style={{ display: isDropdownVisible ? 'block' : 'none' }}>
            <DropdownLink href="#">
              <Icon>
                <FaBuilding />
              </Icon>
              Option 1
            </DropdownLink>
            <DropdownLink href="#">
              <Icon>
                <FaBuilding />
              </Icon>
              Option 2
            </DropdownLink>
            <DropdownLink href="#">
              <Icon>
                <FaBuilding />
              </Icon>
              Option 3
            </DropdownLink>
          </DropdownContent>
        </Dropdown>
        <NavLink>
          <Icon>
            <FaMoneyBillWave />
          </Icon>
          Payments
        </NavLink>
        <NavLink>
          <Icon>
            <FaChartBar />
          </Icon>
          Reports
        </NavLink>
      </Navigation>
      <RightSection>
        <SearchIcon onClick={toggleSearch}>
          <FaSearch />
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder="Search"
          visible={isSearchVisible}
        />
        <Navigation>
            <NavLink href='Settings'>
            <Icon>
          <FaCog />
        </Icon>
            </NavLink>
        <NavLink href='Help'>
        <Icon>
          <FaQuestionCircle />
        </Icon>
        </NavLink>
        <NavLink href='Profile'>
        <Icon>
          <FaUser />
        </Icon>
        </NavLink>
        
        </Navigation>
        
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;



