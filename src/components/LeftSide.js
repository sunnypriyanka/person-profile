import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { blue } from "@material-ui/core/colors";
import DvrOutlinedIcon from "@material-ui/icons/DvrOutlined";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import DraftsOutlinedIcon from "@material-ui/icons/DraftsOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import RefreshOutlinedIcon from "@material-ui/icons/RefreshOutlined";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import Divider from "@material-ui/core/Divider";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import FacebookIcon from "@material-ui/icons/Facebook";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import "../App.css";
import { LeftSideData } from './LeftSideData';
import LeftSideAlign from './LeftSideAlign';



const useStyles = makeStyles({
    cont: {
      justifyContent: "center",
    },
    
  
    paper1: {
      height: 975,
    backgroundColor: "#3939b0",
    textAlign: "center",
    },
  
  });

  

function LeftSide() {

    const classes = useStyles();
    return (
        
                 

            <Grid item xs={2}>
             <Paper className={classes.paper1}>
              <Grid item xs={12}>
                <Avatar
                  style={{
                    height: "90px",
                    width: "90px",
                    left: "60px",
                    top: "30px",
                    padding: "5px",
                  }}
                  src="https://lh3.googleusercontent.com/BQ5oy23RTCAQn2eMrjrZMqImJltFFe-JSY_O2Bfg0f2y4gWJqO3HtvnOcUQ2jIDim5zECvpBz3GplXlvSNnB9w=w974"
                ></Avatar>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  style={{
                    color: "whitesmoke",
                    fontSize: "14px",
                    fontWeight: "400",
                    padding: "1px",
                    marginTop: "35px",
                  }}
                >
                  Devinder Kumar
                </Typography>
                <Typography style={{ color: "#2196f3", marginTop: "2px",fontSize: "11px" }}>
                  Chief Officer
                </Typography>
                <Button
                  style={{
                    color: "whitesmoke",
                    fontSize: " 10px",
                    fontStyle: "inherit",
                    fontWeight: "300",
                    border: "1px solid",
                    borderRadius: "35px",
                    textTransform: "capitalize",
                    borderColor: "#2196f3",
                    marginTop: "20px",
                    padding: "3px",
                    width: "90px",

                  }}
                >
                  Update Profile
                </Button>
              </Grid>

              <LeftSideAlign/>




              






              {/* <Grid xs={12}>
                <Grid xs={12}>
                  <DvrOutlinedIcon
                    style={{ color: "#e0e0e0", marginTop: "50px" }}
                  ></DvrOutlinedIcon>
                  <Typography style={{ color: "#e0e0e0", marginBottom: "5px" }}>
                    DASHBOARD
                  </Typography>
                </Grid>
                <Grid>
                  <LibraryBooksOutlinedIcon
                    style={{ color: "#e0e0e0", marginTop: "50px" }}
                  ></LibraryBooksOutlinedIcon>
                  <Typography style={{ color: "#e0e0e0", marginBottom: "5px" }}>
                    JOBS
                  </Typography>
                </Grid>
                <Grid>
                  <DescriptionOutlinedIcon
                    style={{ color: "#e0e0e0", marginTop: "50px" }}
                  ></DescriptionOutlinedIcon>
                  <Typography style={{ color: "#e0e0e0", marginBottom: "5px" }}>
                    SEA DOCS
                  </Typography>
                </Grid>
                <Grid>
                  <SupervisorAccountOutlinedIcon
                    style={{ color: "#e0e0e0", marginTop: "50px" }}
                  ></SupervisorAccountOutlinedIcon>
                  <Typography style={{ color: "#e0e0e0", marginBottom: "5px" }}>
                    CONNECTIONS
                  </Typography>
                </Grid>
              </Grid> */}
            </Paper>
          </Grid>

            
        
    )
}

export default LeftSide
