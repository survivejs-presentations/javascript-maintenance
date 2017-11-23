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

        <Slide transition={slideTransition}>
          <Heading size={2}>What Files Are Included</Heading>
          <List>
            <Appear>
              <ListItem>
                Code, metadata (package.json), documentation (README.md),
                license
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Larger projects have contribution instructions, changelog,
                CI/git/npm/lint/build configuration
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <b>package.json</b> - Only JSON (no comments :(), understand
                this well
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>package.json</Heading>
          <List>
            <Appear>
              <ListItem>
                <i>scripts</i> - <code>npm run {`<name>`}</code>,{" "}
                <code>pre</code>, <code>post</code>, shortcuts (<code>
                  npm start
                </code>, <code>npm t</code>)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <i>bin</i>, <i>main</i>, <i>module</i> - Entry points
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <i>dependencies</i>, <i>devDependencies</i>,{" "}
                <i>peerDependencies</i> - Depends on the context! Also more
                types.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <i>repository</i>, <i>homepage</i>, <i>bugs</i> - Links
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Even more fields, sometimes tooling metadata</ListItem>
            </Appear>
            <Appear>
              <ListItem>At minimum, publish files needed to run</ListItem>
            </Appear>
          </List>
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

        <Slide transition={slideTransition}>
          <Heading size={2}>SemVer Explained</Heading>
          <List>
            <Appear>
              <ListItem>SemVer === {`<major>.<minor>.<patch>`}</ListItem>
            </Appear>
            <Appear>
              <ListItem>ComVer === {`<not compatible>.<compatible>`}</ListItem>
            </Appear>
            <Appear>
              <ListItem>EmoVer === {`<emotional>.<major>.<minor>`}</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>What Files Are Included</Heading>
          <List>
            <Appear>
              <ListItem>
                <code>
                  npm version{" "}
                  {`<x.y.z|(pre)major|(pre)minor|(pre)patch|prerelease>`}
                </code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Publish pre-release versions to gather feedback
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Version ranges - ^, ~, * (dangerous!), also {`>=`} and {`<`}
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Use <b>lockfiles</b> (<i>package-lock.json</i>) to manage
                (npm5+, yarn)
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>More to Consider</Heading>
          <List>
            <Appear>
              <ListItem>
                Deprecating - <code>npm deprecate</code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Unpublishing - Possibly only first 24h (hello <b>leftpad</b>)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Renaming - See deprecation</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Sharing authorship - Consider namespaces and teams
              </ListItem>
            </Appear>
          </List>
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

        <Slide transition={slideTransition}>
          <Heading size={2}>Considerations</Heading>
          <List>
            <Appear>
              <ListItem>Which browsers and Node versions to support?</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                What if we want to use custom language features?
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>What if we want to use some other language?</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                How to support tree shaking of modern bundlers?
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            Communicating Where Code Should Work
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Simple answer for Node - the <i>engines</i> field
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>This doesn't work with the browsers, though!</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                If you use JavaScript, then the client can use{" "}
                <Link href="https://www.npmjs.com/package/babel-preset-env">
                  babel-preset-env
                </Link>{" "}
                and{" "}
                <Link href="https://www.npmjs.com/package/browserslist">
                  browserslist
                </Link>{" "}
                to compile to the needed targets
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Set up a <i>postinstall</i> script to compile during development
              </ListItem>
            </Appear>
          </List>
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

        <Slide transition={slideTransition}>
          <Heading size={2}>How Bundlers Work</Heading>
          <Image src={images.bundler} margin="40px auto" height="364px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Considerations</Heading>
          <List>
            <Appear>
              <ListItem>Not needed always</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                If generated, enables bundler optimizations (skip compilation in
                webpack for example)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Use UMD for legacy support (likely disappears with the new
                standards)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                A standalone bundle can be pushed to a Content Delivery Network
                (CDN)
              </ListItem>
            </Appear>
          </List>
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
