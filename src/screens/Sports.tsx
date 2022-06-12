import { useContext, useEffect, useState } from "react";
import { SportsType, SportType } from "../types/sports.types";
import { NoResults } from "../components/NoResults/NoResults";
import { Table, TableColumn } from "../components/Table/Table";
import { Visibility } from "@mui/icons-material";
import { getSportById, getSports } from "../service/sports.service";
import {Box, Typography, useTheme} from "@mui/material";
import { RowContext } from "../components/Context/ActiveRowContext";

export const SportsScreen = () => {
  const theme = useTheme()
  const [sports, setSports] = useState<SportsType | undefined>(undefined);
  const [sportDetails, setSportDetails] = useState<SportType | undefined>(
    undefined
  );
  // @ts-ignore
  const { setActiveRow, activeRow } = useContext(RowContext);

  const columns: TableColumn<SportType>[] = [
    { id: "sport", label: "Sport", value: "name" },
    { id: "location", label: "Location", value: "location" },
    { id: "name", label: "Name", value: "shortDescription" },
    {
      id: "actions",
      label: "Actions",
      value: <Visibility />,
      textAlign: "right",
      action: (sportId: number) => () => {
        setActiveRow(sportId);
      },
    },
  ];

  const getSportDetails = async (id: SportType["id"]) => {
    try {
      return await getSportById(id);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!Number.isNaN(Number(activeRow))) {
      getSportDetails(Number(activeRow))
        .then((data) => {
          setSportDetails(data);
        })
        .catch(console.error);
    }
  }, [activeRow]);

  useEffect(() => {
    const fetchData = async () => {
      return await getSports();
    };
    fetchData()
      .then((r) => setSports(r))
      .catch(console.error);
  }, [setSports]);

  if (!sports) {
    return <NoResults />;
  }

  return (
    <Box
      sx={{
        paddingY: 4,
        paddingX: 4,
      }}
    >
      <Typography
        sx={{
          fontSize: 24,
          fontWeight: 550,
          color: theme.palette.text.primary
        }}
      >
        Sports
      </Typography>
      <Typography
        sx={{
          paddingTop: 2,
          paddingBottom: 4,
          color: theme.palette.text.disabled,
          fontWeight: 450,
        }}
      >
        {sports.teaser}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 4,
        }}
      >
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Table
            title={"Sports"}
            columns={columns}
            items={sports.items}
            ButtonProps={{
              children: "ADD SPORT",
            }}
          />
        </Box>
        {sportDetails ? (
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
              paddingX: 2,
              paddingY: 4,
              flex: 1,
            }}
          >
            <Typography
              sx={{
                fontWeight: 450,
                color: theme.palette.text.primary
              }}
            >
              {sportDetails.name} ({sportDetails.location})
            </Typography>
            <Typography
              sx={{
                color: theme.palette.text.disabled,
                paddingTop: 2,
              }}
            >
              {sportDetails.description}
            </Typography>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};
