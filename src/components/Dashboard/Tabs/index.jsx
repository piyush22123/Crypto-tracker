import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, createTheme, Table, ThemeProvider } from '@mui/material';
import Grids from '../Grid/Grids';
import List from '../Lists/List';
import "./styles.css"

export default function TabsComponent({ coins }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <Tabs value={value} onChange={handleChange} variant='fullWidth'>
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </Tabs>

        <TabPanel value="grid">
          <div className='grid-flex'>
            {coins.map((coin, i) => {
              return (
                <Grids coin={coin} key={i}/>
              )
            })}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table className='list-table'>
            {coins.map((coin, i) => {
              return (
                <List coin={coin} key={i}/>
              )
            })}
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}