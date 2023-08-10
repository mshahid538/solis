import * as React from 'react';
import Table from '@mui/joy/Table';
import downarrrow from '../../images/downarrow.svg'
export default function BasicTable() {
  return (
    <Table aria-label="basic table">
      <thead>
        <tr>
          <th style={{ width: '20%' }}>Date <img src={downarrrow} alt="logo" /></th>
          <th>Number of students <img src={downarrrow} alt="logo" /></th>
          <th>Number fo associates <img src={downarrrow} alt="logo" /></th>
          <th>Number of business <img src={downarrrow} alt="logo" /></th>
          <th>Total User <img src={downarrrow} alt="logo" /></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01/01/2023</td>
          <td>11</td>
          <td>11</td>
          <td>11</td>
          <td>33</td>
        </tr>
        <tr>
          <td>01/01/2023</td>
          <td>11</td>
          <td>11</td>
          <td>11</td>
          <td>33</td>
        </tr>
        <tr>
          <td>01/01/2023</td>
          <td>11</td>
          <td>11</td>
          <td>11</td>
          <td>33</td>
        </tr>
        <tr>
          <td>01/01/2023</td>
          <td>11</td>
          <td>11</td>
          <td>11</td>
          <td>33</td>
        </tr>
        <tr>
          <td>01/01/2023</td>
          <td>11</td>
          <td>11</td>
          <td>11</td>
          <td>33</td>
        </tr>
        <tr>
          <td>01/01/2023</td>
          <td>11</td>
          <td>11</td>
          <td>11</td>
          <td>33</td>
        </tr>
        <tr>
          <td>01/01/2023</td>
          <td>11</td>
          <td>11</td>
          <td>11</td>
          <td>33</td>
        </tr>
        <tr>
          <td>01/01/2023</td>
          <td>11</td>
          <td>11</td>
          <td>11</td>
          <td>33</td>
        </tr>
        <tr>
          <td>01/01/2023</td>
          <td>11</td>
          <td>11</td>
          <td>11</td>
          <td>33</td>
        </tr>
        <tr>
          <td>01/01/2023</td>
          <td>11</td>
          <td>11</td>
          <td>11</td>
          <td>33</td>
        </tr>
        <tr>
          <td>01/01/2023</td>
          <td>11</td>
          <td>11</td>
          <td>11</td>
          <td>33</td>
        </tr>
      </tbody>
    </Table>
  );
}
