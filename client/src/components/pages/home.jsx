import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import topImg from "../../assets/undraw_wallet.svg";
import analyticsImg from "../../assets/analyticsImage.png";
import Divider from "@mui/material/Divider";
import homeImg2 from "../../assets/homeImage2.png";
import Link from "react-router-dom/Link";

export default function Home() {
  return (
    <Grid container pt={3}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container display="row" alignItems="center" p={5}>
              <Grid item xs={12} lg={6}>
                <Typography variant="h4" fontWeight="bold" mb={3}>
                  Welcome to Financier!
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  Keep track of where you spend your money starting from today!
                </Typography>
                <Link className="text-link" to="/register">
                  <Button
                    variant="contained"
                    sx={{ mt: 5, width: "40%", height: "50px" }}
                  >
                    Get Started ▶
                  </Button>
                </Link>
                <Link className="text-link" to="/login">
                  <Button
                    variant="contained"
                    sx={{
                      mt: 5,
                      ml: 2,
                      width: "40%",
                      height: "50px",
                      bgcolor: "secondary.main",
                    }}
                  >
                    LOGIN ▶
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} lg={6}>
                <img style={{ width: "100%" }} src={topImg} alt="" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Box>
        <Grid item xs={12} mt={3}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} lg={6}>
              <img style={{ width: "80%" }} src={analyticsImg} alt="" />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography variant="h3" fontWeight="bold" color="white">
                Analytics On Your <br /> Spending Habits
              </Typography>
              <Typography variant="h6" fontWeight="bold" color="white">
                Graphs and Charts that help you visualize what you are doing
                with your money <br />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ color: "white" }} />
        <Grid item xs={12} mt={3}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} lg={6}>
              <Typography variant="h3" fontWeight="bold" color="white">
                Track your income <br /> and recurring expenses of the month
              </Typography>
              <Typography variant="h6" fontWeight="bold" color="white">
                Fixed expenditures are automatically deducted from your monthly
                income.
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <img style={{ width: "80%" }} src={homeImg2} alt="" />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
