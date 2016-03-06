/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            <img
              src={this.props.config.baseUrl + this.props.config.footerIcon}
              alt={this.props.config.title}
              width="66"
              height="58"
            />
          </a>
          <div>
            <h5>
              <a href={this.props.config.baseUrl + 'docs/getting-started.html'}>
                Docs
              </a>
            </h5>
            <a href={this.props.config.baseUrl + 'docs/getting-started.html'}>
              Getting Started
            </a>
            <a href={this.props.config.baseUrl + 'docs/tutorial.html'}>
              Learn the Basics
            </a>
            <a
              href={
                this.props.config.baseUrl + 'docs/components-and-apis.html'
              }>
              Components and APIs
            </a>
            <a href={this.props.config.baseUrl + 'docs/more-resources.html'}>
              More Resources
            </a>
          </div>
          <div>
            <h5>
              <a href={this.props.config.baseUrl + 'help.html'}>Community</a>
            </h5>
            <a href={this.props.config.baseUrl + 'showcase.html'}>
              Who's using React Native?
            </a>
            <a
              href="http://www.meetup.com/topics/react-native/"
              target="_blank">
              Meetups
            </a>
            <a
              href="https://www.facebook.com/groups/react.native.community"
              target="_blank">
              Facebook Group
            </a>
            <a href="https://twitter.com/reactnative" target="_blank">
              Twitter
            </a>
          </div>
          <div>
            <h5>
              <a href={this.props.config.baseUrl + 'help.html'}>Help</a>
            </h5>
            <a
              href="http://stackoverflow.com/questions/tagged/react-native"
              target="_blank">
              Stack Overflow
            </a>
            <a href="https://discord.gg/0ZcbPKXt5bZjGY5n">Reactiflux Chat</a>
            <a
              href={this.props.config.baseUrl + 'versions.html'}
              target="_blank">
              Latest Releases
            </a>
            <a
              href="https://react-native.canny.io/feature-requests"
              target="_blank">
              Feature Requests
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={this.props.config.baseUrl + 'blog'}>Blog</a>
            <a href="http://reactjs.org" target="_blank">
              React
            </a>
            <a href="https://github.com/facebook/react-native" target="_blank">
              GitHub
            </a>
            <div className="githubButton">
              <a
                className="github-button"
                href={this.props.config.repoUrl}
                data-icon="octicon-star"
                data-show-count={true}
                data-count-href="/facebook/react-native/stargazers"
                data-count-api="/repos/facebook/react-native#stargazers_count"
                data-count-aria-label="# stargazers on GitHub"
                aria-label="Star facebook/react-native on GitHub">
                Star
              </a>
            </div>
          </div>
        </section>

        <a
          href="https://code.facebook.com/projects/"
          target="_blank"
          className="fbOpenSource">
          <img
            src={this.props.config.baseUrl + 'img/oss_logo.png'}
            alt="Facebook Open Source"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">
          Copyright &copy; {currentYear} Facebook Inc.
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
