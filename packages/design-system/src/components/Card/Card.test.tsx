import { render, cleanup } from '@testing-library/react';
import Card from './Card';

afterEach(cleanup);

describe('Card', () => {
  it('renders without crashing', () => {
    const { container } = render(<Card />);
    expect(container).toBeInTheDocument();
  });

  it('renders children', () => {
    const { getByText } = render(<Card>Card content</Card>);
    expect(getByText('Card content')).toBeInTheDocument();
  });

  it('always applies the default card class', () => {
    const { container } = render(<Card />);
    expect(container.firstChild).toHaveClass('ds-c-card');
  });

  it('applies variation classes', () => {
    const { container } = render(<Card variation="actionable" />);
    expect(container.firstChild).toHaveClass('ds-c-card--actionable');
  });

  it('renders custom class names without undefined classes', () => {
    const { container } = render(<Card className="ds-u-padding--2" />);

    expect(container.firstChild).toHaveClass('ds-c-card');
    expect(container.firstChild).toHaveClass('ds-u-padding--2');
    expect(container.firstChild).not.toHaveClass('undefined');
  });
});
