import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
  <Button key="three">Three</Button>,
  <Button key="three">Three</Button>,
  <Button key="three">Three</Button>,
  <Button key="three">Three</Button>,

];

export default function GroupOrientation() {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 0,
          mt: 10,
          width: '300px',

        },
      }}
    >
      <ButtonGroup
        orientation="vertical"
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
