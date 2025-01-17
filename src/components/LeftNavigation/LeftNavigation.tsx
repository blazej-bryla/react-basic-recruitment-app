import {Box, Divider, Typography, useTheme} from "@mui/material";
import { navigationRoutes } from "../../navigationRoutes";
import { NavigationItem } from "./NavigationItem";
import HomeIcon from "@mui/icons-material/Home";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import GroupIcon from "@mui/icons-material/Group";
/*
  icons can be found in here: https://mui.com/material-ui/material-icons/
 */
export const LeftNavigation = () => {
  const theme = useTheme()
  return (

    <Box
      sx={{
        width: 300,
        height: "100vh",
        borderRight: 2,
        borderColor: theme.palette.background.default,
        backgroundColor: theme.palette.background.default
      }}
    >
      <Box sx={{
        paddingY: "1rem"
      }}>
        <Typography
          sx={{
            paddingLeft: "1rem",
            color: theme.palette.text.primary,
          }}
        >
          Management
        </Typography>
        <NavigationItem
          to={navigationRoutes.dashboard.path}
          icon={<HomeIcon />}
          label={"Dashboard"}
        />
        <NavigationItem
          to={navigationRoutes.sports.path}
          icon={<SportsSoccerIcon />}
          label={"Sports"}
        />
        <NavigationItem
          to={navigationRoutes.competitions.path}
          icon={<EmojiEventsIcon />}
          label={"Competitions"}
        />
      </Box>
      <Divider sx={{height:2}} />
      <Box sx={{
        paddingY: "1rem"
      }}>
      <Typography
        sx={{
          paddingLeft: "1rem",
          color: theme.palette.secondary.main,
        }}
      >
        Planning
      </Typography>
      <NavigationItem
        to={navigationRoutes.scheduling.path}
        icon={<FactCheckIcon />}
        label={"Scheduling"}
      />
      <NavigationItem
        to={navigationRoutes.organisations.path}
        icon={<LocationCityIcon />}
        label={"Organisations"}
      />
      </Box>
      <Divider sx={{height:2}} />

      <Box sx={{
        paddingY: "1rem"
      }}>
      <Typography
        sx={{
          paddingLeft: "1rem",
          color: theme.palette.secondary.main,
        }}
      >
        People
      </Typography>
      <NavigationItem
        to={navigationRoutes.users.path}
        icon={<GroupIcon />}
        label={"Users"}
      />
      </Box>
    </Box>
  );
};
