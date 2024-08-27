/* eslint-disable react/prop-types */
import { Attachment, Comment, Group } from "@mui/icons-material"
import { Button, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Card as MuiCard } from "@mui/material"

function Card({ temporaryHideMedia }) {
  if(temporaryHideMedia) {
    return (
      <MuiCard
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
        overflow: 'unset'
      }}>
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>Phu MERN Stack</Typography>
      </CardContent>
    </MuiCard>
    )
  }
  return (
    <MuiCard
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
        overflow: 'unset'
      }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://tinyurl.com/yyfb8bc9"
        title="green iguana"
      />
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>Phu MERN Stack</Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px 4px' }}>
        <Button size="small" startIcon={<Group />}>20</Button>
        <Button size="small" startIcon={<Comment />}>15</Button>
        <Button size="small" startIcon={<Attachment />}>10</Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card