import { useColorAssets } from "@/hooks/view/useColorAssets";
import { Box, Typography } from "@mui/material";

export const Header = (): JSX.Element => {
    const ColorAssets = useColorAssets();
    return(
        <Box display="flex" bgcolor={ColorAssets.textWhite} justifyContent={"center"} position={"fixed"} zIndex={999}>
            <Typography>This is Header</Typography>
        </Box>
    );
}