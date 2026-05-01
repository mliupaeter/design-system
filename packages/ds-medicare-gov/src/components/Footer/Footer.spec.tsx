import { render, screen, within } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the full Medicare.gov footer regions', () => {
    render(<Footer />);

    expect(screen.getByRole('contentinfo')).toHaveAttribute(
      'aria-label',
      'support menus and email sign-up'
    );
    expect(screen.getByRole('navigation', { name: 'Site Menu' })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Take Action' })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'CMS & HHS Websites' })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Helpful Links' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Signup for email updates' })).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Medicare.gov social links' })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About Medicare' })).toBeInTheDocument();
  });

  it('renders SimpleFooter as a single landmark inside the full footer', () => {
    const { container } = render(<Footer />);
    const footers = container.querySelectorAll('footer');
    const simpleFooter = container.querySelector('.m-c-footer');

    expect(footers).toHaveLength(1);
    expect(simpleFooter?.tagName.toLowerCase()).toBe('div');
  });

  it('supports custom link sections', () => {
    render(
      <Footer
        linkSections={[
          {
            ariaLabel: 'Custom links',
            title: 'Custom links',
            links: [{ href: '/custom', label: 'Custom Medicare link' }],
          },
        ]}
      />
    );

    const customNav = screen.getByRole('navigation', { name: 'Custom links' });

    expect(within(customNav).getByRole('link', { name: 'Custom Medicare link' })).toHaveAttribute(
      'href',
      '/custom'
    );
  });
});
