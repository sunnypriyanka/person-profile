import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, Typography } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
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
import LeftSide from "./LeftSide";
import Badge from '@material-ui/core/Badge';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Tooltip from '@material-ui/core/Tooltip';




const useStyles = makeStyles({
  cont: {
    justifyContent: "center",
  },
  main: {
    height: 1050,
    width: 1400,
    backgroundColor: "#202966",
    color: "blue",
    padding: 40,
  },
  customBadge: {
  
    color: "pink"
  },
  paper1: {
    height: 975,
    backgroundColor: "#3939b0",
    textAlign: "center",
  },
  topbar: {
    padding: "1px",
    display: "flex",
  },
  topbar2: {
    padding: "20px",
    display: "flex",
  },
  topbar3: {
    padding: "10px",
  },
  totaledge: {
    display: "flex",
  },
  edgetop: {
    display: "flex",
  },
  edge1: {
    display: "flex",
  },



 
});


  

const AntTab = withStyles((theme) => ({
  root: {
    color: "#6d7681",
    fontSize: "16px",
    
    textTransform: "none",
    minWidth: 100,
    fontWeight: "600",
    marginRight: theme.spacing(1),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      color: "#28cbf0",
      opacity: 1
    },
    "&$selected": {
      color: "#28cbf0",
      fontWeight: "600"
    },
    "&:focus": {
      color: "#28cbf0"
    }
  },
  selected: {}
}))((props) => <Tab disableRipple {...props} />);

