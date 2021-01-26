<template>
  <div>
    <header>
      <div class="top-navigation">
        <div class="top-navigation-content">
          <div class="top-navigation-brand">
            <div class="top-logo">
              <img src="./assets/svg/kenaz.svg" alt="Logo" />
            </div>
            <p>Kenaz</p>
          </div>
          <div class="top-navigation-links">
            <ul>
              <li><a href="/category">Media</a></li>
              <li><a href="/category">Marketing</a></li>
              <li><a href="/category">Contact</a></li>
            </ul>
            <button class="top-navigation-search"><img src="./assets/svg/search.svg" alt="Search" /></button>
          </div>
        </div>
      </div>
      <div class="lower-navigation">
        <div class="lower-navigation-content">
          <ul>
            <li><a href="/" id="news">NEWS</a></li>
            <li><a href="/category" id="business">BUSINESS</a></li>
            <li><a href="/category" id="sport">SPORT</a></li>
            <li><a href="/category" id="life">LIFE</a></li>
            <li><a href="/category" id="tech">TECH</a></li>
            <li><a href="/category" id="travel">TRAVEL</a></li>
          </ul>
        </div>
      </div>
    </header>
    <router-view />
    <footer>
      <div>
        <div class="top">
          <div class="top-element">
            <div class="logo"><img src="./assets/svg/kenazBlue.svg" alt="Logo" /> Kenaz</div>
            <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante.</div>
            <div class="social">
              <a href="#"><img src="./assets/svg/social/rss.svg" alt="RSS" /></a>
              <a href="#"><img src="./assets/svg/social/facebook.svg" alt="Facebook" /></a>
              <a href="#"><img src="./assets/svg/social/twitter.svg" alt="Twitter" /></a>
              <a href="#"><img src="./assets/svg/social/dribble.svg" alt="Dribble" /></a>
              <a href="#"><img src="./assets/svg/social/linkedIn.svg" alt="LinkedIn" /></a>
              <a href="#"><img src="./assets/svg/social/youtube.svg" alt="Youtube" /></a>
              <a href="#"><img src="./assets/svg/social/skype.svg" alt="Skype" /></a>
            </div>
          </div>
          <div class="top-element">
            <div class="footer-title">Newsletter</div>
            <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante...</div>
            <form action="/" method="POST">
              <input type="text" placeholder="Your mail" />
              <button>Subscribe</button>
            </form>
          </div>
          <div class="top-element">
            <div class="footer-title">Tags Widget</div>
            <div class="links">
              <ul>
                <li><a href="/single">assueverit</a></li>
                <li><a href="/single">utroquoe</a></li>
                <li><a href="/single">probo</a></li>
                <li><a href="/single">assuev</a></li>
                <li><a href="/single">probo</a></li>
                <li><a href="/single">assuevverit</a></li>
                <li><a href="/single">titl</a></li>
                <li><a href="/single">assuevverit</a></li>
                <li><a href="/single">assuevverit</a></li>
                <li><a href="/single">utroquoe</a></li>
                <li><a href="/single">probo</a></li>
                <li><a href="/single">assuevverit</a></li>
                <li><a href="/single">utroquoe</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mid">
          <div class="mid-element">
            <div class="footer-title">Featured</div>
            <a class="footer-article" href="/single">
              <div class="article-info">
                <div class="article-info-date-comments">
                  <p>August 26, 2013</p>
                  <p><img src="./assets/svg/greyComment.svg" alt="Comment" /> 5</p>
                </div>
                <div class="article-info-title">Palestinians call off peace talks after clash</div>
              </div>
              <img src="./assets/svg/footerArticle.svg" alt="Article image" />
            </a>
            <hr class="mid-footer-hr" />
            <a class="footer-article" href="/single">
              <div class="article-info">
                <div class="article-info-date-comments">
                  <p>August 26, 2013</p>
                  <p><img src="./assets/svg/greyComment.svg" alt="Comment" /> 5</p>
                </div>
                <div class="article-info-title">Palestinians call off peace talks after clash</div>
              </div>
              <img src="./assets/svg/footerArticle.svg" alt="Article image" />
            </a>
            <hr class="mid-footer-hr" />
            <a class="footer-article" href="/single">
              <div class="article-info">
                <div class="article-info-date-comments">
                  <p>August 26, 2013</p>
                  <p><img src="./assets/svg/greyComment.svg" alt="Comment" /> 5</p>
                </div>
                <div class="article-info-title">Palestinians call off peace talks after clash</div>
              </div>
              <img src="./assets/svg/footerArticle.svg" alt="Article image" />
            </a>
          </div>
          <div class="mid-element">
            <div class="footer-title">Random Posts</div>
            <a class="footer-article" href="/single">
              <div class="article-info">
                <div class="article-info-date-comments">
                  <p>August 26, 2013</p>
                  <p><img src="./assets/svg/greyComment.svg" alt="Comment" /> 5</p>
                </div>
                <div class="article-info-title">Palestinians call off peace talks after clash</div>
              </div>
              <img src="./assets/svg/footerArticle.svg" alt="Article image" />
            </a>
            <hr class="mid-footer-hr" />
            <a class="footer-article" href="/single">
              <div class="article-info">
                <div class="article-info-date-comments">
                  <p>August 26, 2013</p>
                  <p><img src="./assets/svg/greyComment.svg" alt="Comment" /> 5</p>
                </div>
                <div class="article-info-title">Palestinians call off peace talks after clash</div>
              </div>
              <img src="./assets/svg/footerArticle.svg" alt="Article image" />
            </a>
            <hr class="mid-footer-hr" />
            <a class="footer-article" href="/single">
              <div class="article-info">
                <div class="article-info-date-comments">
                  <p>August 26, 2013</p>
                  <p><img src="./assets/svg/greyComment.svg" alt="Comment" /> 5</p>
                </div>
                <div class="article-info-title">Palestinians call off peace talks after clash</div>
              </div>
              <img src="./assets/svg/footerArticle.svg" alt="Article image" />
            </a>
          </div>
          <div class="mid-element">
            <div class="footer-title">Twitter Feed</div>
            <div class="footer-tweet" href="/single">
              <div class="footer-tweet-acc">
                <img src="./assets/svg/social/twitterBird.svg" alt="Twitter" />
                <a href="#">Envato @envato</a>
              </div>
              <div class="footer-tweet-post">
                Is this your typical million dollar day in the park? http://enva.to/150vxFC Happy @TrueThemes Day! #ThemeForest pic.twitter.com/EHz7awxOXy
              </div>
            </div>
            <hr class="bottom-footer-hr" />
            <div class="footer-tweet" href="/single">
              <div class="footer-tweet-acc">
                <img src="./assets/svg/social/twitterBird.svg" alt="Twitter" />
                <a href="#">Envato @envato</a>
              </div>
              <div class="footer-tweet-post">
                Happy TrueThemes Day http://enva.to/1dRzgLD
              </div>
            </div>
            <hr class="bottom-footer-hr" />
            <div class="footer-tweet" href="/single">
              <div class="footer-tweet-acc">
                <img src="./assets/svg/social/twitterBird.svg" alt="Twitter" />
                <a href="#">Envato @envato</a>
              </div>
              <div class="footer-tweet-post">
                @robscri I would really want to look into what's taking so long. Thank you ever so much! ^TC
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="footer-hr" />
      <div class="bottom">
        <div class="copyright">© 2013 - Kenaz Template - Proudly made at Plava tvornica Croatia</div>
        <div class="links">
          <ul>
            <li><a href="/single">Typography</a>-</li>
            <li><a href="/single">Templates</a>-</li>
            <li><a href="/single">Contact Form</a>-</li>
            <li><a href="/single"> 404 Page</a></li>
          </ul>
          </div>
      </div>
    </footer>
  </div>
</template>

<style lang="sass">
@import "assets/styles/variables"
@import "assets/styles/style"
</style>
