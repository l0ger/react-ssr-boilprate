import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import { useAppShellStyle } from './../../theme/appShellStyle';
import { useTheme, ServerStyleSheets } from '@material-ui/core/styles';



export default function BottomTab() {
  const classes = useAppShellStyle();
  const [value, setValue] = React.useState('home');


  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.bottomTabRoot}>
      <BottomNavigationAction label="سفارشات" value="orders" icon={<ShoppingCartOutlinedIcon className={classes.bottomTabAction}  />} />
      <BottomNavigationAction label="درخواست ها" value="recents" icon={<AssignmentOutlinedIcon className={classes.bottomTabAction} />} />
      <BottomNavigationAction label="خانه" value="home" icon={<HomeOutlinedIcon />} className={classes.bottomTabAction}  />
    </BottomNavigation>
  )

}