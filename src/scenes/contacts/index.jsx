import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon  from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const columns = [
    {
      field: "id", headerName: "ID", flex: 0.5
    }, 
    {
      field: "registrarId", 
      headerName: "Registrar ID", 
      flex: 2, 
      cellClassName: "name-column--cell"
    },
    {
      field: "age", 
      headerName: "Age", 
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 2
    },
    {
      field: "phone", 
      headerName: "Phone Number", 
      flex: 2
    },
    {
      field: "address", 
      headerName: "Address", 
      flex: 2
    },
    {
      field: "city", 
      headerName: "City", 
      flex: 2
    },
    {
      field: "zipCode", 
      headerName: "ZipCode", 
      flex: 2
    },
    {
      field: "email", 
      headerName: "Email", 
      flex: 2
    }

  ]
  return (
    <Box m="20px">
      <Header title="CONTACTSD" subtitle="List of Contacts For Future Reference" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none"
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none"
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300]
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none"
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700]
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`
          },
        }}
      >
        <DataGrid 
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  )
}

export default Contacts;