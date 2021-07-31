import React from 'react'
import * as S from './styles'
import { IHeadingProps } from './type'

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false
}: IHeadingProps) => (
  <S.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
    {children}
  </S.Wrapper>
)

export default Heading
