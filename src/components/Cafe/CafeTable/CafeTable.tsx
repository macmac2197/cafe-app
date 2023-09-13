import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { getCafes } from "../../../redux/slices/cafeSlice";
import { Cafe } from "../../../ts/interfaces/appInterface";
import { useGetCafeByLocationQuery } from "../../../rtk-query/cafeApi";
import CircularProgress from "../../Layout/CircularProgress/CircularProgress";

const CafeTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const [location, setLocation] = React.useState("Taguig");

  const {
    data: cafeData,
    error,
    isLoading,
  } = useGetCafeByLocationQuery({
    location: location,
  });
  const cafes = useAppSelector((state) => state.cafes.cafeList);

  useEffect(() => {
    dispatch(getCafes(cafeData as Cafe[]));
  }, [dispatch, cafeData]);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Logo</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Employees</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!isLoading &&
            cafeData?.map((cafe) => (
              <TableRow
                key={cafe.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img src={cafe.logo} width={50} height={50} alt="Logo" />
                </TableCell>
                <TableCell component="th" scope="row">
                  {cafe.name}
                </TableCell>
                <TableCell align="right">{cafe.description}</TableCell>
                <TableCell align="right">{cafe.employees}</TableCell>
                <TableCell align="right">{cafe.location}</TableCell>
                <TableCell align="right">
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="end"
                    justifyContent="flex-end"
                  >
                    <IconButton aria-label="edit">
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CafeTable;
