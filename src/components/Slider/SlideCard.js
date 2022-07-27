import React from 'react'
import Grid from '@mui/material/Grid';
function SlideCard({text}) {
  return (
    <Grid container className='kkk' px={5}>
      <Grid md={6}>
            <div style={{height:'500px',background:'red',display:'flex',alignItems:'center',justifyContent:'center',width:'100%'}}>
                {text}
            </div>
      </Grid>
      <Grid md={6}>
          
      </Grid>
    </Grid>
  )
}

export default SlideCard