export default function Sidebar() {

  


  const classes = useStyles();

  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [values, setValues] = React.useState(0);

  const handleChanges = (event, newValues) => {
    setValues(newValues);
  };
  
 

 

  
  return (
    <Grid container className={classes.cont}>
      <Grid container className={classes.main}>
        <Grid container className={classes.sub}>
          <LeftSide />
              {/* <Grid item xs={2} >
            <Paper className={classes.paper1}>
              <Grid item xs={12}>
                <Avatar
                  style={{
                    height: "95px",
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
               <Grid xs={12}>
                <Grid xs={12} style={{marginTop: "30px"}}>
                  <DvrOutlinedIcon
                    style={{ color: "#cbcbcb", marginTop: "60px",fontSize: "40px",   }}
                  ></DvrOutlinedIcon>
                  <Typography style={{ color: "#cbcbcb",fontSize: "14px" ,marginBottom: "35px",marginTop: "8px" }}>
                    DASHBOARD
                  </Typography>
                </Grid>
                <Grid style={{backgroundColor: "#3434a4",textAlign: "center", padding: "10px", borderLeft: "3.5px solid #2196f3", marginTop: "50px"}}>
                  <LibraryBooksOutlinedIcon
                    style={{ color: "#e0e0e0", marginTop: "20px" ,fontSize: "40px"}}
                  ></LibraryBooksOutlinedIcon>
                  <Typography style={{ color: "#e0e0e0", marginBottom: "10px", fontSize: "15px",marginTop: "8px" }}>
                    JOBS
                  </Typography>
                </Grid>
                <Grid style={{marginTop: "20px"}}>
                  <DescriptionOutlinedIcon
                    style={{ color: "#cbcbcb", marginTop: "40px",fontSize: "40px" }}
                  ></DescriptionOutlinedIcon>
                  <Typography style={{ color: "#cbcbcb", marginBottom: "5px",marginTop: "10px",fontSize: "14px" }}>
                    SEA DOCS
                  </Typography>
                </Grid>
                <Grid>
                  <SupervisorAccountOutlinedIcon
                    style={{ color: "#cbcbcb", marginTop: "70px" , fontSize: "40px"}}
                  ></SupervisorAccountOutlinedIcon>
                  <Typography style={{ color: "#cbcbcb", marginBottom: "5px", fontSize: "15px" }}>
                    CONNECTIONS
                  </Typography>
                </Grid>
              </Grid> 
              </Paper>
          </Grid> */}

         
          <Grid item xs={10}>
          <Grid item xs={12} style={{ backgroundColor: "white" }}>
              <Paper style={{ backgroundColor: "white" }}>
                <div className={classes.topbar} >
                  <SearchOutlinedIcon
                    style={{
                      color: "#857c7c8a",
                      marginLeft: "40px",
                      marginTop: "25px",
                      marginBottom: "20px"
                      
                    }}
                  ></SearchOutlinedIcon>
                  <div >
                  <Tabs
                    
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    TabIndicatorProps={{
                      style: {
                        backgroundColor: "#28cbf0", 
                       height: "3px",
                        width: "60px",
                        marginTop: "50px",
                        marginLeft: " 20px",
                        color: "#28cbf0",
                        
                       }
                      }}
                     
                                     
                   
                    textColor="secondary"
                    centered
                    style={{ minHeight: "55px", marginLeft: "255px",marginTop: "15px", }}
                  >
                    <AntTab label="Blog"    />
                    <AntTab
                      label="Questions"
                     
                    />
                    <AntTab
                      label="Companies" 
                      
                    />
                    <AntTab
                      label="Contact"
                      
                    />
                  </Tabs>
                  </div>
                  
                  
                  <Tooltip title="Settings">
                  
                  <SettingsOutlinedIcon
                    style={{
                      color: "#857c7c8a",
                      marginLeft: "183px",
                      marginTop: "25px",
                    }}
                  ></SettingsOutlinedIcon>
                  </Tooltip>
                


                  <Badge badgeContent={4}  className={classes.customBadge} color="primary" style={{color: "#857c7c8a", marginTop: "25px", marginLeft: "20px"}}>
                  <Tooltip title="Messages"> 
                  <DraftsOutlinedIcon
                   
                  ></DraftsOutlinedIcon>
                  </Tooltip>
                  </Badge>
                  
                  <Tooltip title="Exit">
                  <ExitToAppOutlinedIcon
                    style={{
                      color: "#857c7c8a",
                      marginLeft: "20px",
                      marginTop: "25px",
                    }}
                  ></ExitToAppOutlinedIcon>
                  </Tooltip>
                </div>
              </Paper>
            </Grid>
            {/* <Grid item xs={12}>
              <Paper style={{ backgroundColor: "#e8e4e4" }}>
                <div className={classes.topbar2}>
                  <div>
                    <Typography
                      style={{ fontSize: "20px", marginLeft: "23px" }}
                    >
                      Master
                    </Typography>
                    <Typography
                      style={{ fontSize: "12px", marginLeft: "23px", fontWeight: "500" , color: "grey"}}
                    >
                      Chemical Tanker
                    </Typography>
                  </div>
                  <div>
                    <Button
                      style={{
                        marginLeft: "690px",
                        backgroundColor: "white",
                        textTransform: "capitalize",
                        color: "#00000061",
                        borderRadius: "50px",
                        marginTop: "-15px",
                        padding: "5px",
                        width: "90px"
                      }}
                     

                    >
                       <FiberManualRecordIcon  style={{fontSize: "20px", color: "#81c514" , marginRight: "3px"}}    />
                      Active
                    </Button>
                    <RefreshOutlinedIcon
                      style={{
                        marginLeft: "15px",
                        color: "#149bdb",
                        backgroundColor: "white",
                        borderRadius: "15px",
                        fontSize: "1.2rem",
                        padding: "5px",
                        
                      }}
                    ></RefreshOutlinedIcon>
                    <BorderColorOutlinedIcon
                      style={{
                        marginLeft: "15px",
                        color: "#149bdb",
                        backgroundColor: "white",
                        borderRadius: "15px",
                        fontSize: "1.2rem",
                        padding: "5px"
                      }}
                    ></BorderColorOutlinedIcon>
                    <DeleteForeverOutlinedIcon
                      style={{
                        marginLeft: "15px",
                        color: "#149bdb",
                        backgroundColor: "white",
                        borderRadius: "15px",
                        fontSize: "1.2rem",
                        padding: "5px"
                      }}
                    ></DeleteForeverOutlinedIcon>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{ backgroundColor: "#e8e4e4" }}>
                <div className={classes.topbar3}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    TabIndicatorProps={{
                      style: {
                        backgroundColor: "#28cbf0", 
                        width: "100px",
                        marginLeft: " 30px",
                        color: "#28cbf0"

                       }
                      }}
                    textColor="primary"
                  >
                    <Tab label="Description" style={{marginLeft: "1px", color: "#28cbf0" }}
                      />
                    <Tab label="insight"  style={{ marginLeft: "-30px"}}/>
                    <Tab label="applicants"  style={{ marginLeft: "-30px"}}/>
                    <Tab label="notifications" style={{ marginLeft: "-30px"}}/>
                    
                  </Tabs>
                  <Divider style={{width: "1010px", marginLeft: "30px"}} />
                </div>
              </Paper>
            </Grid> */}
            <Grid item xs={12}>
              <Paper style={{ backgroundColor: "#eef1f2",marginTop: "-2px" }}>


              <div className={classes.topbar2}  >
                  <div style={{marginTop: "20px"}}>
                    <Typography
                      style={{ fontSize: "20px", marginLeft: "23px" }}
                    >
                      Master
                    </Typography>
                    <Typography
                      style={{ fontSize: "13px", marginLeft: "23px", fontWeight: "405" , color: "#9b9999"}}
                    >
                      Chemical Tanker
                    </Typography>
                  </div>
                  <div style={{marginTop: "25px"}}>
                    <Button
                      style={{
                        marginLeft: "690px",
                        backgroundColor: "white",
                        textTransform: "capitalize",
                        color: "#00000061",
                        borderRadius: "50px",
                        marginTop: "-15px",
                        padding: "5px",
                        width: "90px"
                      }}
                     

                    >
                       <FiberManualRecordIcon  style={{fontSize: "20px", color: "#81c514" , marginRight: "3px"}}    />
                      Active
                    </Button>
                    <RefreshOutlinedIcon
                      style={{
                        marginLeft: "15px",
                        color: "#149bdb",
                        backgroundColor: "white",
                        borderRadius: "15px",
                        fontSize: "1.2rem",
                        padding: "5px",
                        
                      }}
                      onClick={() => {
                        alert("Are you sure you want to Refresh");
                      }}
                    ></RefreshOutlinedIcon>
                    <BorderColorOutlinedIcon
                      style={{
                        marginLeft: "15px",
                        color: "#149bdb",
                        backgroundColor: "white",
                        borderRadius: "15px",
                        fontSize: "1.2rem",
                        padding: "5px"
                      }}
                      onClick={() => {
                        alert("Are you sure you want to edit");
                      }}
                    ></BorderColorOutlinedIcon>
                    <DeleteForeverOutlinedIcon
                      style={{
                        marginLeft: "15px",
                        color: "#149bdb",
                        backgroundColor: "white",
                        borderRadius: "15px",
                        fontSize: "1.2rem",
                        padding: "5px"
                      }}
                      onClick={() => {
                        alert("Are you sure you want to delete");
                      }}
                    ></DeleteForeverOutlinedIcon>
                  </div>
                </div>







                <div className={classes.topbar3}>
                  <Tabs
                  style={{marginLeft: "20px"}}
                    value={values}
                    onChange={handleChanges}
                    indicatorColor="primary"
                    TabIndicatorProps={{
                      style: {
                        backgroundColor: "#28cbf0", 
                        width: "96px",
                        marginLeft: " 11px",
                        height: "2.5px"
                       

                       }
                      }}

                                        
                                     
                                         
                  >
                    <AntTab label="DESCRIPTION" style={{ fontWeight: "500",fontSize: "13.5px"}}
                      />
                    <AntTab label="INSIGHT" style={{ fontWeight: "500",fontSize: "13.5px"}}/>
                    <AntTab label="APPLICANTS" style={{ fontWeight: "500",fontSize: "13.5px"}} />
                    <AntTab label="NOTIFICATIONS" style={{ fontWeight: "500",fontSize: "13.5px"}}/>
                    
                  </Tabs>
                  <Divider style={{width: "1010px", marginLeft: "30px"}} />
                </div>





                <Grid item xs={12} className={classes.totaledge} style={{padding: "15px"}}>
                  <Grid item xs={8} style={{ padding: "30px",marginTop: "-10px" }}>
                    <Grid item xs={12}>
                      <TableContainer
                        component={Paper}
                        style={{ padding: "30px",boxShadow: "none" }}
                      >
                        <Typography
                          variant="h6"
                          style={{ fontWeight: "normal", marginLeft: "10px",marginBottom: "10px",marginTop: "5px" }}
                        >
                          Job Description
                        </Typography>
                        <Table>
                          <TableBody>
                            <TableRow >
                              <TableCell  style={{ color: "#a3a6b6",fontWeight: "400",fontSize: "15px"}}>
                                Rank
                              </TableCell>
                              <TableCell  style={{ color: "#747a99",fontWeight: "400",fontSize: "14px",paddingLeft: "40px"}}>Master</TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell style={{ color: "#a3a6b6",fontWeight: "400",fontSize: "15px"}}>
                                Ship type
                              </TableCell>
                              <TableCell style={{ color: "#747a99",fontWeight: "400",fontSize: "14px",paddingLeft: "40px"}}>Chemical Tanker</TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell style={{ color: "#a3a6b6",fontWeight: "400",fontSize: "15px"}}>
                                Min.Experience
                              </TableCell>
                              <TableCell style={{ color: "#747a99",fontWeight: "400",fontSize: "14px",paddingLeft: "40px"}}>06 Months</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell style={{ color: "#a3a6b6",fontWeight: "400",fontSize: "15px",}}>
                                US Visa
                              </TableCell>
                              <TableCell style={{ color: "#747a99",fontWeight: "400",fontSize: "14px",paddingLeft: "40px"}}>Required</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell style={{ color: "#a3a6b6",fontWeight: "400",fontSize: "15px"}}>
                                Approx Joining
                              </TableCell>
                              <TableCell style={{ color: "#747a99",fontWeight: "400",fontSize: "14px",paddingLeft: "40px"}}>20 September 2016</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell style={{ color: "#a3a6b6",fontWeight: "400",fontSize: "15px"}}>
                                Salary
                              </TableCell>
                              <TableCell style={{ color: "#747a99",fontWeight: "400",fontSize: "14px",paddingLeft: "40px"}}>5000 USD</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell style={{ color: "#a3a6b6",fontWeight: "400",fontSize: "15px",paddingBottom: "60px"}}>
                                Ship Details
                              </TableCell>
                              <TableCell variant="head"  style={{ color: "#747a99",fontWeight: "400",fontSize: "14px",paddingLeft: "40px"}}>
                                Chembuik gibrlater <br />
                                20000DWT <br />
                                2010 Built
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell style={{ color: "#a3a6b6",fontWeight: "400",fontSize: "15px",paddingBottom: "70px",borderBottom:  "none"}}>
                                Description
                              </TableCell>
                              <TableCell style={{ color: "#747a99",fontWeight: "400",fontSize: "14px",paddingLeft: "40px",borderBottom: "none" }}>
                                Donec egestas vitae mi et feugiatbQuisque urna
                                mi, vestibulum sit amet congue quis, imperdiet
                                quis dui. Pellentesque rhoncus,justo et
                                soliictudin feugiat ante urna fringilla nisi, eu
                                lacreet leo leo in velit. ante urna fringilia
                                nisi, eu laoreet leo leo in velt.
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{ padding: "30px", marginTop: "-10px",marginLeft: "40px" }}
                  >
                    <Grid
                      item
                      xs={12}
                      style={{ backgroundColor: "white", padding: "25px" }}
                    >
                      <div className={classes.edgetop}>
                        <Avatar style={{backgroundColor: "#413987", color: "white",fontSize: "25px",fontWeight: "600"}}>f
                        {/* <FacebookIcon
                          style={{ color: "blue", marginLeft: "5px" ,fontSize: "60px",borderRadius: "20px"}}
                        ></FacebookIcon> */}
                        </Avatar>
                        <Typography style={{ marginLeft: "18px" , color: "#747a99",fontSize: "16px",marginTop: "10px"}}>
                          Share on facebook
                        </Typography>
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      style={{
                        backgroundColor: "white",
                        marginTop: "25px",
                        padding: "25px",
                      }}
                    >
                      <Typography style={{fontSize: "16px",marginLeft: "10px"}}>Other Jobs</Typography>

                      <div >
                      <div
                        className={classes.edge1}
                        style={{
                          padding: "3px",
                          marginLeft: "10px",
                          marginTop: "20px",
                        }}
                      >
                        <img src="https://e7.pngegg.com/pngimages/146/916/png-clipart-mercy-ships-logo-hospital-ship-mv-africa-mercy-ship-text-volunteering.png" style={{width: "60px", height: "48px",borderRadius: "20px",marginTop: "8px"}}></img>

                        <div style={{marginLeft: "-25px"}}>
                          <Typography
                            style={{
                              fontSize: "17px",
                              marginLeft: "55px",
                              color: "#00adff",
                            }}
                          >
                            Master
                          </Typography>
                          <Typography
                            style={{ fontSize: "13.5px",color: "#9798a0", marginLeft: "55px",fontWeight: "400" }}
                          >
                            Chemical Tanker
                          </Typography>
                          <Typography
                            style={{
                              fontSize: "11px",
                              color: "#1a191952",
                              marginLeft: "55px",
                            marginBottom: "15px",
                            fontWeight: "500"
                            }}
                          >
                            Posted:20 Aug 2016
                          </Typography>
                        </div>
                      </div>
                      </div>
                      <Divider/>

                      <div
                        className={classes.edge1}
                        style={{
                          padding: "3px",
                          marginLeft: "10px",
                          marginTop: "20px",
                        }}
                      >
                        <Avatar src="https://pbs.twimg.com/profile_images/963456964016488448/36q3HlXQ.jpg" style={{width: "70px",height: "70px"}}></Avatar>

                        <div style={{marginLeft: "-35px"}}>
                          <Typography
                            style={{
                              fontSize: "17px",
                              marginLeft: "55px",
                              color: "#00adff",
                            }}
                          >
                            Chief officer
                          </Typography>
                          <Typography
                            style={{ fontSize: "13.5px",color: "#9798a0", marginLeft: "55px",fontWeight: "400" }}
                          >
                            Oil Tanker
                          </Typography>
                          <Typography
                            style={{
                              fontSize: "11px",
                              color: "#1a191952",
                              marginLeft: "55px",
                            marginBottom: "15px",
                            fontWeight: "500"
                            }}
                          >
                            Posted:20 Aug 2016
                          </Typography>
                        </div>
                      </div>
                      <Divider/>

                      <div
                        className={classes.edge1}
                        style={{
                          padding: "3px",
                          marginLeft: "15px",
                          marginTop: "20px",
                        }}
                      >
                        <img src="https://logodownload.org/wp-content/uploads/2020/02/costa-crociere-logo-1.png" style={{width: "52px",height: "35px",marginTop: "13px"}}></img>

                        <div style={{marginLeft: "-30px"}}>
                          <Typography
                            style={{
                              fontSize: "17px",
                              marginLeft: "60px",
                              color: "#00adff",
                            }}
                          >
                            Executive officer
                          </Typography>                            
                          <Typography
                            style={{ fontSize: "13.5px",color: "#9798a0", marginLeft: "60px",fontWeight: "400" }}
                          >
                            Bulk Carrier
                          </Typography>
                          <Typography
                            style={{
                              fontSize: "11px",
                              color: "#1a191952",
                              marginLeft: "60px",
                            marginBottom: "15px",
                            fontWeight: "500"
                            }}
                          >
                            Posted:20 Aug 2016
                          </Typography>
                        </div>
                      </div>
                      <Divider/>

                      <div
                        className={classes.edge1}
                        style={{
                          padding: "3px",
                          marginLeft: "10px",
                          marginTop: "20px",
                        }}
                      >
                        <Avatar src="https://i.pinimg.com/originals/d8/e4/1d/d8e41d6ce98a11115f4285956481927a.png" style={{height: "70px", width: "70px"}}></Avatar>

                        <div style={{marginLeft: "-35px"}}>
                          <Typography
                           
                           style={{
                             fontSize: "17px",
                             marginLeft: "55px",
                             color: "#00adff",
                           }}
                          >
                            Master
                          </Typography>
                          <Typography
                            style={{ fontSize: "13.5px",color: "#9798a0", marginLeft: "55px",fontWeight: "400" }}
                          >
                            Chemimcal Tanker
                          </Typography>
                          <Typography
                           style={{
                            fontSize: "11px",
                            color: "#1a191952",
                            marginLeft: "55px",
                          marginBottom: "8px",
                          fontWeight: "500"
                          }}
                          >
                            Posted:20 Aug 2016
                          </Typography>
                        </div>
                        
                      </div>
                      <div>
                        <MoreHorizIcon style={{marginLeft: '80px', fontSize: "40px",  color: "#cfcece", padding: '5px',marginTop: "30px",marginBottom: "-28px"}}></MoreHorizIcon>
                        </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}













































































































