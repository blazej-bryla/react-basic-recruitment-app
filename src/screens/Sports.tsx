import {useContext, useEffect, useState} from "react";
import {SportsType, SportType} from "../types/sports.types";
import {NoResults} from "../components/NoResults/NoResults";
import {Table, TableColumn} from "../components/Table/Table";
import {Visibility} from "@mui/icons-material";
import {getSportById, getSports} from "../service/sports.service";
import {Box, Typography} from "@mui/material";
import {darkTheme, lightTheme} from "../theme";
import {RowContext} from "../components/Context/ActiveRowContext";


export const SportsScreen = () => {
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

  // console.log(sports);

  if (!sports) {
    return <NoResults />;
  }

  // TODO: display data got form service
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
        }}
      >
        Sports
      </Typography>
      <Typography
        sx={{
          paddingTop: 2,
          paddingBottom: 4,
          color: darkTheme.palette.secondary.main,
          fontWeight: 450,
        }}
      >
        {sports.teaser}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexdirection: "row",
          gap: 4
        }}
      >
        <Box sx={{
          flex: 1,
        }}>
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
              backgroundColor: lightTheme.palette.background.paper,
              paddingX: 2,
              paddingY: 4,
              flex: 1,
            }}
          >
            <Typography
              sx={{
                fontWeight: 450,
              }}
            >
              {sportDetails.name} ({sportDetails.location})
            </Typography>
            <Typography
              sx={{
                color: darkTheme.palette.secondary.main,
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
