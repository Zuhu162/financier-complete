import { Box } from "@mui/material";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";

export default function HorizontalBar(props) {
  let Data = [];
  props.oneTime.map((item) => {
    let time = moment(item.created_at).format("MMMM YYYY");
    if (Data.some((d) => d.time === time)) {
      const i = Data.findIndex((i) => i.time === time);
      Data[i].value += item.cost;
    } else {
      Data.push({
        time: time,
        value: item.cost,
        saved: props.items.income - item.cost,
      });
    }
  });

  const data = [
    {
      name: "Utilities",
      uv: 4000,
      Total: props.items.utilities,
      amt: 2400,
    },
    {
      name: "Entertainment",
      uv: 3000,
      Total: props.items.entertainment,
      amt: 2210,
    },
    {
      name: "Education",
      uv: 2000,
      Total: props.items.education,
      amt: 2290,
    },
    {
      name: "MISC",
      uv: 2780,
      Total: props.items.misc,
      amt: 2000,
    },
    {
      name: "Non-Recurring(This Month)",
      uv: 2780,
      Total: props.items.oneTime,
      amt: 2000,
    },
  ];

  return (
    <Box ml={3}>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          layout="vertical"
          data={Data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="#1E1E1E" strokeDasharray="none" />
          <XAxis type="number" dataKey="saved" />
          <YAxis YAxis type="category" dataKey="time" />
          <Tooltip cursor={{ fill: "#1E1E1E" }} />
          <Legend />
          <Bar dataKey="saved" fill="#1A90FF" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}
