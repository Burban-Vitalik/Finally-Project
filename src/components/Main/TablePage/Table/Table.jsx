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
import Spiner from '../../../General/Spiner/Spiner';


export default class DenseTable extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        tableTeamList: [],
        rows: [],
        showSpiner: true,
    }  

    console.log('TableSmall', this.props);

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
                ],
                showSpiner: false,
              })
              )
            })
        }
    )
    .catch(
      (err) => {
        console.error('err',err)
        this.setState({showSpiner: false});
   }   
    );
}
  render(){
    return (
      <div>
        {(this.state.showSpiner) ? (<Spiner />) : ("")}
        <TableContainer component={Paper} className={s.tableContainer}>
        <Table className={s.table} size="small" aria-label="a dense table">
          <TableHead className={s.tableHead}>
            <TableRow className={s.tableRow}>
              <TableCell className={s.thPosition}>Pos</TableCell>
              <TableCell className={s.thClub}>Club</TableCell>
              <TableCell className={s.thPlayed}>Played</TableCell>
              {(this.props.tableSmall) ? ("") : (<TableCell className={s.thWon}>Won</TableCell>)}
              {(this.props.tableSmall) ? ("") : (<TableCell className={s.thDrawn}>Drawn</TableCell>)}
              {(this.props.tableSmall) ? ("") : (<TableCell className={s.thLost}>Lost</TableCell>)}
              {(this.props.tableSmall) ? ("") : (
                <Tooltip title="Goals for" placement="top-start">
                  <TableCell className={s.thGF}>GF</TableCell>
                </Tooltip>
              )}
              {(this.props.tableSmall) ? ("") : (
                <Tooltip title="Goals against" placement="top-start">
                  <TableCell className={s.thGA}>GA</TableCell>
                </Tooltip>
              )}
              {(this.props.tableSmall) ? ("") : (
                <Tooltip title="Goals difference" placement="top-start">
                  <TableCell className={s.thGD}>GD</TableCell>
                </Tooltip>
              )}
              <TableCell className={s.thPoints}>Points</TableCell>
              {(this.props.tableSmall) ? ("") : (<TableCell className={s.thForm}>Form</TableCell>)}
            </TableRow>
          </TableHead>
  
          <TableBody className={s.tableBody}>
            {this.state.rows.map((row, index) => (
              <TableRow key={index} >
                <TableCell component="th" scope="row" className={s.thPosition}> {row.position}</TableCell>
                <TableCell className={s.thClub}> <img src={row.club.logo} alt={row.club.name}/> {row.club.name}</TableCell>
                <TableCell className={s.thPlayed}> {row.played}</TableCell>
                {(this.props.tableSmall) ? ("") : (<TableCell className={s.thWon}> {row.won}</TableCell>)}
                {(this.props.tableSmall) ? ("") : (<TableCell className={s.thDrawn}> {row.drawn}</TableCell>)}
                {(this.props.tableSmall) ? ("") : (<TableCell className={s.thLost}> {row.lost}</TableCell>)}
                {(this.props.tableSmall) ? ("") : (<TableCell className={s.thGF}> {row.gf}</TableCell>)}
                {(this.props.tableSmall) ? ("") : (<TableCell className={s.thGA}> {row.ga}</TableCell>)}
                {(this.props.tableSmall) ? ("") : (<TableCell className={s.thGD}> {row.gd}</TableCell>)}
                <TableCell className={s.thPoints}> {row.points}</TableCell>
                {(this.props.tableSmall) ? ("") : (<TableCell className={s.thForm}>{row.form}</TableCell>)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    );
  }
}