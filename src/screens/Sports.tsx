import { useEffect, useState } from "react";
import { SportsType, SportType } from "../types/sports.types";
import { NoResults } from "../components/NoResults/NoResults";
import { TableColumn } from "../components/Table/Table";
import { Visibility } from "@mui/icons-material";
import { getSports } from "../service/sports.service";
import {Box, Button, Typography} from "@mui/material";
import {darkTheme} from "../theme";

export const SportsScreen = () => {
  const [sports, setSports] = useState<SportsType | undefined>(undefined);
  const [sportDetails, setSportDetails] = useState<SportType | undefined>(
    undefined
  );

  const columns: TableColumn<SportType>[] = [
    { id: "sport", label: "Sport", value: "name" },
    { id: "location", label: "Location", value: "location" },
    { id: "name", label: "Name", value: "shortDescription" },
    {
      id: "actions",
      label: "Actions",
      value: <Visibility />,
      textAlign: "right",
    },
  ];

  const getSportDetails = (id: SportType["id"]) => {
    // TODO: get sport details
  };

  useEffect(() => {
    const fetchData = async () => {
      return await getSports();
    };
    fetchData()
      .then((r) => setSports(r))
      .catch(console.error);
  }, [setSports]);
  console.log(sports);
  if (!sports) {
    return <NoResults />;
  }

  // TODO: display data got form service
  return (
    <Box
      sx={{
        padding: 4,
      }}
    >
      <Typography sx={{
        fontSize: 24,
        fontWeight: 550,
      }}>
      Sports
      </Typography>
      <Typography sx={{
        paddingTop: 4,
        paddingBottom: 6
      }}>
        {sports.teaser}
      </Typography>
      <Box sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        background: darkTheme.palette.background.default,
        paddingX: 4,
        paddingY:2,
      }}>
      <Typography sx={{
        color: darkTheme.palette.text.primary,
        fontSize: 20
      }}>
        Sports
      </Typography>
        <Button sx={{
          fontSize: 20,
          textTransform: "uppercase",
          backgroundColor: darkTheme.palette.primary.main,
          color: darkTheme.palette.text.primary,
          paddingX: 2
        }}>ADD SPORT</Button>
      </Box>
    </Box>
  );
};
