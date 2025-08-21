"use client";

import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export default function DashboardLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const menuItems = [
    { label: "Home", action: () => router.push("/") },
    {
      label: "Add Product",
      action: () => router.push("/dashboard/addproducts"),
    },
    { label: "Logout", action: () => signOut({ callbackUrl: "/" }) },
  ];

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItemButton key={item.label} onClick={item.action}>
          <ListItemText primary={item.label} />
        </ListItemButton>
      ))}
    </List>
  );

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Box component="nav" sx={{ width: { sm: 240 }, flexShrink: { sm: 0 } }}>
        {/* Drawer for small screens */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { width: 240 },
          }}
        >
          {drawer}
        </Drawer>

        {/* Permanent drawer for larger screens */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": { width: 240 },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        {/* Top Menu Button for mobile */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: "none" }, mb: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Page content */}
        {children}
      </Box>
    </div>
  );
}
