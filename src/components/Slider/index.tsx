import * as S from './styles'

import SlickSlider, { Settings } from 'react-slick'

export type SliderSettings = Settings

export type SliderProps = {
  settings: SliderSettings
  children: React.ReactNode
}

const Slider = ({ children, settings }: SliderProps) => (
  <S.Wrapper>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </S.Wrapper>
)

export default Slider
