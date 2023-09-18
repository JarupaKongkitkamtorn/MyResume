import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import Button from '@mui/material-next/Button';

//component
import { navbarData, navbarDataMobile } from '../../const/Navbar'
import { handleScroll } from '../../function/smooth'
import { InformationProps } from '../../App'

const drawerWidth = 240;

interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',
    },
});
interface StyledTabProps {
    label: string;
    onClick: () => void
}

const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
        color: '#fff',
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
}));
interface NavbarProps {
    information: InformationProps,
    matchesmd: boolean,
}

const Navbar: React.FC<NavbarProps> = ({ information, matchesmd }) => {
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const [offset, setOffset] = useState<number>(0)
    const [heroPosition, setHeroPosition] = useState<number>(0)
    const [value, setValue] = useState<any>(false);
    useEffect(() => {
        document.addEventListener("scroll", trackScrolling, { passive: true })
        const hero_section = document.getElementById("hero_section")
        if (hero_section) {
            setHeroPosition(hero_section.offsetTop)
        }
        return () => {
            window.removeEventListener("scroll", trackScrolling)
        }
    }, [])

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const trackScrolling = () => {
        const getOffset = document.body.scrollTop || document.documentElement.scrollTop
        setOffset(getOffset)
        const hero_section = document.getElementById("hero_section")
        if (hero_section) {
            setHeroPosition(hero_section.offsetTop)
        }
    }
    const drawer = (
        <Box onClick={handleDrawerToggle} >
            <Typography variant="h6" sx={{ my: 2, textAlign: "center" }} onClick={() => handleScroll("herosection")}>
                {information.name}
            </Typography>
            <Divider />
            <List>
                {navbarDataMobile.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.label} onClick={() => handleScroll(item.id)} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" className='navbar'>
                <Toolbar className={offset >= heroPosition ? "toolbar" : "toolbartop"}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' }, color: "#ffffff" }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Container fixed className='flex-between'>
                        <Typography
                            className='logo'
                            onClick={() => handleScroll("herosection")}
                            sx={{ display: { xs: 'none', md: 'block' } }}
                        >
                            {information.name}
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <div className='flex-center'>
                                <StyledTabs
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="styled tabs example"
                                >
                                    {navbarData.map((item, key) => <StyledTab key={key} label={item.label} onClick={() => handleScroll(item.id)} />)}
                                </StyledTabs>
                                <Button className='heartbeat' variant="filled"
                                    onClick={() => {
                                        handleScroll("contactMe")
                                        setValue(false)
                                    }}>Contact Me</Button>
                            </div>
                        </Box>
                    </Container>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}
export default Navbar