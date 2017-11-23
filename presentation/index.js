// Import React
import React from "react";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  //Cite,
  CodePane,
  Deck,
  //Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Markdown,
  Quote,
  Slide,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem,
  //Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues(
  {
    bundler: require("../images/bundler.png"),
    danger: require("../images/danger.png"),
    flow: require("../images/flow.png"),
    moduleCounts: require("../images/module-counts.png"),
    survivejs: require("../images/survivejs.png"),
    testTower: require("../images/test-tower.png"),
    typeScript: require("../images/typescript.png"),
  },
  v => v.replace("/", "")
);

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quarternary: "rgba(255, 219, 169, 0.43)",
});
theme.screen.components.codePane.fontSize = "60%";

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={slideTransition} transitionDuration={500} theme={theme}>
        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            JavaScript Maintenance
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>Agenda</Heading>
          <List>
            <Appear>
              <ListItem>Packaging</ListItem>
            </Appear>
            <Appear>
              <ListItem>Code Quality</ListItem>
            </Appear>
            <Appear>
              <ListItem>Infrastructure</ListItem>
            </Appear>
            <Appear>
              <ListItem>Documentation</ListItem>
            </Appear>
            <Appear>
              <ListItem>Future</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/maintenance/packaging/"
              textColor="white"
            >
              Packaging
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/maintenance/packaging/where-to-start/"
              textColor="white"
            >
              Where to Start Packaging
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>The Growth of npm</Heading>
          <Image src={images.moduleCounts} margin="40px auto" height="364px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>To Consume or to Develop?</Heading>
          <List>
            <Appear>
              <ListItem>Ideal - what we need already exists</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Reality - only a part of what we need already exists
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Problem - how can we find what we need?</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            Technical Problem - What to Do?
          </Heading>
          <List>
            <Appear>
              <ListItem>Use an existing package</ListItem>
            </Appear>
            <Appear>
              <ListItem>Enhance an existing package</ListItem>
            </Appear>
            <Appear>
              <ListItem>Take over an existing package</ListItem>
            </Appear>
            <Appear>
              <ListItem>Fork an existing package</ListItem>
            </Appear>
            <Appear>
              <ListItem>Develop your own package</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>More to Consider</Heading>
          <List>
            <Appear>
              <ListItem>
                Consumption workflow - during development, in production
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Public or private packages?</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Leverage npm lookup, possible to intercept and modify (be
                careful!)
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/maintenance/packaging/anatomy/"
              textColor="white"
            >
              Anatomy of a Package
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/maintenance/packaging/publishing/"
              textColor="white"
            >
              Publishing Packages
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/maintenance/packaging/building/"
              textColor="white"
            >
              Building Packages
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/maintenance/packaging/standalone-builds/"
              textColor="white"
            >
              Standalone Builds
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/maintenance/code-quality/"
              textColor="white"
            >
              Code Quality
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/maintenance/code-quality/linting/"
              textColor="white"
            >
              Linting
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/maintenance/code-quality/code-formatting/"
              textColor="white"
            >
              Code Formatting
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/maintenance/code-quality/typing/"
              textColor="white"
            >
              Typing
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/maintenance/code-quality/testing/"
              textColor="white"
            >
              Testing
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/maintenance/code-quality/dependencies/"
              textColor="white"
            >
              Dependency Management
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/maintenance/infrastructure/"
              textColor="white"
            >
              Infrastructure
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/maintenance/infrastructure/processes/"
              textColor="white"
            >
              Processes
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/maintenance/infrastructure/continuous-integration/"
              textColor="white"
            >
              Continuous Integration
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/maintenance/infrastructure/automation/"
              textColor="white"
            >
              Automation
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/maintenance/documentation/"
              textColor="white"
            >
              Documentation
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/maintenance/documentation/readme/"
              textColor="white"
            >
              README
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/maintenance/documentation/change-log/"
              textColor="white"
            >
              Change Logs
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/maintenance/documentation/site/"
              textColor="white"
            >
              Site
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/maintenance/documentation/api/"
              textColor="white"
            >
              API Documentation
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/maintenance/documentation/misc/"
              textColor="white"
            >
              Other Types of Documentation
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/maintenance/documentation/linting/"
              textColor="white"
            >
              Linting and Formatting
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/maintenance/future/"
              textColor="white"
            >
              Future
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/maintenance/future/longevity/"
              textColor="white"
            >
              Longevity
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <Link
              href="https://survivejs.com/maintenance/future/marketing/"
              textColor="white"
            >
              Marketing
            </Link>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="https://www.survivejs.com/webpack/">
            <Heading size={1}>SurviveJS - Maintenance</Heading>
          </Link>
          <Image src={images.survivejs} margin="0px auto 40px" height="324px" />
          <Link href="https://twitter.com/bebraw">
            <Heading size={2} textColor="secondary" fit>
              by Juho Vepsäläinen and Artem Sapegin
            </Heading>
          </Link>
        </Slide>
      </Deck>
    );
  }
}
