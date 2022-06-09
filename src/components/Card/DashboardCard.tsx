import { FC } from "react";
import { Paper, Stack, useTheme } from "@mui/material";
import {Link} from "react-router-dom";

type DashboardCardProps = {
  title: string;
  text: string;
  linkTo: string;
};

// TODO: style to match designs
export const DashboardCard: FC<DashboardCardProps> = ({
  title,
  text,
  linkTo,
}) => {
  const theme = useTheme();

  return (
    <Paper elevation={4}>
      <Stack>
        <div
          style={{
            backgroundColor: theme.palette.secondary.dark,
            borderTopRightRadius: 4,
            borderTopLeftRadius: 4,
            paddingLeft: "2rem",
          }}
        >
          <p
            style={{
              color: theme.palette.secondary.contrastText,
            }}
          >
            {title}
          </p>
        </div>
        <div
          style={{
            padding: theme.spacing(1, 2),
          }}
        >
          <p
            style={{
              padding: 4,
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitLineClamp: "4",
              WebkitBoxOrient: "vertical",
              display: "-webkit-box",
              lineHeight: "26px",
            }}
          >
            {text}
          </p>
        </div>
        <Stack
          style={{ padding: theme.spacing(1, 2) }}
          direction={"row"}
          justifyContent={"flex-end"}
        >
          <Link
            style={{
              textDecoration: "none",
              textTransform: "uppercase",
              fontWeight: 600,
              letterSpacing: 2,
              padding: 2,
              color: theme.palette.primary.main
            }}
            to={linkTo}
          >
            More Info
          </Link>
        </Stack>
      </Stack>
    </Paper>
  );
};
