import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

function DenseTable({ matchInfo }) {
  const classes = useStyles();
  let { dateTime, player1, player2 } = matchInfo;
  let isFinal = dateTime.getTime() < Date.now();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                {
                  isFinal
                  && <span>Final</span>
                }
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
              <TableCell style={{width: '150px'}}>{player1.name}</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>3</TableCell>
              <TableCell>6</TableCell>
              <TableCell>6</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
            <TableCell>{player2.name}</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>6</TableCell>
              <TableCell>5</TableCell>
              <TableCell>5</TableCell>
              <TableCell></TableCell>
            </TableRow>
            {/* {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default DenseTable;
