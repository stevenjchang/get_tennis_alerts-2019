import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 350,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const createResultRow = (playerName, resultArray) => {
  if (resultArray.length === 0) return[playerName, '', '', '', '', '', '']
  let resultRow = [];
  resultRow.push(playerName);
  if (resultArray.length < 5) {
    if (resultArray.length === 4) {
      resultRow.push('');
      resultRow.push(...resultArray)
    }
    if (resultArray.length === 3) {
      resultRow.push('');
      resultRow.push('');
      resultRow.push(...resultArray)
    }
  } else {
    resultRow.push(...resultArray)
  }
  resultRow.push('');
  return resultRow;
}

function DenseTable({ matchInfo }) {
  const classes = useStyles();
  let { dateTime, player1, player2, round } = matchInfo;
  let month = dateTime.getMonth() + 1;
  let day = dateTime.getDate();
  let isFinal = dateTime.getTime() < Date.now();
  let player1Row = createResultRow(player1.name, player1.result);
  let player2Row = createResultRow(player2.name, player2.result);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                {
                  isFinal
                  && <span>Final&nbsp;-&nbsp;</span>
                }
                <span>{month}/{day}</span>
              </TableCell>
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
            {
              player1Row.map((row, index) => {
                if (index === 0) {
                  return (
                    <TableCell
                      style={{width: '150px'}}
                    >{row}
                    </TableCell>
                  )
                } else if (index === 6) {
                  return (<TableCell>
                    {
                      player1.winner
                      && <ArrowLeftIcon />
                    }
                  </TableCell>)
                }
                else {
                  return (<TableCell>{row}</TableCell>)
                }
              })
            }
            </TableRow>
            <TableRow>
            {
              player2Row.map((row, index) => {
                if (index === 0) {
                  return (
                    <TableCell
                      style={{width: '150px'}}
                    >{row}
                    </TableCell>
                  )
                } else if (index === 6) {
                  return (<TableCell>
                    {
                      player2.winner
                      && <ArrowLeftIcon />
                    }
                  </TableCell>)
                } else {
                  return (<TableCell>{row}</TableCell>)
                }
              })
            }
            </TableRow>
            <TableRow>
              <TableCell
                style={{fontSize: '10px'}}
              >Round {round}</TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default DenseTable;