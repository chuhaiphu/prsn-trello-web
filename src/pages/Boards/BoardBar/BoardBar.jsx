import { AddToDrive, Bolt, Dashboard, FilterList, PersonAdd, VpnLock } from "@mui/icons-material"
import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from "@mui/material"
import {capitalizeFirstLetter} from '~/utils/formatters'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  borderRadius: '4px',
  padding: '5px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar({board}) {
  return (
    <Box sx={{
      width: "100%",
      height: (theme) => theme.trello.boardBarHeight,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 1,
      paddingX: 2, overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
    }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2
        }}>
        <Chip
          sx={MENU_STYLES}
          icon={<Dashboard />}
          label={board?.title}
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLock />}
          label={capitalizeFirstLetter(board?.type)}
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDrive />}
          label="Add to Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<Bolt />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterList />}
          label="Filters"
          clickable
        />
      </Box>
      <Box sx={{
        display: "flex",
        alignItems: "center",
        gap: 2
      }}>
        <Button
          startIcon={<PersonAdd />}
          variant="outlined"
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={3}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 32, height: 32,
              fontSize: 16, border: 'none', color: 'white', cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}>
          <Tooltip title="alt_name">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="alt_name">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="alt_name">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="alt_name">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar