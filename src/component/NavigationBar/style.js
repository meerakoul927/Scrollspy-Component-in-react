import { styled } from "@mui/system";


export const StyledDiv = styled('div')(({})=>({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "1.333rem",
    backgroundColor: "red",
}))
export const StyledButton = styled('button')(({  }) => ({
  backgroundColor: '#007AFF',
  padding: '10px',
  border: '1px solid #1976D2',
  color: 'white', // Example text color
  width : '100%',
  '&:hover': {  // Styles on hover
    backgroundColor: '#005CB2', // Darker blue on hover
    borderColor: '#1565C0',
  },
}));
export const StyledList = styled('ul')(({}) => ({
    display: "flex",
    gap: "1.333rem",
    listStyleType: "none",
    cursor: "pointer",
}));