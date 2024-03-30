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
import RestoreIcon from "@mui/icons-material/RestorePage";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { BottomNavigation, BottomNavigationAction, Collapse, Grid, Paper } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import CodeIcon from "@mui/icons-material/Code";
import { useRouter } from "next/navigation";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddIcon from "@mui/icons-material/Add";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { FolderDesign, FolderProducts, FolderSales } from "@/constants/drawer";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MiddleContent from "../MiddleContent";
import { relative } from "path";
import SearchBar from "../SearchBar";

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
  const [open, setOpen] = React.useState(false);
  const [salesOpen, setSalesOpen] = React.useState(false);
  const [designOpen, setDesignOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const SalesHandleClick = () => {
    setSalesOpen(!salesOpen);
  };
  const DesignHandleClick = () => {
    setDesignOpen(!designOpen);
  };
  // top left drawer list
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
  // left drawer 
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
                  // this is for select the option and focus logic and save in local storage
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
                  bgcolor:
                    getTeamTabSelect && getTeamTabSelect === "true"
                      ? "#f5f5f5"
                      : "",
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
      <List>
        {["Folders"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{ m: 0, p: 0, pl: 2, pr: 2 }}>
              <ListItemText primary={text} />
              <ListItemIcon sx={{ textAlign: "end", ml: 3 }}>
                <AddIcon sx={{ ml: 5 }} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <ListItemButton
        sx={{ bgcolor: open ? "lightGray" : "" }}
        onClick={handleClick}
      >
        <ListItemIcon>
          <FolderOpenIcon />
        </ListItemIcon>
        <ListItemText primary="Product" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse
        sx={{ ml: 5, borderLeft: "2px solid lightGray", mb: 1 }}
        in={open}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          {FolderProducts.map((value, index) => {
            return (
              <ListItemButton
                key={index}
                sx={{ p: 0, pl: 4, m: 0, fontWeight: 600 }}
              >
                <ListItemText
                  sx={{ color: "#525151" }}
                  primary={<b>{value.title}</b>}
                />
              </ListItemButton>
            );
          })}
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary={"Add new sub"} />
          </ListItemButton>
        </List>
      </Collapse>

      <Divider />
      <ListItemButton
        sx={{ bgcolor: salesOpen ? "lightGray" : "" }}
        onClick={SalesHandleClick}
      >
        <ListItemIcon>
          <FolderOpenIcon />
        </ListItemIcon>
        <ListItemText primary="Sales" />
        {salesOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse
        sx={{ ml: 5, borderLeft: "2px solid lightGray", mb: 1 }}
        in={salesOpen}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          {FolderSales.map((value, index) => {
            return (
              <ListItemButton
                key={index}
                sx={{ p: 0, pl: 4, m: 0, fontWeight: 600 }}
              >
                <ListItemText
                  sx={{ color: "#525151" }}
                  primary={<b>{value.title}</b>}
                />
              </ListItemButton>
            );
          })}
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary={"Add new sub"} />
          </ListItemButton>
        </List>
      </Collapse>
      <Divider />
      <ListItemButton
        sx={{ bgcolor: salesOpen ? "lightGray" : "" }}
        onClick={DesignHandleClick}
      >
        <ListItemIcon>
          <FolderOpenIcon />
        </ListItemIcon>
        <ListItemText primary="Design" />
        {designOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse
        sx={{ ml: 5, borderLeft: "2px solid lightGray", mb: 1 }}
        in={designOpen}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          {FolderDesign.map((value, index) => {
            return (
              <ListItemButton
                key={index}
                sx={{ p: 0, pl: 4, m: 0, fontWeight: 600 }}
              >
                <ListItemText
                  sx={{ color: "#525151" }}
                  primary={<b>{value.title}</b>}
                />
              </ListItemButton>
            );
          })}
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary={"Add new sub"} />
          </ListItemButton>
        </List>
      </Collapse>
      <Divider />
      <List>
        {["Office", "Legal"].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FolderOpenIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Grid sx={{ mt: 15 }} container>
        <Grid xs={0.7}></Grid>
        <Grid xs={1}>
          <PersonAddAltIcon />
        </Grid>
        <Grid xs={0.3}></Grid>
        <Grid xs={7}>
          <Typography sx={{ fontWeight: 600 }}>Invite Teammates</Typography>
        </Grid>
        <Grid xs={3}></Grid>

        <Grid xs={0.75}></Grid>
        <Grid sx={{ mt: 1 }} xs={1.1}>
          <HelpOutlineIcon />
        </Grid>
        <Grid xs={0.3}></Grid>
        <Grid sx={{ mt: 1 }} xs={8}>
          <Typography sx={{ fontWeight: 600 }}>Help and First steps</Typography>
        </Grid>
        <Grid xs={1.8}></Grid>

        <Grid container>
          <Grid xs={0.6}></Grid>
          <Grid
            sx={{
              mt: 1,
              bgcolor: "#ebebeb",
              p: 1.5,
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
            xs={1.3}
          >
            <Typography>7</Typography>
          </Grid>
          <Grid sx={{ bgcolor: "#ebebeb", mt: 1, pt: 1.5 }} xs={0.3}></Grid>
          <Grid
            sx={{
              mt: 1,
              bgcolor: "#ebebeb",
              pt: 1.5,
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
            xs={8}
          >
            <Typography sx={{ fontWeight: 600 }}>Days Left on Trial</Typography>
          </Grid>
          <Grid xs={4}></Grid>
        </Grid>
      </Grid>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(97% - ${drawerWidth}px)` },
          // m:4,
          ml: { sm: `${drawerWidth}px` },
          mt: { sm: `${10}px` },
          mr: { sm: `${30}px` },
          color: "black",
          bgcolor: "white",
          border: "1px solid lightGray",
          borderRadius: "15px",
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
          <Grid alignItems="center" container>
            <Grid xs={2} md={2}>
              <Typography sx={{ fontWeight: 600, fontSize: 18 }}>
                Products
              </Typography>
            </Grid>
            <Grid xs={2} lg={6}></Grid>
            <Grid xs={8} lg={4}>
              <SearchBar />
            </Grid>
          </Grid>
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
          color: "black",
        }}
      >
        <MiddleContent />
         
      </Box>
    </Box>
  );
}
