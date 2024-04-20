import Image from "next/image";
import localImage from "../../public/dotBackground.jpg";
import { Button, Stack, TextField, Typography, Box } from "@mui/material";
import { Header } from "./components/header";
import { useColorAssets } from "@/hooks/view/useColorAssets";

export default function Home() {
const ColorAssets = useColorAssets();
  return (
    <Box display={"flex"} 
          bgcolor={ColorAssets.mainGreen} 
          minHeight={"100vh"} 
          padding={"0px"}
    >
      
        <Typography color={ColorAssets.textWhite}>{"kyohei's"}</Typography>
    </Box>
  );
}
