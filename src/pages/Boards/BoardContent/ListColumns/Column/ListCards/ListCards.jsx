import { Box } from "@mui/material"
import Card from "./Card/Card"

function ListCards({cards}) {
  return (
    <Box
    sx={{
      p: '0 5px',
      m: '0 5px',
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      overflowX: 'hidden',
      overflowY: 'auto',
      maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${theme.trello.columnHeaderHeight} - ${theme.trello.columnHeaderHeight} )`,
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#ced0da',
        borderRadius: '8px'
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#bfc2cf'
      }
    }}>
      {cards?.map((card, index) => (
        <Card key={index} card={card}/>
      ))}
  </Box>
  )
}

export default ListCards