import './NutritionFactsTable.scss';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const createData = (name, perServe, per100g) => {
  return { name, perServe, per100g };
}

const rows = [

    createData('Energy cal', '116cal', '194cal'),
    createData('Energy kj', '486kj', '811kj'),
    createData('Protein', '3.2g', '5.3g'),
    createData('Gluten', 'Not detected', 'Not detected'),
    createData('Fat, total', '6.2g', '10.4g'),
    createData('_Saturated', '4.4g', '7.3g'),
    createData('Carbohydrates', '5.1g', '8.5g'),
    createData('_Sugars', '2.9g', '4.9g'),
    createData('Dietary Fibre', '4.1g', '6.9g'),
    createData('Sodium', '26mg', '43mg')
];

const NutritionFactsTable = () => {
    return (
        <TableContainer component={Paper}>
        <Table sx={{ width: '100%', height: '80%' }} size='small' aria-label='Nutrition facts table.'>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="right">Per serve</TableCell>
              <TableCell align="right">Per 100&nbsp;g</TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
            {rows.map((row) => (
            <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                {row.name}
                </TableCell>
                <TableCell align="right">{row.perServe}</TableCell>
                <TableCell align="right">{row.per100g}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
      </TableContainer>
    );
}

export default NutritionFactsTable;