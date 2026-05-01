import { FunctionComponent, ReactNode } from 'react';
import SimpleFooter from '../SimpleFooter/SimpleFooter';

export interface FooterLink {
  href: string;
  label: string;
  title?: string;
  external?: boolean;
}

export interface FooterLinkSection {
  ariaLabel: string;
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  href: string;
  label: string;
  icon: ReactNode;
}

export interface FooterProps {
  className?: string;
  linkSections?: FooterLinkSection[];
  socialLinks?: SocialLink[];
  emailSignupHeading?: string;
  emailSignupLabel?: string;
  emailSignupPlaceholder?: string;
  emailSignupConsent?: ReactNode;
  emailSignupButtonLabel?: string;
  language?: 'en' | 'es';
}

const defaultLinkSections: FooterLinkSection[] = [
  {
    ariaLabel: 'Site Menu',
    title: 'Site Menu',
    links: [
      { href: '/health-drug-plans', label: 'Health & drug plans' },
      { href: '/basics', label: 'Medicare basics' },
      { href: '/providers-services', label: 'Providers & services' },
      { href: '/coverage', label: 'What Medicare covers' },
      { href: '/sitemap', label: 'Site map' },
    ],
  },
  {
    ariaLabel: 'Take Action',
    title: 'Take Action',
    links: [
      { href: 'https://www.medicare.gov/plan-compare/', label: 'Find health & drug plans' },
      { href: '/care-compare/', label: 'Find care providers' },
      { href: '/medical-equipment-suppliers/', label: 'Find medical equipment & suppliers' },
      {
        href: '/medigap-supplemental-insurance-plans/',
        label: 'Find a Medicare Supplement Insurance (Medigap) policy',
      },
      { href: '/publications', label: 'Find publications' },
      { href: '/about-us/other-languages', label: 'Get Medicare information in other languages' },
      { href: '/talk-to-someone', label: 'Talk to someone' },
      {
        href: 'https://public.govdelivery.com/accounts/USCMSMYMEDICARE/subscriber/edit',
        label: 'Manage your email preferences',
        external: true,
      },
    ],
  },
  {
    ariaLabel: 'CMS & HHS Websites',
    title: 'CMS & HHS Websites',
    links: [
      { href: 'https://www.healthcare.gov/', label: 'HealthCare.gov', external: true },
      { href: 'https://www.insurekidsnow.gov', label: 'InsureKidsNow.gov', external: true },
      { href: 'https://medicaid.gov', label: 'Medicaid.gov', external: true },
      { href: 'https://www.cms.gov/', label: 'CMS.gov', external: true },
      { href: 'https://www.HHS.gov', label: 'HHS.gov', external: true },
      { href: 'https://www.usa.gov/', label: 'USA.gov', external: true },
    ],
  },
  {
    ariaLabel: 'Helpful Links',
    title: 'Helpful Links',
    links: [
      {
        href: 'https://www.cms.gov/about-cms/web-policies-important-links/foia',
        label: 'FOIA',
        external: true,
      },
      {
        href: 'https://www.cms.gov/about-cms/web-policies-important-links/no-fear-act',
        label: 'No Fear Act',
        external: true,
      },
      { href: 'https://oig.hhs.gov', label: 'Inspector General', external: true },
      { href: '/archive', label: 'Archive' },
      {
        href: 'https://www.cms.gov/data-research/statistics-trends-and-reports/medicare-advantagepart-d-contract-and-enrollment-data',
        label: 'Downloadable databases',
        external: true,
      },
    ],
  },
];

const defaultConsent = (
  <>
    By checking this box, you consent to our <a href="/privacy-policy">data privacy policy</a>.
  </>
);

const FacebookIcon = () => (
  <svg aria-hidden="true" className="m-c-footer-social__icon" viewBox="0 0 24 24">
    <path d="M14.2 8.2V6.8c0-.7.5-.9.9-.9h2.3V2.2L14.2 2c-3.5 0-4.3 2.6-4.3 4.3v1.9H7v3.9h2.9V22h4.1v-9.9h3.1l.5-3.9h-3.4Z" />
  </svg>
);

