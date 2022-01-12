import 'match-media-mock'
import { screen } from '@testing-library/react'
import Showcase from '.'

import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'
import { renderWithTheme } from 'utils/tests/helpers'

const props = {
  title: 'Most popular',
  highlight: highlightMock,
  games: gamesMock
}

describe('<Showcase />', () => {
  it('should render all components', () => {
    renderWithTheme(<Showcase {...props} />)

    expect(screen.getAllByText(/population Zero/i)).toHaveLength(4)

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.highlight.title })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    renderWithTheme(
      <Showcase highlight={props.highlight} games={props.games} />
    )

    expect(screen.getAllByText(/population Zero/i)).toHaveLength(4)

    expect(
      screen.getByRole('heading', { name: props.highlight.title })
    ).toBeInTheDocument()

    expect(
      screen.queryByRole('heading', { name: /most popular/i })
    ).not.toBeInTheDocument()
  })

  it('should render whithout highlight', () => {
    renderWithTheme(<Showcase title={props.title} games={props.games} />)

    expect(screen.getAllByText(/population Zero/i)).toHaveLength(4)

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.queryByRole('heading', { name: props.highlight.title })
    ).not.toBeInTheDocument()
  })

  it('should render whithout games', () => {
    renderWithTheme(
      <Showcase title={props.title} highlight={props.highlight} />
    )

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.highlight.title })
    ).toBeInTheDocument()

    expect(screen.queryAllByText(/read Dead is back/i)).not.toHaveLength(4)
  })
})
