import SyntaxHighlighter, { createElement } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import styles from "./styles.module.scss";

import { Icon, NumberInput, Subtitle } from "shared";

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
  code: `<div class='golden-grid'>
    <div style='grid-area: 11 / 1 / span 10 / span 12;'>
    </div>
</div>`,
  phrase: {
    amazing: "The only true wisdom is in knowing you know nothing...",
    lookingFor: "There is only one good, knowledge, and one evil, ignorance.",
  },
};

export const Resume = () => (
  <div className={styles.resume}>
    <div
      key={styles.portfolio}
      className={`${styles.resume__column} ${styles.portfolio}`}
    >
      <Subtitle classes={styles.portfolio__subtitle}>Portfolio</Subtitle>

      <ul className={styles.portfolio__list}>
        {user.portfolio.map((item) => (
          <li key={item.link + item.text} className={styles.portfolio__item}>
            <span className={styles.portfolio__bullet}>–</span>
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
      <Subtitle classes={styles.experience__subtitle}>Experience</Subtitle>

      <ul className={styles.experience__list}>
        {user.experience.map((item) => (
          <li key={item.name} className={styles.experience__item}>
            <span className={styles.experience__bullet}>–</span>
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
      <Subtitle classes={styles.code__subtitle}>Sample code</Subtitle>

      <div className={styles.code__content}>
        <SyntaxHighlighter
          showLineNumbers={true}
          wrapLongLines={true}
          wrapLines={true}
          language="javascript"
          style={docco}
          customStyle={{
            backgroundColor: "transparent",
          }}
          renderer={({ rows, stylesheet, useInlineStyles }) =>
            rows.map((row, index) => {
              const { children } = row;
              const lineNumberElement = children?.shift();
              const newRow = { ...row };
              if (lineNumberElement) {
                if (lineNumberElement.properties) {
                  lineNumberElement.properties.className = [
                    lineNumberElement.properties.className,
                    `${styles.code__lineNumber}`,
                  ];
                  lineNumberElement.properties.style = {
                    paddingRight: "10px",
                    minWidth: "15px",
                  };
                }
                newRow.children = [
                  lineNumberElement,
                  {
                    children,
                    properties: {
                      className: [`${styles.code__sample}`],
                    },
                    tagName: "span",
                    type: "element",
                  },
                ];
              }

              return createElement({
                node: newRow,
                stylesheet,
                useInlineStyles,
                key: index,
              });
            })
          }
        >
          {user.code}
        </SyntaxHighlighter>
      </div>
    </div>

    <div
      key={styles.availability}
      className={`${styles.resume__column} ${styles.availability}`}
    >
      <Subtitle classes={styles.availability__subtitle}>Availability</Subtitle>

      <div className={styles.availability__content}>
        <div className={styles.availability__time}>
          {user.availability.time}
        </div>

        <div className={styles.availability__prefered}>
          <h3 className={styles.availability__minisubtitle}>
            Preferred Environment
          </h3>
          <span>{user.availability.prefered}</span>
        </div>
      </div>
    </div>

    <div className={`${styles.resume__column} ${styles.phrase}`}>
      <Subtitle classes={styles.phrase__subtitle}>
        The Most Amaizing...
      </Subtitle>

      <div className={styles.phrase__content}>
        <Icon
          name="quote"
          classes={styles.phrase__quote}
          svgClasses={styles.phrase__svg}
        />

        <p className={styles.phrase__text}>{user.phrase.amazing}</p>

        <Icon
          name="quote"
          classes={`${styles.phrase__quote} ${styles.phrase__quoteclose}`}
          svgClasses={styles.phrase__svg}
        />
      </div>
    </div>

    <div className={`${styles.resume__column} ${styles.phrase}`}>
      <Subtitle classes={styles.phrase__subtitle}>
        In clients I look for...
      </Subtitle>

      <div className={styles.phrase__content}>
        <Icon
          name="quote"
          classes={styles.phrase__quote}
          svgClasses={styles.phrase__svg}
        />

        <p className={styles.phrase__text}>{user.phrase.lookingFor}</p>

        <Icon
          name="quote"
          classes={`${styles.phrase__quote} ${styles.phrase__quoteclose}`}
          svgClasses={styles.phrase__svg}
        />
      </div>
    </div>
    <div className={`${styles.resume__column} ${styles.map}`}>
      <div className={styles.map__wrap}></div>
    </div>
  </div>
);
