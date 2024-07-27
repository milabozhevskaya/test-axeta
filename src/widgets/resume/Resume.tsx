import styles from "./styles.module.scss";

import { NumberInput, Subtitle } from "shared";

const user = {
  portfolio: [
    { text: "Bootstrap 4 Material Design (Sample Link)", link: "" },
    { text: "Modern JavaScript stack", link: "" },
    { text: "Datepicker for twitter bootstrap", link: "" },
    { text: "Fast and reliable Bootstrap widgets in Angular", link: "" },
  ],
  experience: [
    { name: "PHP", year: 6 },
    { name: "Ruby", year: 2 },
    { name: "JavaScript", year: 4.5 },
  ],

  availability: {
    time: "Full time",
    prefered: "GitHub, Mac OSX",
  },
  code: `<div class='golden-grid'>\n    <div style='grid-area:\n      11 /  1 / span 10 / span\n      12;'>\n    </div>\n
</div>`,
  phrase: {
    amazing: "The only true wisdom is in knowing you know nothing...",
    lookingFor: "There is only one good, knowledge, and one evil, ignorance.",
  },
};

export const Resume = () => (
  <div className={styles.resume__content}>
    <div
      key={styles.portfolio}
      className={`${styles.resume__column} ${styles.portfolio}`}
    >
      <Subtitle>Portrolio</Subtitle>

      <ul className={styles.portfolio__list}>
        {user.portfolio.map((item) => (
          <li key={item.link + item.text} className={styles.portfolio__item}>
            <a href={item.link} className={styles.portfolio__link}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div
      key={styles.experience}
      className={`${styles.resume__column} ${styles.experience}`}
    >
      <Subtitle>Experience</Subtitle>

      <ul className={styles.experience__list}>
        {user.experience.map((item) => (
          <li key={item.name} className={styles.experience__item}>
            <div className={styles.experience__name}>{item.name}</div>
            <NumberInput
              initial={item.year}
              classes={styles.experience__input}
            />
          </li>
        ))}
      </ul>
    </div>

    <div
      key={styles.code}
      className={`${styles.resume__column} ${styles.code}`}
    >
      <Subtitle>Simple code</Subtitle>

      <div className={styles.code__content}>
        <pre>
          <code>
            {user.code
              .split("\n")
              .map((line, indx) => (indx + 1).toString() + line)
              .join("\n")}
          </code>
        </pre>
      </div>
    </div>

    <div
      key={styles.availability}
      className={`${styles.resume__column} ${styles.availability}`}
    >
      <Subtitle>Availability</Subtitle>

      <div className={styles.availability__content}>
        <div className={styles.availability__time}>
          {user.availability.time}
        </div>

        <div className={styles.availability__prefered}>
          <h3>Preferred Environment</h3>
          <span>{user.availability.prefered}</span>
        </div>
      </div>
    </div>

    <div className={`${styles.resume__column} ${styles.phrase}`}>
      <Subtitle classes={styles.resume__subtitle}>
        The Most Amaizing...
      </Subtitle>

      <p className={styles.phrase__text}>{user.phrase.amazing}</p>
    </div>

    <div className={`${styles.resume__column} ${styles.phrase}`}>
      <Subtitle classes={styles.resume__subtitle}>
        In clients I look for...
      </Subtitle>

      <p className={styles.phrase__text}>{user.phrase.lookingFor}</p>
    </div>

    <div className={`${styles.resume__column} ${styles.map}`}>
      <div className={styles.map__wrap}></div>
    </div>
  </div>
);
