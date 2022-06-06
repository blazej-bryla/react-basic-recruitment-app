import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { FC, ReactElement } from "react";

type NavigationItemProp = {
  to: string;
  icon: ReactElement<SvgIconComponent>;
  label: string;
};

export const NavigationItem: FC<NavigationItemProp> = ({ to, icon, label }) => {
  return (
    <Link to={to} style={{ textDecoration: 'none', color: "black" }}>
      <ListItemButton >
        <ListItemIcon sx={{minWidth: 30}}>{icon}</ListItemIcon>
        <ListItemText>{label}</ListItemText>
      </ListItemButton>
    </Link>
  );
};