// import React from "react";
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
// import Box from "@material-ui/core/Box";
// import Avatar from "@material-ui/core/Avatar";
// import { makeStyles, Typography } from "@material-ui/core";
// import Button from "@material-ui/core/Button";
// import { blue } from "@material-ui/core/colors";
// import DvrOutlinedIcon from "@material-ui/icons/DvrOutlined";
// import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
// import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
// import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";
// import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
// import DraftsOutlinedIcon from "@material-ui/icons/DraftsOutlined";
// import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
// import RefreshOutlinedIcon from "@material-ui/icons/RefreshOutlined";
// import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
// import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
// import Divider from "@material-ui/core/Divider";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import LeftSide from "./LeftSide";



// const useStyles = makeStyles({
//   cont: {
//     justifyContent: "center",
//   },
//   main: {
//     height: 1000,
//     width: 1200,
//     backgroundColor: "#202966",
//     color: "blue",
//     padding: 40,
//   },

//   paper1: {
//     height: 890,
//     backgroundColor: "#6a6af0",
//     textAlign: "center",
//   },
//   topbar: {
//     padding: "10px",
//     display: "flex",
//   },
//   topbar2: {
//     padding: "20px",
//     display: "flex",
//   },
//   topbar3: {
//     padding: "10px",
//   },
//   totaledge: {
//     display: "flex",
//   },
//   edgetop: {
//     display: "flex",
//   },
//   edge1: {
//     display: "flex",
//   },
// });

