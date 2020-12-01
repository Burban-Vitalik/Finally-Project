import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import s from '../Table/Table.module.css';
import getTable from '../../../../api'

function createData(position, club, Played, Won, Drawn, Lost, GF, GA, GD, Points, Form) {
  return { position, club, Played, Won, Drawn, Lost, GF, GA, GD, Points, Form };
}

const rows = [
  createData(1, 'Totetham', 20, 18, 2, 0, 24, 20, 4, 54),
  createData(2, 'Liverpol', 19, 17, 1, 1, 24, 20, 4, 52),
  createData(3, 'Chelsee', 21, 15, 4, 2, 30, 20, 10, 49),
];

export default class DenseTable extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        tableTeamList: []
    }

    let tableTeamList = getTable()
        .then(
            (res) => {
                this.setState({tableTeamList: res.response.standing})
                console.log('Team list', this.state);
            }
        )
        .catch(
           (err) => console.error('err',err)
        );       

        console.log('ROW',rows)
}

  render(){
    return (
      <TableContainer component={Paper} className={s.tableContainer}>
        <Table className={s.table} size="small" aria-label="a dense table">
          <TableHead className={s.tableHead}>
            <TableRow className={s.tableRow}>
              <TableCell className={s.thPosition}>Position</TableCell>
              <TableCell className={s.thClub}>Club</TableCell>
              <TableCell className={s.thPlayed}>Played</TableCell>
              <TableCell className={s.thWon}>Won</TableCell>
              <TableCell className={s.thDrawn}>Drawn</TableCell>
              <TableCell className={s.thLost}>Lost</TableCell>
              <TableCell className={s.thGF}>GF</TableCell>
              <TableCell className={s.thGA}>GA</TableCell>
              <TableCell className={s.thGD}>GD</TableCell>
              <TableCell className={s.thPoints}>Points</TableCell>
              <TableCell className={s.thForm}>Form</TableCell>
            </TableRow>
          </TableHead>
  
          <TableBody className={s.tableBody}>
            {rows.map((row) => (
              <TableRow key={row.position}>
                <TableCell component="th" scope="row" className={s.thPosition}> {row.position}</TableCell>
                <TableCell className={s.thClub}> {row.club}</TableCell>
                <TableCell className={s.thPlayed}> {row.Played}</TableCell>
                <TableCell className={s.thWon}> {row.Won}</TableCell>
                <TableCell className={s.thDrawn}> {row.Drawn}</TableCell>
                <TableCell className={s.thLost}> {row.Lost}</TableCell>
                <TableCell className={s.thGF}> {row.GF}</TableCell>
                <TableCell className={s.thGA}> {row.GA}</TableCell>
                <TableCell className={s.thGD}> {row.GD}</TableCell>
                <TableCell className={s.thPoints}> {row.Points}</TableCell>
                <TableCell className={s.thForm}> {row.Form}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}