const XIcon = () => (
  <svg aria-hidden="true" className="m-c-footer-social__icon" viewBox="0 0 512 512">
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48h145.6l100.5 132.9L389.2 48Zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8Z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg aria-hidden="true" className="m-c-footer-social__icon" viewBox="0 0 24 24">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
  </svg>
);

const defaultSocialLinks: SocialLink[] = [
  {
    href: 'https://www.facebook.com/medicare',
    label: 'Find Medicare.gov on facebook (link opens in a new tab)',
    icon: <FacebookIcon />,
  },
  {
    href: 'https://www.twitter.com/MedicareGov',
    label: 'Follow Medicare.gov on X (link opens in a new tab)',
    icon: <XIcon />,
  },
  {
    href: 'https://www.youtube.com/user/CMSHHSgov',
    label: 'Find Medicare.gov on YouTube (link opens in a new tab)',
    icon: <YouTubeIcon />,
  },
];

const FooterLinkList = ({ section }: { section: FooterLinkSection }) => (
  <nav className="m-c-footer-links" aria-label={section.ariaLabel}>
    <h2 className="m-c-footer-links__title ds-text-heading--lg">{section.title}</h2>
    <ul className="m-c-footer-links__list" role="list">
      {section.links.map((link) => (
        <li key={`${section.title}-${link.href}`}>
          <a href={link.href} title={link.title} rel={link.external ? 'noopener' : undefined}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export const Footer: FunctionComponent<FooterProps> = ({
  className,
  linkSections = defaultLinkSections,
  socialLinks = defaultSocialLinks,
  emailSignupHeading = 'Signup for email updates',
  emailSignupLabel = 'Enter your email address',
  emailSignupPlaceholder = 'name@example.com',
  emailSignupConsent = defaultConsent,
  emailSignupButtonLabel = 'Next Step',
  language = 'en',
}) => {
  const footerClasses = className ? `m-c-full-footer ${className}` : 'm-c-full-footer';

  return (
    <footer className={footerClasses} aria-label="support menus and email sign-up">
      <div className="m-c-full-footer__container">
        <div className="m-c-full-footer__links">
          {linkSections.map((section) => (
            <FooterLinkList key={section.title} section={section} />
          ))}
        </div>

        <div className="m-c-full-footer__actions">
          <section className="m-c-footer-email-signup" aria-labelledby="m-c-footer-email-signup-title">
            <h2 id="m-c-footer-email-signup-title">{emailSignupHeading}</h2>
            <form className="m-c-footer-email-signup__form">
              <label className="ds-c-label" htmlFor="m-c-footer-email">
                {emailSignupLabel}
              </label>
              <input
                className="ds-c-field"
                id="m-c-footer-email"
                name="email"
                type="email"
                placeholder={emailSignupPlaceholder}
              />
              <label className="m-c-footer-email-signup__choice" htmlFor="m-c-footer-consent">
                <input className="ds-c-choice" id="m-c-footer-consent" name="consent" type="checkbox" />
                <span>{emailSignupConsent}</span>
              </label>
              <button className="ds-c-button ds-c-button--solid" type="submit">
                {emailSignupButtonLabel}
              </button>
            </form>
          </section>

          <nav className="m-c-footer-social" aria-label="Medicare.gov social links">
            <ul className="m-c-footer-social__list" role="list">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                    <span className="ds-u-visibility--screen-reader">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="m-c-full-footer__simple-footer">
          <SimpleFooter
            as="div"
            aboutMedicareLabel="About Medicare"
            nondiscriminationLabel="Nondiscrimination / Accessibility"
            privacyPolicyLabel="Privacy Policy"
            privacySettingLabel="Privacy Setting"
            linkingPolicyLabel="Linking Policy"
            usingThisSiteLabel="Using this site"
            plainWritingLabel="Plain Writing"
            language={language}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
