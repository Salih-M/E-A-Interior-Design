import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";
import { Outlet, Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { item: "Home", link: "/" },
  { item: "Minimalist", link: "/minimalistic" },
  { item: "Nordic", link: "/nordic" },
  { item: "Modern", link: "/modern" },
  { item: "Contact", link: "/contact" },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { i18n } = useTranslation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleChangeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h4" sx={{ my: 2 }}>
        E | A
      </Typography>
      <Divider />
      <List>
        {navItems.map((navItem, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={Link}
              to={navItem.link}
            >
              <ListItemText primary={navItem.item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ bgcolor: "white", color: "black" }}>
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
            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              E | A
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((navItem, index) => (
                <Button
                  component={Link}
                  to={navItem.link}
                  key={index}
                  sx={{ color: "black" }}
                >
                  {navItem.item}
                </Button>
              ))}
            </Box>
            <Select
              value={i18n.language}
              onChange={handleChangeLanguage}
              sx={{
                color: "black",
                bgcolor: "white",
                borderRadius: "4px",
                fontSize: "13px",
                padding: "4px 4px",
                minWidth: "54px",
                height: "32px",
                "& .MuiSelect-select": { padding: "4px 8px" },
              }}
            >
              <MenuItem value="en">EN</MenuItem>
              <MenuItem value="tr">TR</MenuItem>
            </Select>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
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
        </nav>
      </Box>
      <Outlet />
    </div>
  );
}

export default DrawerAppBar;