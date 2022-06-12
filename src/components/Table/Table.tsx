import {
  Box,
  Button,
  ButtonProps,
  Modal,
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow as MuiTableRow,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { CSSProperties, FC, ReactElement, useState } from "react";
import { TableRow } from "./TableRow";
import { ModelWithId } from "../../types/table.types";

export type TableColumn<Model> = {
  id: string;
  label: string;
  value: keyof Model | ReactElement;
  action?: (sportId: number) => void;
  textAlign?: CSSProperties["textAlign"];
};

type TableProps<Model extends ModelWithId> = {
  columns: TableColumn<Model>[];
  items: Model[];
  title: string;
  ButtonProps?: Pick<ButtonProps, "children" | "onClick">;
};

export const Table: FC<TableProps<any>> = ({
  columns,
  items,
  title,
  ButtonProps,
}) => {
  const theme = useTheme();
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => {
    setOpenModal(!openModal);
  };

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const alertData = () => {
    alert(
      `
      name: "${name}",
      location: "${location}"
      `
    );
  };
  return (
    <Box>
      {/*TODO: style to match designs*/}
      <Paper
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: theme.palette.secondary.dark,
          paddingX: 3,
          paddingY: 2,
        }}
      >
        <Typography
          sx={{
            color: theme.palette.secondary.contrastText,
          }}
        >
          {title}
        </Typography>
        {ButtonProps !== undefined && (
          <>
            <Button
              variant={"contained"}
              sx={{
                paddingY: 0.5,
                lineHeight: 1.5,
              }}
              onClick={handleOpen}
              {...ButtonProps}
            />
            <Modal
              open={openModal}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: theme.palette.background.default,
                  padding: 4,
                  gap: 4,
                }}
              >
                <TextField
                  id="filled-basic"
                  label="Name"
                  variant="filled"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <TextField
                  id="filled-basic"
                  label="Location"
                  variant="filled"
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
                <Button
                  variant={"contained"}
                  sx={{
                    paddingY: 0.5,
                    lineHeight: 1.5,
                  }}
                  onClick={alertData}
                >
                  Save
                </Button>
                <Button
                  variant={"contained"}
                  sx={{
                    paddingY: 0.5,
                    lineHeight: 1.5,
                  }}
                  onClick={handleOpen}
                >
                  Cancel
                </Button>
              </Box>
            </Modal>
          </>
        )}
      </Paper>

      <TableContainer
        sx={{
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <MuiTable>
          <TableHead>
            <MuiTableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  sx={{ textAlign: column.textAlign || "left" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </MuiTableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id} item={item} columns={columns} />
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </Box>
  );
};
