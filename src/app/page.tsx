import Image from "next/image";
import localImage from "../../public/dotBackground.jpg";
import { Button, Stack, TextField, Typography, Box } from "@mui/material";
import { Header } from "./components/header";
import { useColorAssets } from "@/hooks/view/useColorAssets";

export default function Home() {
  const ColorAssets = useColorAssets();
  return (
    <>
      <Typography color={ColorAssets.textWhite}>{"kyohei's"}</Typography>
    </>
  );
}
