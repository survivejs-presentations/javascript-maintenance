// Import React
import React from "react";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  //BlockQuote,
  //Cite,
  CodePane,
  Deck,
  //Fill,
  Heading,
  Image,
  //Layout,
  Link,
  List,
  ListItem,
  //Markdown,
  //Quote,
  Slide,
  //Table,
  //TableRow,
  //TableHeaderItem,
  //TableItem,
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
            <Appear>
              <ListItem>
                <b>Note:</b> "you do" vs. "they do". Accountability!
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>More to Consider</Heading>
          <List>
            <Appear>
              <ListItem>
                Package consumption - during development, in production
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Public or private packages?</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Leverage npm package lookup algorithm, possible to intercept and
                modify (be careful!)
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
          <Heading size={2}>Publishing a Version</Heading>
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
                Version ranges - ^, ~, * (dangerous!), also {`>=`}, {`<`} and
                combinations, …
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Use <b>lockfiles</b> (<i>package-lock.json</i>, <i>yarn.lock</i>)
                to manage (npm5+, yarn)
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
                Unpublishing - Possible only first 24h (hello <b>leftpad</b>)
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
          <Heading size={2}>What to Consider?</Heading>
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
          <Heading size={2}>What to Consider?</Heading>
          <List>
            <Appear>
              <ListItem>Is a standalone build needed?</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                If generated, enables bundler optimizations (Example: skip
                compilation in webpack)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Use UMD for legacy support (likely disappears eventually)
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

        <Slide transition={slideTransition}>
          <Heading size={2}>Can You See the Problem?</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../examples/bad-code.js")}
            margin="20px auto"
            overflow="overflow"
          />
          <Appear>
            <div>Eat croissants anyway! This should be</div>
          </Appear>
          <Appear>
            <CodePane
              lang="javascript"
              source={require("raw-loader!../examples/good-code.js")}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
          <Appear>
            <div>to avoid eating too many croissants.</div>
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Lint to Spot Problems</Heading>
          <List>
            <Appear>
              <ListItem>
                <Link href="https://eslint.org/">ESLint</Link> to rescue
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Ready-made presets (Airbnb, Standard, ...) and specific plugins
                (best practices for React, security etc.)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://palantir.github.io/tslint/">TSLint</Link>{" "}
                for TypeScript,{" "}
                <Link href="https://stylelint.io/">Stylelint</Link> for CSS
              </ListItem>
            </Appear>
          </List>
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

        <Slide transition={slideTransition}>
          <Heading size={2}>Linting !== Formatting</Heading>
          <List>
            <Appear>
              <ListItem>
                A linter can capture <i>some</i> formatting related problems
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Specific tools -{" "}
                <Link href="http://editorconfig.org/">EditorConfig</Link>,{" "}
                <Link href="https://prettier.io/">Prettier</Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Code (JavaScript, CSS) and configuration (JSON) can be
                automatically formatted. One less worry.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>The tooling doesn't capture all concerns</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Consider higher level aspects such as patterns, naming
                separately. Automate when possible.
              </ListItem>
            </Appear>
          </List>
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

        <Slide transition={slideTransition}>
          <Heading size={2}>The Value of Typing</Heading>
          <List>
            <Appear>
              <ListItem>
                Improved communication - if you know a type, communicate it
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Better auto-completion and refactoring</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                New techniques - <b>property based testing</b>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>More information for interpreter</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Image src={images.flow} margin="40px auto" height="100px" />

          <List>
            <Appear>
              <ListItem>
                <Link href="https://flow.org/">Flow</Link> is a type checker, a
                separate tool to run
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Type as you go</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                See also{" "}
                <Link href="https://www.npmjs.com/package/flow-coverage-report">
                  flow-coverage-report
                </Link>{" "}
                and{" "}
                <Link href="https://www.npmjs.com/package/flow-runtime">
                  flow-runtime
                </Link>
              </ListItem>
            </Appear>
          </List>
          <Appear>
            <CodePane
              lang="javascript"
              source={require("raw-loader!../examples/flow.js")}
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
        </Slide>

        <Slide transition={slideTransition}>
          <Image src={images.typeScript} margin="40px auto" height="200px" />

          <List>
            <Appear>
              <ListItem>
                <Link href="https://www.typescriptlang.org/">TypeScript</Link>{" "}
                is a language that compiles to JavaScript
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Some commonalities with Flow but also custom features
                (interfaces, classes)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://github.com/niieani/typescript-vs-flowtype">
                  See the comparison by Bazyli Brzóska
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Type Definitions</Heading>
          <List>
            <Appear>
              <ListItem>
                Third party packages require <b>type definitions</b> to capture
                type errors related to them
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Easy to generate especially with TypeScript</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="http://definitelytyped.org/">DefinitelyTyped</Link>{" "}
                and{" "}
                <Link href="https://github.com/flowtype/flow-typed">
                  flow-typed
                </Link>{" "}
                host the definitions
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Problems: keeping up with package versions, something to
                maintain
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Challenges of Typing</Heading>
          <List>
            <Appear>
              <ListItem>
                Versioning - what if language definition changes?
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Package versions - how to manage conflicting dependencies?
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Better solution? -{" "}
                <Link href="https://reasonml.github.io/">Reason</Link> provides
                programmable type definitions
              </ListItem>
            </Appear>
          </List>
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

        <Slide transition={slideTransition}>
          <Heading size={2}>What to Verify with Testing?</Heading>
          <List>
            <Appear>
              <ListItem>
                Do parts of the system work in isolation/together?
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Does the system perform well enough?</ListItem>
            </Appear>
            <Appear>
              <ListItem>Does the old API of the system still work?</ListItem>
            </Appear>
            <Appear>
              <ListItem>Do the tests cover the system well?</ListItem>
            </Appear>
            <Appear>
              <ListItem>What's the quality of the tests?</ListItem>
            </Appear>
            <Appear>
              <ListItem>Does the system solve user problems?</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>Types of Testing</Heading>
          <Image src={images.testTower} margin="40px auto" height="464px" />
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

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            Keeping Dependencies Up to Date
          </Heading>
          <List>
            <Appear>
              <ListItem>
                A single broken dependency can bring down a project
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Constant progress - a challenge to keep up with the updates
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Bigger projects may provide <b>codemods</b> and migration paths
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Specific tooling exists to help with the problem. Examples:{" "}
                <code>yarn upgrade-interactive</code>,{" "}
                <Link href="https://www.npmjs.com/package/npm-upgrade">
                  npm-upgrade
                </Link>,{" "}
                <Link href="https://www.npmjs.com/package/updtr">updtr</Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Good tests help a lot</ListItem>
            </Appear>
          </List>
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

        <Slide transition={slideTransition}>
          <Heading size={2}>What to Consider?</Heading>
          <List>
            <Appear>
              <ListItem>
                How to track issues (what data, how to capture)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>How to manage changes (pull requests)</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                How to develop (branching model, coordination)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>How to maintain project focus</ListItem>
            </Appear>
            <Appear>
              <ListItem>How to support users</ListItem>
            </Appear>
          </List>
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

        <Slide transition={slideTransition}>
          <Heading size={2}>What to Consider?</Heading>
          <List>
            <Appear>
              <ListItem>How to test against different environments?</ListItem>
            </Appear>
            <Appear>
              <ListItem>How to deploy to staging/production?</ListItem>
            </Appear>
            <Appear>
              <ListItem>How to prevent deploying something broken?</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Answer: Continuous Integration (CI) and Continuous Deployment
                (CD) systems
              </ListItem>
            </Appear>
          </List>
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

        <Slide transition={slideTransition}>
          <Heading size={2}>What to Automate?</Heading>
          <List>
            <Appear>
              <ListItem>
                Change logs (semi-automation) - Requires commit message
                convention but helps with communication
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Releases - Release after each commit to the <code>master</code>{" "}
                branch and determine type of release automatically based on the
                changes
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Testing - Git hooks help here. Consider{" "}
                <Link href="https://www.npmjs.com/package/husky">husky</Link>,{" "}
                <Link href="https://www.npmjs.com/package/lint-staged">
                  lint-staged
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                GitHub meta validation -{" "}
                <Link href="https://www.npmjs.com/package/gh-lint">
                  gh-lint
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Project validation -{" "}
                <Link href="https://github.com/danger/danger-js">Danger</Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Issue management -{" "}
                <Link href="https://github.com/open-bot/open-bot">
                  open-bot
                </Link>{" "}
                and more
              </ListItem>
            </Appear>
          </List>
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

        <Slide transition={slideTransition}>
          <Heading size={2}>What to Consider?</Heading>
          <List>
            <Appear>
              <ListItem>Who is going to use the README?</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Conversion - Explain clearly what the project is about.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Developer eXperience (DX) - Make it easy to get started and use
                the project.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Licensing - Make license terms clear.</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Testing - Make sure README examples are executed as tests so
                they work.
              </ListItem>
            </Appear>
          </List>
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

        <Slide transition={slideTransition}>
          <Heading size={2}>What to Consider?</Heading>
          <List>
            <Appear>
              <ListItem>Change Log !== Commit Log</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Document intent of the changes - what's new, what broke, how to
                migrate
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                A part of DX - saves time of developers when done well
              </ListItem>
            </Appear>
          </List>
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

        <Slide transition={slideTransition}>
          <Heading size={2}>What to Consider?</Heading>
          <List>
            <Appear>
              <ListItem>Conversion - first chance to convert.</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Documentation - communicate how to use the project and how to
                develop it.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Showcase - show how the project is being used to inspire
                developers.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Testing - test the site as any software.</ListItem>
            </Appear>
            <Appear>
              <ListItem>Hosting - free options for static sites.</ListItem>
            </Appear>
          </List>
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

        <Slide transition={slideTransition}>
          <Heading size={2}>What to Consider?</Heading>
          <List>
            <Appear>
              <ListItem>
                Philosophy - explain high-level ideas of the solution.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Typing - can you extract type information to documentation?
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Specific details - how something specific works and how parts
                fit together, typical use cases.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                User experience - different users need different kind of
                documentation.
              </ListItem>
            </Appear>
          </List>
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

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            What Documentation to Provide?
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Contribution guidelines - how to set up the project, how to
                develop, what kind of contributions do you expect?
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Code of Conduct - how to collaborate together, what's acceptable
                and what's not?
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Issue and Pull Request templates - how to write an issue or a
                pull request?
              </ListItem>
            </Appear>
          </List>
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

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            Lint and Format Documentation
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Why - link validation, consistent terminology, improved language
                and grammar
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Starting points -{" "}
                <Link href="https://textlint.github.io/">textlint</Link>,{" "}
                <Link href="http://proselint.com/">proselint</Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Link href="https://www.npmjs.com/package/prettier">
                  Prettier
                </Link>{" "}
                can format Markdown too
              </ListItem>
            </Appear>
          </List>
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

        <Slide transition={slideTransition}>
          <Heading size={2}>What to Consider?</Heading>
          <List>
            <Appear>
              <ListItem>Who is going to develop/fund/manage?</ListItem>
            </Appear>
            <Appear>
              <ListItem>What happens if developers disappear?</ListItem>
            </Appear>
            <Appear>
              <ListItem>How to attract new contributors?</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                How to keep track of everything that's going on?
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>How to maintain a popular project?</ListItem>
            </Appear>
          </List>
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
          <Heading size={2}>What to Consider?</Heading>
          <List>
            <Appear>
              <ListItem>
                To market or not? Is popularity a goal? Might happen anyway if
                you connect with a market.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Approaches - technical marketing, content marketing, word of
                mouth
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>The point of marketing - serving people</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Marketing isn't about getting everyone to use your project, it's
                about getting the <b>right</b> people to use your project
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="https://www.survivejs.com/maintenance/">
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
