import { useEffect, useState } from "react";
import { navigationRoutes } from "../navigationRoutes";
import { DashboardItem, DashboardType } from "../types/dashboard.types";
import { NoResults } from "../components/NoResults/NoResults";
import { getDashboards } from "../service/dashboard.service";
import { Grid, } from "@mui/material";
import {DashboardCard} from "../components/Card/DashboardCard";

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
    <Grid
      container
      spacing={4}
      sx={{
        padding: 4,
      }}
    >
      {items.map((item) => {
        return (
          <Grid item xs={6} key={item.id}>
            <DashboardCard title={item.title} text={item.text} linkTo={item.id} />
          </Grid>
        );
      })}
    </Grid>
  );
};
