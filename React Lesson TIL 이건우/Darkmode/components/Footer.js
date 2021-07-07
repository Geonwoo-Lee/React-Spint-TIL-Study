import React from 'react'
import styled from 'styled-components'

const Policy = styled.div`
  width: 100%;
  max-width: 764px;
  font-size: 12px;
  line-height: 1.33;
  margin: 0 20px;
`;

const PolicyRow = styled.p`
  margin: 0;
  padding: 0;
  padding-bottom: 20px;
`;



export const Footer = () => {
    return (
        <Policy>
          <PolicyRow>© 2019 Openfit, LLC. All rights reserved.</PolicyRow>
          <PolicyRow className='policy'>
            +Results vary depending on starting point and effort. Exercise and
            proper diet are necessary to achieve and maintain weight loss and
            muscle definition. The testimonials featured may have used more than
            one product or extended the program to achieve their maximum
            results.
          </PolicyRow>
          <PolicyRow className='policy'>
            Consult your physician and follow all safety instructions before
            beginning any exercise program or using any supplement or meal
            replacement product, especially if you have any unique medical
            conditions or needs. The contents on our website are for
            informational purposes only, and are not intended to diagnose any
            medical condition, replace the advice of a healthcare professional,
            or provide any medical advice, diagnosis, or treatment.
          </PolicyRow>
          <PolicyRow className='policy'>
            As an Amazon Associate, we may earn from qualifying purchases.
          </PolicyRow>
        </Policy>
    )
}
