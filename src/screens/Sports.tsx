import { useEffect, useState } from "react";
import { SportsType, SportType } from "../types/sports.types";
import { NoResults } from "../components/NoResults/NoResults";
import { TableColumn } from "../components/Table/Table";
import { Visibility } from "@mui/icons-material";
import {getSports} from "../service/sports.service";

export const SportsScreen = () => {
  const [sports, setSports] = useState<SportsType | undefined>(undefined);
  const [sportDetails, setSportDetails] = useState<SportType | undefined>(undefined);

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

  const getSportDetails = (id: SportType['id']) => {
    // TODO: get sport details
  }

  useEffect(() => {
    const fetchData = async () => {
      return await getSports();
    };
    fetchData()
        .then((r) => setSports(r))
        .catch(console.error);
  }, [setSports]);
console.log(sports)
  if (!sports) {
    return <NoResults />;
  }

  // TODO: display data got form service
  return <div>asd</div>;
};
