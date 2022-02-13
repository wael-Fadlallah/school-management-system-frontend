import React from "react";
import { Button, Grid } from "@mui/material";
import Image from "../assets/undraw.svg";
import { FaUsers } from "react-icons/fa";
export default function Home(): JSX.Element {
  return (
    <>
      <Grid container className="py-12">
        <Grid container md={6} xs={12} alignItems="center">
          <div>
            <h2 className="text-3xl mb-6">
              A visually attractive and effective Landing page Lorem ipsum dolor
              sit amet
            </h2>
            <h4 className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida
            </h4>
            <Button variant="contained">Read more</Button>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <img src={Image} alt="This is an image description to imporve SEO" />
        </Grid>
      </Grid>

      <Grid container className="py-6" justifyContent="space-evenly">
        <div className="card my-4">
          <FaUsers size={60} className="card-icon" />
          <h4 className="mb-2">WHO WE ARE</h4>
          <p className="mb-2">
            Lorem ipsum dolor sit amet, ed do eiusmod tempor incididunt ut
            labore et dolore magna.
          </p>
        </div>

        <div className="card my-4">
          <FaUsers size={60} className="card-icon" />
          <h4 className="mb-2">OUR MISSION</h4>
          <p className="mb-2">
            Lorem ipsum dolor sit amet, ed do eiusmod tempor incididunt ut
            labore et dolore magna.
          </p>
        </div>

        <div className="card my-4">
          <FaUsers size={60} className="card-icon" />
          <h4 className="mb-2">OUR VISSION</h4>
          <p className="mb-2">
            Lorem ipsum dolor sit amet, ed do eiusmod tempor incididunt ut
            labore et dolore magna.
          </p>
        </div>
      </Grid>
    </>
  );
}
