import React, { ReactElement, useContext } from "react";
import { TableColumn } from "./Table";
import {TableCell, TableRow as MuiTableRow, useTheme} from "@mui/material";
import { ModelWithId } from "../../types/table.types";
import { RowContext } from "../Context/ActiveRowContext";

type TableRowProps<Model> = {
  item: Model;
  columns: TableColumn<Model>[];
};

export const TableRow = <Model extends ModelWithId>({
  item,
  columns,
}: TableRowProps<Model>): JSX.Element => {
  // @ts-ignore
  const { activeRow } = useContext(RowContext);

  const getItemContent = (
    column: TableColumn<Model>
  ): ReactElement | string => {
    if (React.isValidElement(column.value)) {
      return column.value;
    }

    return item[column.value] as unknown as string;
  };
  const theme = useTheme()

  return (
    <MuiTableRow
      sx={{
        backgroundColor:
          item.id === activeRow
            ? theme.palette.background.default
            : undefined,
      }}
    >
      {columns.map((column) => (
        <TableCell
          key={column.id}
          sx={{ textAlign: column.textAlign || "left" }}
        >
          {column.id === "actions"
            ? React.cloneElement(getItemContent(column) as ReactElement, {
                onClick: column.action && column.action(Number(item.id)),
                sx: {color: item.id === activeRow ? theme.palette.primary.main :undefined}
              })
            : getItemContent(column)}
        </TableCell>
      ))}
    </MuiTableRow>
  );
};