// export default function Sidebar() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   return (
//     <Grid container className={classes.cont}>
//       <Grid container className={classes.main}>
//         <Grid container className={classes.sub}>
//         <LeftSide/>
         
//           <Grid item xs={10}>
//             <Grid item xs={12} style={{ backgroundColor: "white" }}>
//               <Paper style={{ backgroundColor: "white" }}>
//                 <div className={classes.topbar}>
//                   <SearchOutlinedIcon
//                     style={{
//                       color: "#857c7c8a",
//                       marginLeft: "15px",
//                       marginTop: "15px",
//                     }}
//                   ></SearchOutlinedIcon>
//                   <Tabs
//                     value={value}
//                     onChange={handleChange}
//                     indicatorColor="primary"
//                     textColor="primary"
//                     centered
//                     style={{ minHeight: "10px", marginLeft: "15px" }}
//                   >
//                     <Tab label="Blog" style={{ textTransform: "capitalize" }} />
//                     <Tab
//                       label="Questions"
//                       style={{ textTransform: "capitalize" }}
//                     />
//                     <Tab
//                       label="Companies"
//                       style={{ textTransform: "capitalize" }}
//                     />
//                     <Tab
//                       label="Contact"
//                       style={{ textTransform: "capitalize" }}
//                     />
//                   </Tabs>
//                   <SettingsOutlinedIcon
//                     style={{
//                       color: "#857c7c8a",
//                       marginLeft: "60px",
//                       marginTop: "15px",
//                     }}
//                   ></SettingsOutlinedIcon>
//                   <DraftsOutlinedIcon
//                     style={{
//                       color: "#857c7c8a",
//                       marginLeft: "20px",
//                       marginTop: "15px",
//                     }}
//                   ></DraftsOutlinedIcon>
//                   <ExitToAppOutlinedIcon
//                     style={{
//                       color: "#857c7c8a",
//                       marginLeft: "20px",
//                       marginTop: "15px",
//                     }}
//                   ></ExitToAppOutlinedIcon>
//                 </div>
//               </Paper>
//             </Grid>
//             <Grid item xs={12}>
//               <Paper style={{ backgroundColor: "#e8e4e4" }}>
//                 <div className={classes.topbar2}>
//                   <div>
//                     <Typography
//                       style={{ fontSize: "18px", marginLeft: "15px" }}
//                     >
//                       Master
//                     </Typography>
//                     <Typography
//                       style={{ fontSize: "10px", marginLeft: "15px" }}
//                     >
//                       Chemical Tanker
//                     </Typography>
//                   </div>
//                   <div>
//                     <Button
//                       style={{
//                         marginLeft: "600px",
//                         backgroundColor: "white",
//                         textTransform: "capitalize",
//                         color: "#00000061",
//                         borderRadius: "50px",
//                       }}
//                     >
//                       Active
//                     </Button>
//                     <RefreshOutlinedIcon
//                       style={{
//                         marginLeft: "15px",
//                         color: "#149bdb",
//                         backgroundColor: "white",
//                         borderRadius: "10px",
//                         fontSize: "1.2rem",
//                       }}
//                     ></RefreshOutlinedIcon>
//                     <BorderColorOutlinedIcon
//                       style={{
//                         marginLeft: "15px",
//                         color: "#149bdb",
//                         backgroundColor: "white",
//                         borderRadius: "10px",
//                         fontSize: "1.2rem",
//                       }}
//                     ></BorderColorOutlinedIcon>
//                     <DeleteForeverOutlinedIcon
//                       style={{
//                         marginLeft: "15px",
//                         color: "#149bdb",
//                         backgroundColor: "white",
//                         borderRadius: "10px",
//                         fontSize: "1.2rem",
//                       }}
//                     ></DeleteForeverOutlinedIcon>
//                   </div>
//                 </div>
//               </Paper>
//             </Grid>
//             <Grid item xs={12}>
//               <Paper style={{ backgroundColor: "#e8e4e4" }}>
//                 <div className={classes.topbar3}>
//                   <Tabs
//                     value={value}
//                     onChange={handleChange}
//                     indicatorColor="primary"
//                     textColor="primary"
//                   >
//                     <Tab label="Description" />
//                     <Tab label="insight" />
//                     <Tab label="applicants" />
//                     <Tab label="notifications" />
//                     <Divider />
//                   </Tabs>
//                 </div>
//               </Paper>
//             </Grid>
//             <Grid item xs={12}>
//               <Paper style={{ backgroundColor: "#e8e4e4" }}>
//                 <Grid item xs={12} className={classes.totaledge}>
//                   <Grid item xs={8} style={{ padding: "30px" }}>
//                     <Grid item xs={12}>
//                       <TableContainer
//                         component={Paper}
//                         style={{ padding: "20px" }}
//                       >
//                         <Typography
//                           variant="h6"
//                           style={{ fontWeight: "normal", marginLeft: "10px" }}
//                         >
//                           Job Description
//                         </Typography>
//                         <Table>
//                           <TableBody>
//                             <TableRow>
//                               <TableCell style={{ color: "#1a191961" }}>
//                                 Rank
//                               </TableCell>
//                               <TableCell>Master</TableCell>
//                             </TableRow>

