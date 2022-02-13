import { Grid } from "@mui/material";
import logo from "../assets/logo.svg";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaSteamSquare,
} from "react-icons/fa";

function Footer(): JSX.Element {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Grid container>
          <Grid item md={3} xs={12} className="my-8 text-center md:text-right">
            <p className="text-2xl font-bold mb-2">Important links</p>
            <ul>
              <li className="cursor-pointer">Terms of Service</li>
              <li className="cursor-pointer">Read more</li>
              <li className="cursor-pointer">White papers</li>
            </ul>
          </Grid>

          <Grid item md={3} xs={12} className="my-8 text-center md:text-right">
            <p className="text-2xl font-bold mb-2">Other pages</p>
            <ul>
              <li className="cursor-pointer">About us</li>
              <li className="cursor-pointer">Laen more</li>
              <li className="cursor-pointer">White papers</li>
            </ul>
          </Grid>
          <Grid
            item
            md={3}
            xs={12}
            className="my-8 pb-10 text-center md:text-right"
          >
            <p className="text-2xl font-bold mb-2">Other pages</p>
            <ul>
              <li className="cursor-pointer">About us</li>
              <li className="cursor-pointer">Laen more</li>
              <li className="cursor-pointer">White papers</li>
            </ul>
          </Grid>

          <Grid
            container
            alignItems="center"
            direction="column"
            className=""
            md={3}
          >
            <div className="max-w-[80px]">
              <img src={logo} width="80px" />
              <div className="my-3 flex justify-around">
                <FaFacebookSquare />
                <FaTwitterSquare />
                <FaSteamSquare />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
}

export default Footer;
