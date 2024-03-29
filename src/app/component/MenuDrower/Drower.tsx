"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import CodeIcon from "@mui/icons-material/Code";
import { useRouter } from "next/navigation";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';



const drawerWidth = 330;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
  children?: React.ReactNode;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const history = useRouter();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const topDrawerList = [
    {
      title: "Design Team",
      icon: <DesignServicesIcon sx={{ fontWeight: 600, color: "black" }} />,
      route: "/designTeam", 
    },
    {
      title: "Marketing Team",
      icon: <Diversity2Icon sx={{ fontWeight: 600, color: "black" }} />,
      route: "/marketingTeam", 
    },
    {
      title: "Development Team",
      icon: <CodeIcon sx={{ fontWeight: 600, color: "black" }} />,
      route: "/developmentTeam", 
    },
  ];
  const drawer = (
    <div>
      <Toolbar>
        <Grid container>
          <Grid xs={2.5}>
            <VideoLibraryIcon sx={{ fontSize: 35 }} />
          </Grid>
          <Grid xs={2}>
            <Typography sx={{ fontSize: 11 }}>INC</Typography>
            <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
              InnovateHub
            </Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
            xs={7.5}
          >
            <AccountCircleIcon sx={{ fontSize: 34, color: "#d405e3" }} />
          </Grid>
        </Grid>
      </Toolbar>

      {/* <Divider /> */}
      <List
        sx={{
          border: "1px solid lightGray",
          m: 1,
          borderRadius: "10px",
          fontWeight: 600,
        }}
      >
        {topDrawerList.map((text, index) => {
          const getTeamTabSelect = localStorage.getItem(`${text.title}`);
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => {
                  if (text.title === "Design Team") {
                    localStorage.setItem(`Design Team`, "true");
                    localStorage.removeItem(`Marketing Team`);
                    localStorage.removeItem(`Development Team`);
                  } else if (text.title === "Marketing Team") {
                    localStorage.setItem(`Marketing Team`, "true");
                    localStorage.removeItem(`Design Team`);
                    localStorage.removeItem(`Development Team`);
                  } else if (text.title === "Development Team") {
                    localStorage.setItem(`Development Team`, "true");
                    localStorage.removeItem(`Design Team`);
                    localStorage.removeItem(`Marketing Team`);
                  }
                  history.push(text.route);
                }}
                sx={{
                  border:
                    getTeamTabSelect && getTeamTabSelect === "true"
                      ? "2px solid lightGray"
                      : "none",
                  m: 0.5,
                  borderRadius: "10px",
                  bgcolor: getTeamTabSelect && getTeamTabSelect === "true" ? "#f5f5f5" : "",
                }}
              >
                <>
                  <ListItemIcon>{text.icon}</ListItemIcon>

                  <ListItemText sx={{ color: "black" }} primary={text.title} />
                </>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: 600,
                    color: "gray",
                    fontSize: 13,
                  }}
                >
                  {`X + ${index + 1}`}
                </Typography>
              </ListItemButton>
            </ListItem>
          );
        })}
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary={"Create a Team"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(99% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          color: "black",
          bgcolor: "white",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        {/* only for small mobile device  */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        {/* this for big screen devices  */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderLeft: "1px solid lightGray",
              marginLeft: "10px",
              marginTop: "5px",
              borderTop: "1px solid lightGray",
              borderRadius: "15px",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}
