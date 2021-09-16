import React from 'react'
import DvrOutlinedIcon from "@material-ui/icons/DvrOutlined";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";
import IconButton from '@material-ui/core/IconButton';

export const LeftSideData = [
    {
        title: "DASHBOARD",
        icon: <DvrOutlinedIcon style={{fontSize: "40px"}}/>,
        link: "/Dashboard"
    },
    {
        title: "JOBS",
        icon: <LibraryBooksOutlinedIcon style={{fontSize: "40px"}}/>,
        link: "/Jobs"
    },
    {
        title: "SEA DOCS",
        icon: <DescriptionOutlinedIcon style={{fontSize: "50px"}} />,
        link: "/Sea docs"
    },
    {
        title: "CONNECTIONS",
        icon  : < SupervisorAccountOutlinedIcon style={{fontSize: "50px"}}/>,
        link: "/Connections"
    },

]
    


