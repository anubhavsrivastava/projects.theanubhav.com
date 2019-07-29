import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <ul className="contact">
          <li className="fa-home">{config.address}</li>

          <li className="fa-phone">{config.phone}</li>

          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <li className={`${icon}`} key={url}>
                <a href={url}>{url}</a>
              </li>
            );
          })}
        </ul>
        <ul className="copyright">
          <li>&copy; Anubhav Srivastava</li>
        </ul>
      </div>
    </section>
  );
}
