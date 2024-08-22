import SyntaxHighlighter, { createElement } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import styles from "./styles.module.scss";

import { YndxMap } from "features";
import { useAppDispatch, useAppSelector } from "hooks";
import { Columnn, Icon, NumberInput, updateArrOfExperience } from "shared";
import { setExperience, type RootState } from "store";

export const Resume = () => {
  const { portfolio, experience, availability, code, phrase, location, address } =
    useAppSelector((state: RootState) => state.userSlice);

  const dispatch = useAppDispatch();

  const updateYearOfExperience = (
    experienceName: string,
    experienceYear: number
  ) => {
    const arrOfExperiance = updateArrOfExperience(
      experience,
      experienceName,
      experienceYear
    );

    dispatch(setExperience(arrOfExperiance));
  };

  return (
    <div className={styles.resume}>
      <Columnn
        classes={`${styles.resume__column} ${styles.portfolio}`}
        title="Portfolio"
      >
        <ul className={styles.portfolio__list}>
          {portfolio.map((item) => (
            <li key={item.link + item.text} className={styles.portfolio__item}>
              <span className={styles.portfolio__bullet}>–</span>

              <a href={item.link} className={styles.portfolio__link}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </Columnn>

      <Columnn
        classes={`${styles.resume__column} ${styles.experience}`}
        title="Experience"
      >
        <ul className={styles.experience__list}>
          {experience.map((item) => (
            <li key={item.name} className={styles.experience__item}>
              <span className={styles.experience__bullet}>–</span>
              <div className={styles.experience__name}>{item.name}</div>
              <NumberInput
                initial={item.year}
                classes={styles.experience__input}
                updateValue={(newYear: number) => {
                  updateYearOfExperience(item.name, newYear);
                }}
              />
            </li>
          ))}
        </ul>
      </Columnn>

      <Columnn
        classes={`${styles.resume__column} ${styles.code}`}
        title="Sample code"
      >
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
            {code}
          </SyntaxHighlighter>
        </div>
      </Columnn>

      <Columnn
        classes={`${styles.resume__column} ${styles.availability}`}
        title="Availability"
      >
        <div className={styles.availability__content}>
          <div className={styles.availability__time}>{availability.time}</div>

          <div className={styles.availability__prefered}>
            <h3 className={styles.availability__minisubtitle}>
              Preferred Environment
            </h3>
            <span>{availability.prefered}</span>
          </div>
        </div>
      </Columnn>

      <Columnn
        classes={`${styles.resume__column} ${styles.phrase}`}
        title="The Most Amaizing..."
      >
        <div className={styles.phrase__content}>
          <Icon
            name="quote"
            classes={styles.phrase__quote}
            svgClasses={styles.phrase__svg}
          />

          <p className={styles.phrase__text}>{phrase.amazing}</p>

          <Icon
            name="quote"
            classes={`${styles.phrase__quote} ${styles.phrase__quoteclose}`}
            svgClasses={styles.phrase__svg}
          />
        </div>
      </Columnn>

      <Columnn
        classes={`${styles.resume__column} ${styles.phrase}`}
        title="In clients I look for..."
      >
        <div className={styles.phrase__content}>
          <Icon
            name="quote"
            classes={styles.phrase__quote}
            svgClasses={styles.phrase__svg}
          />

          <p className={styles.phrase__text}>{phrase.lookingFor}</p>

          <Icon
            name="quote"
            classes={`${styles.phrase__quote} ${styles.phrase__quoteclose}`}
            svgClasses={styles.phrase__svg}
          />
        </div>
      </Columnn>

      <Columnn classes={`${styles.resume__column} ${styles.map}`}>
        <YndxMap classes={styles.resume__column} location={location} address={address} />
      </Columnn>
    </div>
  );
};
