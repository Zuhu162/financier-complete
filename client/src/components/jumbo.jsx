import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Card, Grid } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { Box } from "@mui/system";
import Barchart from "./barchart";
import Carousel from "react-material-ui-carousel";
import LineChart from "./linechart";
import LC from "./linechart";
import HorizontalBar from "./horizontalBar";

export default function Jumbo(props) {
  return (
    <Card minHeight={500}>
      <Carousel
        navButtonsAlwaysVisible={true}
        autoPlay={false}
        duration={500}
        NextIcon={<ArrowRightIcon />}
        PrevIcon={<ArrowLeftIcon />}
      >
        <Box sx={{ mx: "auto" }} mb={5} padding={5} minHeight={500}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h4">
                <Box sx={{ fontWeight: "bold" }}>
                  Total Monthly Spendings: ${props.spendings.thisMonth}
                </Box>
              </Typography>
              <Typography variant="secondary">
                Last Month: ${props.spendings.lastMonth}
              </Typography>
              <Box mt={10}>
                <Barchart items={props.spendings}></Barchart>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mx: "auto" }} mb={5} padding={5} minHeight={500}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5">
                <Box sx={{ fontWeight: "bold" }}>
                  Non Recurring Expenditures (One-time expenditures) by Month
                </Box>
              </Typography>
              <Box mt={10}>
                <LC items={props.oneTime}></LC>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mx: "auto" }} mb={5} padding={5} minHeight={500}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5">
                <Box sx={{ fontWeight: "bold" }}>
                  Total Money saved per month <br />
                </Box>
              </Typography>
              (Income - fixed costs - non recurring costs)
              <Box mt={10}>
                <HorizontalBar
                  items={props.spendings}
                  oneTime={props.oneTime}
                ></HorizontalBar>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Carousel>
    </Card>
  );
}
