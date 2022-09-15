import { TextField } from "@mui/material";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/system";

export const SearchSection = styled('div')`
    display:flex;
    flex-direction:row;
    flex-wrap:no-wrap;
    background-color:blue;
`;
export const StyledSearchbar = styled(TextField)`
    background:white;
    padding:10px;
`;