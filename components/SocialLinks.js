export default function SocialLinks({ socialLinks }) {
  return (
    <div className="social-icons">
      {socialLinks.map(({ label, url }, index) => (
        <a
          key={index}
          className="social-icons__link"
          title={label}
          href={url}
          target="_blank"
          rel="noopener"
        >
          <div className="social-icons__icon">
            <img src={`svg/${label.toLowerCase()}.svg`} />
          </div>
        </a>
      ))}
    </div>
  );
}
