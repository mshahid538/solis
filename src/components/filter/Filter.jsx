import * as React from 'react';
import MenuButton from '@mui/joy/MenuButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ArrowRight from '@mui/icons-material/ArrowRight';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import Dropdown from '@mui/joy/Dropdown';



export default function GroupMenu() {
//   const SIZES = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large'];
//   const [size, setSize] = React.useState('Medium');

  return (
    <Dropdown>
      <MenuButton className = "filter" endDecorator={<ArrowDropDown /> }>Month 1</MenuButton>
      {/* <Menu sx={{  '--ListItemDecorator-size': '24px' }}>
        <MenuItem
          onClick={() => {
            // const nextIndex = SIZES.indexOf(size) - 1;
            // const value = nextIndex < 0 ? SIZES[SIZES.length - 1] : SIZES[nextIndex];
            // setSize(value);
          }}
        >
          Smaller
        </MenuItem>
      </Menu> */}
    </Dropdown>
  );
}