//                             <TableRow>
//                               <TableCell style={{ color: "#1a191961" }}>
//                                 Ship type
//                               </TableCell>
//                               <TableCell>Chemical Tanker</TableCell>
//                             </TableRow>

//                             <TableRow>
//                               <TableCell style={{ color: "#1a191961" }}>
//                                 Min.Experience
//                               </TableCell>
//                               <TableCell>06 Months</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell style={{ color: "#1a191961" }}>
//                                 US Visa
//                               </TableCell>
//                               <TableCell>Required</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell style={{ color: "#1a191961" }}>
//                                 Approx Joining
//                               </TableCell>
//                               <TableCell>20 September 2016</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell style={{ color: "#1a191961" }}>
//                                 Salary
//                               </TableCell>
//                               <TableCell>5000 USD</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell style={{ color: "#1a191961" }}>
//                                 Ship Details
//                               </TableCell>
//                               <TableCell>
//                                 Chembuik gibrlater <br />
//                                 20000DWT <br />
//                                 2010 Built
//                               </TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell style={{ color: "#1a191961" }}>
//                                 Description
//                               </TableCell>
//                               <TableCell>
//                                 Donec egestas vitae mi et feugiatbQuisque urna
//                                 mi, vestibulum sit amet congue quis, imperdiet
//                                 quis dui. Pellentesque rhoncus,justo et
//                                 soliictudin feugiat ante urna fringilla nisi, eu
//                                 lacreet leo leo in velit. ante urna fringilia
//                                 nisi, eu laoreet leo leo in velt.
//                               </TableCell>
//                             </TableRow>
//                           </TableBody>
//                         </Table>
//                       </TableContainer>
//                     </Grid>
//                   </Grid>
//                   <Grid
//                     item
//                     xs={4}
//                     style={{ padding: "20px", marginTop: "10px" }}
//                   >
//                     <Grid
//                       item
//                       xs={12}
//                       style={{ backgroundColor: "white", padding: "25px" }}
//                     >
//                       <div className={classes.edgetop}>
//                         <FacebookIcon
//                           style={{ color: "blue", marginLeft: "15px" }}
//                         ></FacebookIcon>
//                         <Typography style={{ marginLeft: "35px" }}>
//                           Share on facebook
//                         </Typography>
//                       </div>
//                     </Grid>
//                     <Grid
//                       item
//                       xs={12}
//                       style={{
//                         backgroundColor: "white",
//                         marginTop: "10px",
//                         padding: "25px",
//                       }}
//                     >
//                       <Typography>Other Jobs</Typography>

