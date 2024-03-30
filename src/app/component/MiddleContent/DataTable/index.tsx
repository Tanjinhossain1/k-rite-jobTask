import * as React from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { Avatar, Button, Chip, Divider, Fade, Grid, Menu, MenuItem, Stack } from "@mui/material";
import GridOnIcon from "@mui/icons-material/GridOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SortIcon from "@mui/icons-material/Sort";
import TuneIcon from "@mui/icons-material/Tune";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import { jsx } from "@emotion/react";
import { deepOrange, deepPurple } from "@mui/material/colors";

interface Data {
  id: number;
  brand: string;
  description: string;
  members: JSX.Element;
  categories: JSX.Element;
  tags: string;
  nextMeeting: JSX.Element;
}

function createData(
  id: number,
  brand: string,
  description: string,
  members: JSX.Element,
  categories: JSX.Element,
  tags: string,
  nextMeeting: JSX.Element
): Data {
  return {
    id,
    brand,
    description,
    members,
    categories,
    tags,
    nextMeeting,
  };
}

const rows:Data[] = [
  createData(
    1,
    "Wfx",
    "Develop a Personalaised",
    <Stack direction="row" spacing={1}>
      <Avatar sx={{width:'20px',height:"25px"}}>H</Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500],width:'20px',height:"25px" }}>N</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500],width:'20px',height:"25px" }}>F</Avatar>
      <Avatar sx={{width:'20px',height:"25px" }}>T</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500],width:'20px',height:"25px" }}>H</Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500],width:'20px',height:"25px" }}>K</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500],width:'20px',height:"25px" }}>M</Avatar>
    </Stack>,
   <Chip sx={{bgcolor:"#ebdeff",color:"#7e2eff",fontWeight:800}} label="Automation" />,
    "#DigitalTransformation",
    <Chip sx={{bgcolor:"#d7fae8",fontWeight:500,fontSize:12}} label="In 30 Minutes" />
  ),
  createData(
    2,
    "Shopify",
    "Intreduce a cloud based",
    <Stack direction="row" spacing={1}>
      <Avatar sx={{ bgcolor: deepPurple[500],width:'20px',height:"25px" }}>M</Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500],width:'20px',height:"25px" }}>K</Avatar>
      <Avatar sx={{width:'20px',height:"25px"}}>H</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500],width:'20px',height:"25px" }}>F</Avatar>
      <Avatar sx={{width:'20px',height:"25px" }}>P</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500],width:'20px',height:"25px" }}>H</Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500],width:'20px',height:"25px" }}>N</Avatar>
    </Stack>,
   <Stack direction="row" spacing={1}>
    <Chip sx={{bgcolor:"#ffe2c2",color:"#cf6e00",fontWeight:800}} label="E-Commerce" />
    <Chip sx={{bgcolor:"#fff4c7",color:"#663600",fontWeight:800}} label="B2B" />
   </Stack>,
    "#OnlineShopping #DigitalShopping",
    <Chip sx={{bgcolor:"#b3e0ff",fontWeight:500,fontSize:12}} label="Tomorrow" />
  ),
  createData(
    3,
    "Mail Chimp",
    "Develop in mobile app",
    <Stack direction="row" spacing={1}>
      <Avatar sx={{width:'20px',height:"25px"}}>H</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500],width:'20px',height:"25px" }}>M</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500],width:'20px',height:"25px" }}>H</Avatar>
      <Avatar sx={{width:'20px',height:"25px" }}>P</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500],width:'20px',height:"25px" }}>F</Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500],width:'20px',height:"25px" }}>K</Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500],width:'20px',height:"25px" }}>N</Avatar>
    </Stack>,
   <Stack direction="row" spacing={1}>
    <Chip sx={{bgcolor:"#b5f5dd",color:"#00b06f",fontWeight:800}} label="Sass" />
    <Chip sx={{bgcolor:"#e2e3b3",color:"#663600",fontWeight:800}} label="MOBILE" />
   </Stack>,
    "#Technologies #DigitalTechnologies",
    <Chip sx={{bgcolor:"#b3e0ff",fontWeight:500,fontSize:12}} label="Tomorrow" />
  ),
  createData(
    4,
    "PayPal",
    "This Program could include",
    <Stack direction="row" spacing={1}>
      <Avatar sx={{ bgcolor: deepOrange[500],width:'20px',height:"25px" }}>N</Avatar>
      <Avatar sx={{width:'20px',height:"25px"}}>H</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500],width:'20px',height:"25px" }}>H</Avatar>
      <Avatar sx={{width:'20px',height:"25px" }}>P</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500],width:'20px',height:"25px" }}>M</Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500],width:'20px',height:"25px" }}>K</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500],width:'20px',height:"25px" }}>F</Avatar>
    </Stack>,
   <Stack direction="row" spacing={1}>
    <Chip sx={{bgcolor:"#b5f5dd",color:"#00b06f",fontWeight:800}} label="MarketPlace" />
   </Stack>,
    "#BuyCellOnline",
    <Chip sx={{bgcolor:"#d7fae8",fontWeight:500,fontSize:12}} label="In 6 Hours" />
  ),
  createData(
    5,
    "Google",
    "Offer a Comperencively ",
    <Stack direction="row" spacing={1}>
      <Avatar sx={{ bgcolor: deepOrange[500],width:'20px',height:"25px" }}>G</Avatar>
      <Avatar sx={{width:'20px',height:"25px"}}>H</Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500],width:'20px',height:"25px" }}>N</Avatar>
      <Avatar sx={{ width:'20px',height:"25px" }}>H</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500],width:'20px',height:"25px" }}>M</Avatar>
      <Avatar sx={{width:'20px',height:"25px" }}>P</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500],width:'20px',height:"25px" }}>F</Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500],width:'20px',height:"25px" }}>K</Avatar>
    </Stack>,
   <Stack direction="row" spacing={1}>
    <Chip sx={{bgcolor:"#ebdeff",color:"#7e2eff",fontWeight:800}} label="Automation" />
    <Chip sx={{bgcolor:"#fff4c7",color:"#663600",fontWeight:800}} label="Finance" />
   </Stack>,
    "#SmartFinance #workHard",
    <Chip sx={{bgcolor:"#f7d5db",fontWeight:800,fontSize:12,color:"#870019"}} label="No Contact" />
  ),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "brand",
    numeric: false,
    disablePadding: true,
    label: "Brand",
  },
  {
    id: "description",
    numeric: false,
    disablePadding: true,
    label: "Description",
  },
  {
    id: "members",
    numeric: false,
    disablePadding: true,
    label: "Members",
  },
  {
    id: "categories",
    numeric: false,
    disablePadding: true,
    label: "Categories",
  },
  {
    id: "tags",
    numeric: false,
    disablePadding: true,
    label: "Tags",
  },
  {
    id: "nextMeeting",
    numeric: false,
    disablePadding: true,
    label: "Next Meeting",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ borderRight: "1px solid lightGray" }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              sx={{ ml: 1 }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickDesk = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClickTags = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseDesk = () => {
    setAnchorEl1(null);
  };
  const handleCloseTags = () => {
    setAnchorEl2(null);
  };
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          <div>
            <Grid gap={2} container>
              <Box
                sx={{
                  border: "1px solid lightGray",
                  borderRadius: "15px",
                  fontSize: 14,
                }}
                onClick={handleClick}
              >
                <IconButton>
                  <GridOnIcon sx={{ fontSize: 14 }} />
                </IconButton>
                <Button
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  sx={{ color: "black", fontWeight: 600, fontSize: 11 }}
                >
                  All Brands
                </Button>
                <IconButton>
                  <ArrowDropDownIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </Box>
              <Box
                sx={{
                  border: "1px solid lightGray",
                  borderRadius: "15px",
                  fontSize: 14,
                }}
                onClick={handleClickDesk}
              >
                <IconButton>
                  <GridOnIcon sx={{ fontSize: 14 }} />
                </IconButton>
                <Button
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  sx={{ color: "black", fontWeight: 600, fontSize: 11 }}
                >
                  Desk
                </Button>
                <IconButton>
                  <ArrowDropDownIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </Box>
              <Box
                sx={{
                  border: "1px solid lightGray",
                  borderRadius: "15px",
                  fontSize: 14,
                }}
                onClick={handleClickTags}
              >
                <IconButton>
                  <GridOnIcon sx={{ fontSize: 14 }} />
                </IconButton>
                <Button
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  sx={{ color: "black", fontWeight: 600, fontSize: 11 }}
                >
                  Tags
                </Button>
                <IconButton>
                  <ArrowDropDownIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </Box>
              <Box
                sx={{
                  border: "1px solid lightGray",
                  borderRadius: "15px",
                  fontSize: 14,
                }}
              >
                <IconButton>
                  <SortIcon sx={{ fontSize: 18 }} />
                </IconButton>
                <Button
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  sx={{ color: "black", fontWeight: 600, fontSize: 12 }}
                >
                  Sort
                </Button>
              </Box>
              <Box
                sx={{
                  border: "1px solid lightGray",
                  borderRadius: "15px",
                  fontSize: 14,
                }}
              >
                <IconButton>
                  <TuneIcon sx={{ fontSize: 18 }} />
                </IconButton>
                <Button
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  sx={{ color: "black", fontWeight: 600, fontSize: 12 }}
                >
                  Filter
                </Button>
              </Box>
              {/* </Grid> */}
            </Grid>

            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>Google</MenuItem>
              <MenuItem onClick={handleClose}>Mail Chimp</MenuItem>
              <MenuItem onClick={handleClose}>PayPal</MenuItem>
              <MenuItem onClick={handleClose}>Wfx</MenuItem>
              <MenuItem onClick={handleClose}>Shopify</MenuItem>
            </Menu>
            <Menu
              id="fade-menu1"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl1}
              open={open1}
              onClose={handleCloseDesk}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleCloseDesk}>Offer a Comperencively</MenuItem>
              <MenuItem onClick={handleCloseDesk}>Develop in mobile app</MenuItem>
              <MenuItem onClick={handleCloseDesk}>This Program could include</MenuItem>
              <MenuItem onClick={handleCloseDesk}>Intreduce a cloud based</MenuItem>
              <MenuItem onClick={handleCloseDesk}>Develop a Personalaised</MenuItem>
            </Menu>
            <Menu
              id="fade-menu2"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl2}
              open={open2}
              onClose={handleCloseTags}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleCloseTags}>#SmartFinance #workHard	</MenuItem>
              <MenuItem onClick={handleCloseTags}>#Technologies #DigitalTechnologies</MenuItem>
              <MenuItem onClick={handleCloseTags}>#OnlineShopping #DigitalShopping</MenuItem>
              <MenuItem onClick={handleCloseTags}>#DigitalTransformation</MenuItem>
              <MenuItem onClick={handleCloseTags}>#BuyCellOnline</MenuItem>
            </Menu>
          </div>
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <>
          <Tooltip
            sx={{ border: "1px solid lightGray", borderRadius: "5px" }}
            title="Meeting"
          >
            <IconButton>
              <AddToQueueIcon />
              <Typography sx={{ fontWeight: 600, ml: 0.5 }}>Meeting</Typography>
            </IconButton>
          </Tooltip>
          <Tooltip
            sx={{ border: "1px solid lightGray", borderRadius: "5px", ml: 1 }}
            title="Meeting"
          >
            <IconButton>
              <ImportExportIcon />
              <Typography sx={{ fontWeight: 600, ml: 0.5 }}>
                Import/Export
              </Typography>
            </IconButton>
          </Tooltip>
        </>
      )}
    </Toolbar>
  );
}
export default function DataTable() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("brand");
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };
  const [brands,setBrands] = React.useState("")

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows as any, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );
  
  return (
    <Box sx={{ width: "100%" }}>
      <Paper elevation={2} sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <Divider />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row:any, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                        sx={{ mr: 1 }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      sx={{ borderRight: "1px solid lightGray", ml: 1 }}
                    >
                      {row.brand}
                    </TableCell>
                    <TableCell
                      sx={{ borderRight: "1px solid lightGray" }}
                      align="left"
                    >
                      {row.description}
                    </TableCell>
                    <TableCell
                      sx={{ borderRight: "1px solid lightGray" }}
                      align="left"
                    >
                      {row.members}
                    </TableCell>
                    <TableCell
                      sx={{ borderRight: "1px solid lightGray" }}
                      align="left"
                    >
                      {row.categories}
                    </TableCell>
                    <TableCell
                      sx={{ borderRight: "1px solid lightGray" }}
                      align="left"
                    >
                      {row.tags}
                    </TableCell>
                    <TableCell
                      sx={{ borderRight: "1px solid lightGray" }}
                      align="left"
                    >
                      {row.nextMeeting}
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Reduce Table Space"
      />
    </Box>
  );
}
