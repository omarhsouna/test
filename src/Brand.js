import {useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getBrandById, getPurchasesByBrandId } from './services';
import {
    useParams
  } from "react-router-dom";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

 
export default function Brand() {
    const { brandId } = useParams();
    const [brand, setBrand]= useState();
    const [purchases, setPurchases] = useState([]);
    const [influencers, setInfluencers] = useState([]);
    const updateInfluencers =(index,influencers,setInfluencers)=>{
      
    }
        useEffect(() => {
             getBrandById(brandId,setBrand);
             getPurchasesByBrandId(brandId,setPurchases,setInfluencers);
          }, [brandId]);

          return (
            <Box sx={{mt: 3, mx: "auto", maxWidth:"75%"}}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
          <img src={brand?.pic}
          width="200px" height="200px" />
          </Grid>
          <Grid item xs={4}>
        <h3>Sales Number</h3>
        <h3>{}</h3>
        <h3>Sales Amount</h3>
        <h3>Sales Number</h3>
          </Grid>
          <Grid item xs={4}>
          <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2 }}>
                  primary.main
                </Box>
          </Grid>
        </Grid>
        <Box>
        <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Influencers</StyledTableCell>
                    <StyledTableCell align="right">Sales number</StyledTableCell>
                    <StyledTableCell align="right">Commissions amount</StyledTableCell>
                    <StyledTableCell align="right">Products number</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {influencers.map((influencer) => (
                    <StyledTableRow key={influencer.influencerId}>
                      <StyledTableCell component="th" scope="row">
                      <Grid container spacing={2}>
                      <Grid item xs={4}>
          <img src={influencer.influencerData.img}
          width="100px" height="100px" />
          </Grid>
          <Grid xs={8}>
        <h3>{influencer.influencerData.name}</h3>
        <p>{influencer.influencerData.email}</p>
          </Grid>
                        </Grid>
                      </StyledTableCell>
                      <StyledTableCell align="right">{influencer.purchasesNumber}</StyledTableCell>
                      <StyledTableCell align="right">{influencer.CommissionsAmount}</StyledTableCell>
                      <StyledTableCell align="right">15</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        </Box>
            </Box>
    )
}
