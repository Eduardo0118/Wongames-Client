export type LineColor = 'primary' | 'secondary'

export type IHeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: LineColor
  size?: 'small' | 'medium'
}
