import { Box, Button } from "@mui/material"
import Column from "./Column/Column"
import { Add } from "@mui/icons-material"

function ListColumns({columns}) {
  console.log(columns);
  return (
    <Box sx={{
      bgcolor: 'inherit',
      width: "100%",
      height: "100%",
      display: "flex",
      overflowX: "auto",
      overflowY: "hidden",
      '&::-webkit-scrollbar-track': { m: 2 },
    }}>
      {columns?.map((column) => (
        <Column key={column?._id} column={column}/>
      ))}

      {/* Add New column Button */}
      <Box
        sx={{
          minWidth: '200px',
          maxWidth: '200px',
          mx: 2,
          borderRadius: '6px',
          height: 'fit-content',
          bgcolor: "#ffffff3d"
        }}
      >
        <Button
          startIcon={<Add />}
          sx={{ color: 'white' ,
            width: '100%',
            justifyContent: 'flex-start',
            pl: 2.5,
            py: 1
          }}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumns