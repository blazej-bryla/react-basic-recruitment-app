import { useEffect, useState } from "react";
import { navigationRoutes } from "../navigationRoutes";
import { DashboardItem, DashboardType } from "../types/dashboard.types";
import { NoResults } from "../components/NoResults/NoResults";
import { getDashboards } from "../service/dashboard.service";
import { Box, Grid, Link, Typography } from "@mui/material";
import { darkTheme, lightTheme } from "../theme";

export const DashboardScreen = () => {
  const [items, setItems] = useState<DashboardType[]>([]);
  const getLinkTo = (id: DashboardItem) => {
    switch (id) {
      case DashboardItem.DASHBOARD:
        return navigationRoutes.dashboard.path;
      case DashboardItem.SPORTS:
        return navigationRoutes.sports.path;
      case DashboardItem.COMPETITIONS:
      case DashboardItem.ORGANISATIONS:
      case DashboardItem.USERS:
      case DashboardItem.SCHEDULING:
        return navigationRoutes.dashboard.path;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      return await getDashboards();
    };
    fetchData()
      .then((r) => setItems(r))
      .catch(console.error);
  }, [setItems]);

  if (!items || items.length === 0) {
    return <NoResults />;
  }

  return (
    <Grid container spacing={4} sx={{
      padding: 4
    }}>
      {items.map((item) => {
        return (
          <Grid item xs={6} key={item.id}>
            <Box
              sx={{
                backgroundColor: lightTheme.palette.background.paper,
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,

              }}
            >
              <Typography
                sx={{
                  backgroundColor: darkTheme.appBar.main,
                  color: darkTheme.palette.text.primary,
                  paddingX: 4,
                  paddingY: 1,
                  fontSize: 18,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,

                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  minHeight: "100px",
                  padding: 4,
                  overflow: "hidden",
                  maxHeight: "300px",
                  textOverflow: "ellipsis",
                 WebkitLineClamp: "4",
                  WebkitBoxOrient: "vertical",
                  display: "-webkit-box",
                  lineHeight: "26px"
                }}
              >
                {item.text}

              </Typography>
              <Link
                  href={"#"}
                  sx={{
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "end",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    letterSpacing: 2,
                    padding: 2,
                  }}
              >
                More info
              </Link>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};
