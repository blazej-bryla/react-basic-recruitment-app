import {Grid, useTheme} from "@mui/material";
import React, {FC, ReactNode} from "react";

type MainContainerType = {
  children: ReactNode;
};
export const  MainContainer: FC<MainContainerType> = ({ children }) => {
    const theme = useTheme()

    return (
        <Grid
            item
            xs
            sx={{
                backgroundColor: theme.palette.background.default,
            }}
        >
            {children}
        </Grid>
    );
};
