/*
  icon for 'user avatar' can be found here: https://mui.com/material-ui/material-icons/
 */
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logo from "../../assets/logo.svg";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import {AppBar, Avatar, Box, Switch} from "@mui/material";
import {darkTheme, lightTheme} from "../../theme";
import {useContext} from "react";
import {ActiveThemeContext} from "../Context/ActiveThemeContext";
export const TopBar = () => {

    // @ts-ignore
    const {currentTheme, setCurrentTheme } = useContext(ActiveThemeContext);
    const handleChange = () => {
        if(currentTheme === darkTheme){
            setCurrentTheme(lightTheme);
        }else{
            setCurrentTheme(darkTheme);
        }
    }

  return (
    <AppBar
      sx={{
        background: currentTheme.appBar.main,
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
          justifyContent: "space-between",
          alignItems: "center",
          padding: { xs: "0", md: "0 1rem 0 1rem" },
        }}
      >
        <Box
          sx={{
            display: "flex",
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
            onChange={handleChange}
          />
          <Brightness5Icon sx={{ color: "white" }} />
        </Box>
        <Avatar alt="user-avatar">
          <AccountCircleIcon sx={{ fontSize: 46, background: currentTheme.palette.text.primary }} />
        </Avatar>
      </Box>
    </AppBar>
  );
};
