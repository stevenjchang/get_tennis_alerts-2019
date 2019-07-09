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
    width: '50%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 350,
  },
}));

const _createResultRow = (playerName, resultArray) => {
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
  // console.log('matchInfo ==>', matchInfo);
  const classes = useStyles();
  let { dateTime, player1, player2, round } = matchInfo;
  let [year, month] = dateTime.split('-');
  let day = dateTime.slice(8, 10);
  let isFinal = new Date(dateTime) < Date.now();
  let player1Row = _createResultRow(player1.name, player1.score);
  let player2Row = _createResultRow(player2.name, player2.score);

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
