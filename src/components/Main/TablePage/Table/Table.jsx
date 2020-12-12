import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';


import s from '../Table/Table.module.css';
import {getTable} from '../../../../api';

export default class DenseTable extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        tableTeamList: [],
        rows: []
    }  

    getTable(`${this.props.season}`)
    .then(
        (res) => {
            this.setState({tableTeamList: res.response[0].league.standings[0]})
            this.state.tableTeamList.map((elem) => {
              return(
              this.setState({
                rows:[
                  ...this.state.rows,
                  {
                    position: elem.rank,
                    club: { name: elem.team.name, logo: elem.team.logo},
                    played: elem.all.played,
                    won: elem.all.win,
                    drawn: elem.all.draw,
                    lost: elem.all.lose,
                    gf: elem.all.goals.for,
                    ga: elem.all.goals.against,
                    gd: elem.all.goals.for - elem.all.goals.against,
                    points: elem.points,
                    form: elem.form,

                  }
                ]
              })
              )
            })
        }
    )
    .catch(
       (err) => {
         console.error('erffdddddddddr',err)
        }
    );       
}
  render(){
    return (
      <div>
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
                <Tooltip title="Goals for" placement="top-start">
                  <TableCell className={s.thGF}>GF</TableCell>
                </Tooltip>
                <Tooltip title="Goals against" placement="top-start">
                  <TableCell className={s.thGA}>GA</TableCell>
                </Tooltip>
                <Tooltip title="Goals difference" placement="top-start">
                  <TableCell className={s.thGD}>GD</TableCell>
                </Tooltip>
                <TableCell className={s.thPoints}>Points</TableCell>
                <TableCell className={s.thForm}>Form</TableCell>
              </TableRow>
            </TableHead>
    
            <TableBody className={s.tableBody}>
              {this.state.rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row" className={s.thPosition}> {row.position}</TableCell>
                  <TableCell className={s.thClub}> <img src={row.club.logo} alt={row.club.name}/> {row.club.name}</TableCell>
                  <TableCell className={s.thPlayed}> {row.played}</TableCell>
                  <TableCell className={s.thWon}> {row.won}</TableCell>
                  <TableCell className={s.thDrawn}> {row.drawn}</TableCell>
                  <TableCell className={s.thLost}> {row.lost}</TableCell>
                  <TableCell className={s.thGF}> {row.gf}</TableCell>
                  <TableCell className={s.thGA}> {row.ga}</TableCell>
                  <TableCell className={s.thGD}> {row.gd}</TableCell>
                  <TableCell className={s.thPoints}> {row.points}</TableCell>
                  <TableCell className={s.thForm}> {row.form}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </TableContainer>
      </div>
    );
  }
}