//                       <div
//                         className={classes.edge1}
//                         style={{
//                           padding: "3px",
//                           marginLeft: "10px",
//                           marginTop: "20px",
//                         }}
//                       >
//                         <Avatar src="https://e7.pngegg.com/pngimages/146/916/png-clipart-mercy-ships-logo-hospital-ship-mv-africa-mercy-ship-text-volunteering.png"></Avatar>

//                         <div>
//                           <Typography
//                             style={{
//                               fontSize: "18px",
//                               marginLeft: "60px",
//                               color: "blue",
//                             }}
//                           >
//                             Master
//                           </Typography>
//                           <Typography
//                             style={{ fontSize: "10px", marginLeft: "60px" }}
//                           >
//                             Chemical Tanker
//                           </Typography>
//                           <Typography
//                             style={{
//                               fontSize: "10px",
//                               color: "#1a191961",
//                               marginLeft: "60px",
//                             }}
//                           >
//                             Posted:20 Aug 2016
//                           </Typography>
//                         </div>
//                       </div>

//                       <div
//                         className={classes.edge1}
//                         style={{
//                           padding: "3px",
//                           marginLeft: "10px",
//                           marginTop: "20px",
//                         }}
//                       >
//                         <Avatar src="https://pbs.twimg.com/profile_images/963456964016488448/36q3HlXQ.jpg"></Avatar>

