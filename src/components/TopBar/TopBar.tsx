/*
  icon for 'user avatar' can be found here: https://mui.com/material-ui/material-icons/
 */
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logo from "../../assets/logo.svg";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import { AppBar, Avatar, Box, Switch } from "@mui/material";
import { darkTheme } from "../../theme";
export const TopBar = () => {
  return (
    <AppBar
      sx={{
        background: darkTheme.appBar.main,
          position: "static",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img src={Logo} alt={"Company logo"} width={200} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: {xs: "0", md: "0 1rem 0 1rem"}
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: "2rem",
          }}
        >
          <Switch
            sx={{
              "& .MuiSwitch-track": {
                background: "white",
              },
            }}
          />
          <Brightness5Icon sx={{ color: "white" }} />
        </Box>
        <Avatar alt="user-avatar">
          <AccountCircleIcon sx={{ fontSize: 45, background: "black" }} />
        </Avatar>
      </Box>
    </AppBar>
  );
};
