import React from 'react'
import Grid from '@mui/material/Grid';
import crossImg from '../images/crossImg.png'
import workshopModel from '../images/workshopModel.png'
import greenProgress from '../images/greenProgress.png'
// for bearmarkete
import yellow2progress from '../images/yellow2progress.png'
import blue1progress from '../images/blue1progress.png'

import {useMediaQuery} from '@mui/material';
import { useTheme } from '@mui/material/styles';

function ShowModel({model,setModel}) {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <>
    { model === 1 &&  <div className='parkModel'>
                 <Grid container className='modelHeader' justifyContent={'space-between'} alignItems={'center'}>
                    <Grid item className='modelTitleCon' >
                      <div className='modelTitleText'>
                         The Park
                      </div>
                    </Grid>
                    <Grid item  className='modelBackBtnCon'>
                       <div className='modelBackBtn' onClick={()=>setModel(0)}>
                         <div className='modelCloseBtnText'>Back to blueprint</div>
                         <div className='modelCloseBtnCon'>
                            <img src={crossImg} alt='cross' className='modelCloseBtnImg'   />
                         </div>
                       </div>
                    </Grid>
                 </Grid>
                 <div className='innerModel'>
                     <Grid container style={{height:'100%'}} >
                       <Grid item md={6}  style={{height:'100%',overflowY:'scroll',paddingRight:'12px'}} >
                        <div className='firstHeading okb-bp'>
                          At the core of Okay Bears is a digital space built in the middle ground of the metaverse, where it is okay to be okay.
                        </div>
                        <div className='mt-4 '>
                           <Grid container justifyContent={'space-between'} alignItems={'center'}>
                             <Grid item className='greenTitle'>The Okay Bears Discord</Grid>
                             <Grid item className='okb-bp-progress'>
                               <img src={greenProgress} alt='greenProgress' className='greenProgress' />
                             </Grid>
                           </Grid>
                           <div>
                             <div className='okb-bp-contenttext'>A delightful Discord channel where we do things differently. A Discord with no OGs, no kings and no peasants. A Discord where chill replaces grind and lo-fi good vibes and conversation flow endlessly across every hour in the day across every timezone on Earth.</div>
                             <a className='manifestBtnCon'>
                               <div className='okb-buttontext bp'>Read our Manifesto</div>
                             </a>
                           </div>
                           <a className='meetTeamBtnCon'>
                               <div className='okb-buttontext'>Meet the Team</div>
                           </a>
                        </div>
                       </Grid>
                       { !smallScreen && <Grid item md={6}  style={{height:'100%'}} >
                         <Grid container  px={5} style={{height:'100%'}} >
                              <img src={workshopModel} alt='workshopModel' className='workshopModel w-100 h-100' />
                          </Grid>
                        </Grid>
                       }
                     </Grid>
                 </div>
                 </div>
               }
               { model === 2 &&  <div className='parkModel'>
                 <Grid container className='modelHeader' justifyContent={'space-between'} alignItems={'center'}>
                    <Grid item className='modelTitleCon' >
                      <div className='modelTitleText'>
                         Bear Market
                      </div>
                    </Grid>
                    <Grid item  className='modelBackBtnCon'>
                       <div className='modelBackBtn' onClick={()=>setModel(0)}>
                         <div className='modelCloseBtnText'>Back to blueprint</div>
                         <div className='modelCloseBtnCon'>
                            <img src={crossImg} alt='cross' className='modelCloseBtnImg' onClick={()=>setModel(0)}   />
                         </div>
                       </div>
                    </Grid>
                 </Grid>
                 <div className='innerModel'>
                     <Grid container style={{height:'100%'}} >
                       <Grid item md={6} style={{height:'100%',overflowY:'scroll',paddingRight:'12px'}} >
                        <div className='firstHeading okb-bp'>
                          The Bear Market is an ecosystem of web 3, web 2 and IRL sales channels, exclusive for Okay Bears holders, built through robust partnerships with industry-leading brands.
                        </div>
                        <div className='mt-4 '>
                           <Grid container justifyContent={'space-between'} alignItems={'center'}>
                             <Grid item className='greenTitle makeYellow'>The Okay Bears Discord</Grid>
                             <Grid item className='okb-bp-progress'>
                               <img src={yellow2progress} alt='greenProgress' className='greenProgress' />
                             </Grid>
                           </Grid>
                           <div>
                             <div className='okb-bp-contenttext'>An NFT marketplace built in partnership with Magic Eden, Solana's #1 marketplace, where Okay Bears holders will buy and sell Okay Bears with member-only perks.</div>  
                           </div>
                           <Grid container mt={4} justifyContent={'space-between'} alignItems={'center'}>
                             <Grid item className='greenTitle makeBlue'>Token-Gated eCommerce x Shopify</Grid>
                             <Grid item className='okb-bp-progress'>
                               <img src={blue1progress} alt='greenProgress' className='greenProgress' />
                             </Grid>
                           </Grid>
                           <div>
                             <div className='okb-bp-contenttext'>Holder-only access to exclusive merch through seamless integration of Web 3 and  Shopify's robust e-commerce platform. </div>  
                           </div>

                           <Grid container mt={4} justifyContent={'space-between'} alignItems={'center'}>
                             <Grid item className='greenTitle makeBlue'>IRL Okay Bears Pop Up Stores</Grid>
                             <Grid item className='okb-bp-progress'>
                               <img src={blue1progress} alt='greenProgress' className='greenProgress' />
                             </Grid>
                           </Grid>
                           <div>
                             <div className='okb-bp-contenttext'>Real-life activations through flash pop-up stores in cities worldwide and leading tech and crypto conferences bring holders together for memorable brand experiences.</div>  
                           </div>
                           
                        </div>
                       </Grid>
                       { !smallScreen && <Grid item md={6}  style={{height:'100%'}} >
                         <Grid container  px={5} style={{height:'100%'}} >
                              <img src={workshopModel} alt='workshopModel' className='workshopModel w-100 h-100' />
                          </Grid>
                        </Grid>
                       }
                     </Grid>
                 </div>
                 </div>
               }
               { model === 3 &&  <div className='parkModel'>
                 <Grid container className='modelHeader' justifyContent={'space-between'} alignItems={'center'}>
                    <Grid item className='modelTitleCon' >
                      <div className='modelTitleText'>
                         Workshop
                      </div>
                    </Grid>
                    <Grid item  className='modelBackBtnCon'>
                       <div className='modelBackBtn' onClick={()=>setModel(0)} >
                         <div className='modelCloseBtnText'>Back to blueprint</div>
                         <div className='modelCloseBtnCon'>
                            <img src={crossImg} alt='cross' className='modelCloseBtnImg' onClick={()=>setModel(0)}   />
                         </div>
                       </div>
                    </Grid>
                 </Grid>
                 <div className='innerModel'>
                     <Grid container style={{height:'100%'}} >
                       <Grid item md={6} style={{height:'100%',overflowY:'scroll',paddingRight:'12px'}} >
                        <div className='firstHeading okb-bp'>
                          We will continue to grow the Okay Bears brand together with a combination of authentic, grassroots community engagement and public awareness projects including outdoor advertising and corporate social responsibility (CSR) collaborations with respected global brands.
                        </div>
                        <div className='mt-4 '>
                           <Grid container justifyContent={'space-between'} alignItems={'center'}>
                             <Grid item className='greenTitle makeYellow'>Online Community Activations</Grid>
                             <Grid item className='okb-bp-progress'>
                               <img src={yellow2progress} alt='greenProgress' className='greenProgress' />
                             </Grid>
                           </Grid>
                           <div>
                             <div className='okb-bp-contenttext'>Continue to shift culture through frequent brand-outreach campaigns orchestrated by the Okay Bears community on Twitter and other social platforms. (Check 
                                   <a target='_blank' href='#' > #WeAreOkay</a> for examples )
                             </div>  
                           </div>
                           
                           <Grid container mt={3} justifyContent={'space-between'} alignItems={'center'}>
                             <Grid item className='greenTitle makeYellow'>Real-World Outdoor <br/> Marketing Campaigns</Grid>
                             <Grid item className='okb-bp-progress'>
                               <img src={yellow2progress} alt='greenProgress' className='greenProgress' />
                             </Grid>
                           </Grid>
                           <div>
                             <div className='okb-bp-contenttext'>Increase Okay Bears' brand equity through real-world ATL outdoor advertising, including billboards, subway, bus ads, commercial video placements and hype guerilla tactics</div>  
                           </div>


                           <Grid container mt={4} justifyContent={'space-between'} alignItems={'center'}>
                             <Grid item className='greenTitle makeBlue'>One-of-One CSR Auctions </Grid>
                             <Grid item className='okb-bp-progress'>
                               <img src={blue1progress} alt='greenProgress' className='greenProgress' />
                             </Grid>
                           </Grid>
                           <div>
                             <div className='okb-bp-contenttext'>A series of initiatives championing thought leadership and innovation across the Solana blockchain and its leading communities. </div>  
                           </div>
                           
                        </div>
                       </Grid>
                       { !smallScreen && <Grid item md={6}  style={{height:'100%'}} >
                         <Grid container  px={5} style={{height:'100%'}} >
                              <img src={workshopModel} alt='workshopModel' className='workshopModel w-100 h-100' />
                          </Grid>
                        </Grid>
                       }
                     </Grid>
                 </div>
                 </div>
               }
               { model === 4 &&  <div className='parkModel'>
                 <Grid container className='modelHeader' justifyContent={'space-between'} alignItems={'center'}>
                    <Grid item className='modelTitleCon' >
                      <div className='modelTitleText'>
                         Gallery
                      </div>
                    </Grid>
                    <Grid item  className='modelBackBtnCon'>
                       <div className='modelBackBtn' onClick={()=>setModel(0)} >
                         <div className='modelCloseBtnText'>Back to blueprint</div>
                         <div className='modelCloseBtnCon'>
                            <img src={crossImg} alt='cross' className='modelCloseBtnImg' onClick={()=>setModel(0)}   />
                         </div>
                       </div>
                    </Grid>
                 </Grid>
                 <div className='innerModel'>
                     <Grid container style={{height:'100%'}} >
                       <Grid item md={6} style={{height:'100%',overflowY:'scroll',paddingRight:'12px'}} >
                        <div className='firstHeading okb-bp'>
                          Championing artists in the NFT space, online and in the real world.
                        </div>
                        <div className='mt-4 '>
                           <Grid container justifyContent={'space-between'} alignItems={'center'}>
                             <Grid item className='greenTitle'>Okay Bears Gallery</Grid>
                             <Grid item className='okb-bp-progress'>
                               <img src={greenProgress} alt='greenProgress' className='greenProgress' />
                             </Grid>
                           </Grid>
                           <div>
                             <div className='okb-bp-contenttext'>The place to marvel at all 10,000 bears in the Okay Bears collection.</div>
                           </div>

                           <Grid container mt={4} justifyContent={'space-between'} alignItems={'center'}>
                             <Grid item className='greenTitle makeBlue'>Curated Fan Art Display</Grid>
                             <Grid item className='okb-bp-progress'>
                               <img src={blue1progress} alt='greenProgress' className='greenProgress' />
                             </Grid>
                           </Grid>
                           <div>
                             <div className='okb-bp-contenttext'>OkayBears.com will feature a curated page of the best Okay Bears fan art, in its various forms, with spotlights on the artists and communities behind them.</div>  
                           </div>

                           <Grid container mt={4} justifyContent={'space-between'} alignItems={'center'}>
                             <Grid item className='greenTitle makeBlue'>IRL Pop Up Exhibitions</Grid>
                             <Grid item className='okb-bp-progress'>
                               <img src={blue1progress} alt='greenProgress' className='greenProgress' />
                             </Grid>
                           </Grid>
                           <div>
                             <div className='okb-bp-contenttext'>Pop-up art exhibits in cities worldwide to bring the art of 1-of-1 NFT artists and other NFT communities to the world by addressing hot topics and global causes through digital art installations.</div>  
                           </div>

                        </div>
                       </Grid>
                       { !smallScreen && <Grid item md={6}  style={{height:'100%'}} >
                         <Grid container  px={5} style={{height:'100%'}} >
                              <img src={workshopModel} alt='workshopModel' className='workshopModel w-100 h-100' />
                          </Grid>
                        </Grid>
                       }
                     </Grid>
                 </div>
                 </div>
               }
               { model === 5 &&  <div className='parkModel'>
                 <Grid container className='modelHeader' justifyContent={'space-between'} alignItems={'center'}>
                    <Grid item className='modelTitleCon' >
                      <div className='modelTitleText'>
                         STUDIO
                      </div>
                    </Grid>
                    <Grid item  className='modelBackBtnCon'>
                       <div className='modelBackBtn' onClick={()=>setModel(0)}>
                         <div className='modelCloseBtnText'>Back to blueprint</div>
                         <div className='modelCloseBtnCon'>
                            <img src={crossImg} alt='cross' className='modelCloseBtnImg' onClick={()=>setModel(0)}   />
                         </div>
                       </div>
                    </Grid>
                 </Grid>
                 <div className='innerModel'>
                     <Grid container style={{height:'100%'}} >
                       <Grid item md={6} style={{height:'100%',overflowY:'scroll',paddingRight:'12px'}} >
                        <div className='firstHeading okb-bp'>
                          Gain priority access to future collections, art, community lo-fi and an endless stream of good vibes.
                        </div>
                        <div className='mt-4 futureNFT'>
                            Future NFT Drops
                        </div>
                        <div className='okb-bp-contenttext'>Probably nothing.</div>  
                        <div className='mt-4 '>

                           <Grid container mt={4} justifyContent={'space-between'} alignItems={'center'}>
                             <Grid item className='greenTitle makeBlue'>Community Lo-Fi Mixtapes</Grid>
                             <Grid item className='okb-bp-progress'>
                               <img src={blue1progress} alt='greenProgress' className='greenProgress' />
                             </Grid>
                           </Grid>
                           <div>
                             <div className='okb-bp-contenttext'>We are putting together a curated collection of lo-fi albums made by the community and published on Spotify for the entire world to savour. Nothing says we  are Okay more than chill beats and good vibes.</div>  
                           </div>


                           <Grid container mt={3} justifyContent={'space-between'} alignItems={'center'}>
                             <Grid item className='greenTitle makeYellow'>Art and Folk Tales</Grid>
                             <Grid item className='okb-bp-progress'>
                               <img src={yellow2progress} alt='greenProgress' className='greenProgress' />
                             </Grid>
                           </Grid>
                           <div>
                             <div className='okb-bp-contenttext'>Regular concept art wallpaper drops will keep your devices fresh and short tales of bears will ease your mind and delight your soul - made public so our okay vibes can nourish the world.</div>  
                           </div>

                        </div>
                       </Grid>
                       { !smallScreen && <Grid item md={6}  style={{height:'100%'}} >
                         <Grid container  px={5} style={{height:'100%'}} >
                              <img src={workshopModel} alt='workshopModel' className='workshopModel w-100 h-100' />
                          </Grid>
                        </Grid>
                       }
                     </Grid>
                 </div>
                 </div>
               }
               { model === 6 &&  <div className='parkModel'>
                 <Grid container className='modelHeader' justifyContent={'space-between'} alignItems={'center'}>
                    <Grid item className='modelTitleCon' >
                      <div className='modelTitleText'>
                         BOUTIQUE
                      </div>
                    </Grid>
                    <Grid item  className='modelBackBtnCon'>
                       <div className='modelBackBtn' onClick={()=>setModel(0)}>
                         <div className='modelCloseBtnText'>Back to blueprint</div>
                         <div className='modelCloseBtnCon'>
                            <img src={crossImg} alt='cross' className='modelCloseBtnImg' onClick={()=>setModel(0)}   />
                         </div>
                       </div>
                    </Grid>
                 </Grid>
                 <div className='innerModel'>
                     <Grid container style={{height:'100%'}} >
                       <Grid item md={6} style={{height:'100%',overflowY:'scroll',paddingRight:'12px'}} >
                        <div className='firstHeading okb-bp'>
                          Beautifully crafted IRL merch, prints, collectibles and swag.
                        </div>
                        <div className='mt-4 '>

                           <Grid container mt={5} justifyContent={'space-between'} alignItems={'center'}>
                             <Grid item className='greenTitle makeYellow'>Exclusive Merchandise</Grid>
                             <Grid item className='okb-bp-progress'>
                               <img src={yellow2progress} alt='greenProgress' className='greenProgress' />
                             </Grid>
                           </Grid>
                           <div>
                             <div className='okb-bp-contenttext'>Access to exclusive Okay Bears brand merch to show the world that we are  Okay, starting days after the first mint. All Okay Bears holders can claim their complimentary IRL welcome pack through our token-gated shop.</div>  
                           </div>


                           <Grid container mt={3} justifyContent={'space-between'} alignItems={'center'}>
                             <Grid item className='greenTitle makeYellow'>Limited-Edition Collectibles</Grid>
                             <Grid item className='okb-bp-progress'>
                               <img src={yellow2progress} alt='greenProgress' className='greenProgress' />
                             </Grid>
                           </Grid>
                           <div>
                             <div className='okb-bp-contenttext'>Concept art prints and 3D craftwork will be made available for purchase strictly for Okay Bears holders with some general items available for non-holders to increase public brand awareness.</div>  
                           </div>

                        </div>
                       </Grid>
                       { !smallScreen && <Grid item md={6}  style={{height:'100%'}} >
                         <Grid container  px={5} style={{height:'100%'}} >
                              <img src={workshopModel} alt='workshopModel' className='workshopModel w-100 h-100' />
                          </Grid>
                        </Grid>
                       }
                     </Grid>
                 </div>
                 </div>
               }
               { model === 7 &&  <div className='parkModel'>
                 <Grid container className='modelHeader' justifyContent={'space-between'} alignItems={'center'}>
                    <Grid item className='modelTitleCon' >
                      <div className='modelTitleText'>
                         Platform
                      </div>
                    </Grid>
                    <Grid item  className='modelBackBtnCon'>
                       <div className='modelBackBtn'  onClick={()=>setModel(0)} >
                         <div className='modelCloseBtnText'>Back to blueprint</div>
                         <div className='modelCloseBtnCon'>
                            <img src={crossImg} alt='cross' className='modelCloseBtnImg' onClick={()=>setModel(0)}   />
                         </div>
                       </div>
                    </Grid>
                 </Grid>
                 <div className='innerModel'>
                     <Grid container style={{height:'100%'}} >
                       <Grid item md={6} style={{height:'100%',overflowY:'scroll',paddingRight:'12px'}} >
                        <div className='firstHeading okb-bp'>
                          A series of initiatives championing thought leadership and innovation across the Solana blockchain and its leading communities. 
                        </div>
                        <div className='mt-4 '>
                           
                           <Grid container mt={5} justifyContent={'space-between'} alignItems={'center'}>
                             <Grid item className='greenTitle makeBlue'>KEYNOTES, CONFERENCES <br /> AND MEETUPS</Grid>
                             <Grid item className='okb-bp-progress'>
                               <img src={blue1progress} alt='greenProgress' className='greenProgress' />
                             </Grid>
                           </Grid>
                           <div>
                             <div className='okb-bp-contenttext'>Bring together thought leaders (NFT and mainstream) in a series of keynotes and conferences exclusive to Okay Bear holders and other partnering NFT collections, both digitally and IRL, in addition to global meetups exclusive only to Okay Bears holders.</div>  
                           </div>

                           <Grid container mt={4} justifyContent={'space-between'} alignItems={'center'}>
                             <Grid item className='greenTitle makeBlue'>COMMUNITY GRANTS AND <br /> COPYRIGHT LICENSING</Grid>
                             <Grid item className='okb-bp-progress'>
                               <img src={blue1progress} alt='greenProgress' className='greenProgress' />
                             </Grid>
                           </Grid>
                           <div>
                             <div className='okb-bp-contenttext'>Through The Honeypot, an incubator that invests in community initiatives, The Okay Bears team will allow limited grants and licencing options to outstanding start-up concepts that grow the Okay Bears brand and service offering.</div>  
                           </div>
                           
                        </div>
                       </Grid>
                       { !smallScreen && <Grid item md={6}  style={{height:'100%'}} >
                         <Grid container  px={5} style={{height:'100%'}} >
                              <img src={workshopModel} alt='workshopModel' className='workshopModel w-100 h-100' />
                          </Grid>
                        </Grid>
                       }
                     </Grid>
                 </div>
                 </div>
               }
    </>
  )
}

export default ShowModel