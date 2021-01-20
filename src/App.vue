<template>
  <div>
    <header>
      <div class="top-navigation">
        <div class="top-navigation-content">
          <div class="top-navigation-brand">
            <div class="top-logo">
              <img src="./assets/svg/kenaz.svg" />
            </div>
            <p>Kenaz</p>
          </div>
          <div class="top-navigation-links">
            <ul>
              <li><a href="#">Media</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <button class="top-navigation-search"><img src="./assets/svg/search.svg" /></button>
          </div>
        </div>
      </div>
      <div class="lower-navigation">
        <div class="lower-navigation-content">
          <ul>
            <li><a href="/" id="news">NEWS</a></li>
            <li><a href="/about" id="business">BUSINESS</a></li>
            <li><a href="/about" id="sport">SPORT</a></li>
            <li><a href="/about" id="life">LIFE</a></li>
            <li><a href="/about" id="tech">TECH</a></li>
            <li><a href="/about" id="travel">TRAVEL</a></li>
          </ul>
        </div>
      </div>
    </header>
    <router-view />
  </div>
</template>

<style lang="sass">
@import "assets/styles/variables"
@import "assets/styles/style"
</style>
