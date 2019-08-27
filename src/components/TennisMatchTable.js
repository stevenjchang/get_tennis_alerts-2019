import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import moment from "moment-timezone";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    marginTop: theme.spacing(3),
    width: "100%",
    overflowX: "auto",
    borderRadius: "0px",
    marginBottom: theme.spacing(2),
    opacity: '0.9'
    // backgroundColor: "#00c853"
  },
  table: {
    minWidth: 350,
  },
  tableHead: {
    backgroundColor: "#b9f6ca",
    fontSize: "0.7rem",
    padding: "0.1rem"
  },
  tableHeadFirstRow: {
    padding: "0rem 0.5rem",
    borderBottom: "0px",
    fontSize: "0.4rem"
  },
  tableCell: {
    padding: "0.5rem",
    fontSize: "0.7rem",
    borderBottom: "0px",
    // color: "white"
  },
  tableCellCourt: {
    fontSize: "8.5px",
    padding: "0.4rem 0.5rem"
  }
}));

const _createResultRow = (playerName, resultArray) => {
  while (resultArray.length < 6) {
    resultArray.push("")
  }
  return [playerName, ...resultArray]
}

function DenseTable({ matchInfo }) {
  const classes = useStyles();
  let { dateTime, player1, player2, court } = matchInfo;
  //TODO: calc isFinal using moment
  let isFinal = new Date(dateTime) < Date.now();
  let player1Row = _createResultRow(player1.name, player1.score);
  let player2Row = _createResultRow(player2.name, player2.score);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table}>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell className={classes.tableHeadFirstRow}>
                {isFinal && <span>Final&nbsp;-&nbsp;</span>}
                <span>
                  {moment(dateTime).format("M/DD")}
                </span>
                {!isFinal && (
                  <span>&nbsp;-&nbsp;{
                    moment(dateTime).format("h:mm A")
                  }</span>
                )}
              </TableCell>
              <TableCell className={classes.tableCell} />
              <TableCell className={classes.tableCell} />
              <TableCell className={classes.tableCell} />
              <TableCell className={classes.tableCell} />
              <TableCell className={classes.tableCell} />
              <TableCell className={classes.tableCell} />
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {player1Row.map((row, index) => {
                if (index === 0) {
                  let player1styles = player1.isWinner
                    ? { fontWeight: "500" }
                    : { fontWeight: "400" };
                  return (
                    <TableCell
                      className={classes.tableCell}
                      style={player1styles}
                    >
                      {row}
                    </TableCell>
                  );
                  // } else if (index === 6) {
                  //   return (
                  //     <TableCell className={classes.tableCell}>
                  //       {player1.isWinner && <ArrowLeftIcon />}
                  //     </TableCell>
                  //   );
                } else {
                  return (
                    <TableCell className={classes.tableCell}>{row}</TableCell>
                  );
                }
              })}
            </TableRow>
            <TableRow>
              {player2Row.map((row, index) => {
                let player2styles = player2.isWinner
                  ? { fontWeight: "500" }
                  : { fontWeight: "400" };
                if (index === 0) {
                  return (
                    <TableCell
                      className={classes.tableCell}
                      style={player2styles}
                    >
                      {row}
                    </TableCell>
                  );
                  // } else if (index === 6) {
                  //   return (
                  //     <TableCell className={classes.tableCell}>
                  //       {player2.isWinner && <ArrowLeftIcon />}
                  //     </TableCell>
                  //   );
                } else {
                  return (
                    <TableCell className={classes.tableCell}>{row}</TableCell>
                  );
                }
              })}
            </TableRow>
            {!isFinal && (
              <TableRow>
                <TableCell className={classes.tableCellCourt}>
                  {court}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default DenseTable;
