import { Typography, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";

export const PageTitle = () => {
  let actualPath = useLocation().pathname;
  let formattedPath = actualPath.substring(1);
  const theme = useTheme();

  return (
    <>
      {actualPath === "/sports" ? null : actualPath === "/" ? null : (
        <Typography
          sx={{
            paddingTop: 4,
            paddingLeft: 4,
            color: theme.palette.text.primary,
            fontWeight: 550,
          }}
        >
          This is {formattedPath} page
        </Typography>
      )}
    </>
  );
};
