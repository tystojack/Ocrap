import React from 'react'
import {StyledWrapper} from "../components/StyledWrapper"
import {HeaderTitle} from "../components/HeaderTitle"
import {CalltoActionText} from "../components/CalltoActionText"
import {BodyLandingPage} from "../components/BodyLandingPage"
import {HeaderContainer} from "../components/HeaderContainer"
import {CenterVideoDiv} from "../components/CenterVideoDiv"
import {ProductWrapper} from "../components/ProductWrapper"
import { ProductTitle } from '../components/ProductTitle'
import {ProductImg} from "../components/ProductImg"
import { ProductPriceCard } from '../components/ProductPriceCard'
// import {BodyGif} from "../components/BodyGif"
function landingpage() {
  return (


  <div>
        <StyledWrapper>
        <HeaderContainer>


  <HeaderTitle>

        landingPage

  </HeaderTitle>
        </HeaderContainer>
          

   <BodyLandingPage>
     <ProductWrapper>
<ProductImg src ="https://media.istockphoto.com/id/1205503578/es/vector/bicicleta-en-colores-de-moda-sobre-fondo-blanco-ilustraci%C3%B3n-plana-vectorial-estilo-de-vida.webp?s=612x612&w=is&k=20&c=0hWmMFPsrsk3SJFMgcvaBTHQ04xSmhnOeSc2v-1A-hI="/>
      <ProductTitle>
      Bike 2022 fast speed
      </ProductTitle>
      <ProductPriceCard>$999.99</ProductPriceCard>
      </ProductWrapper>
  
  </BodyLandingPage> 
        </StyledWrapper>

  </div>

  )
}

export default landingpage