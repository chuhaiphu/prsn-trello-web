/* eslint-disable react/prop-types */
import { Attachment, Comment, Group } from "@mui/icons-material"
import { Button, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Card as MuiCard } from "@mui/material"


function Card({ card }) {
  const shouldShowCardAction = () => {
    return !!(card?.attachments?.length || card?.comments?.length || card?.memberIds?.length)
  }
  
  return (
    <MuiCard
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
        overflow: 'unset'
      }}>
      {card?.cover && (
        <CardMedia
          sx={{ height: 140 }}
          image={card?.cover}
        />
      )}
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>{card?.title}</Typography>
      </CardContent>
      {shouldShowCardAction() && (
        <CardActions sx={{ p: '0 4px 8px 4px' }}>
          {!!card?.memberIds?.length && (
            <Button size="small" startIcon={<Group />}>{card?.memberIds?.length}</Button>
          )}
          {!!card?.comments?.length && (
            <Button size="small" startIcon={<Comment />}>{card?.comments?.length}</Button>
          )}
          {!!card?.attachments?.length && (
            <Button size="small" startIcon={<Attachment />}>{card?.attachments?.length}</Button>
          )}
        </CardActions>
      )}
    </MuiCard>
  )
}

export default Card