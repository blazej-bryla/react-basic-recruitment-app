import {ListItemButton, ListItemIcon, ListItemText, useTheme} from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import {Link, useLocation} from "react-router-dom";
import {FC, ReactElement} from "react";

type NavigationItemProp = {
  to: string;
  icon: ReactElement<SvgIconComponent>;
  label: string;
};

export const NavigationItem: FC<NavigationItemProp> = ({ to, icon, label }) => {
    const theme = useTheme()
    let actualPath =  useLocation().pathname
    return (

    <Link to={to} style={{ textDecoration: 'none', color: "black" }}>
      <ListItemButton
      selected={actualPath === to}
      >
        <ListItemIcon sx={{minWidth: 30}}>{icon}</ListItemIcon>
        <ListItemText sx={{color: theme.palette.text.primary}}>{label}</ListItemText>
      </ListItemButton>
    </Link>
  );
};
