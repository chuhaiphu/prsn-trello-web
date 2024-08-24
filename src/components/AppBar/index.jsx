import AppsIcon from '@mui/icons-material/Apps'
import { Box, Button, TextField, Tooltip, Typography } from "@mui/material"
import SvgIcon from "@mui/material/SvgIcon"
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import ModeSelect from "~/components/ModeSelect"
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Workspaces from './Menus/Workspaces'
import { Badge } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import { HelpOutline } from '@mui/icons-material'
import Profiles from './Menus/Profiles'

function AppBar() {
  return (
    <Box px={2} sx={{ width: "100%", height: (theme) => theme.trello.appBarHeight, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1, overflowX: 'auto' }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "primary.main" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon sx={{ color: "primary.main" }} component={TrelloIcon} fontSize="small" inheritViewBox />
          <Typography variant='span'
            sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: "primary.main" }}>
              Trello
          </Typography>
        </Box>
        <Box sx={{ display: {xs: 'none', md: 'flex'}, gap: 1 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="outlined">Create</Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField id="outlined-search" label="Search..." type="search" size='small' sx={{ minWidth: '120px'}} />
        <ModeSelect />
        <Tooltip title="Notifications">
          <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon sx={{ color: "primary.main" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
            <HelpOutline sx={{ color: "primary.main" }} />
          </Badge>
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar