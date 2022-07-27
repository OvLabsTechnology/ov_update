import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider/Slider'
import Grid from '@mui/material/Grid';
import CustomSlider from '../components/CustomSlider';
import MobileSlider from '../components/MobileSlider';

import {useMediaQuery} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HeaderPark from '../components/HeaderPark'
function Garden() {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <div className='garden'>
    <HeaderPark hClass={'hPosSticky'} />
     {/* THIS JAVASCRIPT CODE IS FOR Header of the Park Page*/}
            

    {/* <Slider /> */}
    { !smallScreen && <CustomSlider />} 
        {/* THIS JAVASCRIPT CODE IS FOR the Slider used for the Desktop View when you press on CustomSlider with ctrl and right arrow you move towards the Slider Page Desktop View*/}
    { smallScreen && <MobileSlider />}
        {/* THIS JAVASCRIPT CODE IS FOR the Slider used for the Mobile View when you press on MobileSlider with ctrl and right arrow you move towards the Slider Page Mobile View*/}

    

    </div>
  )
}

export default Garden