//                         <div>
//                           <Typography
//                             style={{
//                               fontSize: "18px",
//                               marginLeft: "60px",
//                               color: "blue",
//                             }}
//                           >
//                             Chief officer
//                           </Typography>
//                           <Typography
//                             style={{ fontSize: "10px", marginLeft: "60px" }}
//                           >
//                             Oil Tanker
//                           </Typography>
//                           <Typography
//                             style={{
//                               fontSize: "10px",
//                               color: "#1a191961",
//                               marginLeft: "60px",
//                             }}
//                           >
//                             Posted:20 Aug 2016
//                           </Typography>
//                         </div>
//                       </div>

//                       <div
//                         className={classes.edge1}
//                         style={{
//                           padding: "3px",
//                           marginLeft: "10px",
//                           marginTop: "20px",
//                         }}
//                       >
//                         <Avatar src="https://logodownload.org/wp-content/uploads/2020/02/costa-crociere-logo-1.png"></Avatar>

//                         <div>
//                           <Typography
//                             style={{
//                               fontSize: "18px",
//                               marginLeft: "60px",
//                               color: "blue",
//                             }}
//                           >
//                             Executive officer
//                           </Typography>
//                           <Typography
//                             style={{ fontSize: "10px", marginLeft: "60px" }}
//                           >
//                             Bulk Carrier
//                           </Typography>
//                           <Typography
//                             style={{
//                               fontSize: "10px",
//                               color: "#1a191961",
//                               marginLeft: "60px",
//                             }}
//                           >
//                             Posted:20 Aug 2016
//                           </Typography>
//                         </div>
//                       </div>

//                       <div
//                         className={classes.edge1}
//                         style={{
//                           padding: "3px",
//                           marginLeft: "10px",
//                           marginTop: "20px",
//                         }}
//                       >
//                         <Avatar src="https://i.pinimg.com/originals/d8/e4/1d/d8e41d6ce98a11115f4285956481927a.png"></Avatar>

//                         <div>
//                           <Typography
//                             style={{
//                               fontSize: "18px",
//                               marginLeft: "60px",
//                               color: "blue",
//                             }}
//                           >
//                             Master
//                           </Typography>
//                           <Typography
//                             style={{ fontSize: "10px", marginLeft: "60px" }}
//                           >
//                             Chemimcal Tanker
//                           </Typography>
//                           <Typography
//                             style={{
//                               fontSize: "10px",
//                               color: "#1a191961",
//                               marginLeft: "60px",
//                             }}
//                           >
//                             Posted:20 Aug 2016
//                           </Typography>
//                         </div>
                        
//                       </div>
//                       <div>
//                         <MoreHorizIcon style={{marginLeft: '60px', padding: '40px'}}></MoreHorizIcon>
//                         </div>
//                     </Grid>
//                   </Grid>
//                 </Grid>
//               </Paper>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// }

